import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Page = () => {
    return (
        <nav className="w-full max-w-[1143px] p-5 mx-auto">
            <ul className="flex flex-wrap items-center justify-between text-lg sm:text-xl md:text-2xl">
                {/* Left-Aligned Text */}
                <li className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    <Link href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">
                        nleaf
                    </Link>
                </li>

                {/* Right-Aligned Links */}
                <div className="flex flex-wrap items-center space-x-3 sm:space-x-5 mt-3 sm:mt-0">
                    <li>
                        <Link href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">
                            calendar
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">
                            todo
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">
                            tracker
                        </Link>
                    </li>

                    {/* Authentication Buttons */}
                    <SignedOut>
                        <li>
                            <SignInButton mode="modal">
                                <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    Sign In
                                </button>
                            </SignInButton>
                        </li>
                    </SignedOut>
                    <SignedIn>
                        <li className="flex items-center">
                            <UserButton
                                appearance={{
                                    elements: {
                                        rootBox: "flex items-center justify-center",
                                        avatarBox:
                                            "rounded-full border bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out w-[40px] h-[40px]", // Customize size and styles
                                    },
                                }}
                            />
                        </li>
                    </SignedIn>
                </div>
            </ul>
        </nav>
    );
};

export default Page;
