import { Card, Spinner } from "flowbite-react";
import Notice from "./Notice";
import { useEffect, useState } from "react";
import { noticeService } from "../../appwrite/notice";

function NoticeBoard() {
    const [loading, setLoading] = useState(false);
    const [noticeData, setNoticeData] = useState([]);

    useEffect(() => {
        setLoading(true);
        noticeService
            .getNotices()
            .then((response) => {
                setNoticeData(response.documents);
                console.log(response.documents);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

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
                    <div className="h-full overflow-y-scroll rounded space-y-2">
                        {noticeData?.map((data) => (
                            <>
                                <Notice
                                    date={data.date}
                                    message={data.content}
                                    title={data.title}
                                    key={data.id}
                                />
                            </>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    );
}

export default NoticeBoard;
