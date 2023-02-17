import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoFuncaoModule } from './tipo-funcao/tipo-funcao.module';
import { TipoAtividadeModule } from './tipo-atividade/tipo-atividade.module';
import { StartupModule } from './startup/startup.module';
import { SkillModule } from './skill/skill.module';
import { PessoaSkillModule } from './pessoa-skill/pessoa-skill.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ParticipantesModule } from './participantes/participantes.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { FuncaoModule } from './funcao/funcao.module';
import { EmpresaModule } from './empresa/empresa.module';
import { CategoriaInternaModule } from './categoria-interna/categoria-interna.module';
import { AtuacaoModule } from './atuacao/atuacao.module';
import { AtividadeModule } from './atividade/atividade.module';
import { AreaModule } from './area/area.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [AuthModule, PrismaModule, AreaModule, AtividadeModule, 
    AtuacaoModule, CategoriaInternaModule, EmpresaModule, FuncaoModule, 
    IntegrantesModule, ParticipantesModule, PessoaModule, PessoaSkillModule, 
    SkillModule, StartupModule, TipoAtividadeModule, TipoFuncaoModule, 
    UsuarioModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
