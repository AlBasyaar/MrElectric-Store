import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} dengan harga Rp${product.price.toLocaleString('id-ID')}. Apakah produk ini masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-blue-600">{product.name}</h3>
        </Link>
        <p className="text-red-600 font-bold mb-2">Rp{product.price.toLocaleString('id-ID')}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
        
        <div className="flex justify-between">
          
          <Link 
            to={`/product/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition duration-300 text-sm"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;