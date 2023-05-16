import React from "react";
import "./moviecard.scss";

const Moviecard = ({ title, image, type, year }) => {
  return (
    <>
      <section className="card-container">
        <article className="image-container">
          <img className="imge" src={image} alt="" />
        </article>
        <article className="detail-container">
          <h2>{title}</h2>
          <h3>{type}</h3>
          <small>{year}</small>
        </article>
      </section>
    </>
  );
};

export default Moviecard;
