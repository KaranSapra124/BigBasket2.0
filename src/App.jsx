import { useContext, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";
import IndividualPage from "./Components/Products/IndividualPage";
import searchContext from "./Components/utils/context";
function App() {
  const [searchInp, setSearchInp] = useState("");
  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Products />,
          path: "/products",
        },
        {
          element: <IndividualPage />,
          path: "/prodInfo",
        },
        {
          element: <AboutUs />,
          path: "/about",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
      ],
    },
  ]);
  return (
    <>
      <searchContext.Provider value={{searchInp,setSearchInp}}>
        <RouterProvider router={appRoutes} />
      </searchContext.Provider>
    </>
  );
}

export default App;
