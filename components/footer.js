import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-2 border-yellow-400">
            <Link href="/"> home </Link>
            <Link href="/about"> about </Link>
            <Link href="/contact"> contact </Link>
        </footer>
    )
}

export default Footer