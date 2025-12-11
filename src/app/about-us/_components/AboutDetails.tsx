import shadowImage1 from "@/assets/images/home/hero/shadowImage1.png"
import shadowImage2 from "@/assets/images/home/hero/shadowImage2.png"
import Container from "@/components/shared/Container"
import StatisticCounts from "@/components/shared/statistic/StatisticCounts"
import aboutUsImage from "@/assets/images/about-us/about-us-image.png"
import Image from "next/image"
const statisticData = [
    {
        id: 1,
        count: 500,
        title: "Projects Completed"
    },
    {
        id: 2,
        count: 15,
        title: "Years Experience"
    },
    {
        id: 3,
        count: 500,
        title: "Client Review"
    }

]

export default function AboutDetails() {
    return (
        <div
            style={{
                backgroundImage: `url(${shadowImage1.src}), url(${shadowImage2.src})`,
                backgroundPosition: "top left, bottom right",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "contain, contain",
            }}
            className="relative section-padding bg-primary-color"
        >
            <Container>
                {/* =================== header ========================*/}
                <div className="xl:space-y-2.5 mb-3.5">
                    <h6 className="section-title-tag bg-linear-to-b from-[#3C77AD] to-[#5AC1DE] bg-clip-text text-transparent">ABOUT US</h6>
                    <h5 className="text-center section-title font-bold">Who We Are</h5>
                </div>
                {/* ==================== description ================== */}
                <div className="text-center lg:space-y-5 space-y-3 lg:mb-8 mb-5">
                    <p className="text-[#222222]">Business planning experts supporting small to medium-size businesses</p>
                    <p className="text-[#1A2028]">urFreedom Path Planning was built on our core values of integrity and partnership. After 20 years of working with businesses of all sizes, we recognized that small to medium-sized businessowners were struggling to find the resources and guidance they needed to reduce expenses and develop long-term plans to not only grow their business but enjoy life to the fullest. From growth management to succession planning, our research showed that over 86% of small to medium-sized business owners did not have any kind of business succession plan, 87% had no retirement plan, 98% had no business consultant, 100% want to pay less in taxes, and 100% will exit at some point in the future.</p>
                </div>
                {/* ================ statistics ================ */}
                <div className="max-w-xl mx-auto xl:mb-12 md:mb-8  mb-6">
                    <StatisticCounts data={statisticData} />
                </div>
                <div className="md:mb-8  mb-4">
                    <Image src={aboutUsImage} alt="about-us-image" />
                </div>

                {/* ==================== vision description =======================*/}
                <p className="">Our vision and mission is to help business owners identify the greatest needs of the owner/business and guide them on the path to fulfilled hope and freedom. Most owners feel burned out, stressed and sometimes completely hopeless depending on the season of life they are in. If you look closely at our mission portrait picture, you will see 2 different paths. The path on the left looks like it would be the easiest to travel. The path on the right does not look very pleasant. Which path to take? What if the path on the right saves you time, energy and money? The only problem is you need a guiding light to help you navigate the path. This is where we come in to help you on your journey. Let us be your guiding light.
                </p>

            </Container>
        </div>
    )
}
