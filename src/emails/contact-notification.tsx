import React from 'react'

interface ContactEmailProps {
    name: string
    email: string
    phone?: string
    services: string
    message?: string
    language: string
    contactId: string
}

const ContactNotificationEmail = ({
    name,
    email,
    phone,
    services,
    message,
    language,
    contactId,
}: ContactEmailProps) => {
    const replyEmailLink = `mailto:${email}?subject=Re: Consulta desde el sitio web&body=Hola ${name},%0D%0A%0D%0AGracias por contactarnos...`
    const whatsappLink = phone ? `https://wa.me/${phone}?text=Hola ${encodeURIComponent(name)}, gracias por contactarnos desde nuestro sitio web.` : ''

    return (
        <html>
            <body>
                <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ color: '#1a1a1a', borderBottom: '2px solid #8F958B', paddingBottom: '10px' }}>
                        Nueva Consulta del Sitio Web
                    </h2>

                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                        <p style={{ margin: '10px 0' }}>
                            <strong>Nombre:</strong> {name}
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            <strong>Email:</strong>{' '}
                            <a href={`mailto:${email}`} style={{ color: '#8F958B' }}>
                                {email}
                            </a>
                        </p>
                        {phone && (
                            <p style={{ margin: '10px 0' }}>
                                <strong>Teléfono:</strong> {phone}
                            </p>
                        )}
                        <p style={{ margin: '10px 0' }}>
                            <strong>Servicios de interés:</strong> {services}
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            <strong>Idioma:</strong> {language.toUpperCase()}
                        </p>
                    </div>

                    {message && (
                        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <strong>Mensaje:</strong>
                            <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{message}</p>
                        </div>
                    )}

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <a
                            href={replyEmailLink}
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#8F958B',
                                color: '#ffffff',
                                padding: '12px 30px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                marginRight: '10px',
                                marginBottom: '10px',
                            }}
                        >
                            📧 Responder por Email
                        </a>
                        {phone && (
                            <a
                                href={whatsappLink}
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#25D366',
                                    color: '#ffffff',
                                    padding: '12px 30px',
                                    textDecoration: 'none',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                }}
                            >
                                💬 Responder por WhatsApp
                            </a>
                        )}
                    </div>

                    <div style={{ marginTop: '30px', fontSize: '12px', color: '#666', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
                        <p style={{ margin: '5px 0' }}>ID de consulta: {contactId}</p>
                        <p style={{ margin: '5px 0' }}>Fecha: {new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default ContactNotificationEmail