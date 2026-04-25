import Markdownit from "markdown-it";

interface Props {
  content: string;
}

export default function ProjectRichText(props: Props) {
  const md = Markdownit();

  return <div innerHTML={md.render(props.content)}></div>;
}
