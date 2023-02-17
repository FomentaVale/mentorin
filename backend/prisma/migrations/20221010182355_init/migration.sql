-- CreateTable
CREATE TABLE `Area` (
    `idArea` INTEGER NOT NULL AUTO_INCREMENT,
    `descricaoArea` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idArea`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atividade` (
    `idAtividade` INTEGER NOT NULL AUTO_INCREMENT,
    `idTipo` INTEGER NOT NULL,
    `tituloAtividade` VARCHAR(191) NOT NULL,
    `dataAtividade` VARCHAR(191) NOT NULL,
    `duracaoAtividade` VARCHAR(191) NOT NULL,
    `linkAtividade` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Atividade_idTipo_key`(`idTipo`),
    UNIQUE INDEX `Atividade_linkAtividade_key`(`linkAtividade`),
    PRIMARY KEY (`idAtividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atuacao` (
    `idAtuacao` INTEGER NOT NULL AUTO_INCREMENT,
    `descricaoAtuacao` VARCHAR(191) NOT NULL,
    `idArea` INTEGER NOT NULL,
    `idStartup` INTEGER NOT NULL,

    PRIMARY KEY (`idAtuacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriaInterna` (
    `idCategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `descricaoCategoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empresa` (
    `idEmpresa` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFantasiaEmpresa` VARCHAR(191) NOT NULL,
    `telefoneEmpresa` VARCHAR(191) NOT NULL,
    `emailContaEmpresa` VARCHAR(191) NOT NULL,
    `cnpjEmpresa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEmpresa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcao` (
    `idFuncao` INTEGER NOT NULL AUTO_INCREMENT,
    `idPessoa` INTEGER NOT NULL,
    `IdTipo` INTEGER NOT NULL,

    UNIQUE INDEX `Funcao_idPessoa_key`(`idPessoa`),
    UNIQUE INDEX `Funcao_IdTipo_key`(`IdTipo`),
    PRIMARY KEY (`idFuncao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Integrantes` (
    `idIntegante` INTEGER NOT NULL AUTO_INCREMENT,
    `idPessoa` INTEGER NOT NULL,
    `idStartup` INTEGER NOT NULL,

    UNIQUE INDEX `Integrantes_idPessoa_key`(`idPessoa`),
    UNIQUE INDEX `Integrantes_idStartup_key`(`idStartup`),
    PRIMARY KEY (`idIntegante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participantes` (
    `idParticipantes` INTEGER NOT NULL AUTO_INCREMENT,
    `idPessoa` INTEGER NOT NULL,
    `idAtividade` INTEGER NOT NULL,

    UNIQUE INDEX `Participantes_idPessoa_key`(`idPessoa`),
    UNIQUE INDEX `Participantes_idAtividade_key`(`idAtividade`),
    PRIMARY KEY (`idParticipantes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `idPessoa` INTEGER NOT NULL AUTO_INCREMENT,
    `nomePessoa` VARCHAR(191) NOT NULL,
    `fonePessoa` VARCHAR(191) NOT NULL,
    `emailPessoa` VARCHAR(191) NOT NULL,
    `idEmpresa` INTEGER NOT NULL,

    UNIQUE INDEX `Pessoa_idEmpresa_key`(`idEmpresa`),
    PRIMARY KEY (`idPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PessoaSkill` (
    `idPessoaSkill` INTEGER NOT NULL AUTO_INCREMENT,
    `idPessoa` INTEGER NOT NULL,
    `idSkill` INTEGER NOT NULL,

    UNIQUE INDEX `PessoaSkill_idPessoa_key`(`idPessoa`),
    UNIQUE INDEX `PessoaSkill_idSkill_key`(`idSkill`),
    PRIMARY KEY (`idPessoaSkill`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `idSkill` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeSkill` VARCHAR(191) NOT NULL,
    `nivelSkill` VARCHAR(191) NOT NULL,
    `idArea` INTEGER NOT NULL,

    UNIQUE INDEX `Skill_idArea_key`(`idArea`),
    PRIMARY KEY (`idSkill`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Startup` (
    `idStartup` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFantasiaStartup` VARCHAR(191) NOT NULL,
    `dataCriacaoStartup` VARCHAR(191) NOT NULL,
    `dataEntradaStartup` VARCHAR(191) NOT NULL,
    `imagemStartup` VARCHAR(191) NOT NULL,
    `startupStatus` VARCHAR(191) NOT NULL,
    `idCategoria` INTEGER NOT NULL,

    UNIQUE INDEX `Startup_idCategoria_key`(`idCategoria`),
    PRIMARY KEY (`idStartup`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoAtividade` (
    `idTipoAtividade` INTEGER NOT NULL AUTO_INCREMENT,
    `idAtividade` INTEGER NOT NULL,
    `tituloAtividade` VARCHAR(191) NOT NULL,
    `descricaoAtividade` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TipoAtividade_idAtividade_key`(`idAtividade`),
    PRIMARY KEY (`idTipoAtividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoFuncao` (
    `idTipo` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFuncao` VARCHAR(191) NOT NULL,
    `descricaoFuncao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUsuario` VARCHAR(191) NOT NULL,
    `emailUsuario` VARCHAR(191) NOT NULL,
    `senhaUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
