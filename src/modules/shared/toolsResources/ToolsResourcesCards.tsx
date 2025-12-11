"use client"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn"
import { recoursesData } from "@/data/dummy-data"


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




export default function ToolsResourcesCards({ length = 3 }: { length?: number }) {
    return (
        <motion.div  variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-9 gap-5">
            {
                recoursesData?.slice(0, length)?.map((recourse) => (
                    // @ts-expect-error: Property 'foo' does not exist on type '{}'.
                    <motion.div key={recourse?.id} variants={itemVariants} className={cn("xl:space-y-7 lg:space-y-5 space-y-4  cursor-pointer bg-white xl:p-9 md:p-6 p-5 rounded-3xl shadow-[-9px_11px_38px_0px_rgba(0,0,0,0.05)]", recourse?.id === 2 && "bg-linear-to-b from-[#4176A6] to-[#518DC3D9] text-white")} >
                        <div className="flex justify-between gap-x-1">
                            <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold max-w-[100px]">{recourse?.title}</h1>
                            <p className={cn("text-sm font-medium text-[#3673DE] bg-[#619FD821] flex-center h-fit px-4 py-2 rounded-full truncate", recourse?.id === 2 && "bg-[#E5E7EB] text-[#3673DE]")}>
                                External Tool
                            </p>
                        </div>
                        <p className={cn("text-[#667085] xl:text-lg", recourse?.id === 2 && "text-white")}>{recourse?.description}</p>
                        <Link href={"#"}>
                            <AnimatedBgFillBtn
                                label="Go To Tool"
                                className={cn("cursor-pointer border text-black border-[#B5B5B5]", recourse?.id === 2 && "text-white")}
                                icon={true}
                            />
                        </Link>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}
