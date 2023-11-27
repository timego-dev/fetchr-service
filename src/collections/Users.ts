import { CollectionConfig } from "payload/types";
import { Role } from "../constants/payloadcms.const";
import { isAdmin, isAdminFieldLevel } from "./accesses/isAdmin";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      options: [
        { label: "Admin", value: Role.ADMIN },
        { label: "User", value: Role.AUTHOR },
      ],
      required: true,
      defaultValue: [Role.AUTHOR],
      access: {
        read: isAdminFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
    },
  ],
};

export default Users;
