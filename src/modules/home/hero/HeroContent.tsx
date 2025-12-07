import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import AnimatedText from "@/components/animation/AnimatedText";
import CCountUp from "@/components/shared/CCountUp";
import Link from "next/link";
const tags = [
    "Generate Your Wealth Gap Report",
    "Business readiness",
    "Value Gap Assessment"
]


export default function HeroContent() {
    return (
        <div className="xl:space-y-11 md:space-y-8 space-y-5">
            <div className="xl:space-y-6 md:space-y-4 space-y-2">
                <AnimatedText text="Freedompath" className="font-medium uppercase space-x-1" />
                <div className="lg:space-y-6 space-y-4
            ">
                    <h4 className="2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-bold max-w-2xl">
                        Helping CPAs and Business Owners Grow Value and Plan Exits
                    </h4>
                    <p className="max-w-2xl xl:text-2xl md:text-xl text-lg font-light text-[#717171]">
                        Transform your business with strategic valuation insights, growth planning, and exit strategies tailored for accounting professionals and business owners.
                    </p>
                </div>

            </div>
            <div className="xl:space-y-14 md:space-y-10 space-y-6">
                <div className="space-y-4">
                    <div className="flex gap-x-3 flex-wrap">
                        {
                            tags.map((tag, idx) => <div key={idx} className="bg-linear-to-t from-[#4176A6] to-[#518DC3D9] rounded-lg text-white py-3.5 px-4">{tag}</div>)
                        }
                    </div>
                    <Link href={"#"}>
                        <AnimatedBgFillBtn
                            label="Learn More"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-x-10 max-w-sm ">
                    <div className="flex-1 border-l-2 border-grayish-blue px-4">
                        <span className="xl:text-5xl md:text-3xl text-xl font-bold"> <CCountUp end={500} />+</span>
                        <p className="text-sm text-[#4B5563] truncate">Projects Completed</p>
                    </div>
                    <div  className="flex-1 border-l-2 border-grayish-blue px-4">
                        <span className="xl:text-5xl md:text-3xl text-xl font-bold"> <CCountUp end={15} />+</span>
                        <p className="text-sm text-[#4B5563] truncate">Years Experience</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
