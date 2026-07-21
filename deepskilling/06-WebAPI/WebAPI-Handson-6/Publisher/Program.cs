using Confluent.Kafka;

// Exercise 6: Chat message producer - reads from the console and publishes to a Kafka topic
const string BootstrapServers = "localhost:9092";
const string Topic = "chat-messages";

var config = new ProducerConfig { BootstrapServers = BootstrapServers };

using var producer = new ProducerBuilder<Null, string>(config).Build();

Console.WriteLine($"Chat Publisher connected to topic '{Topic}'. Type a message and press Enter (type 'exit' to quit).");

while (true)
{
    Console.Write("You: ");
    var message = Console.ReadLine();

    if (string.IsNullOrWhiteSpace(message) || message.Trim().Equals("exit", StringComparison.OrdinalIgnoreCase))
        break;

    var result = await producer.ProduceAsync(Topic, new Message<Null, string> { Value = message });
    Console.WriteLine($"  -> delivered to {result.TopicPartitionOffset}");
}

Console.WriteLine("Publisher closed.");
