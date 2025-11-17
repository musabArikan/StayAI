const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    const app = express();

    app.use(
      cors({
        origin: [
          "http://localhost:5173",
          "http://localhost:5174",
          "https://quickstay-3nos.onrender.com",
        ],
        credentials: true,
      })
    );
    app.use(express.json());
    app.use(clerkMiddleware());

    app.use("/api/clerk", clerkWebHooks);
    app.use("/api/user", userRouter);
    app.use("/api/hotels", hotelRouter);
    app.use("/api/rooms", roomRouter);
    app.use("/api/bookings", bookingRouter);

    app.get("/", (req, res) => {
      res.send("StayAI Backend is running...");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (err) {
    console.log("Server start error:", err);
  }
};

startServer();
