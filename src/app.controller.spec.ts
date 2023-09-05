import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mockAuthor } from './database/domain/models/mocks/author.mock';
import { IDataService } from './database/domain/services/data.service.interface';
import { mockDataService } from './database/domain/services/mocks/data-service.mock';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    jest.clearAllMocks();
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: IDataService, useValue: mockDataService },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Authors"', async () => {
      const result = await appController.getAuthors();
      expect(result).toEqual([mockAuthor]);
    });
  });
});
