import { For } from "solid-js";
import { APP_CONTENT } from "@/constants/content";
import { getPublicMedia } from "@/utils/public";

export default function HomeCarousel() {
  return (
    <div>
      <For each={APP_CONTENT.home.hero.img}>
        {(item) => <img src={getPublicMedia(item.src)} alt={item.alt} />}
      </For>
    </div>
  );
}
