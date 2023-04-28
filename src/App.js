import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import feeds from "./data";

function App() {
    const [feedback, setFeedback] = useState(feeds);

    const handleAdd = (newfeedback) => {
        newfeedback.id = uuidv4();
        setFeedback([newfeedback, ...feedback]);
        console.log(newfeedback);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={handleAdd} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
