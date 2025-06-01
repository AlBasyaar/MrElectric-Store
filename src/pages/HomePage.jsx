import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import TestimonialSection from '../components/TestimonialSection';
import ApaKataMereka from '../components/ApaKataMereka';
import { testimonials } from '../data/testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-8">
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

        {/* Why Choose Us Section */}
        <ApaKataMereka />
        
        {/* Testimonials Section */}
        <div className="container mx-auto px-4 py-16">
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