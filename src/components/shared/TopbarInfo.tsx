
import Link from "next/link";
import Container from "./Container";
import facebookIcon from "@/assets/icons/facebook_icon.png";
import linkedinIcon from "@/assets/icons/linkedin_icon.png";
import twitterIcon from "@/assets/icons/twitter_icon.png";
import mailIcon from '@/assets/icons/email_icon.png'
import phoneIcon from '@/assets/icons/phone_icon.png'
import Image from "next/image";

const TopbarInfo = () => {
  return (
    <header className="bg-grayish-blue text-white py-2  hidden md:block">
      <Container className="flex justify-between items-center text-sm gap-x-2 ">
        <div className="xl:space-x-8 space-x-4  text-center font-medium w-full md:w-fit lg:text-base md:text-xs flex ">
          <p>Freedompath Planning</p>
          <div className="flex items-center gap-x-1.5">
            <Image src={phoneIcon} alt="phone" />
            <Link href={"tel:+ 123 (456) 789-987"} className="truncate">+123 456 789</Link>
          </div>
          <div className="flex items-center gap-x-1.5">
            <Image src={mailIcon} alt="mail" />
            <Link href={"mailto:contact@fashion.com"} className="truncate">example@company.com</Link>
          </div>
        </div>

        {/* social media links with icons */}
        <div className="flex items-center gap-x-2">
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={facebookIcon} alt="facebook" />

          </Link>
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={linkedinIcon} alt="facebook" />

          </Link>
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={twitterIcon} alt="facebook" />

          </Link>


        </div>


      </Container>
    </header>
  );
};

export default TopbarInfo;
