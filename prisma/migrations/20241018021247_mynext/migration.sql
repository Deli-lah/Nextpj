-- CreateTable
CREATE TABLE `Teacher` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contact` INTEGER NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,
    `isMarried` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
