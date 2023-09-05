import { Module } from '@nestjs/common';
import { CredentialManagerModule } from '../credential-manager/credential-manager.module';
import { CognitoAuthenticationService } from './infrastructure/cognito-authentication.service';

@Module({
  imports: [CredentialManagerModule],
  providers: [CognitoAuthenticationService],
  exports: [CognitoAuthenticationService],
})
export class AuthenticationModule {}
