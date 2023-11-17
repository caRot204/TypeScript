
const Login = () => {
    return (
        <div className="h-screen flex">
            <div
                className="hidden lg:flex w-full lg:w-1/2 login_img_section
    justify-around items-center"
            >
                <div
                    className=" 

            opacity-20 
            inset-0 
            z-0"
                ></div>

            </div>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                <div className="w-full px-8 md:px-32 lg:px-24">
                    <form className="bg-white rounded-md shadow-2xl p-5">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                        <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                            <input
                                id="email"
                                className=" pl-2 w-full outline-none border-none"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <input
                                className="pl-2 w-full outline-none border-none"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                        >
                            Login
                        </button>
                        <div className="flex justify-between mt-4">
                            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                Forgot Password ?
                            </span>
                            <a
                                href="#"
                                className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                            >
                                Don't have an account yet?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
};
export default Login;