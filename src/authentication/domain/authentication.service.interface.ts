import {
  SignUpRequest,
  LoginRequest,
  VerifyOtpRequest,
  LogoutRequest,
  ConfirmSignUpRequest,
} from './requests/authentication.request';
import {
  ConfirmSignUpResponse,
  LoginWithOtpResponse,
  LoginWithoutOtpResponse,
  LogoutResponse,
  SignUpResponse,
  VerifyOtpResponse,
} from './responses/authentication.response';

export abstract class IAuthenticationService {
  abstract signUp(signUpRequest: SignUpRequest): Promise<SignUpResponse>;
  abstract confirmSignUp(
    confirmSignUpRequest: ConfirmSignUpRequest,
  ): Promise<ConfirmSignUpResponse>;
  abstract loginWithOtp(
    loginRequest: LoginRequest,
  ): Promise<LoginWithOtpResponse>;
  abstract loginWithoutOtp(
    loginRequest: LoginRequest,
  ): Promise<LoginWithoutOtpResponse>;
  abstract verifyOtp(
    verifyOtpRequest: VerifyOtpRequest,
  ): Promise<VerifyOtpResponse>;
  abstract logout(logoutRequest: LogoutRequest): Promise<LogoutResponse>;
}
