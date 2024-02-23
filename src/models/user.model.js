// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     rol: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt to the schema
//   }
// );

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const Rol = {
  STUDENT: "Estudiante",
  TUTOR: "Tutor",
  ASSISTANT: "Ayudante",
  MANAGER: "Gestor",
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: [Rol.STUDENT, Rol.TUTOR, Rol.ASSISTANT, Rol.MANAGER],
      default: Rol.STUDENT,
    },
    phone: {
      type: String,
      default: "000000000",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
