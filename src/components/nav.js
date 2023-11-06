import { useState } from "react"


const Nav = () => {

// toggle effect for movile nav here
const [toggleOpen, setOpen] = useState(false);

    return (
        // DT nav
        <div className="max-w-7xl m-auto pl-10 pr-10 pb-2 pt-2">
            <div className="text-right hidden lg:block">
                <span className="p-2"> Home </span>
                <span className="p-2"> About </span>
                <span className="p-2"> Contact </span>
            </div>

        {/* mobile nav */}
        
            <div className="lg:hidden">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    viewBox="0 0 512 351.67"
                    className="w-6"
                    onClick={() => setOpen(true)}
                >
                    <path fill-rule="nonzero" d="M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z"/>
                </svg> 

                <div>
                    <div className="fixed min-h-screen w-screen top-0 left-0 flex flex-col justify-center bg-gray-900">
                        <div className="text-2xl m-5 text-white"> Home </div>
                        <div className="text-2xl m-5 text-white"> About </div>
                        <div className="text-2xl m-5 text-white"> Contact </div>

                        <button className="text-white underline bottom-10 left-0 right-0 fixed" onClick={() => setOpen(false)}> close </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav