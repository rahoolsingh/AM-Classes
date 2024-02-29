import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Admission() {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!timer) {
            window.open("https://forms.gle/okrwfNVvNGghCq236", "_blank");
        }
    }, [timer]);

    return (
        <div className="bg-white rounded h-[calc(100vh-150px)] p-10 sm:p-24 space-y-4 sm:space-y-6">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                Admissions for the academic year 2024-25 are open for classes VI
                to XII.
            </h1>
            <p className=" font-medium">
                If you don&apos;t get redirected automatically within {timer}{" "}
                seconds, please{" "}
                <Link
                    to={"https://forms.gle/okrwfNVvNGghCq236"}
                    target="_blank"
                    className="text-red-700 underline"
                >
                    click here
                </Link>{" "}
                to access the form.
            </p>
        </div>
    );
}

export default Admission;
