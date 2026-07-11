using FactoryMethodPattern.Documents;

namespace FactoryMethodPattern.Creators
{
    public class ExcelFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new ExcelDocument();
        }
    }
}