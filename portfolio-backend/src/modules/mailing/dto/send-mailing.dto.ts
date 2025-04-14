import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SendMailingDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
