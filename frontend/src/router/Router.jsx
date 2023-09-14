import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "../components/Container";
import Discover from "../components/Discover/Discover";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [{ index: true, element: <Discover /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
