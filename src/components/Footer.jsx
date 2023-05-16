import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <h2 style={{ textAlign: "center" }}>Get touch with us</h2>
        <section className="footerSubcontainer">
          <article className="footer-items">
            {" "}
            <a href="https://www.instagram.com/tirumalesh1yadav/?hl=en">
              <i className="fa-brands fa-instagram"></i>
            </a>{" "}
          </article>
          <article className="footer-items">
            {" "}
            <a href="https://www.linkedin.com/in/tirumalesha-e-20589221a/">
              <i className="fa-brands fa-linkedin"></i>
            </a>{" "}
          </article>
          <article className="footer-items">
            {" "}
            <a href="https://github.com/tiru-2001">
              <i className="fa-brands fa-github"></i>
            </a>{" "}
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
