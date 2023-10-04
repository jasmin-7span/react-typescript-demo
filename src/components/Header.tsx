import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [tech, setTech] = useState<string>("typescript");

  return (
    <>
      <header className="flex justify-between items-center bg-blue-500 mx-auto px-10 py-4">
        <div>
          <h1 className="text-white">Vite-React-{tech}</h1>
        </div>
        <div>
          <ul className="flex items-center">
            <li>
              <NavLink className="text-white mr-4 text-lg" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white text-lg" to="/ProductForm">
                Product
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
