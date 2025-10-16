import React,{useRef} from "react"
import { cards } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const TestimonialSection=()=>{
    const vdRef=useRef([]);

    useGSAP(()=>{
        gsap.set(".testimonial-section",{
            marginTop:"-140vh"
        })

        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:".testimonial-section",
                start:"top bottom",
                end:"200% top",
                scrub:true,
            },
        });
         tl.to(".testimonial-section .first-title",{
            xpercent:70,
         })
         .to(".testimonial-section .sec-title",{
            xPercent:25,
         },"<")
         .to(".testimonial-section .third-title",{
            xPercent:-50,
         },"<")

         const pinTl=gsap.timeline({
            scrollTrigger:{
                trigger:".testimonial-section",
                start:"10% top",
                end:"200% top",
                scrub:1.5,
                pin:true,
            },
         });

         pinTl.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut",
         })
    })

    const handlePlay=(index)=>{
        const video = vdRef.current[index];
        video.play();
    }

    const handlePause=(index)=>{
        const video = vdRef.current[index];
        video.pause();
    }
    return(
        <section className="testimonial-section 
        bg-[#faeade] relative w-full h-[120dvh]">
            <div className="absolute size-full flex flex-col items-center
            pt-[5vw] ">
                <h1 className="first-title text-[#222123] 
                uppercase text-[15.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
                    What's
                </h1>
                <h1 className="sec-title text-[#e3a458] 
                uppercase text-[15.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
                    Everyone
                </h1>
                <h1 className="third-title text-[#222123] 
                uppercase text-[15.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
                    Talking
                </h1>
            </div>
            <div className="pin-box flex items-center justify-center 
            w-full ps-52  absolute 2xl:bottom-32 bottom-[50vh]">
                {cards.map((card,index)=>(
                    <div
                    key={index}
                    className={`vd-card md:w-96 w-80 flex-none md:rounded-[2vw] rounded-3xl 
                        -ms-44 overflow-hidden md:relative absolute border-[.5vw] border-[#faeade]
                    ${card.translation} ${card.rotation}`}
                    onMouseEnter={()=>handlePlay(index)}
                    onMouseLeave={()=>handlePause(index)}>
                        <video 
                        ref={(el)=>(vdRef.current[index]=el)}
                        src={card.src} playInline muted loop
                        className="size-full object-cover"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialSection