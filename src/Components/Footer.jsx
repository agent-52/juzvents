import Button from "./Button"
import {Link} from "react-router-dom"

const Footer = () =>{

    return(
        <footer>
            <div className="pdb3 flexC justifyC alignC gap1">
                <h4 className="fs3 boldF">Follow Us</h4>
                <h5 className="fs1 regularF">@juzvents</h5>
            </div>
            {/* <div className="courseral">
                
            </div> */}
            <div>
                <div className="flexC alignC gap1_5">
                    <h2 className="boldF fs3">Surprises in your inbox</h2>
                    <h4 className="fs1 regularF">Join to get exclusive offers & discounts</h4>
                </div>
                <div className="flex justifyC alignC pdb5">
                    
                    
                        <input type="email"  placeholder="Email" className="emailBox"/>
                        <Button text="join" classArray="mediumF bgW cD pdi3 pdb0_7 fs1"/>
                    
                </div>
            </div>
            <div className="flex justifySe lightF pdb6 mgT2 bT1W">
                <div className="mxW30 flexC gap00">
                    <h4 className="mediumF fs1_5 pdB1">Shop</h4>
                    <Link>All Products</Link>
                    <Link>New Arrivals</Link>
                    <Link>Best Sellers</Link>
                    <Link>Open Air Dinner</Link>
                    <div>Perfect Proposals</div>
                </div>
                <div className="mxW30 flexC gap00">
                    <h4 className="mediumF fs1_5 pdB1">Address</h4>
                    <p className="mxW30"> Juzvents Floor 2nd, laxminagar sector-v Indore, Madhya Pradesh - 424005</p>
                    <div>
                        <div>Monday-Friday : 11am-5pm</div>
                        <div>Saturday: 11am-2pm</div>
                    </div>
                    
                </div>
                <div className="mxW30 flexC gap00">
                    <h4 className="mediumF fs1_5 pdB1">Policy</h4>
                    <Link>Terms and conditions</Link>
                    <Link>Payments and Refunds</Link>
                    <Link>Payment Methods</Link>
                    
                </div>
                <div className="mxW30">
                    <h4 className="mediumF fs1_5 pdB1">Customer Service</h4>
                    <div>Tel: 90738 98888/ 98749 62787</div>
                    <div>Email: juzvents@gmail.com</div>
                    <div className="flex alignC gap1 mgT2">
                        <div className="socialBox"><img src="/images/insta.png" alt="insta link of juzvents" /></div>
                        <div className="socialBox"><img src="/images/fb.png" alt="facebook link of juzvents" /></div>
                        <div className="socialBox"><img src="/images/yt.png" alt=" youtube link of juzvents" /></div> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;