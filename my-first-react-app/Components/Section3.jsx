import Button from "./Button"

const Section3 = () =>{

    return(
        <section className="section3">
            <div className="bgLd flexC gap1 justifyC">
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
            <div className="bgW">
                <div><img src="" alt="" /></div>
            </div>
        </section>
    )
}

export default Section3