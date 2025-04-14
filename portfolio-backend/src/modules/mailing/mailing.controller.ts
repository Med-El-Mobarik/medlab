import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { MailingService } from './mailing.service';
import { SendMailingDto } from './dto/send-mailing.dto';

@Controller('mailing')
export class MailingController {
  constructor(private readonly mailingService: MailingService) {}

  @Post()
  async sendMailing(@Body() sendMailingDto: SendMailingDto){
    return this.mailingService.sendEmail(sendMailingDto)
  }
}
