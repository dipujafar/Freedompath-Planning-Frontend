import Container from '../Container'
import ClientReviewCarousel from './ClientReviewCarousel'


export default function ClientReviewSection() {
    return (
        <div className='bg-primary-color'>
            <Container className='section-padding lg:space-y-10 space-y-7'>
                {/* heading */}
                <div className="lg:space-y-3 space-y-2">
                    <h5 className='section-title-tag'>3940+ Happy Landingfolio Users</h5>
                    <h4 className="section-title">
                        Don’t just take our words
                    </h4>
                </div>

                {/* main content */}
                <div className="max-w-7xl mx-auto">
                    <ClientReviewCarousel />
                </div>
               
            </Container>
        </div>
    )
}
