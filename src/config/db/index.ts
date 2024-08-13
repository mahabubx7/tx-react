import { env } from '@config';
import { logger } from '@utils';
import { connect } from 'mongoose';

export async function connectMongoDb() {
  // console.log('::ENV:: ', env.mongoUri);
  await connect(env.mongoUri)
    .then(() => {
      logger.info('🥭 Connected to MongoDB!');
    })
    .catch((err) => {
      logger.error('❌ Error connecting to MongoDB:', err);
    });
}
