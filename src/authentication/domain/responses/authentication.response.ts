export class SignUpResponse {
  isUserCreated: boolean;
  userIdentifier: string;
}

export class ConfirmSignUpResponse {
  isConfirmed: boolean;
}

export class LoginWithOtpResponse {
  session: string;
}

export class LoginWithoutOtpResponse {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresInSeconds: number;
}

export class VerifyOtpResponse extends LoginWithoutOtpResponse {}

export class LogoutResponse {
  isLogoutSuccess: boolean;
}
