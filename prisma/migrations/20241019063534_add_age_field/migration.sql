/*
  Warnings:

  - Added the required column `age` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacher` ADD COLUMN `age` INTEGER NOT NULL;
