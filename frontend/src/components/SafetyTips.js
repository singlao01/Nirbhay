import React, { useState } from "react";
import "../styles/SafetyTips.css";

function SafetyTips() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Tips" },
    { id: "outdoors", name: "Outdoors" },
    { id: "transport", name: "Transportation" },
    { id: "home", name: "At Home" }
  ];
  
  const tips = [
    { 
      id: 1, 
      category: "outdoors", 
      tip: "Always share your live location with a trusted contact when going out, especially at night." 
    },
    { 
      id: 2, 
      category: "transport", 
      tip: "When using ride-sharing services, always verify the driver's identity and car details before getting in." 
    },
    { 
      id: 3, 
      category: "outdoors", 
      tip: "Stay alert in your surroundings and avoid using headphones or being engrossed in your phone in isolated areas." 
    },
    { 
      id: 4, 
      category: "home", 
      tip: "Keep emergency contacts saved in your phone for quick access." 
    },
    { 
      id: 5, 
      category: "transport", 
      tip: "Avoid unknown areas late at night. If you must travel, stick to well-lit and populated areas." 
    },
    { 
      id: 6, 
      category: "home", 
      tip: "Ensure your home has proper locks and security systems. Always check doors and windows before sleeping." 
    }
  ];
  
  const filteredTips = activeCategory === "all" 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

  return (
    <div className="safety-container">
      <h2>Safety Tips</h2>
      
      <div className="safety-categories">
        {categories.map(category => (
          <div 
            key={category.id}
            className={`safety-category ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      
      {filteredTips.map(tip => (
        <div key={tip.id} className="safety-tip">
          <span className="safety-tip-number">{tip.id}</span>
          <strong>{categories.find(cat => cat.id === tip.category)?.name}:</strong>
          <p className="safety-tip-content">
            {tip.tip}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SafetyTips;