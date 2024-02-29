import React from "react";

function Notice({ date, message }) {
    if (message)
        return (
            <>
                <li className="p-4">
                    <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-medium text-sm text-blue-700 dark:text-gray-400">
                                Date: {date}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-white w-full">
                                {message}
                            </p>
                        </div>
                    </div>
                </li>
            </>
        );
}

export default Notice;
