
// individual post format
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import Skeleton from "./utils/skeleton"

const Post = (data) => {

    const { author, brief, thumbnail, date, topic, slug, _id, alt } = data.data

    return (
        // link around the entire card
            <Link key={_id} href={`/blog/${slug}`} className="rounded-xl overflow-hidden shadow-lg">
                <Image src={thumbnail} width={1000} height={1000} className="h-48 max-h-48" style={{ objectFit: "cover"}}/>
                <div className="p-6 text-black flex flex-col justify-between">
                    <div>
                        <span className="text-xl font-bold"> {topic} </span>
                        <p> {brief} </p>                    
                    </div>

                    
                    <div className="h-full">
                        <small className="flex flex-row justify-between">
                            <span>By: {author}</span>
                            <span> {date} </span>
                        </small>                    
                    </div>
                </div>
            </Link>                    
    )
}

export default Post