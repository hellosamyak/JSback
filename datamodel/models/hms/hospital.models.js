import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            addressLine1: {
                type: String,
                required: true,
                trim: true
            },
            addressLine2: {
                type: String,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            state: {
                type: String,
                required: true,
                trim: true
            },
            pincode: {
                type: String,
                required: true
            }
        },
        specialities: [
            {
                type: String,
                trim: true
            }
        ],
        doctorsAvailable: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor"
            }
        ],
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        contactDetails: {
            phone: {
                type: String,
                required: true,
                trim: true
            },
            email: {
                type: String,
                trim: true
            },
            website: {
                type: String,
                trim: true
            }
        },
        hospitalType: {
            type: String,
            enum: [
                "Government",
                "Private",
                "Trust",
                "Military"
            ]
        }
    }, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);