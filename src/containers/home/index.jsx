import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadResume = () => {
    // Replace the following link with your actual resume link
    const resumeLink = "https://resume.io/r/Zvw9YRCCd";
    window.open(resumeLink, "_blank");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Debmalya
          <br />
          Passionate Web Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button
            className="home__hire-me-button"
            onClick={handleNavigateToContactMePage}
          >
            Contact Me
          </button>
          <button
            className="home__download-resume-button"
            onClick={handleDownloadResume}
          >
            View Resume
          </button>
          <div className="home__social-links">
            <a
              href="https://www.linkedin.com/in/debmalya-mukherjee-0a1b31253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://instagram.com/debmalya_2003?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/debmalya2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
