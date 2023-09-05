import {
  CognitoIdentityProvider,
  ConfirmSignUpCommand,
  ConfirmSignUpCommandOutput,
  SignUpCommand,
  SignUpCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';
import { AwsCredentialService } from '../../credential-manager/aws-credential.service';
import { IAuthenticationService } from '../domain/authentication.service.interface';
import {
  SignUpRequest,
  LoginRequest,
  VerifyOtpRequest,
  LogoutRequest,
  ConfirmSignUpRequest,
} from '../domain/requests/authentication.request';
import {
  SignUpResponse,
  LoginWithOtpResponse,
  LoginWithoutOtpResponse,
  VerifyOtpResponse,
  LogoutResponse,
  ConfirmSignUpResponse,
} from '../domain/responses/authentication.response';

@Injectable()
export class CognitoAuthenticationService implements IAuthenticationService {
  private client: CognitoIdentityProvider;
  private CLIENT_ID: string;
  private CLIENT_SECRET: string;
  private AWS_REGION: string;
  private USER_POOL_ID: string;
  constructor(
    private configService: ConfigService,
    private credentialHelper: AwsCredentialService,
  ) {
    this.CLIENT_ID = configService.get<string>('COGNITO_CLIENT_ID');
    this.CLIENT_SECRET = configService.get<string>('COGNITO_CLIENT_SECRET');
    this.AWS_REGION = configService.get<string>('REGION');
    this.USER_POOL_ID = configService.get<string>('COGNITO_USER_POOL_ID');
    const awsCredentials = this.credentialHelper.getCredentials();
    this.client = new CognitoIdentityProvider({
      credentials: awsCredentials,
      region: this.AWS_REGION,
    });
  }
  async signUp(signUpRequest: SignUpRequest): Promise<SignUpResponse> {
    const { username, password, phoneCountryCode, phoneNumber, email } =
      signUpRequest;
    const fullPhoneNumber = phoneCountryCode + phoneNumber;
    const input = {
      // SignUpRequest
      ClientId: this.CLIENT_ID,
      SecretHash: this.calculateSecretHash(username),
      Username: username,
      Password: password,
      UserAttributes: [
        {
          Name: 'phone_number',
          Value: fullPhoneNumber,
        },
        {
          Name: 'email',
          Value: email,
        },
      ],
      // UserContextData: {
      //   // UserContextDataType
      //   IpAddress: 'STRING_VALUE',
      //   EncodedData: 'STRING_VALUE',
      // },
    };
    const command = new SignUpCommand(input);
    const response: SignUpCommandOutput = await this.client.send(command);
    console.log('Cognito SignUp Response:');
    console.log(response);
    const signUpResponse: SignUpResponse = {
      isUserCreated: response?.UserConfirmed,
      userIdentifier: response?.UserSub,
    };
    return signUpResponse;
  }
  async confirmSignUp(
    confirmSignUpRequest: ConfirmSignUpRequest,
  ): Promise<ConfirmSignUpResponse> {
    const { username, otp } = confirmSignUpRequest;
    const input = {
      // ConfirmSignUpRequest
      ClientId: this.CLIENT_ID,
      SecretHash: this.calculateSecretHash(username),
      Username: username,
      ConfirmationCode: otp,
      // UserContextData: {
      //   // UserContextDataType
      //   IpAddress: 'STRING_VALUE',
      //   EncodedData: 'STRING_VALUE',
      // },
    };
    console.log(input);
    const command = new ConfirmSignUpCommand(input);
    const response: ConfirmSignUpCommandOutput = await this.client.send(
      command,
    );
    const confirmSignUpResponse: ConfirmSignUpResponse = {
      isConfirmed: !!response?.$metadata,
    };
    return confirmSignUpResponse;
  }

  loginWithOtp(loginRequest: LoginRequest): Promise<LoginWithOtpResponse> {
    throw new Error('Method not implemented.');
  }
  loginWithoutOtp(
    loginRequest: LoginRequest,
  ): Promise<LoginWithoutOtpResponse> {
    throw new Error('Method not implemented.');
  }
  verifyOtp(verifyOtpRequest: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    throw new Error('Method not implemented.');
  }
  logout(logoutRequest: LogoutRequest): Promise<LogoutResponse> {
    throw new Error('Method not implemented.');
  }

  private calculateSecretHash(username: string) {
    const message = username + this.CLIENT_ID;
    const hmac = createHmac('sha256', this.CLIENT_SECRET);
    hmac.update(message);
    return hmac.digest('base64');
  }
}
