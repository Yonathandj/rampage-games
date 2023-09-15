import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "../components/Container";
import Discover from "../components/Discover/Discover";
import Error from "../components/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [{ index: true, element: <Discover /> }],
      errorElement: <Error/>
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
