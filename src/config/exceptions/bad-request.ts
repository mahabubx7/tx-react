import { BaseException } from './base';

export class BadRequestException extends BaseException {
  public code: number = 400;
  public error: Record<string, any> = {};

  constructor(message: string, error: Record<string, any> = {}) {
    super(message);
    this.error = error;
  }
}
