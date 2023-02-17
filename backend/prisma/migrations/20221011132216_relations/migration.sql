/*
  Warnings:

  - You are about to drop the column `idTipo` on the `atividade` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idTipoAtividade]` on the table `Atividade` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idArea]` on the table `Atuacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idStartup]` on the table `Atuacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idParticipantes]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[atividadeId]` on the table `TipoAtividade` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pessoaId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idTipoAtividade` to the `Atividade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idParticipantes` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsuario` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atividadeId` to the `TipoAtividade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Atividade_idTipo_key` ON `atividade`;

-- AlterTable
ALTER TABLE `atividade` DROP COLUMN `idTipo`,
    ADD COLUMN `idTipoAtividade` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pessoa` ADD COLUMN `idParticipantes` INTEGER NOT NULL,
    ADD COLUMN `idUsuario` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tipoatividade` ADD COLUMN `atividadeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `pessoaId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Atividade_idTipoAtividade_key` ON `Atividade`(`idTipoAtividade`);

-- CreateIndex
CREATE UNIQUE INDEX `Atuacao_idArea_key` ON `Atuacao`(`idArea`);

-- CreateIndex
CREATE UNIQUE INDEX `Atuacao_idStartup_key` ON `Atuacao`(`idStartup`);

-- CreateIndex
CREATE UNIQUE INDEX `Pessoa_idParticipantes_key` ON `Pessoa`(`idParticipantes`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoAtividade_atividadeId_key` ON `TipoAtividade`(`atividadeId`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_pessoaId_key` ON `Usuario`(`pessoaId`);

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_idTipoAtividade_fkey` FOREIGN KEY (`idTipoAtividade`) REFERENCES `TipoAtividade`(`idTipoAtividade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atuacao` ADD CONSTRAINT `Atuacao_idArea_fkey` FOREIGN KEY (`idArea`) REFERENCES `Area`(`idArea`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atuacao` ADD CONSTRAINT `Atuacao_idStartup_fkey` FOREIGN KEY (`idStartup`) REFERENCES `Startup`(`idStartup`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcao` ADD CONSTRAINT `Funcao_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcao` ADD CONSTRAINT `Funcao_IdTipo_fkey` FOREIGN KEY (`IdTipo`) REFERENCES `TipoFuncao`(`idTipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Integrantes` ADD CONSTRAINT `Integrantes_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Integrantes` ADD CONSTRAINT `Integrantes_idStartup_fkey` FOREIGN KEY (`idStartup`) REFERENCES `Startup`(`idStartup`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participantes` ADD CONSTRAINT `Participantes_idAtividade_fkey` FOREIGN KEY (`idAtividade`) REFERENCES `Atividade`(`idAtividade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_idEmpresa_fkey` FOREIGN KEY (`idEmpresa`) REFERENCES `Empresa`(`idEmpresa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_idParticipantes_fkey` FOREIGN KEY (`idParticipantes`) REFERENCES `Participantes`(`idPessoa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PessoaSkill` ADD CONSTRAINT `PessoaSkill_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PessoaSkill` ADD CONSTRAINT `PessoaSkill_idSkill_fkey` FOREIGN KEY (`idSkill`) REFERENCES `Skill`(`idSkill`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_idArea_fkey` FOREIGN KEY (`idArea`) REFERENCES `Area`(`idArea`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Startup` ADD CONSTRAINT `Startup_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `CategoriaInterna`(`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`idPessoa`) ON DELETE RESTRICT ON UPDATE CASCADE;
