import express from "express";

const app = express();

app.post("user/signup", async (req, res) => {});

app.post("user/signin", async (req, res) => {});
//*purchased course by the user
app.get("/user/purchased", async (req, res) => {
  res.json({
    msg: "purchased courses",
  });
});
//*all course
app.get("/courses", async (req, res) => {
  res.json({
    msg: "all courses",
  });
});

//*user wants to purchase the courses
app.post("/course/purchase",async()=>{
    
})
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
