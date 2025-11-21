import "../ComStyles/EventsPage.css"
import { useParams } from "react-router-dom"
import { createContext, useState } from "react"
import { Link } from "react-router-dom"
import FamilyEvents from "./FamilyEvents"
import Footer from "./Footer"
import AllEvents from "./AllEvents"
import CouplesEvents from "./CouplesEvents"
import FriendsEvents from "./FriendsEvents"
import Header from "./Header"
import useEvents from "../hooks/hook"
// import { createContext } from 'react';

let eventsList;
const EventsPage = () =>{
    const {name} = useParams();
    const { events, error, loading } = useEvents();
    console.log(events)
    const [activeIndex, setActiveIndex] = useState(null);
    eventsList = events;
    const options = ["All", "Couple", "Friends", "Family"];

    if (loading) return <p className="w100 h100 textC flex alignC justifyC fs2 regularF">...</p>;
    if (error) return <p className="w100 h100 textC flex alignC justifyC fs2 regularF">A network error was encountered</p>;
    console.log(events)

    return(
        <div className="eventsPage regularF">
            <Header />
            <div className="relative">
                <div className="bannerText cW boldF fs3 textC">Surprises</div>
                <div className="bannerImgContainer"><img src="/images/banner.png" alt="" /></div>
            </div>
            
            <div className="EventPageMainSection pdi4 mgT4 mgB4" id="EventPageMainSection">
                <div className="bT1W pd1_5">
                    <div className="flex alignC justifySb fs1_2 " id="categoryHeading">
                        <h4 >Category</h4>
                        <div>-</div>
                    </div>
                    <ul className="pdt1_5 flexC justifyC gap0 " id="categorySection" style={{listStyle: "none"}}>
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
                        <FamilyEvents eventArray={events}/>
                    ) : name === "couple" ? (
                        <CouplesEvents eventArray={events}/>
                    ) : name === "friends" ? (
                        <FriendsEvents eventArray={events}/>
                    ): null}
                </div>
            </div>
            <Footer />

            
        </div>
    )
}

export default EventsPage 
export {eventsList}