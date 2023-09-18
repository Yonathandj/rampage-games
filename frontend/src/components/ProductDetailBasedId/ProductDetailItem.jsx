import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

import { Button } from "flowbite-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ProductDetail.css";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

const ProductDetailItem = ({ loading, error, game }) => {
  const [cart, setCart] = useOutletContext();

  function handleAddToCart(game) {
    cart.filter((data) => data.id === game.id).length > 0
      ? console.log("already added")
      : setCart([...cart, game]);
  }

  const showSuccessToast = () => {
    toast.success("Success added to cart !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="font px-40 py-6">
      {loading || error ? (
        <ProductDetailSkeleton />
      ) : (
        game.map((x) => (
          <div key={x.id}>
            <section>
              <img
                src={x.background_image}
                alt={x.name}
                className="mx-auto rounded-lg shadow-lg"
              />
              <p className="flex gap-2 items-center mt-2 text-center text-slate-200">
                By:
                {x.publishers.map((publisher) => (
                  <span
                    key={publisher.id}
                    className="rounded-lg py-1 px-1 bg-slate-600"
                  >
                    {publisher.name}
                  </span>
                ))}
              </p>
            </section>
            <section className="mt-6">
              <h2 className="text-4xl font-medium text-slate-200">{x.name}</h2>
              <p className="text-lg font-normal my-2 text-slate-200">
                Description :
              </p>
              <p className="text-base text-justify font-normal text-slate-200">
                {x.description_raw}
              </p>
              <p className="text-base font-normal my-2 text-slate-200 flex gap-2 items-center">
                Genre :{" "}
                {x.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-lg px-2 py-1 bg-red-500"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
              <p className="text-base font-normal my-2 text-slate-200 flex gap-2 items-center">
                Store :{" "}
                {x.stores.map((store) => (
                  <span
                    key={store.id}
                    className="rounded-lg px-2 py-1 bg-red-500"
                  >
                    {store.store.name}
                  </span>
                ))}
              </p>
            </section>
            <section className="flex justify-end">
              {loading === false && (
                <Button
                  onClick={() => {
                    handleAddToCart(x);
                    showSuccessToast();
                  }}
                >
                  Add to Chart
                </Button>
              )}
              <ToastContainer />
            </section>
          </div>
        ))
      )}
    </div>
  );
};

ProductDetailItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  game: PropTypes.array,
};

export default ProductDetailItem;
