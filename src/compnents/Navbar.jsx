import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact");
    home.addEventListener("click", () => {
        document.getElementById("about").style.removeProperty("background-color")
        document.getElementById("services").style.removeProperty("background-color")
        document.getElementById("contact").style.removeProperty("background-color")
        document.getElementById("home").style.backgroundColor = "red";
    });
    about.addEventListener("click", () => {
      document.getElementById("home").style.removeProperty("background-color");
      document.getElementById("services").style.removeProperty("background-color");
      document.getElementById("contact").style.removeProperty("background-color");
      document.getElementById("about").style.backgroundColor = "red";
    });
    services.addEventListener("click", () => {
      document.getElementById("home").style.removeProperty("background-color");
      document.getElementById("about").style.removeProperty("background-color");
      document.getElementById("contact").style.removeProperty("background-color");
      document.getElementById("services").style.backgroundColor = "red";
    });
    contact.addEventListener("click", () => {
      document.getElementById("home").style.removeProperty("background-color");
      document.getElementById("services").style.removeProperty("background-color");
      document.getElementById("about").style.removeProperty("background-color");
      document.getElementById("contact").style.backgroundColor = "red";
    });
  }, []);
  return (
    <div className=".boody">
      <nav>
        <Link to="/dashbord" id="home">
          Home
        </Link>
        <Link to="/student" id="about">
        student
        </Link>
        <Link href="#services" id="services">
          Services
        </Link>
        <Link href="#contact" id="contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
