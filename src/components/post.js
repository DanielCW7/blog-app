import sitting from "../images/sitting.jpg"

const Post = () => {
    return (
        <div className="flex flex-col md:flex-row border m-10">
            {/* image */}
            <div className="">
                
                <img src={sitting} className="max-w-md md:max-w-lg "/>
            </div>
            <div className="flex flex-col text-left justify-center p-5">
                <h2 className="font-bold text-xl"> Post </h2>
                <p> lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description lorem ipsum description </p>
            </div>
        </div>
    )
}

export default Post