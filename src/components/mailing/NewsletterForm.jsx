import React from "react";
import { useState } from "react";

const NewsletterForm = ({ status, message, onValidated }) => {
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (email === "") {
            setError("Please enter a valid email!");
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        return email && email.indexOf("@") > -1 && isFormValidated;
    };

    return (
        <div className="form-container">
            <div className="form-fields">
                <div className="form-input">
                    <input
                        type="email"
                        placeholder="Your email"
                        onChange={(event) =>
                            setEmail(event?.target?.value ?? "")
                        }
                    />
                </div>
                <button
                    className="main-btn submit-btn"
                    onClick={handleFormSubmit}
                >
                    Join
                </button>
            </div>
            <div className="status-message">
                {email === "" && "Please enter a valid email!"}
                {status === "sending" && "Sending...Hang on a bit"}
                {status === "success" && "Successfully registered!"}
                {status === "error" && (message?.split("0 -") ?? null)}
            </div>
        </div>
    );
};

export default NewsletterForm;
