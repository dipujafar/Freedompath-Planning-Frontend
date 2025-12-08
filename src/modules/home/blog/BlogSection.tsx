import Container from "@/components/shared/Container";
import BlogCards from "./BlogCards";
import Link from "next/link";
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import { cn } from "@/lib/utils";


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
