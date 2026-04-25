import { MediaImageContent } from "@/content/types";

interface Props {
  content: MediaImageContent;
}

export default function ProjectImage(props: Props) {
  return <img src={props.content.src} alt={props.content.alt} />;
}
