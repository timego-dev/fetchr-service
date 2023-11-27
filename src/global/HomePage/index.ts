import {
  CollapsibleField,
  GlobalConfig,
  GroupField,
  TextField,
} from "payload/types";
import { pagesFields } from "../../fields/blocks";

export const HomePage: GlobalConfig = {
  slug: "home",
  fields: pagesFields,
  admin: { group: "Pages" },
  access: { read: () => true },
};
