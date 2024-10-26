import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 min-h-20 flex flex-col justify-center">
        <nav className="flex space-x-4">
          <Link href="/" className="hover:bg-gray-700 rounded-md p-2">
            Home
          </Link>
          <Link
            href="/ColorPicker"
            className="hover:bg-gray-700 rounded-md p-2"
          >
            Color Picker
          </Link>
          <Link href="/Clock" className="hover:bg-gray-700 rounded-md p-2">
            Clock
          </Link>
          <Link href="/CuteCats" className="hover:bg-gray-700 rounded-md p-2">
            Cute Cats
          </Link>
          <Link href="/Weather" className="hover:bg-gray-700 rounded-md p-2">
            Weather
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Stellar Tools
      </footer>
    </div>
  );
};

export default Layout;
