import { ArrayField, Block, TextField, UploadField } from "payload/types";

import { COLLECTION } from "../../constants/payloadcms.const";
import { description } from "../description";
import { row } from "../../collections/fields/rows";

const image: UploadField = {
  name: "image",
  relationTo: COLLECTION.MEDIA,
  type: "upload",
};
const icon: UploadField = {
  name: "icon",
  relationTo: COLLECTION.MEDIA,
  type: "upload",
};

const title: TextField = {
  name: "title",
  type: "text",
  localized: true,
};

const tabs: ArrayField = {
  type: "array",
  name: "tabs",
  fields: [title, description, row(image, icon)],
  admin: {
    components: {
      // @ts-ignore
      RowLabel: ({ data, index }) => {
        return data?.title || `Slide ${String(index).padStart(2, "0")}`;
      },
    },
  },
};

export const contentBlock2: Block = {
  slug: "contentBlock2",
  imageURL: "/media/contentBlock2.png",
  fields: [title, tabs],
};
