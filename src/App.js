import * as React from "react";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignupPage from "./Pages/SignupPage";
import Cart from "./features/cart/Cart";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import ProductOverview from "./Pages/ProductOverview";
import ProductsDetail from "./features/Products/components/ProductsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-details",
    element: <ProductsDetail />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
