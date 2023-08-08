const amqp = require('amqplib');

async function startWorker() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queueName = 'myQueue';
    await channel.assertQueue(queueName, { durable: false });

    console.log('Worker is waiting for messages...');

    channel.consume(queueName, (message) => {
        console.log('Received message:', message.content.toString());
        // Здесь вы можете добавить логику обработки сообщения
    }, { noAck: true });
}

startWorker().catch(console.error);