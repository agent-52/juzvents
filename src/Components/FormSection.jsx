import Button from "../Components/Button"

const FormSection = () =>{

    return(
        <section className="flex justifyC gap6 pdb6 pdt8 formSection">
            <div className="flexC gap2">
                <h5 className="capital lightF fs1">let's talk, shall we?</h5>
                <div className="boldF fs2_5 flexC gap1">
                    <h3>Want to plan</h3>
                    <h3>a surprise?</h3>
                </div>
            </div>
            <div>
                <form action="" method="post" className="flexC gap1_5">
                    <h4 className="pdB2 fs2 mediumF">Connect with us</h4>
                    <div className="flex gap1_5">
                        <div className="flexC gap0">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="input"/>
                        </div>
                        <div className="flexC gap0">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="input"/>
                        </div>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="email">Email*</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="phone">Phone*</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="message">Write a message</label>
                        <textarea />
                    </div>
                    <div className="pdb1 formButton">
                        <Button text="Submit" classArray="bgW cD fs1 regularF pdi3 pdb0_5 brR"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormSection;