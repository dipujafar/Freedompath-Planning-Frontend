import PaginationSection from '@/components/shared/pagination/PaginationSection'
import ServicesCards from './ServicesCards'
import Container from '@/components/shared/Container'
import { Activity } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import AnimatedBgFillBtn from '@/components/animation/AnimatedBgFillBtn'

export default function ServicesSection({ length = 3, className }: { length?: number, className?: string }) {
    return (
        <div id='services' className={cn('bg-primary-color', className)}>
            <Container className='section-padding lg:space-y-10 space-y-7'>
                {/* heading */}
                <div className="lg:space-y-3 space-y-2">
                    <h5 className='section-title-tag'>Services</h5>
                    <h4 className="section-title">
                        Our Services
                    </h4>
                    <p className='section-description'>
                        We specialize in helping CPAs, EA firms, and business owners unlock their company&apos;s true potential through strategic valuation, growth planning, and exit strategies.
                    </p>
                </div>

                {/* main content */}
                <ServicesCards length={length} />
                <Activity mode={length > 3 ? "visible" : "hidden"}>
                    <PaginationSection />
                </Activity>
                <Activity mode={length <= 3 ? "visible" : "hidden"}>
                    <Link href={"/services#services"} className="flex-center mt-5">
                        <AnimatedBgFillBtn
                            label="View more"
                            className={cn("cursor-pointer border text-black border-[#B5B5B5]")}
                            icon={true}
                        />
                    </Link>
                </Activity>

            </Container>
        </div>
    )
}
