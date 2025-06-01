import React, { useState, useRef } from 'react';

const TestimonialSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainer = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
    if (scrollContainer.current) {
      const card = scrollContainer.current.children[currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1];
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
    if (scrollContainer.current) {
      const card = scrollContainer.current.children[currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0];
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (scrollContainer.current) {
      const card = scrollContainer.current.children[index];
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <div className="relative">
      <div 
        className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x snap-mandatory"
        ref={scrollContainer}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`min-w-[320px] w-full sm:min-w-[400px] sm:w-[400px] flex-shrink-0 snap-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-70'
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 h-full">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <img
                    src={testimonial.avatar || 'https://via.placeholder.com/40x40'}
                    alt={`Avatar of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  {testimonial.productName && (
                    <p className="text-sm text-gray-600">untuk {testimonial.productName}</p>
                  )}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 -ml-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 -mr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-2 h-2 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialSection;