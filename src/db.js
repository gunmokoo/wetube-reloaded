import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true, // it is not necessary to mongoose 6.x ver
  useUnifiedTopology: true, // it is not necessary to mongoose 6.x ver
  // useFindAndModify: false, it is not necessary to mongoose 6.x ver
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
