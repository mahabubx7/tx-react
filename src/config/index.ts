import path from 'node:path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export * from './cors';
export * from './db';
export * from './env';
export * from './global';
export * from './kernel';
