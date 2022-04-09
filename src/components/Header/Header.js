import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import Fade from "react-reveal/Fade";
import useFirebase from "../../Hooks/useFirebase/useFirebase";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const items = [
    { name: "Home", to: "/" },
    { name: "My Orders", to: "/myorders" },
    { name: "Manage All Orders", to: "/manageallorders" },
    { name: "Add New Product", to: "/addproduct" },
    { name: "About", to: "/aboutus" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blog" },
  ];
  const { logout, user } = useFirebase();
  // Logout
  const handleLogOut = () => {
    logout();
    console.log("click");
  };

  return (
    <header className="z-50  my-5 mx-5">
      <div className="container lg:pb-0 text-lg font-semibold text-gray-800">
        <div className="flex gap-x-4 justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <h1 className="self-center text-2xl font-semibold">Foodizone</h1>
            </div>
          </Link>

          {/*========== dynamic icon ==========*/}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 border-2 border-green-500 focus:ring-4 ring-offset-1 ring-green-200 transition duration-500 rounded-lg"
          >
            {mobileMenu ? (
              <VscChromeClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-x-5">
            <nav className="flex items-center gap-x-5">
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/"
              >
                <h1>Home</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/aboutus"
              >
                <h1>About Us</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/myorders"
              >
                <h1>My Orders</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/addproduct"
              >
                <h1>Add New Product</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/manageallorders"
              >
                <h1>Manage All Orders</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/blog"
              >
                <h1>Blog</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/contact"
              >
                <h1>Contact</h1>
              </NavLink>
            </nav>

            <div>
              <div className="flex gap-x-2">
                {!user?.email ? (
                  <Link to="/login">
                    <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">
                      Login
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={handleLogOut}
                    className="font-semibold px-6 py-2 rounded-full border-2 border-red-600 hover:bg-red-700 hover:text-white focus:ring-4 ring-red-200 ring-offset-1 transition duration-500"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*============== mobile menu =============*/}

        {mobileMenu && (
          <Fade left>
            <div className="lg:hidden flex flex-col">
              {items?.map((item, index) => (
                <NavLink
                  className={(info) =>
                    info.isActive
                      ? "text-green-600 font-bold border-b-2 border-green-600"
                      : ""
                  }
                  key={index}
                  to={item?.to}
                >
                  <h1 className="px-2 py-2">{item?.name}</h1>
                </NavLink>
              ))}
              <div>
                <div className="flex gap-x-2">
                  <Link>
                    <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500 mt-3 mb-5">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </header>
  );
};

export default Navbar;
