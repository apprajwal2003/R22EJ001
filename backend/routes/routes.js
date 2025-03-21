import express from "express";
import { topUsers, trendingPosts, feed } from "../controllers/controllers.js";

const router = express.Router();

//route to get topusers
router.get("/topUsers", topUsers);
//route to get trending post
router.get("/trending", trendingPosts);
//route to get feed
router.get("/feed", feed);

export default router;
