import background from "../images/hero.webp"
import Image from "next/image"

const Hero = (props) => {
    return (
        <header className="bg-filter">
            <Image alt="night sky" src={background} placeholder="blur" className="h-80 object-cover absolute bg-img blur-xs" />            
            <div className="max-w-7xl m-auto h-80 flex flex-col justify-center text-center">
                <h1 className="font-black text-5xl text-center mb-2 customH1"> Daniel&apos;s Blog </h1>
                {/* clip path text gradient for an interesting hero text - look for kapehe's sanity project for reference */}
            </div>
        </header>
    )
}

export default Hero