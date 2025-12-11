import StatisticCounts from "@/components/shared/statistic/StatisticCounts";
import { cn } from "@/lib/utils";


export default function GrowthData({ className }: { className?: string }) {
    return (
        <div className={cn("bg-white lg:max-w-[450px]  lg:space-y-6 space-y-4 absolute  lg:px-12 px-8 lg:py-10 py-7 rounded-3xl", className)}>
            <StatisticCounts />
            <div className="space-y-2.5">
                <p className="text-3xl font-semibold">Growth is our priority.</p>
                <p className="text-black/70 font-medium">We specialize in helping CPAs, EA firms, and business owners unlock their company&apos;s true potential through strategic valuation, growth planning, and exit strategies.</p>
            </div>
        </div>
    )
}
