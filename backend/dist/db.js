//create user models and schemas
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const contentSchema = new Schema({
    link: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["youtube", "twitter", "other"],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
        },
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});
const tagSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});
const linkSchema = new Schema({
    hash: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true,
    },
});
export const userModel = mongoose.model("user", userSchema);
export const contentModel = mongoose.model("content", contentSchema);
export const tagModel = mongoose.model("tags", tagSchema);
export const linkModel = mongoose.model("link", linkSchema);
//# sourceMappingURL=db.js.map