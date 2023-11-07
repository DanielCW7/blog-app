import sitting from "../images/sitting.jpg"

const Post = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-10 md:mt-12">
            {/* image */}
            <div className="overflow-hidden max-h-40 md:max-h-64 lg:max-h-none lg:max-w-md">
                <img src={sitting} className="w-full rounded-lg" alt="post alt text" />
                {/* dynamic alt text */}
            </div>
            <div className="flex flex-col text-left justify-center pt-5 pb-5 lg:p-10">
                <h2 className="font-bold text-xl"> this is a post title </h2>
                <p> 01-01-2023 </p>
                <br/>
                <p> lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description </p>
                <p> More ... </p>
            </div>
        </div>
    )
}

export default Post