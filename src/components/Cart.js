import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="text-center m-5 p-5">
            <h1 className="font-bold text-xl">Cart</h1>
            <div>
                <ItemList data={cartItems.card?.card}/>
            </div>
        </div>
    )
}

export default Cart;