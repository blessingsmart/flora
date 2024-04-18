import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Details = lazy(() => import("./pages/details"));
const ProductCategory = lazy(() => import("./pages/ProductCategory"));
const About = lazy(() => import("./pages/about"));


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
  {
    path: "/ProductCategory",
    element: (
      <React.Suspense>
        <ProductCategory />
      </React.Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <React.Suspense>
        <About />
      </React.Suspense>
    ),
  },
]);

export default BrowserRouter;
