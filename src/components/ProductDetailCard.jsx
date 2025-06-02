import React, { useState } from 'react';

const ProductDetailCard = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleWhatsAppClick = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} dengan harga Rp${product.price.toLocaleString('id-ID')}. Apakah produk ini masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285323800021?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative h-80 md:h-full min-h-[320px] bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2 p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-red-600">Rp{product.price.toLocaleString('id-ID')}</p>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600">{product.shortDescription}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition duration-300"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat di WhatsApp
            </button>
            
            {product.shopeeLink && (
              <a 
                href={product.shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition duration-300"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  viewBox="0 0 48 48" 
                  fill="currentColor"
                >
                  <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z M24,7c9.374,0,17,7.626,17,17 c0,9.374-7.626,17-17,17c-9.374,0-17-7.626-17-17C7,14.626,14.626,7,24,7z M16.707,19.707l-1.414-1.414L11,22.586l-2.293-2.293 l-1.414,1.414L11,25.414L16.707,19.707z M25,23v-4h-2v4h-4v2h4v4h2v-4h4v-2H25z"/>
                </svg>
                Beli di Shopee
              </a>
            )}
            
            {product.tiktokLink && (
              <a 
                href={product.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition duration-300"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                Beli di TikTok Shop
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex border-b">
          <button 
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'description' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Deskripsi
          </button>
          <button 
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'specs' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('specs')}
          >
            Spesifikasi
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          )}
          
          {activeTab === 'specs' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">{key}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;