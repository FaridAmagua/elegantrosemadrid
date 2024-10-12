import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-700">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Sección de botones de sesión y registro */}
        <div className="flex md:order-2 space-x-3">
          <a
            href="#"
            className="text-white py-2 px-4  hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Inicio de sesión
          </a>
          <a
            href="#"
            className="text-white py-2 px-4  hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Registro
          </a>
        </div>

        {/* Botón del menú hamburguesa para móviles */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:flex md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 font-poppins text-white text-lg">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:hover:bg-transparent md:p-0"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:hover:bg-transparent md:p-0"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:hover:bg-transparent md:p-0"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
