import { Request, Response } from 'express';
import ogs from "open-graph-scraper";

export const getUser = (req: Request, res: Response) => {
  res.json({
    greeter: "Hello"
  });
}

export const metaOgs = (req: Request, res: Response) => {
  const url = req.query.url;

  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL must be a string' });
  }

  ogs({ url })
    .then((data) => {
      const { result } = data;
      res.json({
        success: result.success ? 1 : 0,
        link: result.ogUrl,
        meta: {
          title: result.ogTitle,
          description: result.ogDescription,
          image: result.ogImage ? result.ogImage[0] : { url: 'http://localhost:3698/uploads/notfound.jpg' }
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching open graph data' });
    });
}

export const uploadImage = (req: Request, res: Response) => {
  if (req.file) {
    const filePath = req.file.path.replace(/\\/g, '/');
    const fileUrl = `${req.protocol}://${req.get('host')}/${filePath}`;
    res.send({
      success: 1,
      file: {
        url: fileUrl,
      }
    });
  } else {
    res.status(400).send({
      msg: 'กรุณาเลือกรูปภาพ'
    });
  }
}