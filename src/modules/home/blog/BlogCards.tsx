"use client"
import Image from "next/image"
import { motion } from "motion/react"


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
            duration: 0.6,
            ease: "easeOut",
        },
    },
}



const serviceData = [
    {
        id: 1,
        title: "Most popular design systems to learn from in 2022",
        tag: "Design Systems",
        image: "/blog_image_1.png"
    },
    {
        id: 2,
        title: "Understanding accessibility makes you a better",
        tag: "Accessibility",
        image: "/blog_image_2.png"
    },
    {
        id: 3,
        title: "15 best tools that will help you build your website",
        tag: "Tech",
        image: "/blog_image_3.png"
    },
    {
        id: 4,
        title: "Understanding accessibility makes you a better",
        tag: "Tech",
        image: "/blog_image_2.png"
    },

]

export default function BlogCards() {
    return (
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-9 gap-3">
            {
                serviceData?.map((service) => (
                      // @ts-expect-error: Property 'foo' does not exist on type '{}'.
                    <motion.div key={service?.id} variants={itemVariants} className="lg:space-y-6 md:space-y-4 space-y-2.5 group cursor-pointer max-w-[344px]">
                        <Image src={service?.image} alt="service-image" width={300} height={300} className="w-full rounded-2xl" />
                        <div className="lg:space-y-1.5 space-y-1">
                            <h1 className="lg:text-xl md:text-lg font-semibold">{service?.title}</h1>
                            <p className="bg-linear-to-t from-[#3C77AD] to-[#5AC1DE] bg-clip-text text-transparent font-medium">{service?.tag}</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}
