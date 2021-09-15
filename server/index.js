import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import imgRoutes from './routes/img.js'

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/img', imgRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello to the image upload server!');
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err.message));
