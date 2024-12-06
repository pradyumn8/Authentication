import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "mern-auth", // Ensures connection even if not in URI
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
