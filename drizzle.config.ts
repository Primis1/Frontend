import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  //  `out` - allows you to define the folder  
  //  for your migrations and a folder,
  //  where drizzle will introspect the schema and relations
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
