import "./styles.scss";
import { Meta, Title } from "@solidjs/meta";
import HomeCarousel from "@/components/Home/Carousel";
import WorksSection from "@/components/Home/WorksSection";
import { APP_CONTENT } from "@/constants/content";

export default function Home() {
  return (
    <main class="home">
      <Title>{APP_CONTENT.home.meta.title}</Title>
      <Meta name="description" content={APP_CONTENT.home.meta.description} />

      <HomeCarousel />
      <WorksSection />
    </main>
  );
}
