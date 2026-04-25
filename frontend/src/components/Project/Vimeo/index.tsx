import "./styles.scss";

interface Props {
  content: { url: string };
}

export default function ProjectVimeo(props: Props) {
  return (
    <iframe
      class="project-vimeo"
      title="Vimeo Video"
      src={props.content.url}
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
