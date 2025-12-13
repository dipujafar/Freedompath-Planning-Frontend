import EBookCards from '@/components/shared/cards/EBookCards'
import Container from '@/components/shared/Container'
import PaginationSection from '@/components/shared/pagination/PaginationSection'

export default function EBookSection() {
    return (
        <Container className='section-padding lg:space-y-10 space-y-7'>
            {/* heading */}
            <div className="lg:space-y-3 space-y-2">
                <h5 className='section-title-tag'>E-Book</h5>
                <h4 className="section-title">
                    Transform Your Knowledge with Premium Ebooks
                </h4>
                <p className='section-description'>
                    Discover thousands of high-quality ebooks across various topics. Download our free starter guide to begin your learning journey today.
                </p>
            </div>

            {/* main content */}
            <EBookCards />
            <PaginationSection />
        </Container>
    )
}
