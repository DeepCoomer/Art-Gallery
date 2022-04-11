import express from 'express';
import grid from 'gridfs-stream';
import mongoose from 'mongoose';
import upload from '../utils/upload.js';
import { Art } from '../models/Art.js';

const router = express.Router();

const url = 'http://localhost:8000';

let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

// Route 1: Create an art

router.post("/", async (req, res) => { 
    const newArt = new Art(req.body);
    try {
        const savedArt = await newArt.save();
        res.status(200).json(savedArt);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

// Route 2: Like/Dislike an art

router.put('/:id/like', async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
        if (!art.likes.includes(req.body.user_name)) {
            await art.updateOne({ $push: { likes: req.body.user_name } });
            res.status(200).json("Art has been liked")
        } else {
            await art.updateOne({ $pull: { likes: req.body.user_name } });
            res.status(200).json("Art has been disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Route 3: Delete an art

router.delete('/:id/:username', async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
        if (art.user_name === req.params.username) {
            await Art.deleteOne({ _id: req.params.id });
            res.status(200).json("The art has been deleted.");
        } else {
            res.status(403).json("You can delete only your art");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Route 4: Get an art

router.get('/:id', async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
        res.status(200).json(art);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

// Route 5: Get user arts

router.get('/user/:username', async (req, res) => {
    try {
        let arts = await Art.find({ user_name: req.params.username }).sort({ _id: -1 });
        res.status(200).json(arts);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

// Route 6: Get all arts

router.get('/', async (req, res) => {
    try {
        let arts = await Art.find().sort({ _id: -1 });
        res.status(200).json(arts);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

// Utility routes

// upload an image

router.post("/file/upload", upload.single('file'), async (req, res) => {
    if (!req.file)
        return res.status(404).json("File not found");

    const imageUrl = `${url}/api/users/file/${req.file.filename}`;

    res.status(200).json(imageUrl);
})

// Get an image

router.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;