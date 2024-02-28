import { connect, ConnectOptions } from "mongoose";
require("dotenv").config();
export const dbConnect = () => {
  console.log(process.env.MONGODB_URL!);
  connect("mongodb://127.0.0.1:27017/orderdb").then(
    () => {
      console.log("Database connected successfully");
    },
    (error) => {
      console.error("Database connection failed");
      console.error(error);
    }
  );
};
