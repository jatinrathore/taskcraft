import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long" })
    .max(50),
  email: z.string().email({ message: "Please provide a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters long" })
    .max(50),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters long" })
    .max(50),
});
