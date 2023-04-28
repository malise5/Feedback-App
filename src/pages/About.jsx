import React from "react";
import Card from "../components/share/Card";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>
                    This is a React app to leave Feedback for a Product or
                    Service
                </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back to Home page</Link>
                </p>
            </div>
        </Card>
    );
};

export default About;
