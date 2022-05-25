import { createConnections } from 'typeorm';

const tryToCreateConnections = async () => {
  let retries = 5;
  while (retries) {
    try {
      await createConnections();
      break;
    } catch (err) {
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

tryToCreateConnections();
