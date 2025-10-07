import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

type ErrorResponse =
  | {
      error: string;
      statusCode: number;
      message: string | string[];
    }
  | string;

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as ErrorResponse;

    if (typeof error === 'string') {
      return response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    }

    return response.status(status).json({
      success: false,
      timestamp: new Date().toISOString(),
      ...error,
    });
  }
}
