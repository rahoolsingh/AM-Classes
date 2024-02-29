import { FaAddressCard } from "react-icons/fa";
import { SiFeedly } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { PiWarningFill } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { FaChartSimple } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";

export const metroMenuItems = [
    {
        icon: FaAddressCard,
        color: "green",
        label: "Register Now",
        path: "/admission",
        custom: "sm:col-span-3",
    },
    { icon: SiFeedly, label: "Fee Structure", path: "" },
    { icon: FaTable, label: "Class Schedule", path: "" },
    { icon: FaChartSimple, label: "Test Result", path: "" },
    { icon: FaBookOpen, label: "Course Syllabus", path: "" },
    { icon: FaBook, label: "Study Materials", path: "" },
    { icon: BiPhotoAlbum, label: "Photo Gallery", path: "" },
    { icon: MdOndemandVideo, label: "Video Gallery", path: "" },
    { icon: PiWarningFill, color: "red", label: "Raise Complaint", path: "" },
    { icon: VscFeedback, color: "teal", label: "Feedback", path: "" },
];
