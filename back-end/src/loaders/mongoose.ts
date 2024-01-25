import mongoose from "mongoose";

export const loadMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.info("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};
