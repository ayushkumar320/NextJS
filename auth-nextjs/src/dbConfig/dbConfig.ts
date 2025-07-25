import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!); // ! ensures that I have the url
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("MongoDB connected successfully");
    });

    connection.on('error', (err) => {
      console.log("MongoDB connection error. Please make sure MongoDB is running! "+ err);
      process.exit();
    });
  } catch (err) {
    console.log("Something went wrong!");
    console.log(err);
  }
}
