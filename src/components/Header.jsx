import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>Feedback Ui</h2>
                </Link>
            </div>
        </header>
    );
};

export default Header;
