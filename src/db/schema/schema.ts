import { boolean, pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const usersTable = pgTable("users", {
  id: text("id")
    .primaryKey()
    .unique()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  password: text("password"),
  role: text("role", { enum: ["admin", "user"] }).$default(() => {
    return "user";
  }),
  verified: boolean().$default(() => {
    return false;
  }),
  email: text("name").notNull().unique(),
  subscribed: boolean().$default(() => {
    return false;
  }),
  image: text("image"),
});

// NOTE may delete later, through uselessness (check lib/validation)
// NOTE or used as parent type (OOP Baby)
export const UserInsertSchema = createInsertSchema(usersTable);
export const UserSelectSchema = createSelectSchema(usersTable);

export type UserInsertInput = z.infer<typeof UserInsertSchema>;
export type UserSelectInput = z.infer<typeof UserSelectSchema>;

// usage example

// const fillSchema = UserInsertSchema.parse({ name: "I LOVE BOOBS", role: "wrong role" });
// const reqSchemaObj = UserSelectSchema.parse({id: "idk", name: true, email: true})
