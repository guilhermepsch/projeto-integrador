/*
  Warnings:

  - Added the required column `clca_expiration_date` to the `ClientCards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientCards" ADD COLUMN     "clca_expiration_date" TEXT NOT NULL;
