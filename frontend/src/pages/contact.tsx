import { Title } from "@solidjs/meta";
import markdownit from "markdown-it";
import { APP_CONTENT } from "@/constants/content";

export default function About() {
  const md = markdownit();

  return (
    <main>
      <Title>{APP_CONTENT.contact.meta.title}</Title>
      <div>
        <p>{APP_CONTENT.contact.headline}</p>
        <ul>
          <li>
            <a href={APP_CONTENT.contact.email.href}>
              {APP_CONTENT.contact.email.text}
            </a>
          </li>
          <li>
            <a href={APP_CONTENT.contact.insta.href}>
              {APP_CONTENT.contact.insta.text}
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
