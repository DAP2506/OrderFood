import React from "react";
import PropTypes from "prop-types";

const DishCardItem = ({ dish }) => {
  const { name, price, type } = dish;
  return (
    <div className="card grey lighten-3 ">
      <div className="card-content black-text">
        <span className="card-title">{name}</span>
        <blockquote style={{ fontSize: "1.2rem" }}>
          <p>
            Price:{" "}
            <span className="cyan-text text-lighten-1">Rs. {price}</span>
          </p>
          <p>{type}</p>
        </blockquote>
      </div>
    </div>
  );
};

DishCardItem.propTypes = {
  dish: PropTypes.object.isRequired
};

export default DishCardItem;
