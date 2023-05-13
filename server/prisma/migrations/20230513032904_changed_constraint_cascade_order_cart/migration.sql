-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_cart_id_fkey";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;
