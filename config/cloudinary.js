//const cloudinary = require('cloudinary');
//const dotenv = require('dotenv');
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
const { v2 } = cloudinary; 

const connectCloudinary=async ()=> {
  v2.config({  
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
  })
}
export default connectCloudinary;

//module.exports = connectCloudinary;
//module.exports = connectCloudinary;



