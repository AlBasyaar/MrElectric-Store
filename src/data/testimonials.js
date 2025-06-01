import { products } from './products';

export const getAllTestimonials = () => {
  // Create an array to hold all testimonials
  const allTestimonials = [];
  
  // Loop through each product
  products.forEach(product => {
    // Check if the product has testimonials
    if (product.testimonials && product.testimonials.length > 0) {
      // Add product name to each testimonial for reference
      const productTestimonials = product.testimonials.map(testimonial => ({
        ...testimonial,
        productName: product.name,
        productId: product.id
      }));
      
      // Add these testimonials to our collection
      allTestimonials.push(...productTestimonials);
    }
  });
  
  return allTestimonials;
};

// Export the testimonials directly
export const testimonials = getAllTestimonials();

export default testimonials;