import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
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
          <div className="text-white font-bold text-xl">
            My Website
          </div>
          <div className="flex space-x-4">
            {links.map((elem) => (
              <Link
                key={elem.path}
                to={elem.path}
                className="text-white hover:text-gray-200"
              >
                {elem.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
