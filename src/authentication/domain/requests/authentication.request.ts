export class SignUpRequest {
  username: string;
  password: string;
  phoneCountryCode: string;
  phoneNumber: string;
  email: string;
}

export class ConfirmSignUpRequest {
  username: string;
  otp: string;
}

export class LoginRequest {
  username: string;
  password: string;
}

export class VerifyOtpRequest {
  username: string;
  session: string;
  otp: string;
}

export class LogoutRequest {
  accessToken: string;
}
