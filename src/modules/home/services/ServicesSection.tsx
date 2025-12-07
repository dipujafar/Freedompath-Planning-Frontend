import ServicesCards from './ServicesCards'
import Container from '@/components/shared/Container'

export default function ServicesSection() {
    return (
        <div className='bg-primary-color'>
            <Container className='section-padding lg:space-y-10 space-y-7'>
                {/* heading */}
                <div className="lg:space-y-3 space-y-2">
                    <h5 className='section-title-tag'>Services</h5>
                    <h4 className="section-title">
                        Our Services
                    </h4>
                    <p className='section-description'>
                        We specialize in helping CPAs, EA firms, and business owners unlock their company&apos;s true potential through strategic valuation, growth planning, and exit strategies.
                    </p>
                </div>

                {/* main content */}
                <ServicesCards />
            </Container>
        </div>
    )
}
