import Image from 'next/image'
import logo from "@/assets//images/logo.png"
import Container from '../Container'
import NavLinks from './NavLinks'
import { Button } from '@/components/ui/button'



export default function Navbar() {
    return (
        <div className='bg-[#F4F9FF] py-4 flex  '>
            <Container className='flex items-center justify-between gap-x-5 w-full  mx-0'>
                <Image src={logo} alt="logo" width={1200} height={1200} className='max-w-56' />
                <NavLinks />
                <Button className='bg-[#4176A6] duration-500 cursor-pointer uppercase'>GET Reeport</Button>
            </Container>
        </div>
    )
}
