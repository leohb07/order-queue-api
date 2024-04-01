import { Channel, Connection, connect } from "amqplib";

export class QueueService {
  private connection: Connection
  private channel: Channel

  public async connect(): Promise<void> {
    try {
      this.connection = await connect(process.env.QUEUE_URL)
      this.channel = await this.connection.createChannel()
    } catch (error) {
      console.error('Error to connect/start queue', error)
    }
  }

  public async publish(queue: string, message: string): Promise<void> {
    await this.connect();

    this.channel.sendToQueue(queue, Buffer.from(message))
  }
}