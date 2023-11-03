import logo from '../logo.svg';

const Hero = () => {
    return (
        <header className="bg-cover h-96 min-h-full bg-sitting flex flex-col justify-center">
            <div className="h-full flex flex-col justify-center">
                <img src={logo} className="h-20" alt="logo" /><h1 className="text-4xl md:text-6xl text-white font-thin"> My Blog </h1>
            </div>
        </header>
    )
}

export default Hero