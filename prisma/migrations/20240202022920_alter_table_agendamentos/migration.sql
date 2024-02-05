/*
  Warnings:

  - You are about to drop the column `barberId` on the `agendamento_servico` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `agendamento_servico` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `agendamento_servico` table. All the data in the column will be lost.
  - Added the required column `barberId` to the `agendamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `agendamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `agendamento_servico` DROP FOREIGN KEY `agendamento_servico_barberId_fkey`;

-- DropForeignKey
ALTER TABLE `agendamento_servico` DROP FOREIGN KEY `agendamento_servico_clientId_fkey`;

-- AlterTable
ALTER TABLE `agendamento_servico` DROP COLUMN `barberId`,
    DROP COLUMN `clientId`,
    DROP COLUMN `date`;

-- AlterTable
ALTER TABLE `agendamentos` ADD COLUMN `barberId` VARCHAR(191) NOT NULL,
    ADD COLUMN `clientId` VARCHAR(191) NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_barberId_fkey` FOREIGN KEY (`barberId`) REFERENCES `admins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
