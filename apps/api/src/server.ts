import { serve } from '@hono/node-server';
import { app } from './app.js';

function readPort(): number {
  const raw = process.env.PORT;
  if (!raw) {
    return 3001;
  }
  const port = Number(raw);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error('PORT doit être un entier positif.');
  }
  return port;
}

const port = readPort();

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`API Les9 en écoute sur le port ${info.port}`);
});
