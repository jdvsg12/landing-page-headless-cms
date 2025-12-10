import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase, type ContactInsert } from '@/lib/supabase'
import { render } from '@react-email/render'
import ContactNotificationEmail from '@/emails/contact-notification'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, services, message, language } = body

        // Validación básica
        if (!name || !email || !phone || !services) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            )
        }

        // Formatear teléfono para WhatsApp (eliminar espacios, guiones, etc.)
        const cleanPhone = phone.replace(/\D/g, '')
        const whatsappPhone = cleanPhone.startsWith('57') ? cleanPhone : `57${cleanPhone}`

        // Preparar datos para Supabase
        const contactData: ContactInsert = {
            name,
            email,
            phone: whatsappPhone,
            services,
            message: message || null,
            language: language || 'es',
        }

        // Guardar en Supabase
        const { data: contact, error: dbError } = await supabase
            .from('contacts')
            .insert(contactData)
            .select()
            .single()

        if (dbError) {
            console.error('Error guardando en Supabase:', dbError)
            return NextResponse.json(
                { error: 'Error al guardar la consulta' },
                { status: 500 }
            )
        }

        // Enviar email de notificación
        try {
            const emailHtml = await render(ContactNotificationEmail({
                name,
                email,
                phone: whatsappPhone,
                services,
                message,
                language,
                contactId: contact.id,
            }))

            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,
                to: process.env.RESEND_TO_EMAIL!,
                subject: `Nueva consulta de ${name}`,
                html: emailHtml,
            })
        } catch (emailError) {
            console.error('Error enviando email:', emailError)
            // No fallar la request si el email falla, ya guardamos en DB
        }
        return NextResponse.json(
            {
                success: true,
                message: 'Consulta enviada exitosamente',
                contactId: contact.id
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error en API de contacto:', error)
        return NextResponse.json(
            { error: 'Error procesando la solicitud' },
            { status: 500 }
        )
    }
}