const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();
////////////////login instgram////////
const username = 'your_username';
const password = 'your_password';

(async () => {
  await ig.login(username, password);
})();
//////////////////////////////////////
ig.realtime.on('message', async (message) => {
  if (message.item_type === 'text' && message.user_id !== ig.state.cookieUserId) {
    const senderId = message.user_id;
    const text = message.text;

    // Implement your auto reply logic here

    await ig.entity.directThread.broadcastText(senderId, 'Thank you for your message!');
  }
});

(async () => {
  await ig.realtime.connect({
    // Add any additional options here if needed
  });
})();
////////////////////////////////////////////////////////
