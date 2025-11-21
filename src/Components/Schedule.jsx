import { useEffect } from "react"
import Button from "./Button"
export default function Schedule(){
    useEffect(() =>{
        fetch("/api/book")
    })
    return(
        <div>
            <Button text="Schedule Call" classArray="mediumF bgW cD pdi2 pdb0_5 fs1" />
        </div>
    )
}