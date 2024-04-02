import PropTypes from "prop-types";
import { useState } from "react";

function Notice({ date, content, title }) {
    date = new Date(date).toLocaleDateString("en-IN");
    // trime message to 100 characters
    const [message, setMessage] = useState(content.slice(0, 100) + "...");
    const [buttonText, setButtonText] = useState("Show More");

    const handleShowMessage = () => {
        if (buttonText === "Show Less") {
            setMessage(content.slice(0, 100) + "...");
            setButtonText("Show More");
            return;
        }
        setMessage(content);
        setButtonText("Show Less");
    };

    if (message)
        return (
            <div className="p-4 bg-slate-100 rounded-lg">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">{title}</h3>
                            <p className="text-sm">{date}</p>
                        </div>
                        <p className="text-sm text-justify">{message}</p>
                    </div>
                </div>
                <button
                    onClick={handleShowMessage}
                    className="text-sm font-medium text-blue-700"
                >
                    {buttonText}
                </button>
            </div>
        );
}

export default Notice;

Notice.propTypes = {
    date: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
};
