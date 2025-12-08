import React from 'react'
import { ContactForm } from './ContactForm'
import Container from '@/components/shared/Container'
import contactImage from "@/assets/images/home/contact-us/contact-image.png"
import Image from 'next/image'

export default function ContactUsSection() {
    return (
        <Container className='section-padding flex gap-6 xl:gap-16'>
            <div className='flex-1 xl:space-y-12 md:space-y-8  space-y-6'>
                <div className=" xl:space-y-5 md:space-y-2.5 space-y-2">
                    <h1 className="xl:text-4xl md:text-2xl font-semibold text-foreground">Contact Us</h1>
                    <p className="text-[#667085] xl:text-xl text-lg">Our friendly team would love to hear from you.</p>
                </div>
                <ContactForm />
            </div>
            <div className='flex-1'>
                <Image src={contactImage} alt="contactImage" className="w-full max-h-[750px] object-cover rounded-3xl" />
            </div>
        </Container>
    )
}
