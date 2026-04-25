interface Props {
  content: { url: string };
}

export default function ProjectVimeo(props: Props) {
  console.log("Rendering Vimeo with URL:", props.content.url);
  return (
    <iframe
      title="Vimeo Video"
      src={props.content.url}
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
