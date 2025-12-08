"use client"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"


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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}



const serviceData = [
    {
        id: 1,
        title: "CPA/Exit Planning",
        description: "Strategic roadmap to maximize value and ensure successful business transition.",
        image: "/service_image_1.png"
    },
    {
        id: 2,
        title: "Business Valuation",
        description: "Professional valuation to understand your business worth and growth potential.",
        image: "/service_image_2.png"
    },
    {
        id: 3,
        title: "ExitmapValue Growth",
        description: "Systematic approach to increase business value and operational excellence.",
        image: "/service_image_3.png"
    },

]

export default function ServicesCards() {
    return (
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-9 gap-5">
            {
                serviceData?.map((service) => (
                      // @ts-expect-error: Property 'foo' does not exist on type '{}'.
                    <motion.div key={service?.id} variants={itemVariants} className={cn("lg:space-y-6 space-y-4 group cursor-pointer", 
                    service?.id === 2 && "xl:translate-y-6 lg:translate-y-3.5")}>
                        <Image src={service?.image} alt="service-image" width={300} height={300} className="w-full" />
                        <div className="space-y-1.5">
                            <div className="flex justify-between gap-x-1">
                                <h1 className="lg:text-2xl text-lg font-semibold">{service?.title}</h1>
                                <ArrowUpRight className="group-hover:rotate-45 duration-500" />
                            </div>
                            <p className="text-[#667085] lg:text-lg">{service?.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}
