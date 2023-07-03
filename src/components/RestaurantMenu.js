import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CDN_URL from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>

      {cards.map((item, index) => {
        const { title, itemCards } = item?.card?.card;
        return (
          <div key={index}>
            <h3>{title}</h3>
              {itemCards?.map((item2) => {
                const { id, name, imageId,price, description } = item2?.card?.info;
                return (
                  <div key={id} className="menu-list">
                    <div className="menu-info">
                      <h3>{name}</h3>
                      <h5>Rs {price}</h5>
                      <span>{description}</span>
                    </div>
                    <div className="item-img">
                      <img src={CDN_URL + imageId} className="menu-item-img" />
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
