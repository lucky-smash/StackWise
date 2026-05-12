import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const body = await req.json();

        const lead = await Lead.create({
            companyName: body.companyName,
            companyEmail: body.companyEmail,
            role: body.role,
            teamSize: body.teamSize,
        });

        return NextResponse.json({
            success: true,
            lead,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to save lead",
        });
    }
}