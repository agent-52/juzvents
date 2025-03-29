import { useParams } from "react-router-dom";
import useEvents from "../hooks/hook";
import Header from "./Header";

const ProductPage = () =>{

    const {name} = useParams();
    const { events, error, loading } = useEvents();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    const foundEvent = events.find(event => event.eventname === name.split("-").join(" "));
    console.log(foundEvent)

    return(
        <div className="productPage regularF">
            <Header />
            
            <div>
                <div>
                    <div>{foundEvent.eventname}</div>
                    <div>
                        <button><span>{'<'} </span>Prev</button>
                        <div>|</div>
                        <button>Next <span>{'>'}</span></button>
                    </div>
                </div>
                <div className="productGrid">
                    <div>
                        <div><img src={foundEvent.image} alt="" /></div>
                        <p>{foundEvent.description}</p>
                    </div>
                    <div>
                        <div>
                            <h2>{foundEvent.eventname}</h2>
                            <div>₹{foundEvent.startingfrom}</div>
                        </div>
                        <div>
                            <div className="flex alignC justifySb fs1_2 ">
                                <h4 >Inclusions:</h4>
                                <div>-</div>
                            </div>
                            <ul className="pdt1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                                {foundEvent.inclusion.map((inclus, index) => (
                                    <li className="fs1 translucent"
                                    key={index}
                                    >
                                    {inclus}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex alignC justifySb fs1_2 ">
                                <h4 >Things to know:</h4>
                                <div>-</div>
                            </div>
                            <ul className="pdt1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                                {foundEvent.ttk.map((ttk, index) => (
                                    <li className="fs1 translucent"
                                    key={index}
                                    >
                                    {ttk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {foundEvent.addons ? (<div className="flex alignC justifySb fs1_2 ">
                                <h4 >Add ons:</h4>
                                <div>-</div>
                            </div>): null}
                            
                            <ul className="pdt1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                                {foundEvent.addons?.map((addon, index) => (
                                    <li className="fs1 translucent"
                                    key={index}
                                    >
                                    {addon}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form action=""></form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage