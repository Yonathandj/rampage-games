import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "../components/Container";
import Discover from "../components/Discover/Discover";
import Error from "../components/Error/Error";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        { index: true, element: <Discover /> },
        { path: "games", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
