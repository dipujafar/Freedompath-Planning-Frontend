import Container from '@/components/shared/Container'
import shadowImage1 from "@/assets/images/home/hero/shadowImage1.png"
import shadowImage2 from "@/assets/images/home/hero/shadowImage2.png"
import hero_image from "@/assets/images/home/hero/hero_image.png"
import Image from 'next/image'
import GrowthData from './GrowthData'
import HeroContent from './HeroContent'

export default function Hero() {
    return (
        <div
            style={{
                backgroundImage: `url(${shadowImage1.src}), url(${shadowImage2.src})`,
                backgroundPosition: "top left, bottom right",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "contain, contain",
            }}
            className="relative min-h-[80vh] xl:py-24 bg-primary-color"
        >
            <Container className='flex justify-between'>
                <div className='flex-1'>
                    <HeroContent />
                </div>
                <div className='flex-1  flex justify-end relative'>
                    <Image src={hero_image} alt="hero_image" className='rounded-3xl lg:max-w-3/4 2xl:min-h-[700px] object-cover' />
                    <GrowthData />
                </div>
            </Container>
        </div>


    )
}
