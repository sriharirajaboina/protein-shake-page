import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"

const FooterSection=()=>{
     
    const isMobile=useMediaQuery({
        query:"(max-width:768px)",
    })

    useGSAP(()=>{})
    return(
        <section className="footer-section 2xl:min-h-dvh 
        overflow-hidden relative bg-[#222123]">
            
            <img src="images/footer-dip.png"
            className="w-full object-cover -translate-y-1"/>
            <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh] ">
                <div className="overflow-hidden z-10">
                    <h1 className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold
                     uppercase leading-[9vw] tracking-[-.35vw] text-center text-[#faeade] py-5">
                        #CHUGRESPONSIBLY
                     </h1>
                </div>
                <div>
                    <video 
                    src="videos/splash.mp4" autoPlay playInline muted 
                    className="absolute top-0 object-contain mix-blend-lighten"/>
                    <div className="flex justify-center items-center gap-5 relative z-10 md:mt-20 mt-5">
                        <div className="social-btn border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 
                        flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                            <img src="images/yt.svg"/>
                        </div>
                        <div className="social-btn border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 
                        flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                            <img src="images/insta.svg"/>
                        </div>
                        <div className="social-btn border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 
                        flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                            <img src="images/tiktok.svg"/>
                        </div>
                    </div>
                </div>
                <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-[#faeade]
                font-paragraph md:text-lg font-medium">
                    <div className="flex items-center md:gap-16 gap-5">
                        <div>
                            <p>SPYLT Flavors</p>
                        </div>
                        <div>
                            <p>Chug Club</p>
                            <p>Student Marketing</p>
                            <p>Dairy Dealers</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Contact</p>
                            <p>Tasty Talk</p>
                        </div>
                        <div className="md:max-w-lg">
                            <p className="text-center">Get Exclusive Early Access and stay Informed<br/> 
                                Updates,events and More
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#d9d9d9]
                        py-5 md:mt-10">
                            <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full placeholder:font-sans placeholder:text-[#999999]
                             2xl:text-4xl text-3xl placeholder:font-bold placeholder:tracking-tighter"
                            />
                            <img src="images/arrow.svg"/>
                        </div>
                        <div className="copyright-box 2xl:absolute w-full md:px-10 px-5 py-7 bottom-0 
                        text-milk opacity-50 md:text-lg font-paragraph flex gap-7 md:flex-row flex-col-reverse 
                        md:justify-between justify-center items-center">
                            <p>Copyright 2025 spylt - All rights Reserved</p>
                            <div className="flex items-center gap-7">
                                <p className="text-center">Privacy policy</p>
                                <p>Terms of Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection