import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all users
router.get("/", protect, getUsers);

// Get single user
router.get("/:id", protect, getUserById);

// Create user
router.post("/", createUser);

// Update user
router.put("/:id", protect, updateUser);

// Delete user
router.delete("/:id", protect, deleteUser);

export default router;