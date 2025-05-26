import dotenv from "dotenv";
dotenv.config();
import pkg from 'cloudinary';
const {v2: cloudinary} = pkg;

const connectCloudinary=async ()=> {
  v2.config({  
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
  })
}
export default connectCloudinary;


//module.exports = connectCloudinary;
//export default connectCloudinary;


