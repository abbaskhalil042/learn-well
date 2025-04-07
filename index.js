import express from "express";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";

const app = express();

app.use(express.json());

//*user route
app.use("/user", userRoute); //! userRoute(app) ->>> i could do this too

//*course route
app.use("/course", courseRoute); //! courseRoute(app) ->>>> i could do this too

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
