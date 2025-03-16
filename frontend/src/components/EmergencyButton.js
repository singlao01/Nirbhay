import React, { useState } from 'react';
import "../styles/EmergencyButton.css";

function EmergencyButton() {
  const [isActivated, setIsActivated] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  const handleEmergency = () => {
    // Start countdown to prevent accidental triggers
    setIsActivated(true);
    setCountdown(3);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          sendAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const cancelAlert = () => {
    setIsActivated(false);
    setCountdown(0);
  };
  
  const sendAlert = () => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const locationStr = `Lat: ${lat}, Lng: ${lng}`;
          
          // In a real app, this would send the alert to emergency contacts
          alert(`🚨 Emergency Alert Sent! Your current location (${locationStr}) has been shared with your emergency contacts.`);
          
          setIsActivated(false);
        },
        (error) => {
          alert("🚨 Emergency Alert Sent! (Unable to access location)");
          setIsActivated(false);
        }
      );
    } else {
      alert("🚨 Emergency Alert Sent! (Geolocation not supported)");
      setIsActivated(false);
    }
  };

  return (
    <div>
      {!isActivated ? (
        <button 
          onClick={handleEmergency} 
          className="emergency-button pulse"
        >
          🚨 Emergency Alert
        </button>
      ) : (
        <div className="emergency-countdown-container">
          <div className="emergency-countdown">
            <p>Sending alert in {countdown}...</p>
            <button onClick={cancelAlert} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmergencyButton;