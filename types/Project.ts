import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string,
    _createdAt: Date,
    topic: string,
    author: string,
    date: string,
    brief: string,
    alt: string,
    thumbnail: string;
    slug: string,
    content: PortableTextBlock[];
}