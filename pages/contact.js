import github from "../images/icons/githubIcon.svg";
import linkedIn from "../images/icons/linkedInIcon.svg";
import react from "../images/icons/ReactIcon.svg";
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="max-w-7xl text-black m-auto p-10 text-center">
            <p> You can find me on LinkedIn, Github, or contact me through my portfolio page.
            </p>
            <div className="my-10 flex flex-col md:flex-row justify-center gap-3">
                {/* icons with links */}
                <Link href="https://github.com/DanielCW7" target="_blank">
                    <div className="flex flex-row justify-center gap-2 border-2 rounded px-5 py-2 w-64 mx-auto md:mx-0 md:my-auto">
                        <Image src={github.src} width={30} height={30} className="" />
                        <p className="my-auto"> Github </p>
                    </div>                
                </Link>

                <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177/" target="_blank">
                    <div className="flex flex-row justify-center gap-2 border-2 rounded px-5 py-2 w-64 mx-auto md:mx-0 md:my-auto">
                        <Image src={linkedIn.src} width={30} height={30} className="" />
                        <p className="my-auto"> LinkedIn </p>
                    </div>
                </Link>

                <Link href="https://danielwilson.io" target="_blank">
                    <div className="flex flex-row justify-center gap-2 border-2 rounded px-5 py-2 w-64 mx-auto md:mx-0 md:my-auto">
                        <Image src={react.src} width={30} height={30} className="" />
                        <p className="my-auto"> Portfolio site </p>
                    </div>
                </Link>
            </div>
        </div>    
    )
}

export default Contact