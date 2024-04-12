import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Details = lazy(() => import("./pages/details"));


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <React.Suspense>
        <Cart />
      </React.Suspense>
    ),
  },
  {
    path: "/details",
    element: (
      <React.Suspense>
        <Details />
      </React.Suspense>
    ),
  },
]);

export default BrowserRouter;
