using FactoryMethodPattern.Documents;

namespace FactoryMethodPattern.Creators
{
    public class PdfFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }
}