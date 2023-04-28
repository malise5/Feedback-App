import React from "react";
import { useState } from "react";
import Card from "./share/Card";
import Button from "./share/Button";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters long");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };
            handleAdd(newFeedback);
            setText("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate Your Service with Us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="write a review"
                        value={text}
                        onChange={handleChange}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}
