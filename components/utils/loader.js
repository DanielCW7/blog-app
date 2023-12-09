import spinner from "../../images/spinner.png"
import Image from "next/image"

const Loader = () => {
    return (
        <div>
            <div className="h-32 w-full flex flex-col">
                <Image alt="loading" src={spinner} width={50} height={50} className="animate-spin m-auto" />
            </div>
        </div>
    )
}

export default Loader