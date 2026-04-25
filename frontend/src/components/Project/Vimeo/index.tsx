interface Props {
  content: { url: string };
}

export default function ProjectVimeo(props: Props) {
  return <a href={props.content.url}>vimeo url</a>;
}
