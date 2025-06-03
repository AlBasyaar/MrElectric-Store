import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-left text-white bg-blue-600"
      
    >
      {/* Overlay gelap supaya teks terlihat jelas */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Selamat Datang di Toko <span className='text-yellow-400'>Online Mr Electric</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Temukan berbagai produk berkualitas dengan harga terbaik untuk memenuhi kebutuhan Anda.
            Pengiriman cepat dan pelayanan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
