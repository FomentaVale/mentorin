-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_pessoaId_fkey`;

-- AlterTable
ALTER TABLE `usuario` MODIFY `pessoaId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE SET NULL ON UPDATE CASCADE;
