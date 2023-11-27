// data grabbing functions

import { createClient, groq } from "next-sanity";

export async function getPosts() {
    const client = createClient({
        projectId: "roviyn05",
        dataset: "production",
        apiVersion: "2023-11-24",
    });


    // where to use the GROQ query (sanity.io docs)
    return client.fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            topic,
            author,
            date,
            brief,
            description,
            "Thumbnail": thumbnail.asset->url
        }`
    )
}