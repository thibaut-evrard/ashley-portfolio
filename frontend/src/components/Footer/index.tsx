import { APP_CONTENT } from "@/constants/content";
import "./styles.scss";

export default function Footer() {
  return (
    <footer>
      <p>{APP_CONTENT.general.footer.credits}</p>
    </footer>
  );
}
