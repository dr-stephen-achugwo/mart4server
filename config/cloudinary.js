const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
//import dotenv from "dotenv";
//const { v2 } = cloudinary; 

dotenv.config();

const connectCloudinary=async ()=> {
  cloudinary.config({  
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
  })
}
module.exports = connectCloudinary;


//module.exports = connectCloudinary;
//export default connectCloudinary;


