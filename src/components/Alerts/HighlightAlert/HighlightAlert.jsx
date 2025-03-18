import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HighlightAlert({ link }) {
    return (
        <div className="flex justify-between p-4 bg-blue-600 text-white rounded-lg items-center gap-2">
            <span className="text-sm sm:text-base font-medium">
                Admission for session 2025 - 26 is now open for classes 5 to 12.
            </span>
            {link && (
                <Link
                    to={link}
                    className="whitespace-nowrap px-3 py-2 bg-white rounded text-black font-semibold"
                >
                    Apply Now
                </Link>
            )}
        </div>
    );
}

export default HighlightAlert;

HighlightAlert.propTypes = {
    link: PropTypes.string,
};
