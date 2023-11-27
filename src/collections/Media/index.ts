import { CollectionConfig, CollectionAfterReadHook } from "payload/types";
import { COLLECTION } from "../../constants/payloadcms.const";
import MediaFields from "./fields";

const Media: CollectionConfig = {
  slug: COLLECTION.MEDIA,
  hooks: {
    beforeChange: [],
    beforeOperation: [],
  },
  access: { read: () => true },
  upload: {
    staticURL: "/media",
    staticDir: "media",

    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: MediaFields,
};

export default Media;
