import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feeds from "./data";

function App() {
    const [feedback, setFeedback] = useState(feeds);

    return (
        <>
            <Header />
            <FeedbackList feedback={feedback} />
        </>
    );
}

export default App;
