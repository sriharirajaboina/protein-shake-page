import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import SplitType from "split-type"


const HeroSection = () => {

  const isMobile=useMediaQuery({
    query:"(max-width:768px)"
  })

  const isTablet=useMediaQuery({
    query:"(max-width:1024px)"
  })
    useGSAP(()=>{
        const titleSplit=new SplitType(".hero-title",{
            type:"chars",
        });
        
        const tl=gsap.timeline({
            delay:1,
        });

        tl.to(".hero-content",{
            opacity:1,
            y:0,
            ease:"power1.inOut",
        })
        .to(".hero-text-scroll",{
            duration:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out",
        },"-=0.5")
        .from(titleSplit.chars,{
            yPercent:200,
            stagger:0.03,
            ease:"power2.out",
        });

        const heroTl=gsap.timeline({
            scrollTrigger:{
                trigger:".hero-container",
                start:"5% top",
                end:"bottom top",
                scrub:true,
            },
        });
        heroTl.to(".hero-container",{
            rotate:5,
            scale:0.9,
            yPercent:30,
            ease:"power1.inOut",
        })
    });
  return (
    <section className="bg-[#232224]">
      <div className="hero-container relative bg-[#faeade] w-screen h-[100dvh] overflow-hidden">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24">
          <div className="overflow-hidden ">
            <h1 className="hero-title text-[#523122] 2xl:text-[8.5rem] md:text-[6.5rem] 
            text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 mb-5">
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll rotate-[-3deg] mb-8 border-[.5vw] border-[#faeade]"
          >
            <div className="hero-subtitle bg-[#a26833] ">
              <h1 className="uppercase 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold text-[#faeade] 
              leading-[9vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-5 2xl:py-0 py-3">
                Protein + Caffeine
              </h1>
            </div>
          </div>
          <h2 className="font-paragraph text-[#523122] text-center md:max-w-lg 
          max-w-sm px-5 md:text-lg leading-[115%] mt-3">
            Live life to the fullest with SPYLT: Shatter boredom and embrace your
            inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero button md:mt-16 mt-10 text-dark-brown bg-[#e3a458] uppercase font-bold 
          text-lg rounded-full md:p-5 p-3 md:px-16 px-10">
            <p>Chug a SPYLT</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;