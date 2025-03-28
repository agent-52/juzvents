
import { EventCard1 } from "./EventCard"

const AllEvents = ({eventArray}) =>{

    return(
        <div className="eventGrid gap1">
            {eventArray.map((item, index) => (<div key={index}><EventCard1 name={item.eventname} image={item.image} price={item.startingfrom}/></div>))}
        </div>
    )
}

export default AllEvents