-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cata_id_fkey";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cata_id_fkey" FOREIGN KEY ("cata_id") REFERENCES "Catalogue"("cata_id") ON DELETE CASCADE ON UPDATE CASCADE;
