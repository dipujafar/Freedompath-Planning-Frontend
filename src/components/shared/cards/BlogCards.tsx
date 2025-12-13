"use client"
import Image from "next/image"
import { motion } from "motion/react"
import { TBlogPost } from "@/types"
import Link from "next/link"


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





export default function BlogCards({data}: {data: TBlogPost[]}) {
    return (
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-9 gap-3">
            {
                data?.map((service) => (
                    <Link href={`/blogs/${service?.id}`} key={service?.id}>
                      {/* @ts-expect-error: Property 'foo' does not exist on type '{}'. */}
                    <motion.div key={service?.id} variants={itemVariants} className="lg:space-y-6 md:space-y-4 space-y-2.5 group cursor-pointer max-w-[344px]">
                        <Image src={service?.image} alt="service-image" width={300} height={300} className="w-full rounded-2xl" />
                        <div className="lg:space-y-1.5 space-y-1">
                            <h1 className="lg:text-xl md:text-lg font-semibold">{service?.title}</h1>
                            <p className="bg-linear-to-t from-[#3C77AD] to-[#5AC1DE] bg-clip-text text-transparent font-medium">{service?.tag}</p>
                        </div>
                    </motion.div>
                    </Link>
                ))
            }
        </motion.div>
    )
}
