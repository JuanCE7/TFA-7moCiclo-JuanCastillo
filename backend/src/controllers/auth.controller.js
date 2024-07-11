// import bcrypt from "bcryptjs";
// import User from "../models/user.model.js";
// import jwt from "jsonwebtoken";
// import { createAccessToken } from "../libs/jwt.js";
// import { TOKEN_SECRET } from "../config.js";

// export const register = async (req, res) => {
//   const { email, password, username } = req.body;

//   try {
//     const userFound = await User.findOne({ email });
//     if (userFound) return res.status(400).json(["El correo electrónico ya está en uso"]);
//     const passwordHash = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: passwordHash,
//       rol: "Estudiante",
//     });

//     const userSaved = await newUser.save();
//     const token = await createAccessToken({ id: userSaved._id });

//     res.cookie("token", token);
//     res.json({
//       id: userSaved._id,
//       username: userSaved.username,
//       email: userSaved.email,
//       rol: userSaved.rol,
//       createdAt: userSaved.createdAt,
//       updateAt: userSaved.updatedAt,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userFound = await User.findOne({ email });

//     if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

//     const isMatch = await bcrypt.compare(password, userFound.password);

//     if (!isMatch)
//       return res.status(400).json({ message: "Contraseña Incorrecta" });

//     const token = await createAccessToken({ id: userFound._id });

//     res.cookie("token", token);
//     res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//       rol: userFound.rol,
//       createdAt: userFound.createdAt,
//       updateAt: userFound.updatedAt,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const logout = (req, res) => {
//   res.cookie("token", "", {
//     expires: new Date(0),
//   });
//   return res.sendStatus(200);
// };

// export const profile = async (req, res) => {
//   const userFound = await User.findById(req.user.id);

//   if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

//   return res.json({
//     id: userFound._id,
//     username: userFound.username,
//     email: userFound.email,
//     rol: userFound.rol,
//     createdAt: userFound.createdAt,
//     updateAt: userFound.updatedAt,
//   });
// };

// export const verifyToken = async (req, res) => {
//   const { token } = req.cookies;
//   if (!token) return res.sendStatus(401).json({message: "No autorizado"})

//   jwt.verify(token, TOKEN_SECRET, async (error, user) => {
//     if (error) return res.sendStatus(401).json({message: "No autorizado"})

//     const userFound = await User.findById(user.id);
//     if (!userFound) return res.sendStatus(401).json({message: "No autorizado"})

//     return res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//     });
//   });
// };

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, last_name, email, password } = req.body;
    console.log(req.body);
    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);
    // creating the user
    const newUser = new User({
      name,
      last_name,
      email,
      password: passwordHash,
      isActive: true,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    // create access token
    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      last_name: userSaved.last_name,
      email: userSaved.email,
      rol: userSaved.rol,
      phone: userSaved.phone,
      isActive: userSaved.isActive,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccessToken({
      id: userFound._id,
    });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      name: userFound.name,
      last_name: userFound.last_name,
      email: userFound.email,
      rol: userFound.rol,
      phone: userFound.phone,
      isActive: userFound.isActive,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.sendStatus(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.sendStatus(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      name: userFound.name,
      lastName: userFound.last_name,
      email: userFound.email,
    });
  });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    rol: userFound.rol,
    createdAt: userFound.createdAt,
    updateAt: userFound.updatedAt,
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
