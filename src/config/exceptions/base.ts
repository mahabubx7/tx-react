export class BaseException extends Error {
  public code: number = 400;
  public error: Record<string, any> = {};

  constructor(message: string) {
    super(message);
  }
}
