import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">Winex Real Estate</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Listings</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-200">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold text-gray-900 drop-shadow-md">
          Discover Your Dream Home
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg text-gray-700 mt-4">
          Browse top listings and find the perfect place to call home.
        </motion.p>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© 2025 Winex Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}
