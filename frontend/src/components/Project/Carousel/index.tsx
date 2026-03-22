import { For } from "solid-js";
import { getPublicMedia } from "@/utils/public";

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProjectCarousel(props: Props) {
  return (
    <div>
      <For each={props.images}>
        {(img) => <img src={getPublicMedia(img.src)} alt={img.alt} />}
      </For>
      <div>
        <For each={props.images}>
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
