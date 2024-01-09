import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartslice";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex item-center p-5 justify-between bg-orange-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold"> {cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-orange-700 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
}
