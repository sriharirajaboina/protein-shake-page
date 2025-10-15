import React from "react"
import FlavorTitle from "../components/FlavorTitle"
const Flavor=()=>{
    return(
        <section className="flavor-section min-h-[100dvh] bg-[#faeade]">
            <div className="h-full flex lg:flex-row flex-col items-center relative">
                <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
                    <FlavorTitle/>
                </div>
            </div>
        </section>
    )
}

export default Flavor