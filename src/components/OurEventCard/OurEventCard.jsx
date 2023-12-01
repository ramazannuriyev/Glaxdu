import React from "react";
import "./OurEventCard.css";

const Card = ({ title, price, imgSrc, category }) => {
  return (
    <div class="card-event">
    <div className="img-container">
      <img src={imgSrc} class="card-img-top" alt="..." />
    </div>
    <div class="card-body-event mt-1">
      <h5 class="card-title">{title}</h5>
      <p class="card-text pt-1">{category}</p>
      <p class="card-price pt-0">{price}</p>
    </div>
  </div>
  );
};

export default Card;