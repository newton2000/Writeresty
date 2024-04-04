import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { upload } from "./functions/multerfile";
import { getUser, metaOgs, uploadImage } from "./functions/func";

const App: Application = express();

dotenv.config();
const port: number = parseInt(process.env.PORT as string, 10) || 8080;

// Middleware
App.use(express.json());
App.use(cors({ origin: '*' }));
App.use(morgan("dev"));
App.use('/uploads', express.static(path.join('uploads')));

// Route
App.post('/api/upload', upload.single('image'), uploadImage);
App.get('/api/ogs', metaOgs);
App.get('/api/user', getUser);

App.listen(port, async () => {
  console.log(`Starting server on port: ${port}`);
  console.log(process.env.NODE_ENV === 'production' ? 'Production Mode' : 'Developer Mode');
});
