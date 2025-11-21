import "../ComStyles/Header.css"
import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import Schedule from "./Schedule";


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
        if(window.innerWidth>930){
            setHeaderType("pc")
            // console.log("viewing in a pc")
        }else{
            setHeaderType("mobile")
            // console.log("switched header to hamburger")
        }
        window.addEventListener("resize", () =>{
            if(window.innerWidth>930){
                setHeaderType("pc")
                // console.log("viewing in a pc")
            }else{
                setHeaderType("mobile")
                // console.log("switched header to hamburger")
            }
        })
    }, [headerType])
    if(headerType === "pc"){
        return(
        
            <header className="lightF fs1 noLineBreak bgLd pcHeader w100">
                <div>
                    <Link to={"/"}><div className="flex alignC">
                        <div className="logoContainer"><img src="/images/logo5.png" alt="" className="logoImg"/></div>
                        <div className="capital mediumF fs1_5">juzvents</div>
                    </div></Link>
                </div>
                <div className="flex  justifyC gap4 capital">
                    <Link to={"/events/all"}>all</Link>
                    <Link to={"/events/couple"}>for your partner</Link>
                    <Link to={"/events/family"}>for your family</Link>
                    <Link to={"/events/friends"}>for your friends</Link>
                    <Link>about us</Link>
                </div>
                <div className="flex justifyE">
                    <div ><img src="" alt="" /></div>
                    <Schedule />
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
                <div className="mobileHeaderDesc bgLd capital hidden fs2">
                    <Link to={"/"} onClick={handleDescVisibility}>Home</Link>
                    <Link to={"/events/couple"} onClick={handleDescVisibility}>for your partner</Link>
                    <Link to={"/events/family"} onClick={handleDescVisibility}>for your family</Link>
                    <Link to={"/events/friends"} onClick={handleDescVisibility}>for your friends</Link>
                    <Link onClick={handleDescVisibility}> about us</Link>
                </div>
            </header>
        )
    }
    
}

export default Header