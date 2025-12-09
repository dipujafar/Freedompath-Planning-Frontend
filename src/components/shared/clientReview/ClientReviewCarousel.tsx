import review_client_1 from "@/assets/images/sharded/review_client1.png"
import review_client_2 from "@/assets/images/sharded/review_client2.png"
import CarouselContainer from "../carousel/CarouselContainer"
import { CarouselItem } from "@/components/ui/carousel"
import ReviewCard from "./ReviewCard"
const reviewData = [
  {
    id: 1,
    name: "Jenny Wilson",
    comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    image: review_client_1,
    org: "Grower.io",
    rating: 5
  },
  {
    id: 1,
    name: "Jenny Wilson",
    comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    image: review_client_2,
    org: "DLDesign.co",
    rating: 5
  },
  {
    id: 3,
    name: "Jenny Wilson",
    comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    image: review_client_1,
    org: "Grower.io",
    rating: 5
  },
  {
    id: 4,
    name: "Jenny Wilson",
    comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    image: review_client_2,
    org: "DLDesign.co",
    rating: 5
  },

]


export default function ClientReviewCarousel() {
  return (
    <CarouselContainer>
      {
        reviewData.map((review) => <CarouselItem
          key={review?.id}
          className="lg:basis-1/2"
        >
          <ReviewCard review={review} />
        </CarouselItem>)
      }
    </CarouselContainer>
  )
}
