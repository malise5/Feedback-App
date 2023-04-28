import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import feeds from "./data";

function App() {
    const [feedback, setFeedback] = useState(feeds);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
