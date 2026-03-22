import { For } from "solid-js";
import { APP_CONTENT } from "@/constants/content";
import { getPublicMedia } from "@/utils/public";

export default function WorksSection() {
  return (
    <For each={APP_CONTENT.projects}>
      {(item) => (
        <a href={`projects/${item.slug}`}>
          <img
            src={getPublicMedia(item.preview.img.src)}
            alt={item.preview.img.alt}
          />
          <p>{item.preview.title}</p>
        </a>
      )}
    </For>
  );
}
