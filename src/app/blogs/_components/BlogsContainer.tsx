import Container from "@/components/shared/Container";
import BlogCards from "@/components/shared/cards/BlogCards";
import PaginationSection from "@/components/shared/pagination/PaginationSection";

export const blogPosts = [
    {
        id: 1,
        title: "Most popular design systems to learn from in 2022",
        tag: "Design Systems",
        image: "/blog_image_1.png",
    },
    {
        id: 2,
        title: "Understanding accessibility makes you a better",
        tag: "Accessibility",
        image: "/blog_image_2.png",
    },
    {
        id: 3,
        title: "15 best tools that will help you build your website",
        tag: "Tech",
        image: "/blog_image_3.png",
    },
    {
        id: 4,
        title: "Understanding accessibility makes you a better",
        tag: "Tech",
        image: "/blog_image_2.png",
    },
    {
        id: 5,
        title: "How to build scalable design systems",
        tag: "Design Systems",
        image: "/blog_image_1.png",
    },
    {
        id: 6,
        title: "Top accessibility mistakes beginners make",
        tag: "Accessibility",
        image: "/blog_image_2.png",
    },
    {
        id: 7,
        title: "Best 10 frameworks to learn in 2024",
        tag: "Tech",
        image: "/blog_image_3.png",
    },
    {
        id: 8,
        title: "Improving UI consistency with token systems",
        tag: "Design Systems",
        image: "/blog_image_1.png",
    },
    {
        id: 9,
        title: "Why inclusive design matters",
        tag: "Accessibility",
        image: "/blog_image_2.png",
    },
    {
        id: 10,
        title: "Top VS Code extensions for productivity",
        tag: "Tech",
        image: "/blog_image_3.png",
    },
    {
        id: 11,
        title: "Building color palettes for design systems",
        tag: "Design Systems",
        image: "/blog_image_1.png",
    },
    {
        id: 12,
        title: "Keyboard navigation: what devs should know",
        tag: "Accessibility",
        image: "/blog_image_2.png",
    },
    {
        id: 13,
        title: "Best cloud tools to automate your workflow",
        tag: "Tech",
        image: "/blog_image_3.png",
    },
    {
        id: 14,
        title: "Typography rules for modern design systems",
        tag: "Design Systems",
        image: "/blog_image_1.png",
    },
    {
        id: 15,
        title: "Accessible forms: patterns that work",
        tag: "Accessibility",
        image: "/blog_image_2.png",
    },
    {
        id: 16,
        title: "Essential tools for frontend developers",
        tag: "Tech",
        image: "/blog_image_3.png",
    },
];

export default function BlogSection() {
    return (
        <Container className='section-padding lg:space-y-10 space-y-7'>
            {/* heading */}
            <div className="lg:space-y-3 space-y-2">
                <h5 className='section-title-tag'>Learn new business information</h5>
                <h4 className="section-title">
                    Read our blog
                </h4>
            </div>

            {/* main content */}
            <BlogCards data={blogPosts} />

            {/*pagination  */}
            <PaginationSection />
        </Container>
    )
}
