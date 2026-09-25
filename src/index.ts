import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();
import { contentModel, userModel } from "./db.js";
const JWT_PASSWORD = "123123"
import { userMiddleware } from "./middleware.js";

app.use(express.json())

app.post("/api/v1/signup", async (req, res) => {
  //TODO : zod validation
  const username = req.body.username;
  const password = req.body.password;

  //Todo: hash the password

  await userModel.create({
    username:username,
    password:password
  })

  res.json({
    message:"User signUp successfully"
  })

});
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await userModel.findOne({
    username,
    password
  })
  if(existingUser)
  {
    const token = jwt.sign({
      _id:existingUser._id
    },JWT_PASSWORD)

    res.json({
      token
    })
  }
  else{
    res.status(403).send({
      message:"Incorrect Credentials"
    })
  }
});
app.post("/api/v1/content", userMiddleware , async ( req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  const title = req.body.title
  const tags = req.body.tags
  // @ts-ignore
  const userId = req.userId

 await contentModel.create({
  link,
  type,
  title,
  tags,
  userId
});

  res.json({
    message:"Content Added"
  })

});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await contentModel.find({ userId }).populate("userId","username")
  res.json({
    content
  });
});
app.delete("/api/v1/content", userMiddleware , async (req, res) => {
  const contentId = req.body.contentId;
  
  await contentModel.findByIdAndDelete({
    contentId,
    //@ts-ignore
    userId: req.userId
  });
  res.json({
    message:"Content Deleted"
  })
});

app.post("/api/v1/brain/share", (req, res) => {

});
app.get("/api/v1/brain/:shareLink", (req, res) => {

});

async function connectDB() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://sharmasameep95_db_user:hq01awKFgh6Op6op@cluster0.hhzx1vy.mongodb.net/second-brain",
      )
      .then(() => {
        console.log("DB Connected!");
      });
      // @ts-ignore
  } catch (error: Error) {
    
    console.log(`Error: ${error.message}`);
  }
}
connectDB()

app.listen(3000,()=>{
  console.log("Server running")
})