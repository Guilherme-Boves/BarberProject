-- CreateTable
CREATE TABLE `agendamentos` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendamento_servico` (
    `id` VARCHAR(191) NOT NULL,
    `agendamentoId` VARCHAR(191) NOT NULL,
    `barberId` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `servicoId` VARCHAR(191) NOT NULL,
    `Date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agendamento_servico` ADD CONSTRAINT `agendamento_servico_agendamentoId_fkey` FOREIGN KEY (`agendamentoId`) REFERENCES `agendamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamento_servico` ADD CONSTRAINT `agendamento_servico_barberId_fkey` FOREIGN KEY (`barberId`) REFERENCES `admins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamento_servico` ADD CONSTRAINT `agendamento_servico_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamento_servico` ADD CONSTRAINT `agendamento_servico_servicoId_fkey` FOREIGN KEY (`servicoId`) REFERENCES `servicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
