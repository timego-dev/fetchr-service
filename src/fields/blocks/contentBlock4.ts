import { ArrayField, Block, TextField, UploadField } from "payload/types";

import { COLLECTION } from "../../constants/payloadcms.const";
import { description } from "../description";
import { button } from "../../collections/fields/button";
import { imageUpload } from "../image";

const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};

export const contentBlock4: Block = {
  slug: "contentBlock4",
  imageURL: "/media/contentBlock4.png",
  fields: [title, description, imageUpload, button],
};
