import { Link } from "react-router-dom"
const Section2 = () =>{

    return(
        <section className="section2 flexC gap3">
            <h1 className="boldF fs3 capital textC s2H">your celebration deserves more</h1>
            <div className="section2Courseral">
                <Link to={"/events/friends"}>
                    <div className="boxImg1">
                        <img src="/images/4.jpg" alt="" className="blackImg"/>
                    </div>
                    <div className="flexC gap1 alignC tY15">
                        <h5 className="fs1 regularF capital">surprises</h5>
                        <div className="fs1_5 boldF capital flexC alignC gap0">
                            <h3>for your</h3>
                            <h3>friends</h3>   
                        </div>
                    </div>
                </Link>
                <Link to={"/events/couple"}>
                    <div className="boxImg1">
                        <img src="/images/proposal4.jpg" alt="" className="blackImg"/>
                    </div>
                    <div className="flexC gap1 alignC tY15">
                        <h5 className="fs1 regularF capital">surprises</h5>
                        <div className="fs1_5 boldF capital flexC alignC gap0">
                            <h3>for your</h3>
                            <h3>partner</h3>
                        </div>
                    </div>
                </Link>
                <Link to={"/events/family"}>
                    <div className="boxImg1">
                        <img src="/images/2.webp" alt="" className="blackImg"/>
                    </div>
                    <div className="flexC gap1 alignC tY15">
                        <h5 className="fs1 regularF capital">surprises</h5>
                        <div className="fs1_5 boldF capital flexC alignC gap0">
                            <h3>for your</h3>
                            <h3>family</h3>
                            
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Section2