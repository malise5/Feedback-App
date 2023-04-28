import React from "react";

function FeedbackItem({ feed }) {
    return (
        <div className="card">
            <div className="num-display">{feed.rating}</div>
            <div className="text-display">{feed.text}</div>
        </div>
    );
}

export default FeedbackItem;
