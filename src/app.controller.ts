import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ConfirmSignUpRequest,
  SignUpRequest,
} from './authentication/domain/requests/authentication.request';
import { CognitoAuthenticationService } from './authentication/infrastructure/cognito-authentication.service';
import { AwsCredentialService } from './credential-manager/aws-credential.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private cognitoAuthenticationService: CognitoAuthenticationService,
  ) {}

  @Get('/save')
  saveAuthorAndBook(): string {
    return this.appService.saveAuthorAndBook();
  }

  @Get('/authors')
  getAuthors() {
    return this.appService.getAuthors();
  }

  @Get('/sign-up')
  async testSignUp() {
    const signUpRequest: SignUpRequest = {
      username: 'johndoe',
      password: 'password123',
      phoneCountryCode: '+65',
      phoneNumber: '00000000', //put your number here to test
      email: 'johndoe@gmail.com', //put your email here to test
    };
    return this.cognitoAuthenticationService.signUp(signUpRequest);
  }

  @Get('/confirm-sign-up/:otp')
  async testConfirmSignUp(@Param('otp') otp: string) {
    const request: ConfirmSignUpRequest = {
      username: 'johndoe',
      otp,
    };
    return this.cognitoAuthenticationService.confirmSignUp(request);
  }
}
