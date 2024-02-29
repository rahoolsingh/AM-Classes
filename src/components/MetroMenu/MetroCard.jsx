import { Link } from "react-router-dom";

function MetroCard({ item }) {
    const color = item.color
        ? ["text-", item.color, "-700"].join("")
        : "text-blue-700";
    return (
        <Link
            to={item.path}
            className={`rounded-lg text-black overflow-hidden bg-white ${item.custom}`}
        >
            <div
                className={`px-4 py-8 flex flex-col gap-1 justify-between items-center hover:scale-110 ease-in-out`}
            >
                <div className={`text-4xl ${color}`}>{<item.icon />}</div>
                <div className="truncate font-medium py-2">{item.label}</div>
            </div>
        </Link>
    );
}

export default MetroCard;
