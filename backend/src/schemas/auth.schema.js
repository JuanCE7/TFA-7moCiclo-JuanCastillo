// import { z } from "zod";

// export const registerSchema = z.object({
//   username: z.string({
//     required_error: "Se requiere un nombre de usuario",
//   }),
//   email: z
//     .string({
//       required_error: "Se requiere un correo electrónico",
//     })
//     .email({
//       message: "El correo electrónico no es válido",
//     }),
//   password: z
//     .string({
//       required_error: "Se requiere una contraseña",
//     })
//     .min(6, {
//       message: "Debe tener al menos 6 caracteres",
//     }),
// });

// export const loginSchema = z.object({
//   email: z
//     .string({
//       required_error: "Se requiere un correo electrónico",
//     })
//     .email({
//       message: "El correo electrónico no es válido",
//     }),
//   password: z
//     .string({
//       required_error: "Se requiere una contraseña",
//     })
//     .min(6, {
//       message: "Debe tener al menos 6 caracteres",
//     }),
// });

import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    min: 2,
    max: 50,
  }),
  last_name: z.string({
    required_error: "Last name is required",
    min: 2,
    max: 50,
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .max(50),
  rol: z.enum(["Estudiante", "Tutor", "Ayudante", "Gestor"]).optional(),
  phone: z.string().max(15).optional(),
  isActive: z.boolean().optional(),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Se requiere un correo electrónico",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "Se requiere una contraseña",
    })
    .min(6, {
      message: "Debe tener al menos 6 caracteres",
    }),
});
