
// all posts
import { useEffect, useState } from "react";
import delay from "./utils/helpers"
import Post from "./post";
import { getPosts } from "../sanity/sanity-utils";
import Skeleton from "./utils/skeleton";

const Posts = () => {


    const [isPosts, setposts] = useState("")
    const [isLoading, setLoading] = useState(true)


    const populate = async () => {
        setLoading(true)
        await delay(2000)

        try {
            const items = await getPosts();
            const list = items.map(post => <Post data={post} />)
            setposts(list)
        } catch (err) {
            console.error(err)
            // return error UI
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        populate()
    }, [])
    


    return (
        <div className="p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            { isLoading ? 
            <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </> : isPosts }    
        </div>
    )
}


export default Posts