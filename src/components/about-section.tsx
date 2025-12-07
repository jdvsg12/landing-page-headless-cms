"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const { language } = useLanguage()
    const t = getTranslation(language)

    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "0%", "-20%"])

    return (
        <section ref={sectionRef} id="about" className="relative z-10 min-h-[150vh] bg-background">
            {/* Sticky container that keeps content centered while scrolling */}
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <motion.div style={{ y: contentY }} className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-2 lg:order-1"
                        >
                            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">{t.about.description}</p>
                        </motion.div>

                        {/* Large Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-right font-sans">
                                <span className="block text-5xl font-light italic text-muted lg:text-7xl">{t.about.title1}</span>
                                <span className="block text-6xl font-bold text-muted lg:text-8xl">{t.about.title2}</span>
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
