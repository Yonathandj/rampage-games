import { useOutletContext } from "react-router-dom";

import "./Cart.css";
import { Button } from "flowbite-react";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const totalPrice = cart.reduce((acc, game) => {
    return acc + parseInt(game.suggestions_count);
  }, 0);

  function handleDeleteFromCart(id) {
    setCart(cart.filter((games) => games.id !== id));
  }
  return (
    <div className="font min-h-screen bg-zinc-950">
      <div className="p-20 flex flex-col gap-6">
        <h2 className="text-center text-6xl font-semibold text-slate-200">
          Cart
        </h2>
        {cart.map((boughtedGame) => (
          <section key={boughtedGame.id} className="flex gap-6 w-[80%]">
            <section className="w-1/4">
              <img
                src={boughtedGame.background_image}
                alt={boughtedGame.name}
              />
            </section>
            <section className="w-3/4">
              <h2 className="text-2xl font-semibold text-slate-200">
                {boughtedGame.name}
              </h2>
              <p className="text-base font-medium text-slate-200">
                Price: {boughtedGame.suggestions_count}
              </p>
              <Button
                className="text-base bg-red-600"
                onClick={() => handleDeleteFromCart(boughtedGame.id)}
              >
                Delete from cart
              </Button>
            </section>
          </section>
        ))}
        <h2 className="text-4xl font-medium text-slate-200">
          Total Price: {totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
