import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import TestimonialSection from '../components/TestimonialSection';
import ApaKataMereka from '../components/ApaKataMereka';
import { testimonials } from '../data/testimonials';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <Header />
      <main className="flex-grow relative z-10"> {/* Pastikan konten utama berada di atas */}
        <Hero />

        {/* --- Area Kategori Produk --- */}
        <div className="container mx-auto px-4 py-8 relative"> {/* Tambahkan relative di sini */}
          {/* Bubbles di sekitar area Kategori */}
          <div className="absolute top-0 -left-16 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-blue-400 opacity-20 animate-bubble z-0"></div>
          <div className="absolute bottom-0 -right-16 w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full bg-purple-400 opacity-20 animate-bubble animation-delay-2000 z-0"></div>

          <h2 className="text-2xl font-bold mb-6 text-center">Kategori Produk</h2>
          <CategoryList />
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>

        {/* --- Area Apa Kata Mereka --- */}
        <div className="relative"> {/* Tambahkan relative di sini */}
          {/* Blok di sekitar area Apa Kata Mereka */}
          <div className="absolute top-1/4 left-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-red-400 opacity-10 rotate-45 animate-block z-0"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-32 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-yellow-400 opacity-10 -rotate-30 animate-block animation-delay-3000 z-0"></div>

          <ApaKataMereka />
        </div>

        {/* --- Area Testimoni Pelanggan --- */}
        <div className="container mx-auto px-4 py-16 relative"> {/* Tambahkan relative di sini */}
          {/* Bubbles dan Blok di sekitar area Testimoni */}
          <div className="absolute top-10 right-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-400 opacity-20 animate-bubble animation-delay-4000 z-0"></div>
          <div className="absolute bottom-10 left-0 w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-blue-300 opacity-15 rotate-12 animate-block z-0"></div>

          <h2 className="text-2xl font-bold mb-6 text-center">Testimoni Pelanggan</h2>
          {testimonials.length > 0 && (
            <TestimonialSection testimonials={testimonials} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;