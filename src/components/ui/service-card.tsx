"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

interface ContactInfo {
    whatsapp?: string
    email?: string
}

interface ServiceItem {
    title: string
    description: string
    contact?: ContactInfo
}

interface ServiceCardProps {
    title: string
    description: string
    index: number
    contact?: ContactInfo
}

export function ServiceCard({ title, description, index, contact }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [canExpand, setCanExpand] = useState(false)
    const descriptionRef = useRef<HTMLParagraphElement | null>(null)

    useEffect(() => {
        const el = descriptionRef.current
        if (!el) return

        const compute = () => {
            if (!descriptionRef.current) return
            const node = descriptionRef.current
            setCanExpand(node.scrollHeight > node.clientHeight)
        }

        compute()
        window.addEventListener("resize", compute)
        return () => window.removeEventListener("resize", compute)
    }, [description, isExpanded])

    const handleWhatsAppClick = (phone: string) => {
        const message = encodeURIComponent("Hola, estoy interesado/a en sus servicios")
        window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank')
    }

    const handleEmailClick = (email: string) => {
        const subject = encodeURIComponent("Consulta sobre servicios")
        const body = encodeURIComponent("Hola, estoy interesado/a en sus servicios")
        window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group"
        >
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full border-t border-neutral-300 pt-6"
            >
                <h3 className="mb-4 text-xl font-semibold text-neutral-900">{title}</h3>

                <div className="relative">
                    <p
                        ref={descriptionRef}
                        className={`whitespace-pre-line text-sm leading-relaxed text-neutral-600 transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-6'
                            }`}
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: isExpanded ? 'unset' : 6,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {description}
                    </p>

                    {canExpand && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            {isExpanded ? 'Ver menos' : 'Ver más'}
                        </button>
                    )}
                </div>

                {contact && (
                    <div className="mt-6 space-y-2">
                        {contact.whatsapp && (
                            <button
                                onClick={() => handleWhatsAppClick(contact.whatsapp!)}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Contactar por WhatsApp
                            </button>
                        )}

                        {contact.email && (
                            <button
                                onClick={() => handleEmailClick(contact.email!)}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contactar por email
                            </button>
                        )}
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
}
