/*
  Warnings:

  - You are about to drop the column `senhaUsuario` on the `usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idUsuario]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hash` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `senhaUsuario`,
    ADD COLUMN `hash` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pessoa_idUsuario_key` ON `Pessoa`(`idUsuario`);
