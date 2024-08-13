import { kernel } from '@config';
import express from 'express';

const app = express();

kernel(app); // <== root-level registry manager

export { app };
