/*
  Warnings:

  - A unique constraint covering the columns `[orde_nf]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_orde_nf_key" ON "Order"("orde_nf");
