import Button from "./Button"
import { Link } from "react-router-dom"
const Section1 = () =>{

    return(
        <section className="section1">
            <div className="flexC gap3 section1Desc">
                <div className="boldF fs2_3 flexC gap1_5 s1Desc1">
                    <h1 className="noLineBreak">Tailored Events</h1>
                    <h1>For Every</h1>
                    <h1> Milestone</h1>
                </div>
                <div className=" fs1_3 ">
                    <h6 className="cLd lightF">People trust us with their grandest celebrations.</h6>
                    <h6 className="cLd lightF">Sit back, let Juzvents curate your occasion for you!</h6>
                </div>
                <Link to="/events/all"><Button text="Plan a Surprise" classArray="cD bgW pdi2 mediumF fs1 pdb0_5 minContent noLineBreak" /></Link>
            </div>
            <div className="boxImg1">
                <img src="/images/hero1.jpg" alt="" />
            </div>
        </section>
    )
}

export default Section1