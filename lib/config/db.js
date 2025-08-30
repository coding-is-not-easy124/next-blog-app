import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://BlogBazaar:Swostik123@blogbazaar.bbu0yfc.mongodb.net/blog-app')
    console.log("DB Connected");
}