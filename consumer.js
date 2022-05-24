const channelPromise = require("./config");

const receiveMsg = () => {
  try {
    channelPromise.then(async ([channel, connection]) => {
      await channel.assertQueue("jobs");
      channel.consume("jobs", (message) => {
        const input = JSON.parse(message.content.toString());
        console.log(`Received job with input ${input.number}`);
      });
      console.log("Waiting for messages...");
    });
  } catch (e) {
    console.error(e);
  }
};

receiveMsg();

