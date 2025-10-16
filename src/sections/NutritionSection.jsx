import { nutrientLists } from "../constants"
import { useMediaQuery } from "react-responsive"
import {useEffect,useState} from "react"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"
import gsap from "gsap"
const NutritionSection = () =>{

    const isMobile=useMediaQuery({
        query:"(max-width:768px)",
    })

    const [lists,setLists]=useState(nutrientLists);

    useEffect(()=>{
        if(isMobile){
            setLists(nutrientLists.slice(0,3))
        }
        else{
            setLists(nutrientLists)
        }
    },[isMobile])

    useGSAP(()=>{

        const titleSplit=new SplitType(".nutrition-title",{
            type:"chars",
        });

        const contentTl=gsap.timeline({
            scrollTrigger:{
                trigger:".nutrition-section",
                start:"top center",
            },
        });

        contentTl.from(titleSplit.chars,{
            yPercent:100,
            stagger:0.02,
            ease:"power2.out",
        })
       

        const titleTl=gsap.timeline({
            scrollTrigger:{
                trigger:".nutrition-section",
                start:"top 80%",
            }
        });

        titleTl.to(".nutrition-text-scroll",{
            duration:1,
            opacity:1,
            clipPath:"polygon(100% 0, 0 0 , 0 100%, 100% 100%)",
            ease:"power1.inOut",
        })
    })
    return (
        <section className="nutrition-section min-h-[100dvh]
        2xl:h-[120dvh] overflow-hidden relative">
            <img src="images/slider-dip.png"
            className="w-full"
            />
            <img src="images/big-img.png"
            className="big-img w-full absolute 2xl:h-full md:h-2/3 h-1/2 
            left-0 bottom-0 object-bottom 2xl:object-content object-cover"/>
            <div className="flex md:flex-row flex-col justify-between md:px-10
            px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">
                     <div className="general-title 2xl:text-[8.5rem] md:text-8xl 
                     text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]
                     relative flex flex-col justify-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="nutrition-title 2xl:max-w-4xl xl:max-w-2xl
                            md:py-0 py-3 md:pb-5 pb-0 lg-pb-0 md:text-center text-[#513022]">
                                It still does
                            </h1>
                        </div>
                        <div style={{
                         clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",

                        }}
                        className="nutrition-text-scroll rotate-[-3deg] border-[.5vw] border-[#e3d3bc]
                        text-nowrap  md:-mt-34 -mt-24 -ml-130 md:ml-0 opacity-50 ">
                            <div className="bg-[#a26833] pb-5 md:pt-0 pt-3
                            md:px-5 px-3 inline-block">
                                 <h2 className="text-[#e3d3bc]">Body Good</h2>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="flex md:justify-center items-center -translate-y-5">
                    <div className="md:max-w-xs max-w-md mt-8 md:mt-0">
                        <p className="text-lg md:text-right text-balance font-paragraph">
                            Milk contains a wide array of nutrients,including vitamins,
                            minerals, and protein, and this is lactosefree
                        </p>
                    </div>
                </div>
                <div className="nutrition-box absolute md:bottom-16 bottom-5 w-full
                md:px-0 px-5">
                    <div className="list-wrapper bg-[#fdebd2] rounded-full border-[.5vw] 
                    border-[#e8ddca] mx-auto max-w-7xl md;py-8 py-5 md:px-0 px-5 flex 
                    items-center justify-between">
                        {lists.map((nutrient,index)=>(
                            <div key={index} className="relative flex-1
                            flex flex-col justify-center items-center">
                                <div className="paragraph-line">
                                    <p className="md:text-lg font-paragraph">
                                        {nutrient.label}
                                    </p>
                                    <p className=" font-paragraph text-sm mt-2">
                                        up to
                                    </p>
                                    <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                                        {nutrient.amount}
                                    </p>
                                </div>   
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionSection