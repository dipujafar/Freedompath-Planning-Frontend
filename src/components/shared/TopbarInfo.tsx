
import Link from "next/link";
import Container from "./Container";
import facebookIcon from "@/assets/icons/facebook_icon.png";
import linkedinIcon from "@/assets/icons/linkedin_icon.png";
import twitterIcon from "@/assets/icons/twitter_icon.png";
import Image from "next/image";

const TopbarInfo = () => {
  return (
    <header className="bg-grayish-blue text-white py-2  hidden md:block">
      <Container className="flex justify-between items-center text-sm gap-x-2 ">
        <div className="xl:space-x-8 space-x-4  text-center font-medium w-full md:w-fit lg:text-base md:text-xs flex ">
          <p>Freedompath Planning</p>
          <Link href={"tel:+ 123 (456) 789-987"} className="truncate">+ 123 (456) 789-987</Link>
          <Link href={"mailto:contact@fashion.com"} className="truncate">contact@fashion.com</Link>
        </div>

        {/* social media links with icons */}
        <div className="flex items-center gap-x-2">
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={facebookIcon} alt="facebook"  />
          
          </Link>
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={linkedinIcon} alt="facebook"  />
          
          </Link>
          <Link href="#" className="bg-white size-5 flex-center rounded-full">
            <Image src={twitterIcon} alt="facebook"  />
          
          </Link>
         

        </div>


      </Container>
    </header>
  );
};

export default TopbarInfo;
