import type { ReactNode } from "react";
import { BlogSection } from "../components/BlogSection";
import { Hero } from "../components/Hero";
import { ImageTextCard } from "../components/ImageTextCard";
import { SocietalImpact } from "../components/SocietalImpact";

const sampleArticles = [
  {
    id: "digital-transformation",
    title: "Reimagining digital transformation for resilient growth",
    excerpt:
      "Practical guidance to help leaders continuously reinvent their organizations with technology-led strategies that create measurable impact.",
    date: "June 12, 2025",
    image: "https://picsum.photos/600/400?random=201",
    category: "Strategy",
    readTime: "7 min read",
  },
  {
    id: "ai-operations",
    title: "Scaling AI operations across the enterprise",
    excerpt:
      "How high-performing organizations build operating models, talent, and governance that unlock AI's full potential across functions.",
    date: "May 29, 2025",
    image: "https://picsum.photos/600/400?random=202",
    category: "AI & Technology",
    readTime: "6 min read",
  },
  {
    id: "customer-experience",
    title: "Designing next-generation customer experiences",
    excerpt:
      "A blueprint for orchestrating consistent, personalized journeys that increase loyalty and lifetime value.",
    date: "May 14, 2025",
    image: "https://picsum.photos/600/400?random=203",
    category: "Customer Experience",
    readTime: "8 min read",
  },
];

const executiveBriefings = [
  {
    id: "economic-outlook",
    title: "Global economic outlook: Signals leaders should track",
    excerpt:
      "Key indicators to monitor as markets evolve, with scenarios for growth, inflation, and investment priorities.",
    date: "April 30, 2025",
    image: "https://picsum.photos/600/400?random=204",
    category: "Economy",
    readTime: "9 min read",
  },
  {
    id: "supply-chain",
    title: "Building resilient supply chains in turbulent times",
    excerpt:
      "Proven levers for increasing visibility, optionality, and cost efficiency across global supply networks.",
    date: "April 18, 2025",
    image: "https://picsum.photos/600/400?random=205",
    category: "Operations",
    readTime: "5 min read",
  },
  {
    id: "talent-strategy",
    title: "Talent strategies for the future of work",
    excerpt:
      "What leading organizations are doing to attract, retain, and upskill mission-critical roles at scale.",
    date: "April 5, 2025",
    image: "https://picsum.photos/600/400?random=206",
    category: "People & Organization",
    readTime: "10 min read",
  },
];

function VariantSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </header>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

function VariantPreview({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h3 className="text-xl font-medium text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

export default function KitchenSink() {
  return (
    <div className="bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Builder Component Gallery
          </span>
          <h1 className="text-4xl font-bold text-slate-900">Kitchen Sink</h1>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Explore every Builder-registered component with representative
            configurations. Use these examples as a reference when composing
            experiences in Builder or developing new variants.
          </p>
        </header>

        <VariantSection
          title="Hero"
          description="High-impact landing hero showcasing primary messaging, optional supporting copy, and a prominent call-to-action."
        >
          <VariantPreview
            title="Default configuration"
            description="Uses the default background image and a concise message with a primary CTA."
          >
            <Hero
              title="What's your next brilliant move?"
              subtitle="Partner with us to uncover breakthrough strategies that accelerate sustainable growth."
              ctaText="Start the conversation"
              ctaLink="#hero-default"
            />
          </VariantPreview>

          <VariantPreview
            title="Alternate background"
            description="Swap imagery to highlight a specific industry or initiative while keeping the same structure."
          >
            <Hero
              title="Lead the energy transition"
              subtitle="Empower your teams with data-driven insights and collaborative execution support."
              ctaText="Explore our approach"
              ctaLink="#hero-energy"
              backgroundImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2070&q=80"
            />
          </VariantPreview>
        </VariantSection>

        <VariantSection
          title="ImageTextCard"
          description="Versatile storytelling module pairing bold imagery with supporting narrative and deep-link CTAs."
        >
          <VariantPreview
            title="Image on the left"
            description="Classic split layout with the image anchoring the left side and narrative content on the right."
          >
            <ImageTextCard
              image="https://picsum.photos/800/600?random=301"
              title="Technology Trends Outlook 2025"
              description="Pinpoint the innovations reshaping industries and learn how leading organizations are investing to stay ahead."
              ctaText="Download report"
              ctaLink="#card-left"
              imagePosition="left"
              backgroundColor="bg-white"
              textColor="text-slate-900"
            />
          </VariantPreview>

          <VariantPreview
            title="Image on the right"
            description="Flip the layout to draw attention to narrative content before revealing the supporting visual."
          >
            <ImageTextCard
              image="https://picsum.photos/800/600?random=302"
              title="Reinventing customer experience"
              description="Cross-functional playbooks for delivering seamless, personalized journeys across every touchpoint."
              ctaText="See client outcomes"
              ctaLink="#card-right"
              imagePosition="right"
              backgroundColor="bg-white"
              textColor="text-slate-900"
            />
          </VariantPreview>

          <VariantPreview
            title="Image stacked on top"
            description="Supports square or landscape imagery with full-width media when vertical real estate is limited."
          >
            <ImageTextCard
              image="https://picsum.photos/800/600?random=303"
              title="Unlocking resilient supply chains"
              description="Insights and actions for building agile, data-enabled supply networks."
              ctaText="Read the guide"
              ctaLink="#card-top"
              imagePosition="top"
              backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
              textColor="text-white"
            />
          </VariantPreview>
        </VariantSection>

        <VariantSection
          title="BlogSection"
          description="Curated collections of editorial articles that can surface Builder-managed or locally provided content."
        >
          <VariantPreview
            title="With section header"
            description="Displays a prominent header along with a curated set of latest insights."
          >
            <BlogSection
              title="Latest Insights"
              showHeader
              articles={sampleArticles}
            />
          </VariantPreview>

          <VariantPreview
            title="Grid without header"
            description="Highlights articles in a modular grid, ideal for embedding within richer page layouts."
          >
            <BlogSection
              title="Executive Briefings"
              showHeader={false}
              articles={executiveBriefings}
            />
          </VariantPreview>
        </VariantSection>

        <VariantSection
          title="SocietalImpact"
          description="High-impact societal mission section with card grid showcasing initiatives, programs, and impact areas."
        >
          <VariantPreview
            title="Default configuration"
            description="Three-column impact card grid with eyebrow label, prominent heading, and detailed card descriptions."
          >
            <SocietalImpact
              eyebrow="Societal Impact"
              heading="Sharing our best to help more people succeed"
            />
          </VariantPreview>

          <VariantPreview
            title="Alternate configuration"
            description="Flexible card arrangement demonstrating different eyebrow text and custom heading."
          >
            <SocietalImpact
              eyebrow="Global Initiatives"
              heading="Making a difference through innovation and collaboration"
              cards={[
                {
                  image: "https://picsum.photos/800/600?random=401",
                  title: "Digital Accessibility",
                  description:
                    "Empowering communities through technology education and digital literacy programs.",
                  link: "#",
                  highlighted: false,
                },
                {
                  image: "https://picsum.photos/800/600?random=402",
                  title: "Environmental Sustainability",
                  description:
                    "Leading the charge in climate action with data-driven strategies and sustainable practices.",
                  link: "#",
                  highlighted: false,
                },
                {
                  image: "https://picsum.photos/800/600?random=403",
                  title: "Economic Empowerment",
                  description:
                    "Creating pathways to prosperity through entrepreneurship support and skills development.",
                  link: "#",
                  highlighted: true,
                },
              ]}
            />
          </VariantPreview>
        </VariantSection>
      </div>
    </div>
  );
}
