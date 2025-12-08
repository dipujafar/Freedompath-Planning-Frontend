"use client"
import Image, { StaticImageData } from "next/image"
import aboutImage from "@/assets/images/home/about-us/about-image.png"
import { motion } from "motion/react"

export default function AboutUsSectionImage({image = aboutImage}: {image?: StaticImageData}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
        duration:  0.5,
        type: "spring",
        damping: 18,
        stiffness: 80,
      }}
      className="overflow-hidden"
    >
      <Image src={image} alt="aboutImage" className="w-full" />
    </motion.div>
  )
}
