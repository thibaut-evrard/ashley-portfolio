import { MetaProvider, Title } from "@solidjs/meta";
import { Suspense, type Component } from "solid-js";
import { APP_CONTENT } from "./constants/content";

const App: Component<{ children: Element }> = (props) => {
  return (
    <MetaProvider>
      <Title>{APP_CONTENT.home.meta.title}</Title>
      <Suspense>{props.children}</Suspense>
    </MetaProvider>
  );
};

export default App;
