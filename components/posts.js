
// all posts
import { Suspense, useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "@/sanity/sanity-utils";
import Skeleton from "@/components/utils/skeleton";
import Loader from "@/components/utils/loader";

const Posts = () => {


    const [isPosts, setposts] = useState("")

    const populate = async () => {
        try {
            const items = await getPosts();
            const list = items.map(post => <Post data={post} />)
            setposts(list)
        } catch (err) {
            console.error(err)
            // return error UI
        } finally {
            console.log("loaded")
        }
    }

    useEffect(() => {
        populate()
    }, [])
    


    return (
        <div className="p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            { isPosts ? isPosts : <div className="text-black"> no posts to display </div> }    
        </div>
    )
}


export default Posts