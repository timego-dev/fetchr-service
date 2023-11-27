import { ArrayField, Block, TextField, UploadField } from "payload/types";

import { COLLECTION } from "../../constants/payloadcms.const";
import { description } from "../description";
import { button } from "../../collections/fields/button";

const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};

export const contentBlock3: Block = {
  slug: "contentBlock3",
  imageURL: "/media/contentBlock3.png",
  fields: [title, description, button],
};
