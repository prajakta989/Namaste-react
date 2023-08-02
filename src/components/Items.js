import CDN_URL from "../utils/constants";

const Items = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;

        return (
          <div key={id}>
            <div className="py-2 flex justify-between">
              {/* content */}
              <div className="w-8/12">
                <h3 className="font-bold">{name}</h3>XX
                <label className="text-sm py-2">
                  ₹{price ? price / 100 : defaultPrice / 100}
                </label>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
              {/* image */}
              <div className="w-4/12">
                <button className="absolute bg-white shadow-lg text-lime-600 border-lime-600 align-bottom mx-16 mb-8 px-6 py-1 rounded-md ">
                  <span className="text-sm">ADD</span>
                </button>
                <img src={CDN_URL + imageId} />
              </div>
            </div>
            <hr className=" border-dotted border-slate-500 border-b-1 my-4"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
