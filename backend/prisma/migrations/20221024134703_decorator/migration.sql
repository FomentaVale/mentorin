/*
  Warnings:

  - You are about to drop the column `pessoaId` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pessoaIdFk]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_pessoaId_fkey`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `pessoaId`,
    ADD COLUMN `pessoaIdFk` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_pessoaIdFk_key` ON `Usuarios`(`pessoaIdFk`);

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_pessoaIdFk_fkey` FOREIGN KEY (`pessoaIdFk`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE SET NULL ON UPDATE CASCADE;
