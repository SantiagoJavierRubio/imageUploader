import express from "express";
import ImagePost from '../models/ImagePost.js';
import multer from 'multer';
import fs from 'fs';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, 'uploads/')
    }
});

const upload = multer({ storage: storage });

router.post('/post',upload.single('image') ,async (req,res) => {
    try {
        const newPost = new ImagePost();
        newPost.img.data = fs.readFileSync(req.file.path)
        newPost.img.contentType = 'image/jpeg';
        await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
});

router.get('/:id', async (req,res) => {
    try {
        const image = await ImagePost.findById(req.params.id);
        res.contentType('json');
        res.send(image);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
});

export default router;