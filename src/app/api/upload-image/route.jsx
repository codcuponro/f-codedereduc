import axios from 'axios';
import formidable from 'formidable';
import { NextResponse } from 'next/server';
// import fs from "fs"
// import path from 'path';

const strapiUrl = 'https://monkfish-app-ecq7g.ondigitalocean.app/api/upload';

export async function POST(req) {
    const {imagePath} = await req.json()

    try {
        const resolvedPath = path.resolve(process.cwd(), imagePath);
        const fileBuffer = fs.readFileSync(resolvedPath);
        const fileName = path.basename(imagePath);
  
        const formData = new FormData();
        formData.append('files', fileBuffer, fileName);

        return new NextResponse(
          JSON.stringify({
              status: "ok",
              message: formData
          }),
          { status: 200 }
      );
  
        const uploadResponse = await axios.post('https://monkfish-app-ecq7g.ondigitalocean.app/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer 2b5dc480403aa383eac1f95cc50dac631a937a7a8e83d1c68be4eaab4b67e11311619abd33f6a579a079650ce2d17c59dfdf08e0123cd28e44f442776c485bf5719107785de47ce5063850522e11ace5b3ae8286124c1f21560c35baee52314529c2da1c209c4b18b43b8ee5007f4fd34320558b295d88e6bb0238c3ab2de6ac`
          }
        });
  
        return new NextResponse(
            JSON.stringify({
                status: "ok",
                message: uploadResponse
            }),
            { status: 200 }
        );

      } catch (error) {
        console.error('Error uploading file:', error);
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error
            }),
            { status: 500 }
        );
      }
    }