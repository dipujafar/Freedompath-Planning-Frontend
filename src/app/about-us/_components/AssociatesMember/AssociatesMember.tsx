import Container from "@/components/shared/Container";
import MembersCarousel from "./MembersCarousel";


export default function AssociatesMember() {
    return (
        <Container className='section-padding lg:space-y-10 space-y-7'>
            {/* heading */}
            <div className="lg:space-y-3 space-y-2">
                <h4 className="section-title">
                    Highlighted Associates
                </h4>
                <p className='section-description'>
                    The skilled professionals behind our success
                </p>
            </div>

            {/* main content */}
            <div className="max-w-6xl mx-auto">
                <MembersCarousel />
            </div>
        </Container>
    )
}
