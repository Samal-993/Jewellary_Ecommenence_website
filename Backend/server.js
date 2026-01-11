import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRoute from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://jewellary-website.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ✅ ROUTES
app.use("/api/users", userRouter);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log("Server started on PORT :", port)
);
