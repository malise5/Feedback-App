import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./share/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feed }) {
    const { handleDelete } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{feed.rating}</div>
            <button className="close" onClick={() => handleDelete(feed.id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{feed.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    feed: PropTypes.object.isRequired,
};

export default FeedbackItem;
