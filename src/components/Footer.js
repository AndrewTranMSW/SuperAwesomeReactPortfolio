import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <h6 className="d-flex justify-content-center mt-4">
        Check out my Github and LinkedIn
      </h6>
      <footer className="">
        <div class="rounded-social-buttons">
          <a
            class="social-button linkedin"
            href="https://github.com/AndrewTranMSW"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="social-button linkedin"
            href="https://www.linkedin.com/in/andrewtranmsw/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
