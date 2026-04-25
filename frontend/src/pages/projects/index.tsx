import { useLocation } from "@solidjs/router";
import "./styles.scss";
import ProjectComponentSection from "@/components/Project/ComponentSection";
import { APP_CONTENT } from "@/constants/content";
import { getComponentContent } from "./utils";

export default function Project() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const content = APP_CONTENT.projects.find(({ slug }) => slug === id);
  if (!content) {
    return null;
  }

  const componentContent = getComponentContent(content.content);

  return (
    <div class="project">
      <h1>{content.title}</h1>
      <ProjectComponentSection content={componentContent} />
    </div>
  );
}
