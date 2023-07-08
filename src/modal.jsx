import React, { useState } from 'react';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [reviewData, setReviewData] = useState({
    rating: "",
    comment: "",
    reviewerName: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewData);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Review</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Rating:
                <input
                  type="number"
                  name="rating"
                  value={reviewData.rating}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Comment:
                <textarea
                  name="comment"
                  value={reviewData.comment}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Reviewer Name:
                <input
                  type="text"
                  name="reviewerName"
                  value={reviewData.reviewerName}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};


export default ReviewModal;
