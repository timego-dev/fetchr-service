import {
  Block,
  CheckboxField,
  GroupField,
  SelectField,
  TextField,
  UploadField,
} from "payload/types";
import { COLLECTION } from "../../constants/payloadcms.const";
import { row } from "../../collections/fields/rows";
import { description } from "../description";
import { button } from "../../collections/fields/button";
import { imageUpload } from "../image";

const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};

export const heroBlock: Block = {
  slug: "heroBlock",
  imageURL: "/media/heroBlock.png",
  fields: [row(title, imageUpload), description, button],
};
