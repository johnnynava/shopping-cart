import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Checkout from "./Content/Checkout/Checkout";
import ProductDetail from "./Content/ProductDetail/ProductDetail";
import Winter2079Collection from "./Content/Winter2079Collection/Winter2079Collection";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "checkout", element: <Checkout /> },
    { path: "product-detail", element: <ProductDetail /> },
    { path: "winter-2079-collection", element: <Winter2079Collection /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
