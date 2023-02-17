/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_pessoaId_fkey`;

-- DropTable
DROP TABLE `usuario`;

-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUsuario` VARCHAR(191) NOT NULL,
    `emailUsuario` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `pessoaId` INTEGER NULL,

    UNIQUE INDEX `Usuarios_emailUsuario_key`(`emailUsuario`),
    UNIQUE INDEX `Usuarios_pessoaId_key`(`pessoaId`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE SET NULL ON UPDATE CASCADE;
