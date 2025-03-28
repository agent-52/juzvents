import { EventCard1 } from "./EventCard"
import { Link } from "react-router-dom"

const FamilyEvents = ({eventArray}) =>{

    return(
        <div className="eventGrid gap1">
            {eventArray.map((item, index) => {
                return item.eventtype === "family" ? (
                    <Link to={`/product-page/${item.eventname.split(" ").join("-")}`} key={index}>
                    <EventCard1 name={item.eventname} image={item.image} price={item.startingfrom} />
                    </Link>
                ) : null;
                })}
        </div>
    )
}

export default FamilyEvents