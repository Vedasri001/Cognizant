namespace CustomerService
{
    public class CustomerService
    {
        private readonly ICustomerRepository _repository;

        public CustomerService(ICustomerRepository repository)
        {
            _repository = repository;
        }

        public string GetCustomer(int id)
        {
            return _repository.GetCustomerName(id);
        }
    }
}