import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();
import { contentModel, linkModel, userModel } from "./db.js";
const JWT_PASSWORD = "123123";
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    //TODO : zod validation
    const username = req.body.username;
    const password = req.body.password;
    //Todo: hash the password
    await userModel.create({
        username: username,
        password: password
    });
    res.json({
        message: "User signUp successfully"
    });
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
        username,
        password
    });
    if (existingUser) {
        const token = jwt.sign({
            _id: existingUser._id
        }, JWT_PASSWORD);
        res.json({
            token
        });
    }
    else {
        res.status(403).send({
            message: "Incorrect Credentials"
        });
    }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    const tags = req.body.tags;
    // @ts-ignore
    const userId = req.userId;
    // @ts-ignore
    const authorId = req.userId;
    await contentModel.create({
        link,
        type,
        title,
        tags,
        userId,
        authorId
    });
    res.json({
        message: "Content Added"
    });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({ userId }).populate("userId", "username");
    res.json({
        content
    });
});
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await contentModel.findOneAndDelete({
        contentId,
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Content Deleted"
    });
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    try {
        const share = req.body.share;
        console.log("Share request received");
        console.log("share:", share);
        //@ts-ignore
        console.log("userId:", req.userId);
        if (share) {
            const existingLink = await linkModel.findOne({
                // @ts-ignore
                userId: req.userId,
            });
            console.log("Existing link:", existingLink);
            if (existingLink) {
                res.json({
                    message: "/share/" + existingLink.hash,
                });
                return;
            }
            const hash = random(10);
            const link = await linkModel.create({
                // @ts-ignore
                userId: req.userId,
                hash,
            });
            console.log("Created link:", link);
            res.json({
                message: "/share/" + link.hash,
            });
            return;
        }
        await linkModel.deleteOne({
            // @ts-ignore
            userId: req.userId,
        });
        res.json({
            message: "Share link removed",
        });
    }
    catch (error) {
        console.error("Share error:", error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({ hash });
    if (!link) {
        res.status(411).json({
            message: "Sorry",
        });
        return;
    }
    console.log("Share link:", link);
    console.log("User ID from share link:", link.userId);
    const content = await contentModel.find({
        userId: link.userId,
    });
    const user = await userModel.findOne({
        _id: link.userId,
    });
    res.json({
        username: user?.username,
        content,
    });
});
async function connectDB() {
    try {
        await mongoose
            .connect("mongodb+srv://sharmasameep95_db_user:hq01awKFgh6Op6op@cluster0.hhzx1vy.mongodb.net/second-brain")
            .then(() => {
            console.log("DB Connected!");
        });
        // @ts-ignore
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
connectDB();
app.listen(3000, () => {
    console.log("Server running");
});
//# sourceMappingURL=index.js.map