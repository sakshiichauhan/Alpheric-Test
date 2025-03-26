import React from "react";
import backgroundImage from "../assets/Image10.png";

const ImagePage = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen items-center justify-center px-4 lg:px-16">
            {/* Left Section with Background Image */}
            <div
                className="w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center rounded-lg overflow-hidden shadow-md mb-6 lg:mb-0 lg:mr-6"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "90%",
                }}
            >
                <div className="text-white max-w-md px-8">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        First things first... <br />
                        please share your contact details
                    </h1>
                    <p className="mt-4 text-lg">
                        This will help our team get in touch with you within{" "}
                        <span className="font-bold">24 to 48 hours via email.</span>
                    </p>
                </div>
            </div>

            {/* Right Section with Form */}
            <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 rounded-lg  flex items-center justify-center">
                <div className="w-full max-w-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        First things first...please share your professional contact details
                        <span className="text-red-500">*</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        This will help our team get in touch with you within 24 to 48 hours via email.
                    </p>
                    <form className="space-y-6">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
                            />
                            <p className="text-red-500 text-sm mt-1">Please fill this in</p>
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
                            />
                            <p className="text-red-500 text-sm mt-1">Please fill this in</p>
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
                            />
                            <p className="text-red-500 text-sm mt-1">
                                Hmm... that phone number doesn't look right
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-black focus:border-black"
                            />
                            <p className="text-red-500 text-sm mt-1">Please fill this in</p>
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Company <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Company"
                                className="mt-1 block w-full border border-gray-300 rounded-md  p-2 focus:ring-black focus:border-black"
                            />
                            <p className="text-red-500 text-sm mt-1">Please fill this in</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
