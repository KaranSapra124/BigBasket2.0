import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import searchContext from "./utils/context";

const Navbar = () => {
  const searchCont = useContext(searchContext);
  const { searchInp, setSearchInp } = searchCont;
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Product",
      path: "/products",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Cart",
      path: "/cart",
    },
  ];
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Big Basket 2.0</div>
          <div className="flex space-x-4 items-center">
            {links.map((elem) => (
              <Link
                key={elem.path}
                to={elem.path}
                className="text-white hover:text-gray-200"
              >
                {elem.title}
              </Link>
            ))}
            <input
              type="text"
              placeholder="Enter the search.."
              className="p-2"
              value={searchInp}
              onChange={(e) => {
                setSearchInp(e.target.value);
              }}
            />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
