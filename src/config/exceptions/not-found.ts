import { BaseException } from './base';

export class NotFoundException extends BaseException {
  public code: number = 404;
  public error: Record<string, any> = {};

  constructor(message: string, error: Record<string, any> = {}) {
    super(message);
    this.error = error;
  }
}
