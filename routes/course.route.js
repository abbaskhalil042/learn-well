import express from "express";

const courseRoute = express.Router();

//*purchased course by the user

//*all course
courseRoute.get("/purchase", async (req, res) => {
  res.json({
    msg: "all courses",
  });
});

//*user wants to purchase the courses
courseRoute.post("/preview", async () => {});


export default courseRoute