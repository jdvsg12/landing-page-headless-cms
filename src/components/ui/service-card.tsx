"use client"

import { motion } from "motion/react"

interface ServiceCardProps {
    title: string
    description: string
    index: number
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
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
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
            </motion.div>
        </motion.div>
    )
}
