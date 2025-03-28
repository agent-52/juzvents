import "../ComStyles/EventsPage.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import FamilyEvents from "./FamilyEvents"
import Footer from "./Footer"
import AllEvents from "./AllEvents"
import CouplesEvents from "./CouplesEvents"
import FriendsEvents from "./FriendsEvents"
import Header from "./Header"
import useEvents from "../hooks/hook"

const EventsPage = () =>{
    const {name} = useParams();
    const { events, error, loading } = useEvents();
    const [activeIndex, setActiveIndex] = useState(null);

    const options = ["All", "Couple", "Friends", "Family"];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;
    console.log(events)

    return(
        <div className="eventsPage regularF">
            <Header />
            <div className="relative">
                <div className="bannerText cW boldF fs3">All Surprises</div>
                <div className="bannerImgContainer"><img src="/images/banner.png" alt="" /></div>
            </div>
            
            <div className="EventPageMainSection pdi4 mgT4 mgB4">
                <div className="bTB1w pd1_5">
                    <div className="flex alignC justifySb fs1_2 ">
                        <h4 >Category</h4>
                        <div>-</div>
                    </div>
                    <ul className="pdt1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                        {options.map((item, index) => (
                            <Link to={`/events/${item.toLowerCase()}`}><li className="fs1 translucent"
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{ fontWeight: activeIndex === index ? "bold" : "normal", cursor: "pointer" }}
                            >
                            {item}
                            </li></Link>
                        ))}
                    </ul>
                    
                </div>
                <div>
                        {name === "all" ? (
                        <AllEvents eventArray={events}/>
                    ) : name === "family" ? (
                        <FamilyEvents />
                    ) : name === "couples" ? (
                        <CouplesEvents />
                    ) : name === "friends" ? (
                        <FriendsEvents />
                    ): null}
                </div>
            </div>
            <Footer />

            
        </div>
    )
}

export default EventsPage