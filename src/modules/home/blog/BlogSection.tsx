import Container from "@/components/shared/Container";
import BlogCards from "./BlogCards";


export default function BlogSection() {
    return (
        <Container className='section-padding lg:space-y-10 space-y-7'>
            {/* heading */}
            <div className="lg:space-y-3 space-y-2">
                <h5 className='section-title-tag'>Learn new technology</h5>
                <h4 className="section-title">
                    Read our blog
                </h4>
            </div>

            {/* main content */}
            <BlogCards />
        </Container>
    )
}
