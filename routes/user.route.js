import express from "express"

const userRoute=express.Router()

userRoute.post("/signup", async (req, res) => {});

userRoute.post("/signin", async (req, res) => {});

userRoute.get("/purchase", async (req, res) => {
    res.json({
      msg: "purchased courses",
    });
  });

export default userRoute