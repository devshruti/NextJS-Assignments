import Link from "next/link";
import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-gray-300 hover:text-white text-lg font-semibold">Home</p>
        </Link>
          <Link href="/contact">
            <p className="text-gray-300 text-lg font-semibold hover:text-white">Contact</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-300 text-lg font-semibold hover:text-white">About</p>
          </Link>
      </div>
    </nav>
    )
}

export default Navbar;