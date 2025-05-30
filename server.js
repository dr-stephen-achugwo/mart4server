import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js'; 
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import sellerRoutes from './routes/sellerRoutes.js'; 
import sellItemRoutes from './routes/sellItemRoutes.js';
import displayProductRouter from './routes/displayProduct.js'; 
import sendEmail from './utils/sendEmail.js';
import reviewRoutes from './routes/reviewRoutes.js'


// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Initialize Cloudinary
connectCloudinary();
   

// MIDDLEWARES
const corsOptions = {
    origin: ['https://mart4u.vercel.app','https://mart4u.vercel.app','http://localhost:5000', 'https://mart4u.onrender.com'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (like cookies) to be sent
    optionsSuccessStatus: 204 // For older browsers
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// You can also handle preflight requests globally
app.options('*', cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
  const { emails, message } = req.body;

  try {
   const info = await sendEmail(emails,message);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

    // API Endpoints
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/order', orderRouter);
    app.use('/api', sellerRoutes);
    app.use('/api', sellItemRoutes);
    app.use('/api/displayproduct', displayProductRouter);
    app.use('/api',reviewRoutes);
    

    app.get('/', (req, res) => {
        res.send("API working");
    });

    app.listen(port, () => console.log('Server started on PORT: ' + port));


// Initialize the application

