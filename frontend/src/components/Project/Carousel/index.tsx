import { For } from "solid-js";
import { getPublicMedia } from "@/utils/public";

interface Props {
  content: {
    src: string;
    alt: string;
  }[];
}

export default function ProjectCarousel(props: Props) {
  return (
    <div>
      <For each={props.content}>
        {(img) => <img src={getPublicMedia(img.src)} alt={img.alt} />}
      </For>
      <div>
        <For each={props.content}>
          {(img) => (
            <button>
              <img src={getPublicMedia(img.src)} alt={img.alt} />
            </button>
          )}
        </For>
      </div>
    </div>
  );
}
