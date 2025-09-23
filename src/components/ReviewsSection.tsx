import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "It's a very light moisturizer that makes your skin soft and glowy... it's the best product in my skincare routine and I swear by it. 😍",
      author: "Ragunna Tikekar",
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b5a4e5bc?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const productImage = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop";

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-4">
            REVIEWS
          </h2>
        </div>

        {/* Review Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Review */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-soft">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-roboto text-melita-deep-coffee text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-roboto font-semibold text-melita-deep-coffee text-sm">
                      {review.author}
                    </p>
                    {review.verified && (
                      <p className="font-roboto text-xs text-melita-medium">
                        Verified Purchase
                      </p>
                    )}
                  </div>
                </div>

                {/* Rating Dots */}
                <div className="flex items-center justify-center space-x-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === 0 ? 'bg-melita-golden-taupe' : 'bg-melita-warm-sand'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={productImage}
                alt="Melita Products"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-luxury"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;