"use client"
import { cn } from "@/lib/utils"
import { activeNavLink } from "@/utils/activeNavLink"
import Link from "next/link"
import { usePathname } from "next/navigation";


const navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About Us",
        href: "/about-us"
    },
    {
        title: "Services",
        href: "/services"
    },
    {
        title: "Resources",
        href: "/resources"
    },
    {
        title: "Blogs",
        href: "/blogs"
    },
    {
        title: "Book",
        href: "/book"
    },
    {
        title: "Contact Us",
        href: "contact-us"
    }
]

export default function NavLinks() {
    const currentPath = usePathname();
    const paths = currentPath.split("/");
    return (
        
            <div className="flex items-center   lg:gap-x-2 gap-x-1">
                {navLinks.map((link, idx) => (
                    <div key={idx} className="group relative overflow-hidden">
                        {/* Background Hover Effect */}
                        <span
                            className={cn(
                                "absolute inset-0 bg-[#e1ecf8] transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100",
                                "z-0",
                                activeNavLink(paths, link?.href, currentPath) && "scale-x-100"
                            )}
                        ></span>

                        {/* Navigation Link */}
                        <Link
                            href={link.href}
                            className={cn(
                                "relative  py-2 px-5  font-medium z-10 transition-colors duration-300 truncate lg:text-base md:text-sm",activeNavLink(paths, link?.href, currentPath) && "text-grayish-blue"
                            )}
                        >
                            {link.title}
                        </Link>
                    </div>
                ))}
            </div>
      
    )
}
