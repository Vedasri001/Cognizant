using Moq;
using NUnit.Framework;
using CustomerService;

namespace CustomerService.Tests
{
    public class CustomerServiceTests
    {
        [Test]
        public void GetCustomer_ReturnsCustomerName()
        {
            // Arrange
            var mockRepo = new Mock<ICustomerRepository>();

            mockRepo.Setup(r => r.GetCustomerName(1))
                    .Returns("John");

            var service = new CustomerService(mockRepo.Object);

            // Act
            var result = service.GetCustomer(1);

            // Assert
            Assert.That(result, Is.EqualTo("John"));
        }
    }
}