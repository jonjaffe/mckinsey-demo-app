import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

interface ImpactCard {
  image: string;
  title: string;
  description: string;
  link: string;
  highlighted?: boolean;
}

interface SocietalImpactProps {
  eyebrow?: string;
  heading: string;
  cards?: ImpactCard[];
}

const BUILDER_API =
  "https://cdn.builder.io/api/v3/content/article?apiKey=f3c7f0a195ba446c9a2c6d4ece51635a&limit=6";

export function SocietalImpact({
  eyebrow = "Societal Impact",
  heading,
  cards: providedCards,
}: SocietalImpactProps) {
  const [cards, setCards] = useState<ImpactCard[]>(providedCards ?? []);

  useEffect(() => {
    if (providedCards && providedCards.length > 0) {
      setCards(providedCards);
      return;
    }

    let isSubscribed = true;

    const fetchCards = async () => {
      try {
        const response = await fetch(BUILDER_API);

        if (!response.ok) {
          throw new Error(`Failed to fetch impact articles: ${response.status}`);
        }

        const data = await response.json();

        if (!isSubscribed || !Array.isArray(data.results)) {
          return;
        }

        const extractText = (field: any): string => {
          if (typeof field === "string") {
            return field;
          }
          if (field && typeof field === "object") {
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
              return field.map(item => extractText(item)).join(" ");
            }
            return JSON.stringify(field);
          }
          return "";
        };

        const transformed: ImpactCard[] = data.results.map((article: any, index: number) => ({
          image:
            extractText(article.data?.image) ||
            "https://picsum.photos/600/400?random=" + (index + 300),
          title: extractText(article.data?.title) || article.name || "Untitled",
          description:
            extractText(article.data?.excerpt) ||
            extractText(article.data?.description) ||
            "Read the full story to learn more about our societal impact initiatives.",
          link:
            extractText(article.data?.url) ||
            article.data?.url ||
            article.data?.link ||
            "#",
          highlighted: index === 1,
        }));

        setCards(transformed);
      } catch (error) {
        console.error("Error fetching societal impact articles", error);
      }
    };

    fetchCards();

    return () => {
      isSubscribed = false;
    };
  }, [providedCards]);

  return (
    <section className="bg-[#1A53FF] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="text-white text-sm font-bold mb-4 md:mb-6 tracking-wide uppercase">
            {eyebrow}
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight max-w-4xl mx-auto">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className={`group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 ease-out ${
                card.highlighted
                  ? "border-4 border-neutral-300"
                  : "border-transparent"
              } bg-white/10 hover:bg-white hover:shadow-xl hover:border-white`}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 flex flex-col pt-5 pb-7 px-6">
                <a
                  href={card.link}
                  className="inline-flex items-center gap-3.5 text-white text-lg font-bold mb-4 transition-colors duration-300 group-hover:text-[#1A53FF]"
                >
                  <span>{card.title}</span>
                  <ChevronRight className="w-3 h-4.5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1A53FF]" />
                </a>

                <p className="text-white text-lg font-light leading-7 transition-colors duration-300 group-hover:text-slate-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
