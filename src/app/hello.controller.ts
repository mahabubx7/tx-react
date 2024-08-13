import { Get, Route, Tags } from 'tsoa';

@Route('hello')
@Tags('Hello')
export class HelloController {
  @Get('/')
  public async getMessage(): Promise<string> {
    return 'Hello, world!!';
  }

  @Get('/greet')
  public async greet(): Promise<string> {
    return 'Greetings!';
  }
}
