import PropTypes from "prop-types";

function Notice({ date, message, title }) {
    date = new Date(date).toLocaleDateString();

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
            </div>
        );
}

export default Notice;

Notice.propTypes = {
    date: PropTypes.string,
    message: PropTypes.string,
    title: PropTypes.string,
};
