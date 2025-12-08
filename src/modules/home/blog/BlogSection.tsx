import Container from "@/components/shared/Container";
import Link from "next/link";
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import { cn } from "@/lib/utils";
import BlogCards from "@/components/shared/cards/BlogCards";

const serviceData = [
    {
        id: 1,
        title: "Most popular design systems to learn from in 2022",
        tag: "Design Systems",
        image: "/blog_image_1.png"
    },
    {
        id: 2,
        title: "Understanding accessibility makes you a better",
        tag: "Accessibility",
        image: "/blog_image_2.png"
    },
    {
        id: 3,
        title: "15 best tools that will help you build your website",
        tag: "Tech",
        image: "/blog_image_3.png"
    },
    {
        id: 4,
        title: "Understanding accessibility makes you a better",
        tag: "Tech",
        image: "/blog_image_2.png"
    },

]


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
            <BlogCards data={serviceData} />
            <Link href={"#"} className="flex-center">
                <AnimatedBgFillBtn
                    label="View more"
                    className={cn("cursor-pointer border text-black border-[#B5B5B5]")}
                    icon={true}
                />
            </Link>
        </Container>
    )
}
