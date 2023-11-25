import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import project from "./sanity/project-schema";

const config = defineConfig({
    projectId: "roviyn05",
    dataset: "production",
    title: "my blog app",
    apiVersion: "2023-11-24",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [project] }
})

export default config