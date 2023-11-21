import background from "../images/hero.webp"
import Image from "next/image"

const Hero = () => {
    return (
        <header className="">
            <Image alt="night sky" src={background} placeholder="blur" className="h-80 object-cover absolute bg-img" />            
            <div className="max-w-7xl m-auto h-80 flex flex-col justify-center">
                <h1 className="font-thin text-3xl text-center"> Connor's Blog </h1>
            </div>
        </header>
    )
}

export default Hero