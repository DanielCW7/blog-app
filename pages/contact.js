import github from "../images/icons/githubIcon.svg";
import linkedIn from "../images/icons/linkedInIcon.svg";
import react from "../images/icons/ReactIcon.svg";
import Image from "next/image"

const Contact = () => {
    return (
        <div className="max-w-7xl text-black m-auto p-10 text-center">
            <p> You can find me on LinkedIn, Github, or contact me through my portfolio page.
            </p>
            <div className="my-10 flex flex-col md:flex-row justify-center gap-10">
                {/* icons with links */}
                <div className="flex flex-col gap-5 justify-between">
                    <Image src={github.src} width={100} height={100} className="socials" />
                    <p> Github </p>
                </div>
                <div className="flex flex-col gap-5 justify-between">
                    <Image src={linkedIn.src} width={100} height={100} className="socials" />
                    <p> LinkedIn </p>
                </div>
                <div className="flex flex-col gap-5 justify-between">
                    <Image src={react.src} width={100} height={100} className="socials" />
                    <p> Portfolio Site </p>
                </div>              
            </div>
        </div>    
    )
}

export default Contact