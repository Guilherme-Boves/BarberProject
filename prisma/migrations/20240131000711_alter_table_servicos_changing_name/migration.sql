/*
  Warnings:

  - You are about to drop the `servico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `servico`;

-- CreateTable
CREATE TABLE `servicos` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
