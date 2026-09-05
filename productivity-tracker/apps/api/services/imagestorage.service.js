// const { ImageKit } = require("@imagekit/nodejs");
import ImageKit from "@imagekit/nodejs";

import "dotenv/config";

const imagekit = new ImageKit({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
});

export async function uploadFiletoImagekit(file) {
  const result = await imagekit.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "music_backend/",
  });

  return result;
}
