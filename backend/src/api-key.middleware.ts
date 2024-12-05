import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new HttpException(
        'Authorization header is missing',
        HttpStatus.FORBIDDEN,
      );
    }

    const [bearer, apiKey] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !apiKey) {
      throw new HttpException(
        'Invalid Authorization header format',
        HttpStatus.FORBIDDEN,
      );
    }

    const validApiKey = this.configService.get<string>('API_SECRET_KEY');

    if (apiKey !== validApiKey) {
      throw new HttpException('Invalid API key', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
