import type { CollectionConfig } from "payload";

/**
 * Admin users (CMS + CRM logins). `auth: true` gives Payload its built-in
 * authentication. Roles are added in the permissions phase (Admin / Editor /
 * Sales); for Phase 0 every user is a full admin.
 */
export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
