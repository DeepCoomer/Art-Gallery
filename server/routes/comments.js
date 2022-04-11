import express from 'express';
import { Comment } from '../models/Comment.js';

const router = express.Router();

// Route 1: Post a comment

router.post('/newcomment', async (req, res) => {
    try {
        const comment = await new Comment({
            user_name: req.body.user_name,
            artId: req.body.artId,
            comment: req.body.comment
        });
        await comment.save();
        res.status(200).json("Comment Saved Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})

// Route 2: Get comments of an art

router.get('/comment/:id', async (req, res) => {
    try {
        const comments = await Comment.find({ artId: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

// Route 3: Delete a comment

router.delete('/delete/comment/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        await comment.delete();
        res.status(200).json("Comment Deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

export default router;