const amqp = require("amqplib");
require("dotenv").config();

const connect = async () => {
  try {
    const connection = await amqp.connect(process.env.AMQPSERVER_API);
    const channel = await connection.createChannel();
    return [channel, connection];
  } catch (e) {
    console.error(e);
  }
};

module.exports = connect();
