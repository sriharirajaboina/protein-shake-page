import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitType from "split-type"
const FlavorTitle =()=>{
    useGSAP(()=>{
        const firstSplit=new SplitType(".first-text-split h1",{
            type:"chars",
        })

        const secondSplit=new SplitType(".second-text-split h1",{
            type:"chars",
        })

        gsap.from(firstSplit.chars,{
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 30%",
            },
        });

        gsap.to(".flavor-text-scroll",{
            duration:1,
             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 60%"
            }
        });

        gsap.from(secondSplit.chars,{
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 1%",
            }
        })
    })
    return(
        <div className="general-title 2xl:text-[8.5rem] md:text-8xl text-5xl
        font-bold uppercase leading-[9vw] tracking-[-.35vw]
        flex flex-col justify-center items-center h-full
        2xl:gap-32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1 className="md:text-center text-[#523122]">We have 6</h1>
            </div>

            <div style={{}}
            className="flovor-text-scroll rotate-[-3deg] md:translate-y-5 border-[.5vw]
            border-[#faeade] absolute z-10">
                <div className="bg-[#a26833] pb-5 2xl:pt-0 py-3 2xl:px-5 px-3">
                    <h2 className="text-[#faeade]">freaking</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1 className="md:text-center">delicious flavour</h1>
            </div>
        </div>
    )
}

export default FlavorTitle