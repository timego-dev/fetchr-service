import {
  GroupField,
  SelectField,
  TextField,
  CollapsibleField,
} from "payload/types";

const text: TextField = {
  name: "text",
  type: "text",
  localized: true,
};

const bgColor: SelectField = {
  name: "bgColor",
  options: [
    {
      label: "Yellow",
      value: "A1905B",
    },
    {
      label: "black",
      value: "050201",
    },
  ],
  type: "select",
};

const action: SelectField = {
  name: "action",
  type: "select",
  options: [
    { label: "Link", value: "link" },
    { label: "Button", value: "button" },
  ],
};
const link: TextField = {
  name: "link",
  type: "text",
};

const width: TextField = { type: "text", name: "width" };

export const button: GroupField = {
  fields: [text, bgColor, action, link, width],
  name: "Button",
  type: "group",
};
