import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        feed: {},
        edit: false,
    });

    useEffect(() => {
        fetchfeed();
    }, []);

    const fetchfeed = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const editFeedback = (feed) => {
        setFeedbackEdit({
            feed,
            edit: true,
        });
    };

    const handleAdd = async (newfeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newfeedback),
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
        // console.log(newfeedback);
    };

    const handleDelete = async (id) => {
        // if (window.confirm("Are you sure you want to delete?")) {}
        await fetch(`/feedback/${id}`, {
            method: "DELETE",
        });
        setFeedback(feedback.filter((item) => item.id !== id));
    };

    const updateFeedback = async (id, upFeed) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(upFeed),
        });

        const data = await response.json();

        setFeedback(
            feedback.map((feed) =>
                feed.id === id ? { ...feed, ...data } : feed
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                handleDelete,
                handleAdd,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
