namespace CustomerService
{
    public interface ICustomerRepository
    {
        string GetCustomerName(int customerId);
    }
}