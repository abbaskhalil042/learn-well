import express from "express";

const adminRoute = express.Router();

adminRoute.post("/signup", async (req, res) => {
  res.json({
    msg: "signup",
  });
});

adminRoute.post("/signin", async (req, res) => {});

adminRoute.post("/create-course", async (req, res) => {
  res.json({
    msg: "purchased courses",
  });
});

adminRoute.get("/get-all-course", (req, res) => {
  res.json({
    msg: "purchased courses",
  });
});
adminRoute.put("/update-course", async (req, res) => {
  res.json({
    msg: "purchased courses",
  });
});

adminRoute.delete("/delete-course", async (req, res) => {
  res.json({
    msg: "purchased courses",
  });
});

export default adminRoute;
