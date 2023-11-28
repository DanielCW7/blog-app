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
            "thumbnail": thumbnail.asset->url,
            "slug": slug.current
        }`
    )
}

export async function getPost(slug: string) {
    const client = createClient({
        projectId: "roviyn05",
        dataset: "production",
        apiVersion: "2023-11-24",
    });


    // where to use the GROQ query (sanity.io docs)
    return client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
            _id,
            _createdAt,
            topic,
            author,
            date,
            brief,
            description,
            "thumbnail": thumbnail.asset->url,
            "slug": slug.current
        }`,
        { slug: slug}
        
    )    
}