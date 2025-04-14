import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailingDto } from './dto/send-mailing.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailingService {
  constructor(private mailService: MailerService) {}

  async sendEmail(sendMailingDto: SendMailingDto) {
    try {
      const result = await this.mailService.sendMail({
        from: process.env.SMTP_USERNAME,
        to: process.env.SMTP_USERNAME,
        subject: 'Contact from portfolio',
        html: `<p>name: ${sendMailingDto.name}</p>
        <br>
        <p>Email: ${sendMailingDto.email}</p>
        <br>
        <p>Number: ${sendMailingDto.phoneNumber}</p>
        <br>
        <p>Message: ${sendMailingDto.message}</p>      
        `,
      });

      return result;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Cannot send Email');
    }
  }
}
