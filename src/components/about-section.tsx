"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    const { language } = useLanguage()
    const t = getTranslation(language)

    // Transform for "Sobre mí" section - visible at start, fades out as you scroll
    const aboutOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0])
    const aboutY = useTransform(scrollYProgress, [0, 0.5], [0, -30])

    // Transform for "Perfil" section - hidden at start, appears as you scroll
    const profileOpacity = useTransform(scrollYProgress, [0.25, 0.45, 1], [0, 1, 1])
    const profileY = useTransform(scrollYProgress, [0.25, 0.45], [30, 0])

    return (
        <section ref={sectionRef} id="about" className="relative z-10 min-h-[400vh] bg-background">
            {/* Sticky container that keeps content centered while scrolling */}
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Text Content - Left Side */}
                        <div className="relative order-2 lg:order-1">
                            {/* Sobre mí content */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ opacity: aboutOpacity, y: aboutY }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-lg leading-relaxed text-muted-foreground lg:text-xl"
                                >
                                    {t.about.description}
                                </motion.p>
                            </motion.div>

                            {/* Perfil content */}
                            <motion.div
                                style={{ opacity: profileOpacity, y: profileY }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-lg leading-relaxed text-muted-foreground lg:text-xl"
                                >
                                    {t.profile.description}
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Large Typography - Right Side */}
                        <div className="relative order-1 lg:order-2">
                            {/* Sobre mí title */}
                            <motion.div
                                className="absolute inset-0"
                                style={{ opacity: aboutOpacity }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-right font-serif"
                                >
                                    <span className="block text-5xl font-light italic text-muted-foreground/50 lg:text-7xl">
                                        {t.about.title1}
                                    </span>
                                    <span className="block text-6xl font-bold text-muted-foreground/50 lg:text-8xl">
                                        {t.about.title2}
                                    </span>
                                </motion.h2>
                            </motion.div>

                            {/* Perfil title */}
                            <motion.div
                                style={{ opacity: profileOpacity }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-right font-serif"
                                >
                                    <span className="block text-5xl font-light italic text-muted-foreground/50 lg:text-7xl">
                                        {t.profile.title1}
                                    </span>
                                    <span className="block text-6xl font-bold text-muted-foreground/50 lg:text-8xl">
                                        {t.profile.title2}
                                    </span>
                                </motion.h2>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
