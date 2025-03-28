import { EventCard1 } from "./EventCard"
import { Link } from "react-router-dom"

const CouplesEvents = ({eventArray}) =>{

    return(
        <div className="eventGrid gap1">
            {eventArray.map((item, index) => {
                return item.eventtype === "couple" ? (
                    <Link to={`/product-page/${item.eventname.split(" ").join("-")}`} key={index}>
                    <EventCard1 name={item.eventname} image={item.image} price={item.startingfrom} />
                    </Link>
                ) : null;
                })}
        </div>
    )
}

export default CouplesEvents