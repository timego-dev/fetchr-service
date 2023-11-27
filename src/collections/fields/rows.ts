import { Field, RowField } from "payload/types";

export const row = (...fields: Field[]): RowField => ({ type: "row", fields });
