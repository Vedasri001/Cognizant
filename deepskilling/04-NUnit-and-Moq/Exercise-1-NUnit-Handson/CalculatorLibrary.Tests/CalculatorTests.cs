using NUnit.Framework;
using CalculatorLibrary;

namespace CalculatorLibrary.Tests
{
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new Calculator();
        }

        [Test]
        public void TestAdd()
        {
            Assert.That(calculator.Add(5, 3), Is.EqualTo(8));
        }

        [Test]
        public void TestSubtract()
        {
            Assert.That(calculator.Subtract(5, 3), Is.EqualTo(2));
        }

        [Test]
        public void TestMultiply()
        {
            Assert.That(calculator.Multiply(5, 3), Is.EqualTo(15));
        }

        [Test]
        public void TestDivide()
        {
            Assert.That(calculator.Divide(6, 3), Is.EqualTo(2));
        }
    }
}