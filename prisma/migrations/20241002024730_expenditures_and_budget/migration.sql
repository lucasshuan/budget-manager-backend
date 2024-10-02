/*
  Warnings:

  - You are about to drop the column `componentId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_componentId_fkey";

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_customerId_fkey";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "componentId",
DROP COLUMN "price",
DROP COLUMN "serviceId",
ADD COLUMN     "accepted" BOOLEAN,
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "components" ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "jobs";

-- CreateTable
CREATE TABLE "expenditures" (
    "id" SERIAL NOT NULL,
    "componentId" INTEGER NOT NULL,
    "budgetId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenditures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "expenditures" ADD CONSTRAINT "expenditures_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "components"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenditures" ADD CONSTRAINT "expenditures_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "budgets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
