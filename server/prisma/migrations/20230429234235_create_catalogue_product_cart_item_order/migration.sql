-- CreateTable
CREATE TABLE "Catalogue" (
    "cata_id" SERIAL NOT NULL,
    "cata_title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("cata_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "prod_id" SERIAL NOT NULL,
    "prod_name" TEXT NOT NULL,
    "prod_price" DOUBLE PRECISION NOT NULL,
    "prod_description" TEXT NOT NULL,
    "prod_image" TEXT NOT NULL,
    "cata_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cart_id" SERIAL NOT NULL,
    "clie_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "Item" (
    "item_id" SERIAL NOT NULL,
    "prod_id" INTEGER NOT NULL,
    "cart_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "orde_id" SERIAL NOT NULL,
    "orde_nf" TEXT NOT NULL,
    "orde_status" INTEGER NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orde_id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cata_id_fkey" FOREIGN KEY ("cata_id") REFERENCES "Catalogue"("cata_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_clie_id_fkey" FOREIGN KEY ("clie_id") REFERENCES "Client"("clie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("cart_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("cart_id") ON DELETE RESTRICT ON UPDATE CASCADE;
