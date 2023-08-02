import { useState } from "react";
import Items from "./Items";

const ItemList = ({ data, showItems, setExpandItem }) => {
  const { title, itemCards } = data;
  
  const handleClick = () => {
    setExpandItem()
  }
  return (
    <div>
      {/*  accordion header */}
          <div key={title} onClick={handleClick}>
            <div className="flex justify-between py-2 cursor-pointer" >
              <div>
                <span className="text-base font-extrabold text-slate-800">
                  {title}
                </span>
                <span className="text-base font-extrabold text-slate-800">
                  ({itemCards.length})
                </span>
              </div>

              <div>
                <p>⬇️</p>
              </div>
            </div>

            {/* accordion body */}
            {
              showItems && <Items itemCards = {itemCards}/>
            }
            
          </div>
    </div>
  );
};

export default ItemList;
