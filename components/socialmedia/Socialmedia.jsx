import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  const platforms = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/ugwu ugochukwu",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      link: "https://github.com/"//github.com/richycandeveloper/richycandeveloper,
    },
    {
      name: "twitter",
      icon: "fab fa-twitter",
      link: "https://whatsapp.com/@ugwuugochu29689",
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/@ugwuugochu29689",
    },
    {
      name: "Whatsapp",
      icon: "fab fa-instagram",
      link: "https://www.whatsapp.com/09160950094",
    },
  ];

  return (
    <section className="social-media" id="social-media">
      <div className="container">
        <h2>Connect with <span>Me</span></h2>
        <p>Stay connected through my social media profiles. Feel free to follow, connect, or reach out!</p>
        <div className="social-icons">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={platform.name}
            >
              <i className={platform.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
