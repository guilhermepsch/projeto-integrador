-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_secret" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "empl_id" SERIAL NOT NULL,
    "empl_pis" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("empl_id")
);

-- CreateTable
CREATE TABLE "Client" (
    "clie_id" SERIAL NOT NULL,
    "clie_age" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("clie_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_empl_pis_key" ON "Employee"("empl_pis");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_user_id_key" ON "Employee"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_user_id_key" ON "Client"("user_id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
