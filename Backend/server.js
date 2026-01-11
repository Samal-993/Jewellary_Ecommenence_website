import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import productRoute from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

//middlewares
app.use(express.json())

const allowedOrigins = [
  "https://jewellary-website.onrender.com",
  "http://localhost:5173" // for local development, optional
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);


//api endpoints
app.use('/api/users', userRouter)
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get('/', (req, res) => {
  res.send("API Wording")
})

app.listen(port, () => console.log('Server started on PORT :' + port))