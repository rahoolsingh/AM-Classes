import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { authService } from "../../appwrite/auth";

function Login() {
    const [email, setEmail] = useState("rahulksingh3907@gmail.com");
    const [password, setPassword] = useState("i99access");

    const handleLogin = async (e) => {
        e.preventDefault(); // prevent the default form submission
        try {
            const user = await authService.login(email, password);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section className="h-screen bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Login to your account
                        </h2>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor=""
                                        className="text-base font-medium text-gray-900"
                                    >
                                        {" "}
                                        Email address{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor=""
                                            className="text-base font-medium text-gray-900"
                                        >
                                            {" "}
                                            Password{" "}
                                        </label>
                                        <a
                                            href="#"
                                            title=""
                                            className="text-sm font-semibold text-black hover:underline"
                                        >
                                            {" "}
                                            Forgot password?{" "}
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={handleLogin}
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md bg-black px-8 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Login{" "}
                                        <ArrowRight
                                            className="ml-2"
                                            size={16}
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* <div className="mt-3 space-y-3">
                            <button
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <span className="mr-2 inline-block">
                                    <svg
                                        className="h-6 w-6 text-rose-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                    </svg>
                                </span>
                                Sign in with Google
                            </button>
                            <button
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <span className="mr-2 inline-block">
                                    <svg
                                        className="h-6 w-6 text-[#2563EB]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </span>
                                Sign in with Facebook
                            </button>
                        </div> */}
                    </div>
                </div>
                <div className="hidden relative lg:block h-full w-full">
                    <img
                        className="mx-auto h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1619500765355-8ba767d6e261?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Jhiri Lake, Jhiri, Jharkhand, India"
                    />
                    <div className="absolute bottom-2 left-4 bg-white max-w-md px-4 py-1 rounded">
                        <h3 className="font-semibold text-black">
                            Jhiri Lake, Jhiri, Jharkhand, India
                        </h3>
                        <p className="text-sm">
                            Photo by{" "}
                            <a
                                href="https://unsplash.com/@callme_fade"
                                title="Aryan Singh"
                                className="font-semibold text-black"
                            >
                                Aryan Singh
                            </a>{" "}
                            on{" "}
                            <a
                                href="https://unsplash.com/s/photos/jhiri-lake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                title="Unsplash"
                                className="font-semibold text-black"
                            >
                                Unsplash
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
