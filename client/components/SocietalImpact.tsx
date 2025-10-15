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
  cards: ImpactCard[];
}

export function SocietalImpact({
  eyebrow = "Societal Impact",
  heading,
  cards,
}: SocietalImpactProps) {
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
              key={index}
              className={`bg-transparent flex flex-col ${
                card.highlighted ? "border-4 border-neutral-400" : ""
              }`}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col pt-4 pb-6 px-2">
                <a
                  href={card.link}
                  className="inline-flex items-center gap-3.5 text-white text-lg font-bold mb-4 hover:opacity-80 transition-opacity group"
                >
                  <span>{card.title}</span>
                  <ChevronRight className="w-3 h-4.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-white text-lg font-light leading-7">
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
