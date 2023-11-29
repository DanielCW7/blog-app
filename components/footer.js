import Link from "next/link"

const Footer = () => {
    return (
        <footer className="max-w-7xl m-auto py-10 px-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-5">
                <Link href="/"> Home </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>        
                <Link href="/admin"> Admin </Link>                        
            </div>
            <div className="flex flex-col gap-5">
                <Link href="https://github.com/DanielCW7" target="_blank"> Github </Link>
                <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177/"> Linkedin </Link>                
            </div>
            <div className="flex flex-col gap-5">
                <Link href="https://danielwilson.io" target="_blank"> DanielWilson.io </Link>
            </div>

        </footer>
    )
}

export default Footer