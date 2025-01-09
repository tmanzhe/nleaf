import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function Profile() {
    console.log("Starting Profile component");

    try {
        // Get the current user
        const user = await currentUser();
        console.log("Fetched user data:", user);

        // Redirect to signin if no user is found
        if (!user) {
            console.log("No user found, redirecting to signin");
            redirect("/signin");
            return null;
        }

        // Display the user's profile
        return (
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
                    <h1 className="text-2xl font-bold mb-4">
                        Welcome, {user.firstName || user.username || "User"}!
                    </h1>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            Email: {user.emailAddresses?.[0]?.emailAddress || "No email found"}
                        </p>
                        <p className="text-gray-600">ID: {user.id}</p>
                        <img
                            src={user.imageUrl || "/default-avatar.png"}
                            alt={`${user.firstName}'s profile`}
                            className="w-20 h-20 rounded-full"
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error in Profile component:", error);

        // Display error message to the user
        return (
            <div className="p-4 text-red-600">
                Error loading profile. Please try again later.
            </div>
        );
    }
}
