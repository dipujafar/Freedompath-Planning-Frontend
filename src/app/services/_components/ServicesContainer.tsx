import ServicesSection from '@/modules/home/services/ServicesSection'
import ServicesHeaderSection from './ServicesHeaderSection'
import ClientReviewSection from '@/components/shared/clientReview/ClientReviewSection'
import ContactUsSection from '@/components/shared/contactUs/ContactUsSection'

export default function ServicesContainer() {
    return (
        <>
            <ServicesHeaderSection />
            <ServicesSection length={9} className='bg-transparent' />
            <ClientReviewSection />
            <ContactUsSection />
        </>
    )
}
