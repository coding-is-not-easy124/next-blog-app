import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://blogbazaar:Swostik@3456@cluster0.5dan7uj.mongodb.net/blog-app')
    console.log("DB Connected");
}