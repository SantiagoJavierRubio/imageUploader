import mongoose from 'mongoose';

const imgSchema = mongoose.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
}, {collection: 'Images'});

const ImagePost = mongoose.model('ImagePost', imgSchema);

export default ImagePost;