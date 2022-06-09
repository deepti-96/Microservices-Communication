# MICROSERVICES - COMMUNICATION

A distributed system is an application that executes a collection of protocols to coordinate the actions of multiple processes on a communication network, such that all components cooperate together to perform a single or small set of related tasks. This is further Integrated with REST API which is a way of easily accessing web services without having excess processing. Whenever a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource. It is further incorporated with microservices using RabbitMQ which is open-source message-broker software. The configuration file created must auto-network new message services that join the distributed system, with minimum intervention from the developer.</br>

![PSGST-1](https://user-images.githubusercontent.com/72935128/172958244-d1ce2a99-a6c1-46db-9b98-c599bb030d95.jpg)

## Modules:</br>
### publish.js
  A published message has to be routed to a queue (topic, etc). The queue (topic) may have online consumers. When the message is successfully routed to a queue and there is a consumer online that can accept more deliveries, the message will be sent to the consumer.</br>

### consumer.js
  To consume messages, there has to be a queue. When a new consumer is added, assuming there are already messages ready in the queue, deliveries will start immediately. The target queue can be empty at the time of consumer registration. In that case, first deliveries will happen when new messages are enqueued.</br>

### config.js
  To automatically configure any new message services that join the network and to maintain minimum intervention from the developers, an auto-configuration file needs to be created, that would take the details of the new message services as the parameters and configure them to the network. </br>
  
# Available scripts

In the project directory, you can run:</br>

```
npm run publish 
npm run consumer
```
  
