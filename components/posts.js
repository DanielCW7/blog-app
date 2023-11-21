
// all posts
import Post from "../components/post";

const Posts = () => {
    return (
        <div className="p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Post/>
            <Post/>
            <Post/>  
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>          
        </div>
    )
}

export default Posts