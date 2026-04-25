import { For } from "solid-js";
import { ProjectContentSectionContent } from "@/content/types";
import ProjectCarousel from "../Carousel";
import ProjectImage from "../Image";
import ProjectRichText from "../RichText";
import ProjectVimeo from "../Vimeo";

interface Props {
  content: ProjectContentSectionContent[];
}

export default function ProjectComponentSection(props: Props) {
  return (
    <For each={props.content}>
      {(item) => {
        switch (item.type) {
          case "carousel":
            return <ProjectCarousel content={item.carousel} />;
          case "image":
            return <ProjectImage content={item.image} />;
          case "vimeo":
            return <ProjectVimeo content={item.vimeo} />;
          case "rich_text":
            return <ProjectRichText content={item.rich_text} />;
        }
      }}
    </For>
  );
}
