import { createBrowserRouter } from "react-router-dom";

// import Home from "../pages/home/Home";
// import About from "../pages/About/About";
import { lazy, Suspense } from "react";
import App from "../App";
import Loading from "../components/Loading";
// const Layout = lazy(() => import("../pages/Auth/Layout/Layout"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const Profile = lazy(() => import("../pages/Auth/Profile"));
const Home = lazy(() => import("../pages/Home/Home"));
const All = lazy(() => import("../pages/Products/All"));
const Men = lazy(() => import("../pages/Products/Men"));
const Women = lazy(() => import("../pages/Products/Women"));
const Electronics = lazy(() => import("../pages/Products/Electronics"));
const Cart = lazy(() => import("../pages/Cart"));
const Search = lazy(() => import("../pages/Search"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const PersonalInfo = lazy(() => import("../pages/Checkout/PersonalInfo"));
const Shipping = lazy(() => import("../pages/Checkout/Shipping"));
const Payment = lazy(() => import("../pages/Checkout/Payment"));
const Success = lazy(() => import("../pages/Checkout/Success"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "all",
          element: (
            <Suspense fallback={<Loading />}>
              <All />
            </Suspense>
          ),
        },
        {
          path: "men",
          element: (
            <Suspense fallback={<Loading />}>
              <Men />
            </Suspense>
          ),
        },
        {
          path: "women",
          element: (
            <Suspense fallback={<Loading />}>
              <Women />
            </Suspense>
          ),
        },
        {
          path: "electronics",
          element: (
            <Suspense fallback={<Loading />}>
              <Electronics />
            </Suspense>
          ),
        },

        {
          path: "cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "product-details",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "personalInfo",
          element: (
            <Suspense fallback={<Loading />}>
              <PersonalInfo />
            </Suspense>
          ),
        },
        {
          path: "shipping",
          element: (
            <Suspense fallback={<Loading />}>
              <Shipping />
            </Suspense>
          ),
        },
        {
          path: "payment",
          element: (
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: "success",
          element: (
            <Suspense fallback={<Loading />}>
              <Success />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/auth",
      children: [
        {
          path: "login",
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "signup",
          element: (
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: "/Martian-Market" }
);

export default routes;
