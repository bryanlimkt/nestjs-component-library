import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/save')
  saveAuthorAndBook(): string {
    return this.appService.saveAuthorAndBook();
  }

  @Get('/authors')
  getAuthors() {
    return this.appService.getAuthors();
  }
}
