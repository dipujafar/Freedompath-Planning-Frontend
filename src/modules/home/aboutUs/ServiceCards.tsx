"use client"
import { motion } from "motion/react"
import growthImage from "@/assets/icons/growth.png"
import Image from "next/image"

const serviceData = [
    {
        id: 1,
        title: "Business Value Growth",
        description:
            "We specialize in helping CPAs, EA firms, and business owners unlock their company's true potential through strategic valuation, growth planning, and exit strategies.",
    },
    {
        id: 2,
        title: "Financial Path Planning",
        description: "Showing business owners their future financial path with clear, actionable roadmaps.",
    },
    {
        id: 3,
        title: "Financial Path Planning",
        description: "Showing business owners their future financial path with clear, actionable roadmaps.",
    },
    {
        id: 4,
        title: "Assessment Tools",
        description: "Helping CPAs & advisors their work better with their clients through enhanced collaboration tools.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export function ServiceCards() {
    return (
        <div className="w-full xl:px-8 px-4 xl:py-9 py-6 bg-[#F6F8FA] rounded-lg">
            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {serviceData.map((service) => (
                    <motion.div key={service.id} variants={itemVariants} className="flex gap-4 p-5  rounded-lg">
                        {/* Icon Badge */}
                        <div className="shrink-0">
                            <div className="size-14 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Image src={growthImage} alt="growth-image" className="size-6"></Image>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 lg:space-y-2.5 space-y-2">
                            <h3 className="xl:text-2xl text-lg font-semibold text-black ">{service.title}</h3>
                            <p className="text-sm text-[#6C6C6C] leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
