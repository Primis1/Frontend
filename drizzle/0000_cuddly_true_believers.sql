CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"password" text,
	"role" text,
	"verified" boolean,
	"subscribed" boolean,
	"image" text,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_name_unique" UNIQUE("name")
);
