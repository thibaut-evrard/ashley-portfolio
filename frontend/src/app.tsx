import "./app.scss";
import { MetaProvider, Title } from "@solidjs/meta";
import { Suspense, type Component } from "solid-js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { APP_CONTENT } from "./constants/content";

const App: Component<{ children: Element }> = (props) => {
  return (
    <MetaProvider>
      <Title>{APP_CONTENT.home.meta.title}</Title>
      <Header />
      <Suspense>{props.children}</Suspense>
      <Footer />
    </MetaProvider>
  );
};

export default App;
