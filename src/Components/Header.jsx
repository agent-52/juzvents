import "../ComStyles/Header.css"
import { Link } from "react-router-dom";
import Button from "./Button";


const Header = () =>{

    return(
        <header className="lightF fs1 noLineBreak bgLd">
            <div>
                <div className="flex alignC">
                    <div className="logoContainer"><img src="/images/logo5.png" alt="" className="logoImg"/></div>
                    <div className="capital mediumF fs1_5">juzvents</div>
                </div>
            </div>
            <div className="flex  justifyC gap4 capital">
                <Link>all</Link>
                <Link>for your partner</Link>
                <Link>for your occasions</Link>
                <Link>about us</Link>
            </div>
            <div className="flex justifyE">
                <div ><img src="" alt="" /></div>
                <Button text="Call us" classArray="mediumF bgW cD pdi2 pdb0_5 fs1" />
            </div>
        </header>
    )
}

export default Header