import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();

app.post("api/v1/signup", (req, res) => {});
app.post("api/v1/signin", (req, res) => {});
app.post("api/v1/content", (req, res) => {});
app.get("api/v1/content", (req, res) => {});
app.delete("api/v1/content", (req, res) => {});

app.post("api/v1/brain/share", (req, res) => {});
app.get("api/v1/brain/:shareLink", (req, res) => {});

async function connectDB() {
  try {
    const conn = await mongoose
      .connect(
        "mongodb+srv://sharmasameep95_db_user:hq01awKFgh6Op6op@cluster0.hhzx1vy.mongodb.net/",
      )
      .then(() => {
        console.log("DB Connected!");
      });
      // @ts-ignore
  } catch (error: Error) {
    
    console.log(`Error: ${error.message}`);
  }
}

app.listen(3000,()=>{
  console.log("Server running")
})