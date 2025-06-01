import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Elektronik',
    image: '/assets/images/category-electronics.jpg',
    slug: 'elektronik',
    count: 12
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/assets/images/category-fashion.jpg',
    slug: 'fashion',
    count: 8
  },
  {
    id: 3,
    name: 'Kesehatan',
    image: '/assets/images/category-health.jpg',
    slug: 'kesehatan',
    count: 6
  },
  {
    id: 4,
    name: 'Rumah Tangga',
    image: '/assets/images/category-home.jpg',
    slug: 'rumah-tangga',
    count: 10
  }
];

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/products?category=${category.slug}`}
      className="group"
    >
      <div className="overflow-hidden rounded-lg shadow-md bg-white group-hover:shadow-lg transition duration-300">
        <div className="h-48 overflow-hidden">
          <div 
            className="h-full w-full bg-gray-200 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${category.image})` }}
          ></div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
          <p className="text-gray-600">{category.count} produk</p>
        </div>
      </div>
    </Link>
  );
};

const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;