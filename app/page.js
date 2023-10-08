import Image from 'next/image'
import CarouselComponent from "@/components/CarouselComponent";
import HeaderComponent from "@/components/HeaderComponent";
import StatusBarComponent from "@/components/StatusBarComponent";
import StripComponent from "@/components/StripComponent";
import ReviewsComponent from "@/components/ReviewsComponent";
import MessageFromPrincipalComponent from "@/components/MessageFromPrincipalComponent";
import MissionVisionComponent from "@/components/MissionVisionComponent";
import FooterComponent from "@/components/FooterComponent";


export default function Home() {
  return (
    <main>
        <StatusBarComponent/>
        <HeaderComponent/>
        <CarouselComponent/>
        <StripComponent/>
        <MessageFromPrincipalComponent/>
        <ReviewsComponent/>
        <MissionVisionComponent/>
        <FooterComponent/>
    </main>
  )
}
