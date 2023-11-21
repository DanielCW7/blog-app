
// individual post format
import bg from "../images/hero.webp"
import Image from "next/image"

const Post = () => {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image src={bg} className="max-h-64" style={{ objectFit: "cover"}}/>
            <div className="p-4 text-black">
                <span className="text-2xl font-bold"> title with a lot of words </span>
                <p> brief blurb about the blog post, to be expanded upon in the post itself. </p>               
            </div>

        </div>
    )
}

export default Post