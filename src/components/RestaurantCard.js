import CDN_URL from "../utils/constants";
import {useState} from 'react'

const RestaurantCard = ({ resData }) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5 className="ratings">{costForTwo / 100} for Two</h5>
        <span className="ratings">{avgRating}stars</span>
        <span className="del-time">{deliveryTime}Minutes</span>
      </div>
    );
  };

  export default RestaurantCard;