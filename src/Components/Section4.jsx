// import {img1} from "../public/images/1.jpg"
import "../ComStyles/Section4.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Section4 = () =>{
    useGSAP(() => {
        // gsap code here...
        const tl = gsap.timeline()
        tl.to('.splitCard1', { 
            scale: 0.7,
            opacity: 0,
            scrollTrigger:{
                trigger: '.splitCard1',
                start: "top 5%",
                end: "bottom 15%", 
                
                scrub: 1,
                invalidateOnRefresh: true,
                // pin: true
            }
        }); // <-- automatically reverted
        tl.to('.splitCard2', { 
            scale: 0.7,
            opacity: 0,
            scrollTrigger:{
                trigger: '.splitCard2',
                start: "top 5%",
                end: "bottom 15%", 
                
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });
        tl.to('.splitCard3', { 
            scale: 0.7,
            opacity: 0,
            scrollTrigger:{
                trigger: '.splitCard3',
                start: "top 5%",
                end: "bottom 15%", 
                
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });
    }); 

    return(
        <section>
            <h3 className="boldF fs3 capital textC pdb2 pdt4">your memories. handicrafted for you</h3>
            <div className="flexC gap alignC fs2 lightF pdB2 textC">
                <h6>We take care of all the ideation, planning, and execution, so you can focus on </h6>
                <h6>celebrating your big day!</h6>
            </div>
            <div className="splitCards splitCard1">
                <div className="imgBox">
                    <img src="/images/1.jpg" alt="" className="blackImg"/>
                </div>
                <div className="flexC gap1_5 splitCard1Content">
                    <h6 className="lightF fs1">Step 1</h6>
                    <h4 className="mediumF fs1_8 mxW30">You have a surprise to plan!</h4>
                    <p className="mxW30 regularF fs1_2">We hop on a call with you to understand your occasion, tastes, the vibe you're going for, etc.</p>

                </div>
            </div>
            <div className="splitCards splitCard2">
                <div className="imgBox">
                    <img src="/images/8.webp" alt="" className="blackImg"/>
                </div>
                <div className="flexC gap1_5 splitCard2Content">
                    <h6 className="lightF fs1">Step 2</h6>
                    <h4 className="mediumF fs1_8 mxW30"> Haute couture - we curate unique celebrations for every client</h4>
                    <p className="mxW30 regularF fs1_2">With details in hand, we get to planning an experience tailor-made for your tastes.
                    Next: we come back to you with a set of curations.</p>

                </div>
            </div>
            <div className="splitCards splitCard3">
                <div className="imgBox">
                    <img src="/images/10.jpg" alt="" className="blackImg"/>
                </div>
                <div className="flexC gap1_5 splitCard3Content">
                    <h6 className="lightF fs1">Step 3</h6>
                    <h4 className="mediumF fs1_8 mxW30">Sit back, enjoy, make memories</h4>
                    <p className="mxW30 regularF fs1_2">Your big day shouldn’t be spent in coordinating with vendors, planners, etc. Enjoy your big day fully and watch us set it up for you. </p>

                </div>
            </div>
        </section>
    )
}

export default Section4