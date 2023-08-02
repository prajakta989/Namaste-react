import UserContext from "../utils/UserContext";
import CDN_URL from "../utils/constants";
import {useContext, useState} from 'react'

const RestaurantCard = ({ resData }) => {
  const {loggedinUser} = useContext(UserContext)
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      deliveryTime,
    } = resData?.info;
    return (
      <div className="rounded-lg w-60 p-5 mb-10 hover:bg-slate-100 shadow-sm">
        <img
          className="rounded-md"
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
        <h4>User: {loggedinUser}</h4>
      </div>
    );
  };

 export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
      return (
        <div>
          <label className="bg-stone-900 text-white m-2 p-2 rounded-2xl absolute">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;