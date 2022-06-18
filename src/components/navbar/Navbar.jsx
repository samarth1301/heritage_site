import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={"/"}
            >
              Our Heritage 
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex gap-4 flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="nav-item text-white">
               <Link to={"/login"}>
                Login
               </Link>
              </li>
              <li className="nav-item text-white">
               <Link to={"/signup"}>
                Sign Up
               </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}