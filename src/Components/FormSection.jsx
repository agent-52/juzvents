import Button from "../Components/Button"
import { useState } from "react"

const FormSection = () =>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [customMessage, setCustomMessage] = useState("")
    const sendWhatsAppMessage = () =>{
        let firstname = document.querySelector("#firstname").value.trim()
        let lastname = document.querySelector("#lastname").value.trim()
        let customMessage = document.querySelector("#customMessage").value.trim()
        let message = `Hello, ${firstname} this side. ${customMessage}, Looking forward to your response. Thank you!`;
        let phoneNumber = "+919244330496"; // Change this to your number
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

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
                <form  onSubmit={sendWhatsAppMessage} className="flexC gap1_5">
                    <h4 className="pdB2 fs2 mediumF">Connect with us</h4>
                    <div className="flex gap1_5 nameSection">
                        <div className="flexC gap0">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" className="input" value={firstname}  onChange={(firstname) => setFirstname(firstname.target.value)} id="firstname" required/>
                        </div>
                        <div className="flexC gap0">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="input" value={lastname}  onChange={(lastname) => setLastname(lastname.target.value)} id="lastname"/>
                        </div>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="input" value={email}  onChange={(email) => setEmail(email.target.value)} id="email"/>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="phone">Phone*</label>
                        <input type="tel" className="input" value={phone}  onChange={(phone) => setPhone(phone.target.value)} id="phone"/>
                    </div>
                    <div className="flexC gap0">
                        <label htmlFor="message">Write a message</label>
                        <textarea value={customMessage}  onChange={(customMessage) => setCustomMessage(customMessage.target.value)} id="customMessage"/>
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