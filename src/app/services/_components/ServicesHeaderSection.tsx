import Container from '@/components/shared/Container'
import shadowImage1 from "@/assets/images/home/hero/shadowImage1.png"
import shadowImage2 from "@/assets/images/home/hero/shadowImage2.png"
import service_image from "@/assets/images/services/service_image.png";
import ImageWithOpacity from '@/components/shared/ImageWithOpacity';
import GrowthData from '@/modules/home/hero/GrowthData';

export default function ServicesHeaderSection() {
    return (
        <div
            style={{
                backgroundImage: `url(${shadowImage1.src}), url(${shadowImage2.src})`,
                backgroundPosition: "top left, bottom right",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "contain, contain",
            }}
            className="relative  section-padding bg-primary-color"
        >
            <Container className='xl:space-y-24 lg:space-y-20 md:space-y-14 space-y-8'>
                <div className='flex-between flex-col items-start   lg:flex-row lg:items-center gap-5 '>
                    <div className='xl:space-y-7 md:space-y-5 space-y-3.5 lg:flex-1'>
                        <div >
                            <h5 className='xl:text-[40px] md:text-3xl text-2xl uppercase font-bold'>trusted Services for</h5>
                            <h6 className='xl:text-[40px] md:text-3xl text-2xl uppercase'>business success</h6>
                        </div>
                        <p className='max-w-xl md:text-xl text-[#05131DB2]'>Professional solutions to grow your business value and plan your future.We specialize in helping CPAs, EA firms, and business owners unlock their company&apos;s true potential through strategic valuation, growth planning, and exit strategies.</p>
                    </div>
                    <p className='flex-1 text-[64px]  leading-16'> <span className='bg-linear-to-b from-[#3C77AD] to-[#5AC1DE] bg-clip-text text-transparent font-semibold'> Transform your business </span>
                        with strategic valuation insights</p>
                </div>
                <div className='relative'>
                    <div className='relative lg:w-5/6'>
                        <ImageWithOpacity image={service_image} className='xl:h-[650px] lg:h-[400px] h-[300px] w-full rounded-3xl' opacityClass="rounded-3xl opacity-50" />
                    </div>
                    <GrowthData className='bg-white lg:max-w-[450px]  lg:space-y-6 space-y-4 absolute 
                    top-1/2 -translate-y-1/2 right-0 lg:px-12 px-8 lg:py-10 py-7 rounded-3xl' />
                </div>

            </Container>
        </div>
    )
}
