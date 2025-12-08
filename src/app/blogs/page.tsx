import { Metadata } from "next";
import BlogsContainer from "./_components/BlogsContainer";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Find out the latest blog posts from FreedomPath Planning and learn how to grow your business.",
}

export default function BlogsPage() {
    return (
        <BlogsContainer />
    )
}
