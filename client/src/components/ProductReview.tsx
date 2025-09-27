import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const demoReviews = [
  {
    id: 1,
    name: "Pooja Chugwani",
    rating: 5,
    date: "23/08/2025",
    verified: true,
    title: "Best face wash ever",
    reviewText:
      "I love using this face wash. I am already on my second tube. It gently cleans my skin and leaves it fresh, hydrating and clean. I would definitely recommend everyone to go for it.",
  },
  {
    id: 2,
    name: "Aman Singh",
    rating: 5,
    date: "22/08/2025",
    verified: true,
    title: "Amazing Product!",
    reviewText:
      "This product is fantastic. My skin has never felt better. Highly recommend!",
  },
  {
    id: 3,
    name: "Sana Sharma",
    rating: 4,
    date: "21/08/2025",
    verified: false,
    title: "Good but could be better",
    reviewText:
      "It works well, but I wish it was a bit more moisturizing. Still a great product overall.",
  },
];

const ProductReview = ({ reviews = demoReviews }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
      : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { star, count, percentage };
  });

  const getInitials = (name) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <section id="reviews" className="max-w-7xl mx-auto rounded-2xl md:px-4">
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-3xl font-semibold font-headingOne text-[#1e4323] mb-8">
          CUSTOMER REVIEWS
        </h2>

        {/* Average Rating + CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div
              className="flex text-yellow-400"
              title={`${averageRating.toFixed(2)} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="currentColor"
                  stroke="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-700 text-base">
              Based on {totalReviews} reviews
            </p>
          </div>
          <Button
            onClick={() => setShowReviewModal(true)}
            className="font-headingTwo text-base text-white bg-[#835339] border border-[#835339] px-6 py-2 rounded hover:bg-[#6f462f] transition"
          >
            Write a review
          </Button>
        </div>

        {/* Rating Distribution */}
        <div className="mb-6">
          <div className="space-y-2">
            {ratingDistribution.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-sm text-gray-700 w-14">{star} star</span>
                <div className="bg-gray-200 w-full md:w-40 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-700 w-20 text-right">
                  {percentage.toFixed(0)}% ({count})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-6 border-t border-[#ccd5ae] pt-6 space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#835339] flex-shrink-0 flex items-center justify-center font-bold text-white text-lg">
                {getInitials(review.name)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {review.verified && (
                    <span className="text-xs bg-yellow-400 text-white px-2 py-0.5 rounded-full font-semibold">
                      Verified
                    </span>
                  )}
                  <span className="text-sm font-bold text-[#5c4b2c]">
                    {review.name}
                  </span>
                </div>
                <h4 className="text-text-secondary font-headingTwo font-semibold text-lg mt-2">
                  {review.title}
                </h4>
                <p className="text-sm text-gray-700 mt-1">{review.reviewText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
        <DialogContent className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full">
          <h3 className="text-xl font-headingOne font-semibold text-[#835339] mb-4">
            Write a Review
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-[#835339] focus:border-[#835339]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-[#835339] focus:border-[#835339]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Rating
              </label>
              <div className="flex items-center gap-1 text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <label
                    key={i}
                    htmlFor={`star${i + 1}`}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={i + 1}
                      name="rating"
                      id={`star${i + 1}`}
                      className="sr-only"
                      required
                      onChange={() => setUserRating(i + 1)}
                    />
                    <Star
                      size={24}
                      fill={i < userRating ? "currentColor" : "none"}
                      stroke="currentColor"
                      className={
                        i < userRating
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Review Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-[#835339] focus:border-[#835339]"
              />
            </div>
            <div>
              <label
                htmlFor="review_text"
                className="block text-sm font-medium text-gray-700"
              >
                Your Review
              </label>
              <textarea
                id="review_text"
                rows={4}
                required
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-[#835339] focus:border-[#835339]"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="review_images"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Images (Optional)
              </label>
              <input
                type="file"
                id="review_images"
                multiple
                accept="image/*"
                className="mt-1 w-full text-sm text-slate-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f0e4d4] file:text-[#835339] hover:file:bg-[#e6d7c2]"
              />
            </div>
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="font-headingTwo text-base text-white bg-[#835339] border border-[#835339] px-6 py-2 rounded hover:bg-[#6f462f] transition"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductReview;
