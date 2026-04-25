import { APP_CONTENT } from "@/constants/content";
import "./styles.scss";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <header>
      <a href={ROUTES.home}>{APP_CONTENT.general.header.title}</a>
      <nav>
        <a href={ROUTES.home}>{APP_CONTENT.general.header.nav.works}</a>
        <a href={ROUTES.about}>{APP_CONTENT.general.header.nav.about}</a>
        <a href={ROUTES.contact}>{APP_CONTENT.general.header.nav.contact}</a>
      </nav>
    </header>
  );
}
