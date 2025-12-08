import Container from "@/components/shared/Container";
import AboutUsSectionImage from "./AboutUsSectionImage";
import { ServiceCards } from "./ServiceCards";
import { StaticImageData } from "next/image";



export default function AboutPathPlanningSection({image}: {image?: StaticImageData}) {
    return (
        <Container className="section-padding xl:space-y-10 md:space-y-7 space-y-5">
            {/* heading */}
            <div className="lg:space-y-3 space-y-2">
                <p className="bg-[#F1F7FF] font-medium px-7 py-3 rounded-xl w-fit mx-auto">About Us</p>
                <h4 className="section-title">
                    About Freedom Path Planning
                </h4>
            </div>
            {/* main content */}
            <div className="flex justify-between gap-x-10">
                <div className="flex-1">
                    <AboutUsSectionImage image={image} />
                </div>
                <div className="flex-1">
                    <ServiceCards />
                </div>
            </div>
        </Container>
    )
}
