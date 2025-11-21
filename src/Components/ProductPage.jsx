import { useParams } from "react-router-dom";
import useEvents from "../hooks/hook";
import Header from "./Header";
import FormSection from "./FormSection"
import Footer from "./Footer";
import "../ComStyles/ProductPage.css"
import ProductForm from "./ProductForm";
import { eventsList } from "./EventsPage";
const ProductPage = () =>{

    const {eventName} = useParams();
    // const { events, error, loading } = useEvents();
    // if (loading) return <p className="w100 h100 textC flex alignC justifyC fs2 regularF">Loading...</p>;
    // if (error) return <p className="w100 h100 textC flex alignC justifyC fs2 regularF">A network error was encountered</p>;

    const foundEvent = eventsList.find(event => event.eventname === eventName.split("-").join(" "));
    console.log(foundEvent)

    return(
        <div className="productPage regularF">
            <Header />
            <div className="flexC alignC justifyC gap1 pdb5">
                
                    
                <div className="flex alignC justifySb w100  pdb3 pdi3 " id="productNavigator">
                    <div className="translucent pointer flex alignC navigator">{"< "}Prev</div>
                    
                    <div className="translucent pointer flex alignC navigator">Next {'>'}</div>
                </div>
                
                <div className="productGrid gap2_5">
                    <div className="flexC gap3">
                        <div className="productImage"><img src={foundEvent.image} alt="" /></div>
                        <p className="eventDesc translucent">{foundEvent.description}</p>
                    </div>
                    <div className="flexC justifyS">
                        <div className="flexC gap1_5">
                            <h2 className="fs2_3 mediumF">{foundEvent.eventname}</h2>
                            {/* <div className="fs1_5 translucent">₹{foundEvent.startingfrom}</div> */}
                        </div>
                        <div className="flexC gap2 pdt4">
                            <div className="bB1W">
                                <div className="flex alignC justifySb fs1_2 ">
                                    <h4 >Inclusions:</h4>
                                    <div>-</div>
                                </div>
                                <ul className="flexC justifyC gap0 pdb1_5" style={{listStyle: "none"}}>
                                    {foundEvent.inclusion.map((inclus, index) => (
                                        <li className="fsOriginal  translucent"
                                        key={index}
                                        >
                                        {inclus}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {foundEvent.ttk ? (<div className="bB1W">
                                <div className="flex alignC justifySb fs1_2 ">
                                    <h4 >Things to know:</h4>
                                    <div>-</div>
                                </div>
                                <ul className="pdb1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                                    {foundEvent.ttk?.map((ttk, index) => (
                                        <li className="fs1 translucent"
                                        key={index}
                                        >
                                        {ttk}
                                        </li>
                                    ))}
                                </ul>
                            </div>): null}
                            {foundEvent.addons ? (<div className="bB1W">
                                <div className="flex alignC justifySb fs1_2 ">
                                    <h4 >Add ons:</h4>
                                    <div>-</div>
                                </div>
                                
                                <ul className="pdb1_5 flexC justifyC gap0" style={{listStyle: "none"}}>
                                    {foundEvent.addons?.map((addon, index) => (
                                        <li className="fs1 translucent"
                                        key={index}
                                        >
                                        {addon}
                                        </li>
                                    ))}
                                </ul>
                            </div>): null}
                        </div>
                        <div className="pdt4"><ProductForm /></div>
                        {/* <form action=""></form> */}
                    </div>
                </div>

            </div>
            <FormSection />
            <Footer />
        </div>
    )
}

export default ProductPage