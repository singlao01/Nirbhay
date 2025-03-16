import React, { useState, useEffect } from "react";
import "../styles/LiveLocation.css";
function LiveLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        setError("Failed to retrieve location: " + err.message);
      }
    );
  }, []);

  return (
    <div>
      <h2>Live Location</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : location ? (
        <p>
          📍 Latitude: {location.latitude} <br />
          📍 Longitude: {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default LiveLocation;
