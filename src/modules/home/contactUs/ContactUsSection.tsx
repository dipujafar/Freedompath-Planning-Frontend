import React from 'react'
import { ContactForm } from './ContactForm'
import Container from '@/components/shared/Container'
import contactImage from "@/assets/images/home/contact-us/contact-image.png"
import Image from 'next/image'

export default function ContactUsSection() {
    return (
        <Container className='section-padding flex gap-6'>
            <div className='flex-1'>
                <ContactForm />
            </div>
            <div className='flex-1'>
                <Image src={contactImage} alt="contactImage" className="w-full" />
            </div>
        </Container>
    )
}
