// src/components/WasteManagement.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function WasteManagement() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function will run when the component mounts
    const fetchRequests = async () => {
      try {
        setLoading(true);
        // Notice the path includes both WasteWise and waste_management folders
        const response = await axios.get('/WasteWise/waste_management/api/get_requests.php');
        setRequests(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []); // Empty dependency array means this runs once when component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="waste-management">
      <h1>Waste Management Requests</h1>
      <div className="requests-list">
        {requests.length > 0 ? (
          requests.map(request => (
            <div key={request.id} className="request-item">
              <h3>{request.title || 'Unnamed Request'}</h3>
              <p>Status: {request.status || 'Unknown'}</p>
              <p>Location: {request.location || 'Not specified'}</p>
              <p>Submitted: {request.created_at || 'Unknown date'}</p>
            </div>
          ))
        ) : (
          <p>No waste management requests found.</p>
        )}
      </div>
    </div>
  );
}

export default WasteManagement;