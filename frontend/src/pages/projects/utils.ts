import { PROJECT_CONTENT_SECTION_TYPE } from "@/content/constants";
import {
  ProjectContentSectionCarouselContent,
  ProjectContentSectionContent,
  ProjectContentSectionImageContent,
  ProjectContentSectionRichTextContent,
  ProjectContentSectionType,
  ProjectContentSectionVimeoContent,
} from "@/content/types";

function isCarousel(
  content: unknown,
): content is ProjectContentSectionCarouselContent {
  const contentAsCarousel = content as ProjectContentSectionCarouselContent;
  if (contentAsCarousel.type !== "carousel") {
    return false;
  }
  if (
    !contentAsCarousel.carousel ||
    !Array.isArray(contentAsCarousel.carousel)
  ) {
    return false;
  }
  for (const item of contentAsCarousel.carousel) {
    if (item.alt === undefined || item.src === undefined) {
      return false;
    }
  }
  return true;
}

function isImage(
  content: unknown,
): content is ProjectContentSectionImageContent {
  const contentAsCarousel = content as ProjectContentSectionImageContent;
  if (contentAsCarousel.type !== "image") {
    return false;
  }
  if (
    contentAsCarousel.image.src === undefined ||
    contentAsCarousel.image.alt === undefined
  ) {
    return false;
  }
  return true;
}

function isRichText(
  content: unknown,
): content is ProjectContentSectionRichTextContent {
  const contentAsCarousel = content as ProjectContentSectionRichTextContent;
  if (contentAsCarousel.type !== "rich_text") {
    return false;
  }
  if (contentAsCarousel.rich_text === undefined) {
    return false;
  }
  return true;
}

function isVimeo(
  content: unknown,
): content is ProjectContentSectionVimeoContent {
  const contentAsCarousel = content as ProjectContentSectionVimeoContent;
  if (contentAsCarousel.type !== "vimeo") {
    return false;
  }
  if (
    contentAsCarousel.vimeo === undefined ||
    contentAsCarousel.vimeo.url === undefined
  ) {
    return false;
  }
  return true;
}

export function getComponentContent(
  content: unknown,
): ProjectContentSectionContent[] {
  const validContent: ProjectContentSectionContent[] = [];
  if (!Array.isArray(content)) {
    return validContent;
  }

  for (const item of content) {
    if (!item.type || !PROJECT_CONTENT_SECTION_TYPE.includes(item.type)) {
      console.error("Invalid item:", item);
      continue;
    }

    switch (item.type as ProjectContentSectionType) {
      case "carousel":
        if (isCarousel(item)) {
          validContent.push(item);
        } else {
          console.error("Invalid carousel item", item);
        }
        break;
      case "vimeo":
        if (isVimeo(item)) {
          validContent.push(item);
        } else {
          console.error("Invalid vimeo item", item);
        }
        break;
      case "image":
        if (isImage(item)) {
          validContent.push(item);
        } else {
          console.error("Invalid image item", item);
        }
        break;
      case "rich_text":
        if (isRichText(item)) {
          validContent.push(item);
        } else {
          console.error("Invalid rich_text item", item);
        }
        break;
    }
  }
  return validContent;
}
