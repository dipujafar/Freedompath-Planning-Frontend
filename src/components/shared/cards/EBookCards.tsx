"use client"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn"
import { ebooksData } from "@/data/dummy-data"
import Image from "next/image"


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




export default function EBookCards() {
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-9 gap-5">
      {
        ebooksData?.map((ebook) => (
          // @ts-expect-error: Property 'foo' does not exist on type '{}'.
          <motion.div key={ebook?.id} variants={itemVariants} className={cn("xl:space-y-5 lg:space-y-4 space-y-3  cursor-pointer bg-white xl:p-9 md:p-6 p-5 rounded-3xl shadow-[-9px_11px_38px_0px_rgba(0,0,0,0.05)]")} >
            <Image src={ebook?.image} alt="service-image" width={1200} height={1900} className="w-[139px] h-[150px] rounded-2xl" />
            <h1 className="xl:text-3xl lg:text-2xl text-xl">{ebook?.title}</h1>
            <p className={cn("text-[#667085] xl:text-lg")}>{ebook?.description}</p>
            <Link href={"#"}>
              <AnimatedBgFillBtn
                label="Download Pdf"
                className={cn("cursor-pointer border text-black border-[#B5B5B5]")}
                icon={true}
              />
            </Link>
          </motion.div>
        ))
      }
    </motion.div>
  )
}
