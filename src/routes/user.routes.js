import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getUser,
  getUsers,
  updateUser,
  createUser,
  deleteUser,
} from "../controllers/users.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get("/users", authRequired, getUsers);
router.get("/users/:id", authRequired, getUser);
router.post(
  "/users",
  authRequired,
  validateSchema(registerSchema),
  createUser
);
router.delete("/users/:id", authRequired, deleteUser);
router.put("/users/:id", authRequired, updateUser);

export default router;
