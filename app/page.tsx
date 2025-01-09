"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import snoopyImage from "@/public/assets/snoopy.png";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
      <main
          className={`flex items-center justify-center min-h-[85vh] p-5 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Signed-In Home Page */}
        <SignedIn>
          <div
              className="flex flex-wrap items-start space-x-10 ml-10"
              style={{ animationDelay: "0.5s" }}
          >
            {/* Text Column */}
            <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl md:text-8xl">
                Hi!
                <br/>
                welcome back
              </h1>
              <p className="mt-3 sm:mt-5 text-sm sm:text-lg max-w-lg">
                This is your personalized dashboard. Explore your todos, tracker,
                and calendar.
              </p>
            </div>
            {/* Image Column */}
            <div className="flex-shrink-0 mt-5 sm:mt-0">
              <Image
                  src={snoopyImage}
                  alt="Snoopy"
                  width={300}
                  height={300}
                  className="sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]"
              />
            </div>
          </div>
        </SignedIn>

        {/* Signed-Out Home Page */}
        <SignedOut>
          <div
              className="flex flex-wrap items-start space-x-10 ml-10"
              style={{ animationDelay: "0.5s" }}
          >
            {/* Text Column */}
            <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl md:text-8xl">
                <span>Welcome,</span>
                <br />
                <span>Sign up to nleaf!</span>
              </h1>
              <p className="mt-3 sm:mt-5 text-sm sm:text-lg max-w-lg">
                Sign up to access your calendar, todo tracker, and much more!
              </p>
            </div>
            {/* Image Column */}
            <div className="flex-shrink-0 mt-5 sm:mt-0">
              <Image
                  src={snoopyImage}
                  alt="Snoopy"
                  width={300}
                  height={300}
                  className="sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]"
              />
            </div>
          </div>
        </SignedOut>
      </main>
  );
}
