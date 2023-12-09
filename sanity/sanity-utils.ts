// data grabbing functions
import { createClient, groq } from "next-sanity";


export async function getPosts() {
    const client = createClient({
        projectId: "roviyn05",
        dataset: "production",
        apiVersion: "2023-11-24",
    });

    //  GROQ comes from sanity
    return client.fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            topic,
            author,
            date,
            brief,
            content,
            alt,
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


    return client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
            _id,
            _createdAt,
            topic,
            author,
            date,
            content,
            alt,
            "avatar": avatar.asset->url,
            "thumbnail": thumbnail.asset->url,
            "slug": slug.current
        }`,
        { slug }
        
    )  
}            
