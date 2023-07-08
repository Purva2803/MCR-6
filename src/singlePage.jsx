import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { restaurantsData } from "./data";
import "./App.css";
import ReviewModal from "./modal";
import { ReviewContext } from "./context";
import "./singelPage.css";

export const SinglePage = () => {
  const { addReview } = useContext(ReviewContext);
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const findRestaurant = restaurantsData.find(
    (restaurant) => restaurant.id == id
  );

  const handleReviewSubmit = (reviewData) => {
    addReview(reviewData);
    closeModal();
  };

  return (
    <>
      <div className="restaurant" key={findRestaurant.id}>
        <div className="left">
          <h2>{findRestaurant.name}</h2>
          <p>{findRestaurant.address}</p>
          <p>{findRestaurant.phone}</p>
        </div>
        <div className="right">
          <button className="review-button" onClick={openModal}>
            Add Review
          </button>
        </div>
        <div className="center">
          {findRestaurant.ratings.map((review) => (
            <div className="review-card" key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <p>Reviewer Name: {review.revName}</p>
              <img src={review.pp} alt={review.revName} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleReviewSubmit}
        />
      )}
    </>
  );
};
