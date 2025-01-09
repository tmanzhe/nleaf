import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Nav from "./Nav/page";
import Footer from "./Footer/page";

const centuryOldStyle = localFont({
    src: "/fonts/CenturyATFOldStyleBQ-Regular.otf",
    variable: "--font-century-old-style",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Truman Chan",
    description: "my personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={`${centuryOldStyle.variable} antialiased`}>
            <header className="flex items-center justify-center">
                <Nav />
            </header>

            <hr className="border-t border-[#191919]" />
            <main className="flex flex-col min-h-[85vh]">{children}</main>
            <hr className="border-t border-[#191919]" />
            <footer className="flex-1 flex items-center justify-center">
                <Footer />
            </footer>
            </body>
            </html>
        </ClerkProvider>
    );
}
