import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import SplitType from "split-type"

const MessageSection = () =>{
  useGSAP(()=>{
    const firstmsg=new SplitType(".first-message",{
        type:"words",
    });

    const secondmsg=new SplitType(".second-message",{
        type:"words",
    });

    const paraSplit=new SplitType(".paragraph-line",{
        type:"words,lines",
        // linesClass:"paragraph-line"
    });

    gsap.to(firstmsg.words,{
        color:"#faeade",
        ease:"power1.in",
        stagger:1,
        scrollTrigger:{
            trigger:".message-content",
            start:"top center",
            end:"30% center",
            scrub:true,
        }
    });
     gsap.to(secondmsg.words,{
        color:"#faeade",
        ease:"power1.in",
        stagger:1,
        scrollTrigger:{
            trigger:".second-message",
            start:"top center",
            end:"bottom center",
            scrub:true,
        }
    });

    const revelTl=gsap.timeline({
        delay:1,
        scrollTrigger:{
            trigger:".msg-text-scroll",
            start:"top 60%",  
        }
    });

    revelTl.to(".msg-text-scroll",{
        duration:1,
        clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease:"circ.inOut",
    })

    const paragraphTl=gsap.timeline({
        scrollTrigger:{
            trigger:".message-content p",
            start:"top center",
        }
    })
    paragraphTl.from(paraSplit.words,{
        yPercent:300,
        rotate:3,
        ease:"power1.inOut",
        duration:1,
        stagger:0.02,
    })
  });
    return(
        <section className="message-content bg-[#7f3b2d] text-[#faeade] min-h-[100vdvh]
        overflow-hidden flex justify-center items-center relative z-20">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase
                    leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14">
                        <h1 className="first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center text-[#faeade10] leading-none">
                            Stir up your fearless past and
                        </h1>

                        <div className="msg-text-scroll rotate-[4deg] 2xl:translate-y-5
                            -translate-y-5 absolute z-10 border-[.7vw] border-[#7f3b2d]">
                            <div className="bg-[#e3a458] md:pb-5 px-5">
                                <h2 className="text-[#7f3b2d] leading-none">Fuel Up</h2>
                            </div>
                        </div>

                        <h1 className="second-message 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center text-[#faeade10] leading-none">
                            Your future with every gupl of Perfect Protein
                        </h1>
                    </div>

                    <div className="flex items-center justify-center flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p className="paragraph-line  overflow-hidden text-center font-paragraph">
                                 Rev up your rebel spirit and feed the adventure of life with
                                SPYLT, where you’re one chug away from epic nostalgia and
                                fearless fun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageSection