"use client"

import { useState } from "react"
import { motion } from "motion/react"

interface AnimatedInputProps {
    label: string
    placeholder: string
    type?: string
    required?: boolean
    name: string
    isTextarea?: boolean
}

export function AnimatedInput({
    label,
    placeholder,
    type = "text",
    required = false,
    name,
    isTextarea = false,
}: AnimatedInputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)

    const inputClasses =
        "w-full bg-transparent border-0 border-b border-neutral-600 px-0 py-3 text-white placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-0 transition-colors duration-300"

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            <label className="mb-2 block text-sm text-white">
                {label}
                {required && <span className="text-white">*</span>}
            </label>

            <div className="relative">
                {isTextarea ? (
                    <textarea
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        rows={3}
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(false)
                            setHasValue(e.target.value.length > 0)
                        }}
                        className={inputClasses + " resize-none"}
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(false)
                            setHasValue(e.target.value.length > 0)
                        }}
                        className={inputClasses}
                    />
                )}

                {/* Animated underline */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: isFocused || hasValue ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    )
}
