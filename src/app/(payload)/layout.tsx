/* THIS FILE WAS GENERATED FOR PAYLOAD — it wires the admin UI into the app.
 * The marketing site's own layout is unaffected; this layout only applies to
 * routes inside the (payload) group (/admin and the Payload API). */
import type { ServerFunctionClient } from "payload";
import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import React from "react";

import { importMap } from "./admin/importMap.js";

type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
);

export default Layout;
