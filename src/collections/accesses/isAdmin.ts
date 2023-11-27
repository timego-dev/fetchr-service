import { User } from "payload/generated-types";
import { Access, FieldAccess } from "payload/types";
import { Role } from "../../constants/payloadcms.const";

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes(Role.ADMIN));
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes(Role.ADMIN));
};
