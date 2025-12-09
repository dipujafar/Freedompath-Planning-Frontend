import member1 from "@/assets/images/about-us/user2.png"
import member2 from "@/assets/images/about-us/user3.png"
import member3 from "@/assets/images/about-us/user4.png"
import CarouselContainer from "@/components/shared/carousel/CarouselContainer"
import ImageWithOpacity from "@/components/shared/ImageWithOpacity"
import { CarouselItem } from "@/components/ui/carousel"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const memberData = [
    {
        id: 1,
        image: member1,
        name: "Michael Sauer",
    },
    {
        id: 2,
        image: member2,
        name: "Peter",
    },
    {
        id: 3,
        image: member3,
        name: "Jane",
    },
    {
        id: 4,
        image: member1,
        name: "Michael Sauer",
    },
    {
        id: 5,
        image: member2,
        name: "Peter",
    },
    {
        id: 6,
        image: member3,
        name: "Jane",
    }
]

export default function MembersCarousel() {
    return (
        <CarouselContainer>
            {
                memberData.map((member) => (
                    <CarouselItem
                        key={member?.id}
                        className=" basis-1/2  lg:basis-1/3  "
                    >
                        <Link href="#" className="relative group">
                            <ImageWithOpacity image={member?.image} className="w-full lg:h-[450px] md:h-[330px] h-[250px] object-cover rounded-2xl" opacityClass="opacity-40 rounded-2xl" />
                            <div className="absolute bottom-3 text-white flex-between w-full px-6">
                                <h3 className="md:text-lg md:font-semibold font-medium ">{member?.name}</h3>
                                <ArrowUpRight size={20} className="group-hover:rotate-45 duration-500" />
                            </div>
                        </Link>

                    </CarouselItem>
                ))
            }
        </CarouselContainer>
    )
}
