-- DropForeignKey
ALTER TABLE `atividade` DROP FOREIGN KEY `Atividade_idTipoAtividade_fkey`;

-- DropForeignKey
ALTER TABLE `atuacao` DROP FOREIGN KEY `Atuacao_idArea_fkey`;

-- DropForeignKey
ALTER TABLE `atuacao` DROP FOREIGN KEY `Atuacao_idStartup_fkey`;

-- DropForeignKey
ALTER TABLE `funcao` DROP FOREIGN KEY `Funcao_IdTipo_fkey`;

-- DropForeignKey
ALTER TABLE `funcao` DROP FOREIGN KEY `Funcao_idPessoa_fkey`;

-- DropForeignKey
ALTER TABLE `integrantes` DROP FOREIGN KEY `Integrantes_idPessoa_fkey`;

-- DropForeignKey
ALTER TABLE `integrantes` DROP FOREIGN KEY `Integrantes_idStartup_fkey`;

-- DropForeignKey
ALTER TABLE `participantes` DROP FOREIGN KEY `Participantes_idAtividade_fkey`;

-- DropForeignKey
ALTER TABLE `pessoa` DROP FOREIGN KEY `Pessoa_idEmpresa_fkey`;

-- DropForeignKey
ALTER TABLE `pessoa` DROP FOREIGN KEY `Pessoa_idParticipantes_fkey`;

-- DropForeignKey
ALTER TABLE `pessoaskill` DROP FOREIGN KEY `PessoaSkill_idPessoa_fkey`;

-- DropForeignKey
ALTER TABLE `pessoaskill` DROP FOREIGN KEY `PessoaSkill_idSkill_fkey`;

-- DropForeignKey
ALTER TABLE `startup` DROP FOREIGN KEY `Startup_idCategoria_fkey`;
