/*
  Warnings:

  - You are about to drop the column `accepted` on the `budgets` table. All the data in the column will be lost.
  - Added the required column `status` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `expenditures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "accepted",
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "expenditures" ADD COLUMN     "quantity" INTEGER NOT NULL;
