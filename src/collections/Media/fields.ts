import { Field, TextField } from "payload/types";
import { COLLECTION } from "../../constants/payloadcms.const";

const alt: TextField = {
  name: "alt",
  type: "text",
};

const author: Field = {
  name: "createdBy",
  type: "relationship",
  relationTo: COLLECTION.USERS,
  access: {
    update: () => false,
  },
  admin: {
    readOnly: true,
    position: "sidebar",
    condition: (data) => Boolean(data?.createdBy),
  },
};

const MediaFields = [alt, author];

export default MediaFields;
