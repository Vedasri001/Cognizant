using FactoryMethodPattern.Documents;

namespace FactoryMethodPattern.Creators
{
    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();
    }
}