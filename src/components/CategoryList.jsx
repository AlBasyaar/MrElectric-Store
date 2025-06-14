import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Elektronik',
    image: '/assets/images/lampu1.jpeg',
    slug: 'elektronik',
    count: 90,
  },
  {
    id: 2,
    name: 'Kelistrikan',
    image: '/assets/images/Kelistrikan.jpeg',
    slug: 'kelistrikan',
    count: 72,
  },
  {
    id: 3,
    name: 'Packing & Pengemasan',
    image: '/assets/images/Package.jpeg',
    slug: 'Package',
    count: 1,
  },
];

const CategoryCard = ({ category }) => (
  <Link to={`/products?category=${category.slug}`} className="group">
    <div className="overflow-hidden rounded-lg shadow-md bg-white transition duration-300 group-hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <div
          className="h-full w-full bg-gray-100 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${category.image})` }}
        ></div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {category.name}
        </h3>
        <p className="text-gray-700">{category.count} produk</p>
      </div>
    </div>
  </Link>
);

const CategoryList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    {categories.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>
);

export default CategoryList;
