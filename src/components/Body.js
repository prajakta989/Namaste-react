import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_RESTAURANTLIST } from "../utils/constants";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // 
  const fetchData = async () => {
    const data = await fetch(CDN_RESTAURANTLIST);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (<Shimmer/>)
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredData = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(listOfRestaurants);
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.data.id} to={`/restaurant/${restaurant.data.id}`} className="link">
            <RestaurantCard resData={restaurant}  />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
