const channelPromise = require("./config");

const msg = { number: process.argv[2] };

const sendMsg = () => {
  try {
    channelPromise.then(async ([channel, connection]) => {
      await channel.assertQueue("jobs");
      await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
      console.log(`Job sent successfully ${msg.number}`);
      await channel.close();
      await connection.close();
    });
  } catch (e) {
    console.error(e);
  }
};

sendMsg();