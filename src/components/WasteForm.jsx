import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react"


const WasteForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    waste_type: "",
    quantity: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ text: "", type: "" });
    
    try {
      const response = await axios.post(
        "http://localhost/waste_management/api/add_request.php",
        formData
      );
      if (response.data.success) {
        setMessage({ 
          text: "Waste collection request submitted successfully!", 
          type: "success" 
        });
        setFormData({ location: "", waste_type: "", quantity: "" });
      } else {
        setMessage({ 
          text: "Failed to submit request.", 
          type: "error" 
        });
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setMessage({ 
        text: "An error occurred while submitting your request.", 
        type: "error" 
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Predefined waste type options
  const wasteTypes = [
    "Plastic",
    "Paper",
    "Glass",
    "Metal",
    "Organic",
    "Electronic",
    "Hazardous",
    "Other"
  ];

  return (
    <motion.div
    initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
     className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden" id='WasteForm'>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Waste Data Collection</h2>
      
      {message.text && (
        <div className={`mb-4 px-4 py-3 rounded ${
          message.type === "success" 
            ? "bg-green-100 text-green-700 border border-green-400" 
            : "bg-red-100 text-red-700 border border-red-400"
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter pickup location"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="waste_type" className="block text-sm font-medium text-gray-700">
            Type of Waste:
          </label>
          <select
            id="waste_type"
            name="waste_type"
            value={formData.waste_type}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Select waste type</option>
            {wasteTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity (kg):
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="0.1"
            step="0.1"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter quantity in kg"
          />
        </div>
        
        <button
          type="submit"
          disabled={submitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            submitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Submit Request"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default WasteForm;