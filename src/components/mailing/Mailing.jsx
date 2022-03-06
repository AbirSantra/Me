import React from "react";
import "./Mailing.css";
import NewsletterForm from "./NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Mailing = () => {
    const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP;
    console.log(MAILCHIMP_URL);
    return (
        <div className="mailing-container">
            <div className="mailing-text">
                <h2>Join my Newsletter</h2>
                <h3>
                    Get weekly articles on Web Development and other relevent
                    thing.
                </h3>
                <p>No spam! Promise. I hate it more than you do.</p>
            </div>
            <div className="mailing-form">
                <MailchimpSubscribe
                    url={MAILCHIMP_URL}
                    render={(props) => {
                        const { subscribe, status, message } = props || {};
                        return (
                            <NewsletterForm
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Mailing;
