import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Cart Items -{cartItems.length} items
      </h1>
      <button
        className="bg-green-200 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        {" "}
        Clear Cart{" "}
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
