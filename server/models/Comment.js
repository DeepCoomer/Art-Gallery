import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    artId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Comment = new mongoose.model('comment', CommentSchema);