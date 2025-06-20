import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useTheme } from '../context/ThemeContext';

const ProductsPage = () => {
  const { theme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const pageParam = searchParams.get('page');
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const productsPerPage = 15;

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const match = price.match(/\d+(?:\.\d+)?/g);
      return match ? parseInt(match[0].replace('.', '')) : 0;
    }
    return 0;
  };

  useEffect(() => {
    let results = categoryFilter
      ? products.filter(product =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      )
      : products;

    if (searchQuery) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder) {
      results = results.slice().sort((a, b) => {
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      });
    }

    setFilteredProducts(results);
  }, [categoryFilter, searchQuery, sortOrder]);

  useEffect(() => {
    if (categoryFilter) {
      const filtered = products.filter(product =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }

    if (categoryFilter !== searchParams.get('category')) {
      setCurrentPage(1);
      updateURLParams(1, categoryFilter);
    }
  }, [categoryFilter]);

  const updateURLParams = (page, category = categoryFilter) => {
    const newSearchParams = new URLSearchParams();

    if (category) {
      newSearchParams.set('category', category);
    }

    if (page > 1) {
      newSearchParams.set('page', page.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateURLParams(page);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      const validPage = Math.max(1, totalPages);
      setCurrentPage(validPage);
      updateURLParams(validPage);
    }
  }, [totalPages, currentPage]);

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
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} >
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div></div>

          {/* Hanya tampilkan search dan sort kalau category bukan "Package" */}
          {categoryFilter?.toLowerCase() !== 'package' && (
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded px-3 py-1"
              />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className={`border rounded px-3 py-1 ${theme === 'dark' ? 'text-gray-800' : 'text-gray-800'}`}
              >
                <option value="">Urutkan</option>
                <option value="asc">Harga Terendah</option>
                <option value="desc">Harga Tertinggi</option>
              </select>
            </div>
          )}

        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {categoryFilter ? `Produk ${categoryFilter}` : 'Semua Produk'}
          </h1>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} >
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

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center space-x-1 text-xs">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-2 py-1 rounded disabled:opacity-50 ${theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  Previous
                </button>

                {paginateRange().map((page, index) =>
                  page === '...' ? (
                    <span
                      key={index}
                      className={`px-2 py-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handlePageChange(page)}
                      className={`px-2 py-1 rounded ${currentPage === page
                        ? 'bg-blue-600 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-2 py-1 rounded disabled:opacity-50 ${theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
