"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ServiceCard } from "@/components/ui/service-card"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const { language } = useLanguage()
    const t = getTranslation(language)

    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "0%", "-15%"])

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative z-20 min-h-[150vh] bg-[#D9D9D9] shadow-[0_-20px_60px_rgba(0,0,0,0.15)]"
        >
            {/* Sticky container for content */}
            <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-20">
                <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-6xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 font-serif text-4xl font-light italic text-neutral-900 lg:text-5xl"
                    >
                        {t.services.title}
                    </motion.h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {t.services.items.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
