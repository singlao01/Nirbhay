import React from "react";
import { Link } from "react-router-dom";
import EmergencyButton from "../components/EmergencyButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";

function Home() {
  // Sample News Data (Replace with API later)
  const newsArticles = [
    {
      title: "Government Launches New Women Safety Helpline",
      description: "A nationwide helpline is now available for women in distress.",
      link: "https://example.com/news1",
    },
    {
      title: "Self-Defense Classes Gain Popularity",
      description: "Many women are enrolling in free self-defense workshops.",
      link: "https://example.com/news2",
    },
    {
      title: "AI-Powered Safety Apps on the Rise",
      description: "Tech firms are creating apps for women's safety.",
      link: "https://example.com/news3",
    },
  ];

  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="title">निर्भय</h1>
          <h3 className="subtitle">Stand up, raise your voice</h3>
          <p className="description">
            Your personal safety companion for better security, anywhere and anytime.
          </p>
          <div className="button-group">
            <Link to="/register" className="btn btn-primary btn-large">
              Get Started
            </Link>
          </div>
        </div>
        {/* Centered Image */}
        <div className="hero-image"></div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚨</div>
          <h3>Emergency Alert</h3>
          <p>Quickly notify your trusted contacts with your location during emergencies.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📍</div>
          <h3>Live Location Sharing</h3>
          <p>Share your real-time location with family and friends while traveling alone.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📞</div>
          <h3>Emergency Contact</h3>
          <p>Stay in touch with a friend when traveling alone.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Safety Tips</h3>
          <p>Access self-defense techniques and essential safety guidelines.</p>
        </div>
      </div>

      {/* 🔥 News Carousel Section */}
      <div className="news-carousel">
        <h2>Latest News on Women's Safety</h2>
        <Slider {...settings}>
          {newsArticles.map((news, index) => (
            <div key={index} className="news-item">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Emergency Button */}
      <div className="emergency-btn-container">
        <EmergencyButton />
      </div>
    </div>
  );
}

export default Home;
