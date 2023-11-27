
// all posts
import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "@/sanity/sanity-utils";
import Skeleton from "@/utils/skeleton";

const Posts = () => {


    const [posts, setposts] = useState("")
    const populate = async () => {
        
        try {
            const items = await getPosts();
            console.log(items) 
            const list = items.map(post => <Post data={post} />)
            setposts(list)
        } catch (err) {
            console.error(err)
        } finally {
            console.log("loading has finished")
        }
    }

    useEffect(() => {
        // populate()
    }, [])
    


    return (
        <div className="p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            { posts ? posts : <div className="text-black"> no posts to display </div> } 
            <Skeleton />        
        </div>
    )
}


export default Posts