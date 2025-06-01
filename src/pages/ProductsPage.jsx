import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (categoryFilter) {
      setFilteredProducts(products.filter(product => 
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      ));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {categoryFilter ? `Produk ${categoryFilter}` : 'Semua Produk'}
          </h1>
          <p className="text-gray-600">
            Temukan produk berkualitas sesuai kebutuhan Anda
          </p>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Tidak ada produk yang ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;