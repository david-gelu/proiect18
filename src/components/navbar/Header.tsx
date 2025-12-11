import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="w-11/12 md:w-3/4 mx-auto flex justify-between items-center bg-yellow-100 md:flex-row flex-col">
      <Link to="/" className="flex items-center gap-2 hover:scale-110 transition-transform">
        <img src="/img/logo.png" alt="logo" className="w-12 h-12" />
      </Link>
      <ul className="w-full md:w-3/5 flex justify-end gap-6 flex-wrap md:flex-nowrap">
        <li>
          <Link
            to="/"
            className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;