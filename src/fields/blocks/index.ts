import { BlockField, TextField } from "payload/types";
import { contentBlock1 } from "./contentBlock1";
import { contentBlock2 } from "./contentBlock2";
import { contentBlock3 } from "./contentBlock3";
import { contentBlock4 } from "./contentBlock4";
import { contentBlock5 } from "./contentBlock5";
import { contentBlock6 } from "./contentBlock6";
import { heroBlock } from "./heroBlock";
import { row } from "../../collections/fields/rows";

export const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};
export const slug: TextField = {
  name: "slug",
  type: "text",
  unique: true,
  required: true,
};

export const content: BlockField = {
  admin: { initCollapsed: false },
  name: "content",
  blocks: [
    heroBlock,
    contentBlock1,
    contentBlock2,
    contentBlock3,
    contentBlock4,
    contentBlock5,
    contentBlock6,
  ],
  type: "blocks",
};

export const pagesFields = [row(title, slug), content];
