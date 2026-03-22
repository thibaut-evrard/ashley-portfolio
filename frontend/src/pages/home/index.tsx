import "./styles.scss";
import { Meta, Title } from "@solidjs/meta";
import { APP_CONTENT } from "@/constants/content";

export default function Home() {
  return (
    <main class="home">
      <Title>{APP_CONTENT.home.meta.title}</Title>
      <Meta name="description" content={APP_CONTENT.home.meta.description} />
      <h1>home</h1>
    </main>
  );
}
