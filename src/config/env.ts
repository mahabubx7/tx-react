import { envParser } from '@utils';

export const env = {
  port: envParser.get<number>('PORT', ['number', 'unsigned'], 5000),
  host: envParser.get<string>('HOST', ['ipv4'], '0.0.0.0'),
  mongoUri: envParser.get<string>(
    'MONGO_URI',
    ['string'],
    'mongodb://user:user123@127.0.0.1:27017/txjs', // default value
  ),
};
