import { Card, Spinner } from "flowbite-react";
import Notice from "./Notice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NoticeBoard() {
    const [loading, setLoading] = useState(false);
    const [noticeData, setNoticeData] = useState([]);

    return (
        <div className="min-h-96 h-full rounded-lg overflow-hidden">
            <Card className="w-full h-full shadow-lg">
                <div className="mb-4 flex items-center justify-between border-b pb-2">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                        Latest Notifications
                    </h5>
                    <Link
                        to="/notifications"
                        className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                        View all
                    </Link>
                </div>
                {loading ? (
                    <div className="flex h-full justify-center items-center gap-3">
                        <Spinner size="lg" />
                        <span className="text-gray-600 dark:text-gray-300">
                            Loading Notices...
                        </span>
                    </div>
                ) : (
                    <div className="flow-root h-full overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded p-4">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3">
                                <p className="flex items-center gap-2 text-sm">
                                    <span>
                                        2025-26 Admission Open for Classes 5 to
                                        12{" "}
                                        <Link
                                            to="/admission"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Apply Now
                                        </Link>
                                    </span>
                                    <span className="text-xs text-red-500 font-bold animate-pulse">
                                        NEW
                                    </span>
                                </p>
                            </li>
                            <li className="py-3">
                                <p className="text-sm">
                                    English & S.St. Subjects are now available*
                                </p>
                            </li>
                        </ul>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default NoticeBoard;
