import Button from "./Button"

const Section1 = () =>{

    return(
        <section className="section1">
            <div className="flexC gap3 ">
                <div className="boldF fs2_3 flexC gap1_5">
                    <h1>Make your  </h1>
                    <h1>Celebrations</h1>
                    <h1>Unforgettable</h1>
                </div>
                <div className=" fs1_3 ">
                    <h6 className="cLd lightF">People trust us with their grandest celebrations.</h6>
                    <h6 className="cLd lightF">Sit back, let Outbox curate your occasion for you!</h6>
                </div>
                <Button text="Plan a Surprise" classArray="cD bgW pdi2 mediumF fs1 pdb0_5 minContent noLineBreak" />
            </div>
            <div className="boxImg1">
                <img src="/images/hero1.jpg" alt="" />
            </div>
        </section>
    )
}

export default Section1