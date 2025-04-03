import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios";
import "../ComStyles/ProductForm.css"

const ProductForm = () => {
    const { eventName } = useParams(); // Get event name from URL
    const [formData, setFormData] = useState({ name: "", phoneNumber: "" });
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", { ...formData, eventName });
        setMessage("Sending...");

        try {
            const response = await axios.post("https://extensive-erda-alivedevs-0efdb804.koyeb.app/send-email", {
                ...formData,
                eventName, // Include event name in request
            });

            setMessage(response.data.message);
            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
            }, 4000);

            console.log("Server Response:", response.data);

        } catch (error) {
            setMessage("Failed to send. Try again.");
            
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit} className="flexC gap1_5">
                <div className="flex wrap gap1_5 ">
                    <input className="fs1 pdb0 mediumF"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input className="fs1 pdb0 mediumF"
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="cD bgW pdi2 mediumF fs1 pdb0_5 minContent noLineBreak">Request a Call Back</button>
            </form>
            {/* <p>{message}</p> */}

            {/* Popup Modal */}
            {showPopup && (
                <div className="popupStyles bgLd cW ">
                    <div className="popupContentStyles">
                        <button className="closeButtonStyles fs2 boldF" onClick={() => setShowPopup(false)}>×</button>
                        <h1>We will contact you soon!🥳</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;

