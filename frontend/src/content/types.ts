import { PROJECT_CONTENT_SECTION_TYPE } from "./constants";

export type MediaType = "image" | "video";
export type MediaSize = "small" | "medium" | "large";

export interface MediaImageContent {
  src: string;
  alt: string;
}

export interface MediaContent {
  src: string;
  alt: string;
  type: MediaType | string;
}

export interface ProjectInfoContent {
  client: string;
  project_name: string;
  tag: string;
  year: string;
}

export interface ProjectMetaContent {
  title: string;
  description: string;
}

export type ProjectContentSectionType =
  (typeof PROJECT_CONTENT_SECTION_TYPE)[number];

export interface ProjectContentSectionCarouselContent {
  type: "carousel";
  carousel: MediaImageContent[];
}

export interface ProjectContentSectionImageContent {
  type: "image";
  image: MediaImageContent;
}

export interface ProjectContentSectionRichTextContent {
  type: "rich_text";
  rich_text: string;
}

export interface ProjectContentSectionVimeoContent {
  type: "vimeo";
  vimeo: { url: string };
}

export type ProjectContentSectionContent =
  | ProjectContentSectionCarouselContent
  | ProjectContentSectionImageContent
  | ProjectContentSectionRichTextContent
  | ProjectContentSectionVimeoContent;

export interface ProjectContent {
  slug: string;
  meta: ProjectMetaContent;
  info: ProjectInfoContent;
  title: string;
  content: ProjectContentSectionContent[];
}
