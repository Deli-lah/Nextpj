/*
  Warnings:

  - You are about to drop the column `department` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacher` DROP COLUMN `department`,
    ADD COLUMN `departmentId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
