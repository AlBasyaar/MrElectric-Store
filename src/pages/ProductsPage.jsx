import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useTheme } from '../context/ThemeContext';

const ProductsPage = () => {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    if (categoryFilter) {
      const filtered = products.filter(product =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1); // reset page on filter change
  }, [categoryFilter]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const paginateRange = () => {
    const pages = [];
    const delta = 1;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (left > 2) pages.push('...');
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    if (right < totalPages - 1) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {categoryFilter ? `Produk ${categoryFilter}` : 'Semua Produk'}
          </h1>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Temukan produk berkualitas sesuai kebutuhan Anda
          </p>
        </div>

        {currentProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Tidak ada produk yang ditemukan.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center space-x-1 text-xs">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>

              {paginateRange().map((page, index) =>
                page === '...' ? (
                  <span key={index} className="px-2 py-1 text-gray-500">...</span>
                ) : (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 py-1 rounded ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
