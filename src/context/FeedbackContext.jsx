import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore quibusdam sed ducimus nobis enim dicta magnam blanditiis possimus excepturi repellendus culpa expedita nisi, porro vero corporis non ipsam aut!",
        },
        {
            id: 2,
            rating: 9,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore quibusdam sed ducimus nobis enim dicta magnam blanditiis possimus excepturi repellendus culpa expedita nisi, porro vero corporis non ipsam aut!",
        },
        {
            id: 3,
            rating: 7,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore quibusdam sed ducimus nobis enim dicta magnam blanditiis possimus excepturi repellendus culpa expedita nisi, porro vero corporis non ipsam aut!",
        },
        {
            id: 4,
            rating: 5,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore quibusdam sed ducimus nobis enim dicta magnam blanditiis possimus excepturi repellendus culpa expedita nisi, porro vero corporis non ipsam aut!",
        },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        feed: {},
        edit: false,
    });

    const editFeedback = (feed) => {
        setFeedbackEdit({
            feed,
            edit: true,
        });
    };

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

    const updateFeedback = (id, upFeed) => {
        setFeedback(
            feedback.map((feed) =>
                feed.id === id ? { ...feed, ...upFeed } : feed
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
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
