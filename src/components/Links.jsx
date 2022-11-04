import React from "react";
import LinksData from "../data";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <section id="links">
      {LinksData.map((link) => {
        const { id, text, url } = link;
        return (
          <a className="link" href={url} key={id} id={id}>
            {text}
          </a>
        );
      })}
      <Link to="/contact" className="link">
        <a  href="/contact"  id="contact">
          Contact Me
        </a>
      </Link>
    </section>
  );
};

export default Links;
