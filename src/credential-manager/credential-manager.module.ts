import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsCredentialService } from './aws-credential.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AwsCredentialService],
  exports: [AwsCredentialService],
})
export class CredentialManagerModule {}
