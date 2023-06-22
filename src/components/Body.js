import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";


const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState(resList);


    return (
      <div className="body">
        <div className="filter">
            <button className="filter_btn" onClick={() => {
              const filteredList = resList.filter((res) => res.data.avgRating > 4);
              setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="rest-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;