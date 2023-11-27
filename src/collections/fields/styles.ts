import {
  GroupField,
  SelectField,
  TextField,
  CollapsibleField,
} from "payload/types";

export const styles: CollapsibleField = {
  fields: [{ type: "text", name: "margin" }],
  label: "Styles",
  type: "collapsible",
};
