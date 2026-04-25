import { Title } from "@solidjs/meta";
import markdownit from "markdown-it";
import { APP_CONTENT } from "@/constants/content";

export default function About() {
  const md = markdownit();

  return (
    <main>
      <Title>{APP_CONTENT.about.meta.title}</Title>
      <div innerHTML={md.render(APP_CONTENT.about.main)}></div>
    </main>
  );
}
