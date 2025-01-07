import { SignInType, SignupType } from "@/types/auth";
import { z, ZodType } from "zod";



export const SignupSchema: ZodType<SignupType> = z
  .object({
    name: z
      .string()
      .min(4, { message: "your full name must be atleast 4 characters long" }),
    email: z.string().email({ message: "Incorrect email format" }),
    password: z
      .string()
      .min(6, { message: "your password must be atleast 6 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((val) => val.password == val.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });


  export const SignInSchema: ZodType<SignInType> = z
  .object({
    email: z.string().email({ message: "Incorrect email format" }),
    password: z
      .string()
      .min(6, { message: "your password must be atleast 6 characters long" }),
  
  })
