import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

export default function ImageWithOpacity({ image, className, opacityClass }: { className?: string, opacityClass?: string, image: StaticImageData }) {
    return (
        <>
            <Image src={image} alt="ownerImage" className={cn("w-full object-cover", className)} />
            <div className={cn('absolute inset-0 bg-linear-to-t from-[#000000] to-transparent opacity-10', opacityClass)}></div>
        </>
    )
}
