import { Test, TestingModule } from '@nestjs/testing';
import { CognitoAuthenticationService } from './cognito-authentication.service';

describe('AuthenticationService', () => {
  let service: CognitoAuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CognitoAuthenticationService],
    }).compile();

    service = module.get<CognitoAuthenticationService>(
      CognitoAuthenticationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
