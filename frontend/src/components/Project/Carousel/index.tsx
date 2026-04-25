import "./styles.scss";
import { createSignal, For } from "solid-js";
import { getPublicMedia } from "@/utils/public";

interface Props {
  content: {
    src: string;
    alt: string;
  }[];
}

export default function ProjectCarousel(props: Props) {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const heroImage = () => props.content[currentIndex()];

  return (
    <div class="project-carousel">
      <img src={getPublicMedia(heroImage().src)} alt={heroImage().alt} />
      <div class="project-carousel__controls">
        <For each={props.content}>
          {(img, index) => (
            <button onclick={() => setCurrentIndex(index())}>
              <img src={getPublicMedia(img.src)} alt={img.alt} />
            </button>
          )}
        </For>
      </div>
    </div>
  );
}
