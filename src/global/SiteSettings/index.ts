import { GlobalConfig, UploadField, ArrayField } from "payload/types";
import { COLLECTION } from "../../constants/payloadcms.const";

const logo: UploadField = {
  name: "logo",
  type: "upload",
  relationTo: COLLECTION.MEDIA,
};

const saleEmails: ArrayField = {
  name: "saleEmails",
  type: "array",
  fields: [
    {
      type: "email",
      name: "email",
      required: true,
      unique: true,
      localized: true,
    },
  ],
  admin: {
    components: {
      // @ts-ignore
      RowLabel: ({ data, index }) => {
        return data?.email
          ? `${data?.email}`
          : `Optional ${String(index).padStart(2, "0")}`;
      },
    },
  },
};

const siteSettingsGlobal: GlobalConfig = {
  slug: "siteSettings",
  access: {
    read: () => true,
  },
  admin: {
    group: "Admin",
  },
  fields: [logo, saleEmails],
};

export default siteSettingsGlobal;
