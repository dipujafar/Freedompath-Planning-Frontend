import Container from '@/components/shared/Container'
import ownerImage from '@/assets/images/about-us/user1.png'
import ImageWithOpacity from '@/components/shared/ImageWithOpacity'
import TeamMemberName from '@/components/shared/TeamMemberName'

export default function AboutBusinessOwner() {
    return (
        <div className='bg-primary-color'>
            <Container className='section-padding lg:space-y-10 space-y-7 flex gap-x-16 items-center'>
                <div className='lg:w-1/3 md:w-1/2 w-full max-h-[520px] rounded-3xl  relative'>
                    <ImageWithOpacity image={ownerImage} className='max-h-[520px] rounded-3xl' opacityClass="rounded-3xl" />
                </div>
                <div className='lg:w-2/3 md:w-1/2 w-full md:space-y-4 space-y-2'>
                    <span className='bg-grayish-blue text-white px-4 rounded-full flex-center w-fit'>Business Owner</span>
                    <TeamMemberName name='Steve DeTray' />
                    <div className='text-[#18181B] lg:space-y-5 space-y-3'>
                        <p>Steve DeTray has been helping business owners since 2004. Steve started his career in the wealth management arena helping business owners plan for the sale and exit of their business. He focused on the transition to retirement and the challenges of this new unknown season of life ahead. Being a lifelong learner and reader, he has a unique ability to put the complicated topics into the right perspective.</p>
                        <p>In 2019, Steve sold his wealth management practice and focused full time on helping business owners find freedom before the sale of their largest asset. Since selling his extremely successful wealth management practice, he brings the insight of that personal business exit.  Now as a certified Value Builder Advisor, Steve is an expert on building value and developing a plan for a successful exit using a systematic approach to measure and improve the value of a business. More than that, Steve is a skilled facilitator who helps enable businesses to thrive without their owners, thus enabling them to gain control back of their life or exit their business.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
