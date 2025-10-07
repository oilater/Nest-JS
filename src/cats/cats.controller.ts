import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCats(): string {
    throw new HttpException('api is broken', HttpStatus.FORBIDDEN);
    return 'all cats';
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number): string {
    console.log(typeof param);
    return `one cat: ${param}`;
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
