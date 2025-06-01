import React from 'react';
import { Shield, Zap, Package } from 'lucide-react';

const ApaKataMereka = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Garansi Resmi",
      description: "Semua produk bergaransi resmi dengan layanan purna jual terpercaya",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Hemat Energi",
      description: "Produk LED berkualitas tinggi yang hemat energi hingga 80%",
      bgColor: "bg-green-50"
    },
    {
      icon: <Package className="w-8 h-8 text-purple-600" />,
      title: "Pengiriman Cepat",
      description: "Pengiriman hari yang sama untuk area Jakarta dan sekitarnya",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">
          Mengapa Memilih Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-full mb-6 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApaKataMereka;
