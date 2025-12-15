import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("Database connected successfully");
        const db = mongoose.connection;
        
        db.on("connected", () => {
            console.log("Mongoose connected to DB");
        });

        db.on("error", (err : any) => {
            console.log("Mongoose connection error:"+ err);
            process.exit();
        });

    } catch (error) {
        console.log("Database connection error:", error);
        console.log("Please ensure that your MongoDB server is running and the connection string is correct.");
    }
}