import Button from "./Button"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Section3 = () =>{
    useGSAP(() => {
        // gsap code here...
        gsap.to('.s2Img', { 
            
            xPercent: -8,
            scrollTrigger:{
                trigger: '.s2Img',
                start: "top 80%",
                end: "bottom 15%", 
                // markers: true,
                scrub: 2,
                // pin: true
            }
        });
})
    return(
        <section className="section3">
            <div className="flexC gap1 justifyC placeSelfC">
                <div><h5 className="lightF fs1 capital">client stories</h5></div>
                <div className="flexC gap2 w100">
                    <div className="fs2 flexC gap1 mediumF">
                        <h3>UK to Kolkata: A</h3>
                        <h3>proposal etched in</h3>
                        <h3>history</h3>
                    </div>
                    <p className="regularF fs1 mxW40">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dolorum doloribus totam praesentium, distinctio repellat at dolorem. Itaque, fugit aspernatur. Quis earum ipsa fugit voluptatum deleniti dicta unde in est?</p>
                    <Button text="Plan a Surprise" classArray="cD bgW pdi2 mediumF fs1 pdb0_5 minContent noLineBreak"/>
                </div>
            </div>
            <div className="bgLd  boxImage2">
                <div className="s3ImgBox"><img className="s2Img" src="/images/proposal2.jpg" alt="" /></div>
            </div>
        </section>
    )
}

export default Section3