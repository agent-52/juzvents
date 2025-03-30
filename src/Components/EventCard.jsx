import "../ComStyles/EventsPage.css"

const EventCard1 = ({image, name, price}) =>{

    return(
        <div className="eventCard1 regularF">
            <div className="eventCardImgContainer card1"><img src={image} alt="" /></div>
            <div className="pdi1 pdb1 flexC gap0 alignC">
                <h3 className="fs1_5 tWrap">{name}</h3>
                <div>₹{price}</div>
            </div>
        </div>
    )
}

const EventCard2 = ({name, image, price}) =>{

    return(
        <div className="eventCard2">
            <div className="eventCardImgContainer card2"><img src={image} alt="" /></div>
            <div className="pdb0_7 flexC alignC textC justifyC">
                <div className="fs1_3 tWrap">{name}</div>
                <div className="translucent">{price}</div>
            </div>
        </div>
    )
}

export {EventCard1, EventCard2}