import { useLocation } from "@solidjs/router";
import "./styles.scss";
import markdownit from "markdown-it";
import ProjectCarousel from "@/components/Project/Carousel";
import { APP_CONTENT } from "@/constants/content";

export default function Project() {
  const md = markdownit();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const content = APP_CONTENT.projects.find(({ slug }) => slug === id);
  if (!content) {
    return null;
  }

  return (
    <div class="project">
      <h1>{content.title}</h1>
      <div>
        {content.hero.img && <ProjectCarousel images={content.hero.img} />}
        <div innerHTML={md.render(content.hero.description)}></div>
      </div>
      <div innerHTML={md.render(content.main)}></div>
    </div>
  );
}
