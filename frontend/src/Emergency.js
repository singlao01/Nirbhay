import React from "react";

const Emergency = () => {
  const handleSOS = () => {
    alert("SOS Sent! Help is on the way.");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold">Emergency Alert</h2>
      <button onClick={handleSOS} className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg text-xl">
        🚨 Send SOS
      </button>
    </div>
  );
};

export default Emergency;
