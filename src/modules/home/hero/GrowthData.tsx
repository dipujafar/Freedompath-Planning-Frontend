import CCountUp from "@/components/shared/CCountUp";
import { cn } from "@/lib/utils";


export default function GrowthData({ className }: { className?: string }) {
    return (
        <div className={cn("bg-white lg:max-w-[450px]  lg:space-y-6 space-y-4 absolute bottom-2 left-0 lg:px-12 px-8 lg:py-10 py-7 rounded-3xl", className)}>
            <div className="flex items-center gap-x-4">
                <div className="flex-1">
                    <span className="xl:text-5xl md:text-3xl text-xl font-bold"> <CCountUp end={500} />+</span>
                    <p className="text-sm text-[#4B5563] truncate">Projects Completed</p>
                </div>
                <div className="flex-1">
                    <span className="xl:text-5xl md:text-3xl text-xl font-bold"> <CCountUp end={15} />+</span>
                    <p className="text-sm text-[#4B5563] truncate">Years Experience</p>
                </div>

            </div>
            <div className="space-y-2.5">
                <p className="text-3xl font-semibold">Growth is our priority.</p>
                <p className="text-black/70 font-medium">We specialize in helping CPAs, EA firms, and business owners unlock their company&apos;s true potential through strategic valuation, growth planning, and exit strategies.</p>
            </div>
        </div>
    )
}
