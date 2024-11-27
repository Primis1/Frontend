import { UserInsertSchema } from "@/db/schema/schema";
import { z } from "zod";


// TODO read a doc about refine()
export const RegisterUserSchema = UserInsertSchema.extend({
  passwordConfirm: z.string().min(1, "Confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Password do not match",
});


// https://codevoweb.com/jwt-authentication-in-nextjs-13-api-route-handlers/#running-the-nextjs-13-jwt-api-project-locally