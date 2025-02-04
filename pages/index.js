import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {
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
      <section className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative" style={{backgroundImage: 'url(/hero.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold text-white drop-shadow-md relative">
          Discover Your Dream Home
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg text-white mt-4 relative">
          Browse top listings and find the perfect place to call home.
        </motion.p>
      </section>
      
      {/* Featured Listings */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={`/house${index}.jpg`} className="w-full h-48 object-cover" alt={`House ${index}`} />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Modern Apartment {index}</h3>
                <p className="text-gray-600">$500,000 - 2 Beds, 2 Baths</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Map Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Property Locations</h2>
        <MapContainer center={[-37.8136, 144.9631]} zoom={12} className="h-96 w-full rounded-lg shadow-lg">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-37.8136, 144.9631]}>
            <Popup>Downtown Melbourne Property</Popup>
          </Marker>
        </MapContainer>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© 2025 Winex Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}
