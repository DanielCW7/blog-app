import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import blog from "./blog-schema";

const config = defineConfig({
    projectId: "roviyn05",
    dataset: "production",
    title: "my blog app",
    apiVersion: "2023-11-24",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [blog] }
})

export default config