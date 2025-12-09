import AboutPathPlanningSection from "@/components/shared/aboutUs/AboutPathPlanningSection";
import AboutDetails from "./AboutDetails";
import aboutPathPlanningImage from "@/assets/images/about-us/path_planning_image.png"
import AboutBusinessOwner from "./AboutBusinessOwner";
import AssociatesMember from "./AssociatesMember/AssociatesMember";
import ClientReviewSection from "@/components/shared/clientReview/ClientReviewSection";

export default function AboutUsContainer() {
    return (
        <>
            <AboutDetails />
            <AboutPathPlanningSection image={aboutPathPlanningImage} />
            <AboutBusinessOwner />
            <AssociatesMember />
            <ClientReviewSection />
        </>
    )
}
