import { Link } from "gatsby";
import React, { useState } from "react";

interface ILayoutProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">My Portfolio</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
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
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">About</Link>
            <Link to="/projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Projects</Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Contact</Link>
          </div>
        )}
      </nav>
      <main className="flex-grow overflow-y-auto custom-scrollbar">
        {children}
      </main>
    </div>
  );
}
