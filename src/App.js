import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { AboutIcon } from "./components/AboutIcon";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    // const [feedback, setFeedback] = useState(feeds);

    return (
        <>
            <FeedbackProvider>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                    <AboutIcon />
                                </>
                            }
                        ></Route>

                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </FeedbackProvider>
        </>
    );
}

export default App;
