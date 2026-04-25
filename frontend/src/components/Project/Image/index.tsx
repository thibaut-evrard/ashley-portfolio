import { MediaImageContent } from "@/content/types";
import { getPublicMedia } from "@/utils/public";

interface Props {
  content: MediaImageContent;
}

export default function ProjectImage(props: Props) {
  return (
    <img src={getPublicMedia(props.content.src)} alt={props.content.alt} />
  );
}
