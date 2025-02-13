/*
  Warnings:

  - You are about to drop the `Aluguel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Aluguel";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "aluguel" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "movieId"),
    CONSTRAINT "aluguel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "aluguel_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
