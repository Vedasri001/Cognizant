namespace FinancialForecasting
{
    public class Forecast
    {
        // Recursive method
        public static double PredictFutureValue(double presentValue, double rate, int years)
        {
            if (years == 0)
                return presentValue;

            return PredictFutureValue(presentValue * (1 + rate), rate, years - 1);
        }
    }
}