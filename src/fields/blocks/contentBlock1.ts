import { ArrayField, Block, TextField, UploadField } from "payload/types";

import { COLLECTION } from "../../constants/payloadcms.const";
import { description } from "../description";

const image: UploadField = {
  name: "image",
  relationTo: COLLECTION.MEDIA,
  type: "upload",
};

const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};

const columns: ArrayField = {
  type: "array",
  name: "columns",
  fields: [title, description, image],
  admin: {
    components: {
      // @ts-ignore
      RowLabel: ({ data, index }) => {
        return data?.title || `Slide ${String(index).padStart(2, "0")}`;
      },
    },
  },
};

export const contentBlock1: Block = {
  slug: "contentBlock1",
  imageURL: "/media/contentBlock1.png",
  fields: [columns],
};
