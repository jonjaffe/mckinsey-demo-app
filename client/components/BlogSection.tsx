import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
  readTime?: string;
}

interface BuilderArticle {
  id: string;
  name: string;
  data: {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category?: string;
    readTime?: string;
  };
  publishedAt: string;
}

interface BlogSectionProps {
  title: string;
  showHeader?: boolean;
  articles?: BlogArticle[];
}

export function BlogSection({ title, showHeader = true, articles: providedArticles }: BlogSectionProps) {
  const [articles, setArticles] = useState<BlogArticle[]>(providedArticles ?? []);
  const [loading, setLoading] = useState(providedArticles === undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (providedArticles !== undefined) {
      setArticles(providedArticles);
      setLoading(false);
      setError(null);
      return;
    }

    let isSubscribed = true;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          'https://cdn.builder.io/api/v3/content/article?apiKey=f3c7f0a195ba446c9a2c6d4ece51635a&limit=6'
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        const data = await response.json();

        if (!isSubscribed) {
          return;
        }

        console.log('Builder.io API Response:', data);
        if (data.results && data.results.length > 0) {
          console.log('Sample article data:', data.results[0]);
        }

        const extractText = (field: any): string => {
          if (typeof field === 'string') {
            return field;
          }
          if (field && typeof field === 'object') {
            if (field.Default) {
              return field.Default;
            }
            if (field.text) {
              return field.text;
            }
            if (field.value) {
              return field.value;
            }
            if (Array.isArray(field)) {
              return field.map(item => extractText(item)).join(' ');
            }
            return JSON.stringify(field);
          }
          return '';
        };

        if (!data.results || !Array.isArray(data.results)) {
          console.warn('No results found in API response:', data);
          if (!isSubscribed) {
            return;
          }
          setArticles([]);
          return;
        }

        const transformedArticles: BlogArticle[] = data.results.map((article: BuilderArticle) => ({
          id: article.id,
          title: extractText(article.data.title) || article.name || 'Untitled Article',
          excerpt: extractText(article.data.excerpt) || 'No excerpt available',
          date: extractText(article.data.date) || new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          image: extractText(article.data.image) || 'https://picsum.photos/600/400?random=' + Math.floor(Math.random() * 1000),
          category: extractText(article.data.category),
          readTime: extractText(article.data.readTime)
        }));

        if (!isSubscribed) {
          return;
        }

        setArticles(transformedArticles);
      } catch (err) {
        if (!isSubscribed) {
          return;
        }
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        console.error('Error fetching articles:', err);
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };

    fetchArticles();

    return () => {
      isSubscribed = false;
    };
  }, [providedArticles]);
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <div className="text-center mb-12">
              <div className="text-sm text-blue-600 font-semibold tracking-wide uppercase mb-4">
                NEW AT MCKINSEY BLOG
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-sm animate-pulse ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`bg-gray-200 ${index === 0 ? 'lg:aspect-[2/1]' : 'aspect-video'}`}></div>
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <div className="text-center mb-12">
              <div className="text-sm text-blue-600 font-semibold tracking-wide uppercase mb-4">
                NEW AT MCKINSEY BLOG
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            </div>
          )}
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Failed to load articles: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-12">
            <div className="text-sm text-blue-600 font-semibold tracking-wide uppercase mb-4">
              NEW AT MCKINSEY BLOG
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`aspect-video ${index === 0 ? 'lg:aspect-[2/1]' : ''}`}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  {article.readTime && (
                    <>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </>
                  )}
                </div>
                {article.category && (
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {article.category}
                  </div>
                )}
                <h3 className={`font-semibold text-slate-900 mb-3 leading-tight ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {article.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${
                  index === 0 ? 'lg:text-lg' : ''
                }`}>
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Read more on our blog
          </button>
        </div>
      </div>
    </section>
  );
}
