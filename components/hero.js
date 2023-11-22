import background from "../images/hero.webp"
import Image from "next/image"

const Hero = (props) => {
    return (
        <header className="bg-filter">
            <Image alt="night sky" src={background} placeholder="blur" className="h-80 object-cover absolute bg-img blur-xs" />            
            <div className="max-w-7xl m-auto h-80 flex flex-col justify-center text-center">
                <h1 className="font-thin text-5xl text-center mb-2"> Daniel's Blog </h1>
                <p> Stay up to date with me! </p>
            </div>
        </header>
    )
}

export default Hero