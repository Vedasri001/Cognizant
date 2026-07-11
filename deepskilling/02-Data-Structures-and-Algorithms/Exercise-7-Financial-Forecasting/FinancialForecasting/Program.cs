using System;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            double presentValue = 10000;
            double annualGrowthRate = 0.10;
            int years = 5;

            double futureValue = Forecast.PredictFutureValue(
                presentValue,
                annualGrowthRate,
                years);

            Console.WriteLine($"Present Value : {presentValue}");
            Console.WriteLine($"Growth Rate   : {annualGrowthRate * 100}%");
            Console.WriteLine($"Years         : {years}");
            Console.WriteLine($"Future Value  : {futureValue:F2}");
        }
    }
}