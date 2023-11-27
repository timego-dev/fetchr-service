import { RichTextField, UploadField } from "payload/types";
import { COLLECTION } from "../constants/payloadcms.const";

export const imageUpload: UploadField = {
  name: "image",
  type: "upload",
  relationTo: COLLECTION.MEDIA,
};
