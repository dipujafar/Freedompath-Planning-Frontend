import { TAssociatesMember } from './associatesMemberData'
import Container from '@/components/shared/Container'
import { cn } from '@/lib/utils'
import TeamMemberName from '@/components/shared/TeamMemberName'
import ImageWithOpacity from '@/components/shared/ImageWithOpacity'

export default function AssociatesMemberCard({ member }: { member: TAssociatesMember }) {
    return (
        <div id={`${member?.id}`} className={cn(member?.id % 2 === 0 ? "bg-primary-color" : "bg-transparent")}>
            <Container className='section-padding lg:space-y-4 space-y-2.5'>
                {member?.id == 1 && <p><span className="text-[#96A0B5] mb-6">About Us/</span> Highlighted Associates</p>}
                <div className='flex flex-col lg:flex-row items-center xl:gap-x-14 lg:gap-x-7 gap-x-5 gap-y-3'>
                    <div className='lg:w-1/4 relative'>
                        <ImageWithOpacity image={member?.image} className='xl:h-[450px] lg:h-[400px] h-[300px] w-full rounded-3xl' opacityClass="rounded-3xl opacity-40" />
                    </div>
                    <div className='lg:w-3/4 xl:space-y-5 space-y-3'>
                        <TeamMemberName name={member?.name} />
                        <div className='space-y-5' dangerouslySetInnerHTML={{ __html: member?.description }}></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
