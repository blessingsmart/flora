import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Notification = lazy(() => import("./pages/notifications"));
const Flutter = lazy(() => import("./component/flutter"));
const Details = lazy(() => import("./pages/details"));
const ProductCategory = lazy(() => import("./pages/ProductCategory"));
const About = lazy(() => import("./pages/about"));
const Fresh = lazy(() => import("./pages/category/fresh-flower-bouquets"));
const Balloon = lazy(() => import("./pages/category/balloons"));
const Card = lazy(() => import("./pages/category/cards"));
const Chocolate = lazy(() => import("./pages/category/chocolates-valentine-gifts"));
const Fruit = lazy(() => import("./pages/category/fruit-baskets"));
const Plant = lazy(() => import("./pages/category/plants"));
const Bakery = lazy(() => import("./pages/category/the-plant-based-bakery"));
const Wine = lazy(() => import("./pages/category/wines"));
const Vase = lazy(() => import("./pages/category/vase"));
const Teddy = lazy(() => import("./pages/category/teddy-bears"));
const Contactus = lazy(() => import("./pages/contactus"));


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
  {
    path: "/fresh-flower-bouquets",
    element: (
      <React.Suspense>
        <Fresh/>
      </React.Suspense>
    ),
  },
  {
    path: "/balloons",
    element: (
      <React.Suspense>
        <Balloon />
      </React.Suspense>
    ),
  },
  {
    path: "/cards",
    element: (
      <React.Suspense>
        <Card />
      </React.Suspense>
    ),
  },
  {
    path: "/notification",
    element: (
      <React.Suspense>
        <Notification />
      </React.Suspense>
    ),
  },
  {
    path: "/flutter",
    element: (
      <React.Suspense>
        <Flutter />
      </React.Suspense>
    ),
  },
  {
    path: "/chocolates-valentine-gifts",
    element: (
      <React.Suspense>
        <Chocolate />
      </React.Suspense>
    ),
  },
  {
    path: "/fruit-baskets",
    element: (
      <React.Suspense>
        <Fruit />
      </React.Suspense>
    ),
  },
  {
    path: "/plants",
    element: (
      <React.Suspense>
        <Plant />
      </React.Suspense>
    ),
  },
  {
    path: "/teddy-bears",
    element: (
      <React.Suspense>
        <Teddy />
      </React.Suspense>
    ),
  },
  {
    path: "/the-plant-based-baskery",
    element: (
      <React.Suspense>
        <Bakery />
      </React.Suspense>
    ),
  },
  {
    path: "/wines",
    element: (
      <React.Suspense>
        <Wine />
      </React.Suspense>
    ),
  },
  {
    path: "/vase",
    element: (
      <React.Suspense>
        <Vase />
      </React.Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <React.Suspense>
        <Contactus />
      </React.Suspense>
    ),
  },
]);

export default BrowserRouter;
