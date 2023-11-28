
// individual post format
import Link from "next/link"
import Image from "next/image"

const Post = (data) => {

    const { author, brief, thumbnail, date, topic, slug, alt } = data.data
    console.log(data.data.slug)

    return (
        // link around the entire card
        <Link href={`/blog/${slug}`} className="rounded-xl overflow-hidden shadow-lg">
            <Image src={thumbnail} width={1000} height={1000} className="h-48 max-h-48" style={{ objectFit: "cover"}}/>
            <div className="p-6 text-black">
                <span className="text-xl font-bold"> {topic} </span>
                <p> {brief} </p>
                
                <small className="flex flex-row justify-between">
                    <span>By: {author}</span>
                    <span> {date} </span>
                    
                    {/* link via arrow to the actual post itself */}
                </small>
            </div>

        </Link>
    )
}

export default Post