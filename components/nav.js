import Link from "next/link"


const Nav = () => {
    return (
        <div className="shadow-xl bg-gray-900">
            <div className="h-12 max-w-7xl m-auto px-12">

                {/* mobile */}
                <div className="md:hidden">
                    test
                </div>

                {/* desktop */}
                <div className="hidden md:flex gap-10 h-full flex-row">
                    <Link href="/" className="flex flex-col justify-center"><span> Home </span></Link>
                    <Link href="/about" className="flex flex-col justify-center"><span> About </span></Link>                    
                    <Link href="/contact" className="flex flex-col justify-center"><span> Contact </span></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav