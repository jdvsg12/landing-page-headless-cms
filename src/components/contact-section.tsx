"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { AnimatedInput } from "@/components/ui/animated-input"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const { language } = useLanguage()
    const t = getTranslation(language)

    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "0%", "-10%"])

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative z-30 min-h-[150vh] bg-[#1a1a1a] shadow-[0_-20px_60px_rgba(0,0,0,0.3)]"
        >
            <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-24 lg:py-32">
                <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-6xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Left side - Form */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12 font-serif text-3xl font-light text-white lg:text-4xl"
                            >
                                {t.contact.title}
                            </motion.h2>

                            <form className="space-y-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    <AnimatedInput label={t.contact.name} placeholder={t.contact.namePlaceholder} name="name" required />
                                    <AnimatedInput
                                        label={t.contact.email}
                                        placeholder={t.contact.emailPlaceholder}
                                        name="email"
                                        type="email"
                                        required
                                    />
                                </div>

                                <div className="grid gap-8 md:grid-cols-2">
                                    <AnimatedInput
                                        label={t.contact.phone}
                                        placeholder={t.contact.phonePlaceholder}
                                        name="phone"
                                        type="tel"
                                    />
                                    <AnimatedInput
                                        label={t.contact.servicesLabel}
                                        placeholder={t.contact.servicesPlaceholder}
                                        name="services"
                                        required
                                    />
                                </div>

                                <AnimatedInput
                                    label={t.contact.message}
                                    placeholder={t.contact.messagePlaceholder}
                                    name="message"
                                    isTextarea
                                />

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#1a1a1a" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-8 w-full border border-white bg-transparent py-4 text-center text-white transition-colors duration-300"
                                >
                                    {t.contact.send}
                                </motion.button>
                            </form>
                        </div>

                        {/* Right side - Contact Info */}
                        <div className="lg:pl-12">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="mb-6 text-2xl font-semibold text-white">{t.contact.contactTitle}</h3>
                                <div className="mb-8 space-y-2">
                                    <p className="text-neutral-400">formacion@psicologiaycultura.com</p>
                                    <p className="text-neutral-400">+57 3142793431</p>
                                </div>

                                <h3 className="mb-6 text-2xl font-semibold text-white">{t.contact.socialMedia}</h3>
                                <div className="space-y-2">
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 4, color: "#ffffff" }}
                                        className="block text-neutral-400 transition-colors"
                                    >
                                        Instagram
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 4, color: "#ffffff" }}
                                        className="block text-neutral-400 transition-colors"
                                    >
                                        LinkedIn
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 4, color: "#ffffff" }}
                                        className="block text-neutral-400 transition-colors"
                                    >
                                        Youtube
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
