import { Card, Spinner } from "flowbite-react";
import Notice from "./Notice";
import { useEffect, useState } from "react";

function NoticeBoard() {
    const [loading, setLoading] = useState(true);
    const [noticeData, setNoticeData] = useState([]);

    return (
        <div className="h-96 sm:h-96 rounded-lg overflow-hidden">
            {/* <button className="m-5" onClick={createNotice}>TEST</button> */}
            <Card className="w-full h-full">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Latest Notifications
                    </h5>
                    <a
                        href="#"
                        className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                        View all
                    </a>
                </div>
                {loading && (
                    <div className="flex h-full justify-center items-center gap-3 select-none">
                        <Spinner />
                        <span>Loading Notice</span>
                    </div>
                )}
                {!loading && (
                    <div className="flow-root h-full overflow-y-scroll bg-zinc-100 rounded">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {noticeData?.map((data) => (
                                <span key={data.id}>
                                    <Notice
                                        date={data.date}
                                        message={data.message}
                                    />
                                </span>
                            ))}
                            <p>Test</p>
                        </ul>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default NoticeBoard;
