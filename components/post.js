
// individual post format
import bg from "../images/hero.webp"
import Image from "next/image"

const Post = () => {
    return (
        // link around the entire card
        <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={bg} className="max-h-64" style={{ objectFit: "cover"}}/>
            <div className="p-6 text-black">
                <span className="text-xl font-bold"> BREAKING: Headlines are BORING! </span>
                <p> brief blurb about the blog post, to be expanded upon in the post itself. </p>
                <sub> 01-01-2000 </sub>
            </div>

        </div>
    )
}

export default Post