CREATE TABLE "contacts"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NULL,
    "Phone" TEXT NOT NULL,
    "Address" TEXT NULL,
    "Birthday" DATE NULL
);
ALTER TABLE
    "contacts" ADD PRIMARY KEY("id");