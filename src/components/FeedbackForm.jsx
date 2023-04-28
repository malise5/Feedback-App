import React from "react";
import { useState } from "react";
import Card from "./share/Card";

export default function FeedbackForm() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Card>
            <form action="">
                <h2>How would you rate Your Service with Us?</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="write a review"
                        value={text}
                        onChange={handleChange}
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    );
}
