import React from "react";
import "../styles/Header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="d-flex justify-content-around">
          <div class="header">
            <Navigation />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
