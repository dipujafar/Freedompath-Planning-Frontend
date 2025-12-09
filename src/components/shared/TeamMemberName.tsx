import AnimatedText from "../animation/AnimatedText";


export default function TeamMemberName({ name }: { name: string }) {
    return (
        <p className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold'><span className="mr-2">About</span>
            <AnimatedText text={name} className='bg-linear-to-b from-[#3C77AD] to-[#5AC1DE] text-transparent bg-clip-text ' />
        </p>
    )
}
