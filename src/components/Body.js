import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_RESTAURANTLIST } from "../utils/constants";
import useonlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const WithPromotedLabel = withPromotedLabel(RestaurantCard);
  const {loggedinUser, setUsername}  = useContext(UserContext)

  
  const fetchData = async () => {
    const data = await fetch(CDN_RESTAURANTLIST);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("body:--", json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (<Shimmer/>)
  // }

  const onlineStatus = useonlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are not connected to internet!!</h1>;
  
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex m-4">
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
            className="search-btn mx-4 px-4 py-1 bg-sky-600 rounded-md"
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
          className="filter_btn mx-4 px-4 py-2 bg-green-200"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="mx-4 px-4 py-2">
          <label>Username: </label>
          <input className="border-black p-2" onChange={(e) => setUsername(e.target.value)} value={loggedinUser}></input>
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`} className="link">
            {
              restaurant.info.promoted ? <WithPromotedLabel resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
