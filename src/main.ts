import { connectMongoDb, env } from '@config';
import { logger } from '@utils';
import { networkInterfaces } from 'os';
import { app } from './app';

async function boot() {
  // pre-boot operations
  // connect to the database
  await connectMongoDb();

  // Start the server
  app.listen(env.port, env.host, () => {
    // discover the ip address of this machine
    const ips = networkInterfaces() as Record<string, any>;
    const ipInterfaces = Object.values(ips)
      .flat()
      .filter((ip) => ip.family === 'IPv4')
      .map((ip) => ip.address);

    logger.info(`::> Server is ready!`);

    let ipv4List = '';
    ipInterfaces.map((ip) => {
      ipv4List += `\thttp://${ip}:${env.port}\n`;
    });

    logger.info(`::> Server is running on:\n${ipv4List}`);
    logger.info(`::> Swagger docs available at: /docs`);
  });
}

await boot();
