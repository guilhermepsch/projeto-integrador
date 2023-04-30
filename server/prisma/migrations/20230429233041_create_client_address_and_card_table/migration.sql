/*
  Warnings:

  - Added the required column `updated_at` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ClientCards" (
    "clca_id" SERIAL NOT NULL,
    "clca_cvv" INTEGER NOT NULL,
    "clca_holder_name" TEXT NOT NULL,
    "clca_cpf" TEXT NOT NULL,
    "clca_number" TEXT NOT NULL,
    "client_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientCards_pkey" PRIMARY KEY ("clca_id")
);

-- CreateTable
CREATE TABLE "ClientAddress" (
    "clad_id" SERIAL NOT NULL,
    "clad_street" TEXT NOT NULL,
    "clad_number" TEXT NOT NULL,
    "clad_other" TEXT NOT NULL,
    "clad_cep" TEXT NOT NULL,
    "clad_city" TEXT NOT NULL,
    "clad_state" TEXT NOT NULL,
    "client_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientAddress_pkey" PRIMARY KEY ("clad_id")
);

-- AddForeignKey
ALTER TABLE "ClientCards" ADD CONSTRAINT "ClientCards_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("clie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAddress" ADD CONSTRAINT "ClientAddress_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("clie_id") ON DELETE RESTRICT ON UPDATE CASCADE;
