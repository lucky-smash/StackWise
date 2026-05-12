import mongoose, { Schema, models } from "mongoose";

const leadSchema = new Schema(
    {
        companyName: {
            type: String,
            required: true,
        },

        companyEmail: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            required: true,
        },

        teamSize: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Lead =
    models.Lead || mongoose.model("Lead", leadSchema);