import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    return 'all cats';
  }

  // cats/:id
  @Get(':id')
  getOneCat(): string {
    return 'one cat';
  }

  @Post()
  createCat(): string {
    return 'create cat';
  }

  @Put(':id')
  updatePartialCat(): string {
    return 'update cat';
  }

  @Delete(':id')
  deleteCat(): string {
    return 'delete cat';
  }
}
