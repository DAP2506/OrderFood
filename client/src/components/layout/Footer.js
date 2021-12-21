import React from "react";
import "./CSS/Footer.css"

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <div className="left">
          <h6>Copyright &copy; {new Date().getFullYear()}</h6>
        </div>
        <div className="right">
          <h5>
            Made by{" "}
            <a href="https://github.com/DAP2506/orderMeal" target="_blank">
              <span className="blue-text">Dhruv Panchal</span>
            </a>
          </h5>
            <a href="https://www.linkedin.com/in/dhruv-panchal-a61a51200/"  class="fa fa-linkedin"></a>
            <a href="https://github.com/DAP2506" class="fa fa-github"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
