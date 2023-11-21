import Link from "next/link"

const Footer = () => {
    return (
        <footer className="max-w-7xl m-auto py-10 px-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-5">
                <Link href="/"> home </Link>
                <Link href="/about"> about </Link>
                <Link href="/contact"> contact </Link>                
            </div>
            <div className="flex flex-col gap-5">
                <Link href="/about"> Github </Link>
                <Link href="/contact"> Linkedin </Link>                
            </div>
            <div className="flex flex-col gap-5">
                <Link href="/"> DanielWilson.io </Link>
            </div>

        </footer>
    )
}

export default Footer