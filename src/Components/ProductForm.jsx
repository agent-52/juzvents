import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios";

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
            }, 5000);

            console.log("Server Response:", response.data);

        } catch (error) {
            setMessage("Failed to send. Try again.");
            
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <p>Event: {eventName}</p> {/* Display event name */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>

            {/* Popup Modal */}
            {showPopup && (
                <div style={popupStyles}>
                    <div style={popupContentStyles}>
                        <button style={closeButtonStyles} onClick={() => setShowPopup(false)}>×</button>
                        <p>We will contact you soon!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;

const popupStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000"
};

const popupContentStyles = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
    textAlign: "center",
    minWidth: "300px"
};

const closeButtonStyles = {
    position: "absolute",
    top: "5px",
    right: "10px",
    fontSize: "18px",
    border: "none",
    background: "none",
    cursor: "pointer"
};