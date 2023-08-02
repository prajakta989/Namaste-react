import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CDN_URL from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const [expanditem, setExpandItem] = useState(0);
  const [showItem, setShowItem] = useState(false);
  const { resId } = useParams();

const toggle = (index) => {
  if(index === expanditem) setShowItem(!showItem)
}

  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const filteredCards = cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className="menu m-auto w-7/12 text-left">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="text-slate-500 text-sm">{cuisines.join(", ")}</p>
      <p className="text-slate-500 text-sm">{areaName}</p>
      <hr className=" border-dotted border-slate-500 border-b-1 my-4"></hr>

      
      {
        filteredCards.map((item, index) =>  <ItemList data={item?.card?.card} key={item?.card?.card?.title} showItems= {index === expanditem? true : false} setExpandItem={() => setExpandItem(index)}/>)
      }

    </div>
  );
};

export default RestaurantMenu;
