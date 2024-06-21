import React, { useState } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Form, Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigator = useNavigate();
  const searchMoviesKey = (e) => {
    e.preventDefault();
    navigator(`/search/${inputValue}`)
  }

  const deleteInput = () => {
    setInputValue("");
  }

  return (
    <nav className="flex item-center justify-between bg-black text-white px-10 py-4">
      <Link to={"/"}>
        <h1 className="text-5xl font-bold font-mono"><span className="text-red-600">UR</span>MV</h1>
      </Link>
      <div className="flex items-center space-x-3">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p className="text-xl font-medium">Popular</p>
        </NavLink>
        <NavLink
          to={"/upcoming"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p className="text-xl font-medium">Upcoming</p>
        </NavLink>
      </div>
      <Form className="flex items-center justify-center" onSubmit={searchMoviesKey}> 
        <div className="flex justify-between items-center">
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        { inputValue.length > 0 && <XCircleIcon className="w-6 h-6 cursor-pointer" onClick={deleteInput}/>}
        </div>
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </Form>
    </nav>
  );
};

export default NavBar;


