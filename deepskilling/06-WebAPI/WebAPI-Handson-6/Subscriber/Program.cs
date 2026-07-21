using Confluent.Kafka;

// Exercise 6: Chat message consumer - reads messages from the topic and prints them to console
const string BootstrapServers = "localhost:9092";
const string Topic = "chat-messages";
const string GroupId = "chat-console-consumers";

var config = new ConsumerConfig
{
    BootstrapServers = BootstrapServers,
    GroupId = GroupId,
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
consumer.Subscribe(Topic);

Console.WriteLine($"Chat Subscriber listening on topic '{Topic}'. Press Ctrl+C to exit.");

var cts = new CancellationTokenSource();
Console.CancelKeyPress += (_, e) => { e.Cancel = true; cts.Cancel(); };

try
{
    while (!cts.Token.IsCancellationRequested)
    {
        var result = consumer.Consume(cts.Token);
        Console.WriteLine($"[{DateTime.Now:T}] {result.Message.Value}");
    }
}
catch (OperationCanceledException)
{
    // graceful shutdown on Ctrl+C
}
finally
{
    consumer.Close();
}
