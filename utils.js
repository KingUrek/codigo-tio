

const venom = require('venom-bot');
import {getAllGroups} from './services/utils'


async function start(client) {

}

async function initialize() {
  
  const client = await venom
    .create({
      session: 'bot', //name of session
      options: {
        headless:'new'
      }
    })
    .catch((error) => {
      console.log(error);
    });
    await start(client)

  return client;
}

export default { initialize };
