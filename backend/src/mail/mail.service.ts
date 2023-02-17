import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import * as nodemailer from 'nodemailer';
import { response } from 'express';

@Injectable()
export class MailService {
  sendEmail(createMailDto: CreateMailDto) {
    let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "42b13d47886782",
        pass: "904967a0c2786a"
      }
    });

     transport.sendMail(createMailDto, (err) => {
      if(err) return response.status(400).json({
        erro: true,
        mensagem: "Erro: E-mail não enviado."
      })

      return response.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!"
      });
     });


  }

}
