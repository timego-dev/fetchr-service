import { UploadField } from "payload/types";
import { COLLECTION } from "../constants/payloadcms.const";

export const threeDUpload: UploadField = {
  name: "threeD",
  type: "upload",
  relationTo: COLLECTION.THREE_D_FILES,
};
