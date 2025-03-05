import "../ComStyles/Header.css"
import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";


const Header = () =>{
    
    const [headerType, setHeaderType] = useState("pc")
    const [headerdescVisibility, setHeaderdescVisibility] = useState("hidden")
    const handleDescVisibility = () =>{
        const hamburger = document.querySelector(".cross")
        const mobileHeaderDesc = document.querySelector(".mobileHeaderDesc")
        if (mobileHeaderDesc.classList.contains("hidden")) {
            mobileHeaderDesc.classList.remove("hidden")
            hamburger.src = "/images/cross.png"
            hamburger.classList.add("hamburger")
        }else{
            mobileHeaderDesc.classList.add("hidden")
            hamburger.src = "/images/hamburger.png"
            hamburger.classList.remove("hamburger")
        }
    }
    useEffect(() =>{
        window.addEventListener("resize", () =>{
            if(window.innerWidth>930){
                setHeaderType("pc")
                console.log("viewing in a pc")
            }else{
                setHeaderType("mobile")
                console.log("switched header to hamburger")
            }
        })
    }, [headerType])
    if(headerType === "pc"){
        return(
        
            <header className="lightF fs1 noLineBreak bgLd pcHeader">
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
    }else{
        return(
        
            <header className="lightF fs1 noLineBreak bgLd mobileHeader flex alignC justifySb pdi0 w100">
                <div className="flex alignC">
                    <div className="logoContainer"><img src="/images/logo5.png" alt="" className="logoImg"/></div>
                    <div className="capital mediumF fs1_5">juzvents</div>
                </div>
                <div><img src="/images/hamburger.png" alt="" className="cross" onClick={handleDescVisibility}/></div>
                <div className="mobileHeaderDesc bgLd capital hidden fs1_5">
                    <Link>Home</Link>
                    <Link>for your partner</Link>
                    <Link>for your occasions</Link>
                    <Link>about us</Link>
                </div>
            </header>
        )
    }
    
}

export default Header