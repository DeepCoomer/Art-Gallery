import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/artgallery",
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-art-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-art-${file.originalname}`
        }
    }
});

export default multer({ storage });