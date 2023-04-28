import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
    // console.log(feedback);
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
    }
    return (
        <div className="feedback-list">
            {feedback.map((feed) => (
                <FeedbackItem
                    feed={feed}
                    key={feed.id}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
};

export default FeedbackList;
