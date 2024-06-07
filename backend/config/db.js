import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://threegandg:Gauri2004@cluster0.pbbqpue.mongodb.net/MealMover')
    .then(() => {
        console.log("DB Connected")
    })
}