import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Winex Real Estate</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">首页</a></li>
            <li><a href="#" className="hover:text-blue-600">房源</a></li>
            <li><a href="#" className="hover:text-blue-600">关于我们</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: 'url(/hero.jpg)'}}>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold text-white drop-shadow-md">
          探索您的理想家园
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg text-white mt-4">
          我们提供高品质房源，助您找到理想之所。
        </motion.p>
      </section>
      
      {/* 房源展示 */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">热门房源</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/house1.jpg" className="w-full h-48 object-cover" alt="房源1" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">现代公寓</h3>
              <p className="text-gray-600">$500,000 - 2卧2卫</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/house2.jpg" className="w-full h-48 object-cover" alt="房源2" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">湖景别墅</h3>
              <p className="text-gray-600">$850,000 - 4卧3卫</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 地图 */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">房源地图</h2>
        <MapContainer center={[-37.8136, 144.9631]} zoom={12} className="h-96 w-full rounded-lg shadow-lg">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-37.8136, 144.9631]}>
            <Popup>墨尔本市中心房源</Popup>
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
