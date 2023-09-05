import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AwsCredentialService } from './aws-credential.service';
describe('credentialHelper', () => {
  let service: AwsCredentialService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsCredentialService, ConfigService],
    }).compile();
    service = module.get<AwsCredentialService>(AwsCredentialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
