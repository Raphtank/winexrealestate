import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50 transition duration-300">
        <h1 className="text-2xl font-bold">Winex Real Estate</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#listings" className="hover:text-blue-600">Listings</a></li>
            <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative" style={{backgroundImage: 'url(/hero.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-bold text-white drop-shadow-md relative">
          Discover Your Dream Home
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg text-white mt-4 relative">
          Browse top listings and find the perfect place to call home.
        </motion.p>
        <motion.a href="#listings" className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          View Listings
        </motion.a>
      </section>
      
      {/* Featured Listings - Swiper */}
      <section id="listings" className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Featured Listings</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <SwiperSlide key={index}>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={`/house${index}.jpg`} className="w-full h-60 object-cover" alt={`House ${index}`} />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">Luxury Apartment {index}</h3>
                  <p className="text-gray-600">$500,000 - 2 Beds, 2 Baths</p>
                  <a href="#" className="text-blue-600 hover:underline">View Details</a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-4xl font-semibold">Find Your Perfect Home Today</h2>
        <p className="mt-4 text-lg">Contact us to schedule a viewing or get more information.</p>
        <a href="#contact" className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition inline-block">Get in Touch</a>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© 2025 Winex Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}
