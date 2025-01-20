import React, { useState, useEffect } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewsComponent: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const storedReviews = localStorage.getItem("restaurantReviews");
    if (storedReviews) {
      const parsedReviews = JSON.parse(storedReviews);
      setReviews(parsedReviews);
      calculateAverageRating(parsedReviews);
    }
  }, []);

  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    setAverageRating(parseFloat((totalRating / reviews.length).toFixed(1)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !rating || !comment.trim()) return;

    const newReview: Review = { name, rating, comment };
    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);
    calculateAverageRating(updatedReviews);
    localStorage.setItem("restaurantReviews", JSON.stringify(updatedReviews));

    setName("");
    setRating(null);
    setComment("");
  };

  const handleRemoveReview = (index: number) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    calculateAverageRating(updatedReviews);
    localStorage.setItem("restaurantReviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-8 shadow-xl rounded-2xl">
      <h3 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Customer Reviews
      </h3>

      <div className="flex justify-between items-center mb-8">
        <div>
          <strong className="text-lg text-gray-700">Average Rating:</strong>
          <span className="text-3xl text-yellow-500 font-bold ml-2">
            {averageRating} / 5
          </span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < Math.round(averageRating) ? "gold" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-6 h-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.356 4.178a1 1 0 00.95.69h4.421c.969 0 1.371 1.24.588 1.81l-3.584 2.603a1 1 0 00-.364 1.118l1.356 4.178c.3.921-.755 1.688-1.538 1.118l-3.584-2.603a1 1 0 00-1.175 0l-3.584 2.603c-.783.57-1.838-.197-1.538-1.118l1.356-4.178a1 1 0 00-.364-1.118L2.98 9.605c-.783-.57-.381-1.81.588-1.81h4.421a1 1 0 00.95-.69l1.356-4.178z"
              />
            </svg>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-10">
        <label
          htmlFor="name"
          className="block font-medium mb-2 text-gray-700"
        >
          Your Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-500 focus:border-yellow-500"
          placeholder="Enter your name"
          required
        />

        <label
          htmlFor="rating"
          className="block font-medium mb-2 text-gray-700"
        >
          Rate the food/service:
        </label>
        <select
          id="rating"
          value={rating ?? ""}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-500 focus:border-yellow-500"
          required
        >
          <option value="" disabled>
            Select a rating
          </option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} - {["Poor", "Fair", "Good", "Very Good", "Excellent"][value - 1]}
            </option>
          ))}
        </select>

        <label
          htmlFor="comment"
          className="block font-medium mb-2 text-gray-700"
        >
          Write your review:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-500 focus:border-yellow-500"
          rows={4}
          placeholder="Share your experience..."
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews:</h4>
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex justify-between items-start"
            >
              <div>
                <h5 className="text-lg font-bold text-gray-800">{review.name}</h5>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        starIndex < review.rating ? "gold" : "none"
                      }
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.356 4.178a1 1 0 00.95.69h4.421c.969 0 1.371 1.24.588 1.81l-3.584 2.603a1 1 0 00-.364 1.118l1.356 4.178c.3.921-.755 1.688-1.538 1.118l-3.584-2.603a1 1 0 00-1.175 0l-3.584-2.603c-.783.57-1.838-.197-1.538-1.118l1.356-4.178a1 1 0 00-.364-1.118L2.98 9.605c-.783-.57-.381-1.81.588-1.81h4.421a1 1 0 00.95-.69l1.356-4.178z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
              <button
                onClick={() => handleRemoveReview(index)}
                className="text-red-600 font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsComponent;
