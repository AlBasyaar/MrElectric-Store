import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Selamat Datang di Toko Online Mr Electric</h1>
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