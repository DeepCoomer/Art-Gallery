import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "",
        required: true
    },
    likes: {
        type: Array,
        default: []
    }
}, {timestamps: true});

export const Art = new mongoose.model('art',ArtSchema);