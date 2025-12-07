import Container from "@/components/shared/Container";
import ToolsResourcesCards from "./ToolsResourcesCards";
import Link from "next/link";
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import { cn } from "@/lib/utils";

export default function ToolsResourcesSection() {
    return (
        <div className='bg-primary-color'>
            <Container className='section-padding lg:space-y-10 space-y-7'>
                {/* heading */}
                <div className="lg:space-y-3 space-y-2">
                    <h5 className='section-title-tag'>Resources</h5>
                    <h4 className="section-title">
                        Business Assessment Tools & Resources
                    </h4>
                    <p className='section-description'>
                        Access our comprehensive suite of assessment tools, calculators, and resources designed to help you evaluate and grow your business value.
                    </p>
                </div>

                {/* main content */}
                <ToolsResourcesCards />

                <Link href={"#"} className="flex-center">
                    <AnimatedBgFillBtn
                        label="View more"
                        className={cn("cursor-pointer border text-black border-[#B5B5B5]")}
                        icon={true}
                    />
                </Link>
            </Container>
        </div>
    )
}
