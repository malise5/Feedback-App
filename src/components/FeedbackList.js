import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./share/Spinner";

const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>;
    }
    return isLoading ? (
        <Spinner />
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((feed) => (
                    <motion.div
                        key={feed.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem feed={feed} key={feed.id} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((feed) => (
    //             <FeedbackItem
    //                 feed={feed}
    //                 key={feed.id}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // );
};

export default FeedbackList;
