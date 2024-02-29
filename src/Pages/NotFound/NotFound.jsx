import { Button } from "flowbite-react";
import notFoundImage from "./pconfire.png";

function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            <div className="w-full h-full grid sm:grid-cols-2 sm:m-96">
                <div className="flex flex-col sm:flex-row justify-end">
                    <img
                        src={notFoundImage}
                        className="object-contain sm:max-w-[600px]"
                    />
                </div>
                <div className="flex flex-col sm:justify-center items-start leading-10 m-8">
                    <p className="text-7xl sm:text-9xl text-blue-700 font-semibold">
                        Oops!
                    </p>
                    <p className="text-2xl mt-4 sm:mt-7">
                        The page you are trying to access is not available.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <a href="/">
                            <Button color="blue" type="button">
                                Back To Home
                            </Button>
                        </a>
                        <a
                            href="https://wa.me/+918210228101?text=Error%20on%20amclasses_app%20::%20APP%20ID:%20P02/SW/24/KTA/48"
                            target="_blank"
                        >
                            <Button color="red" type="button">
                                Contact Dev
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
