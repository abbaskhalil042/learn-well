import express from "express";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import dotenv from "dotenv";
import adminRoute from "./routes/admin.route.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
dotenv.config();
//*user route
app.use("/api/v1/user", userRoute); //! userRoute(app) ->>> i could do this too
//* admin route
app.use("/api/v1/admin", adminRoute); //! adminRoute(app) ->>> i could do this too
//*course route
app.use("/api/v1/course", courseRoute); //! courseRoute(app) ->>>> i could do this too

app.get("/", (req, res) => {
  res.json({
    msg: "test",
  });
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
