import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import Media from "./collections/Media";
import Users from "./collections/Users";
import siteSettingsGlobal from "./global/SiteSettings";
import { HomePage } from "./global/HomePage";
require("dotenv").config?.();

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      ogImage: "/assets/logo-white.png",
      favicon: "/assets/favicon.ico",
      titleSuffix: "- Scheduler",
    },
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors: "*",
  collections: [
    Users,
    // Pages,
    // Products,
    Media,
  ],
  globals: [siteSettingsGlobal, HomePage],
  localization: {
    locales: [
      { code: "en", label: "English" },
      { code: "ge", label: "German" },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  upload: {
    limit: {
      fileSize: 500000000,
    },
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,

    // connectOptions: { maxIdleTimeMS: 2000 },
  }),
  plugins: [
    // cloudStorage({
    //   collections: {
    //     // Enable cloud storage for Media collection
    //     media: {
    //       // Create the S3 adapter
    //       adapter: s3Adapter({
    //         config: {
    //           endpoint: process.env.S3_ENDPOINT,
    //           credentials: {
    //             accessKeyId: process.env.S3_ACCESS_KEY_ID,
    //             secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    //           },
    //         },
    //         bucket: process.env.S3_BUCKET,
    //       }),
    //     },
    //   },
    // }),
  ],
});
