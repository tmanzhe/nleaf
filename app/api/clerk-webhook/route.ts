import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Check if the event is for user creation or update
        if (body.type === "user.created" || body.type === "user.updated") {
            const user = body.data;

            // Sync user with the database
            await prisma.user.upsert({
                where: { id: user.id }, // Clerk's user ID
                update: {
                    name: user.first_name || null,
                    email: user.email_addresses?.[0]?.email_address || null,
                    image: user.image_url || null, // Clerk uses `image_url` for the profile image
                },
                create: {
                    id: user.id, // Clerk's user ID
                    name: user.first_name || null,
                    email: user.email_addresses?.[0]?.email_address || null,
                    image: user.image_url || null,
                },
            });

            console.log("User synced to database:", user.id);
        }

        return NextResponse.json({ message: "Webhook processed successfully" });
    } catch (error) {
        console.error("Error syncing user:", error);
        return NextResponse.json({ error: "Failed to sync user" }, { status: 500 });
    }
}
