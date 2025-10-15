import { Hero } from "../components/Hero";
import { ImageTextCard } from "../components/ImageTextCard";
import { BlogSection } from "../components/BlogSection";
import { SocietalImpact } from "../components/SocietalImpact";

export default function Index() {
  const contentSections = [
    {
      id: "tech-trends",
      image: "https://picsum.photos/800/600?random=1",
      title: "McKinsey Technology Trends Outlook 2025",
      description: "Which new technology will have the most impact in 2025 and beyond? Our annual analysis ranks the top tech trends that matter most for companies and executives.",
      ctaText: "Download the 108-page report",
      ctaLink: "#",
      backgroundColor: "bg-gradient-to-br from-blue-600 to-purple-700",
      textColor: "text-white"
    },
    {
      id: "energy-transition",
      image: "https://picsum.photos/800/600?random=2",
      title: "How might tariffs affect the energy transition?",
      description: "The possibility of tariffs brings uncertainty to the clean energy industry. How much could higher tariffs matter?",
      ctaText: "Explore the effects",
      ctaLink: "#",
      backgroundColor: "bg-white",
      textColor: "text-slate-900"
    },
    {
      id: "book-recommendations",
      image: "https://picsum.photos/800/600?random=3",
      title: "What to read next: McKinsey's 2025 annual book recommendations",
      description: "Each year, we invite a diverse group of leaders to share the books that have resonated with them—or ones they can't wait to read. This year's list includes over 90 titles, from timely insights to timeless fiction.",
      ctaText: "Your bookshelf is waiting",
      ctaLink: "#",
      backgroundColor: "bg-gradient-to-br from-orange-500 to-red-600",
      textColor: "text-white"
    }
  ];

  const blogArticles = [
    {
      id: "aging-strategy",
      title: "How Ohio is enhancing lives with a healthy aging strategy",
      excerpt: "A comprehensive approach to supporting older adults through innovative programs and community partnerships.",
      date: "July 28, 2025",
      image: "https://picsum.photos/600/400?random=4",
      category: "Healthcare",
      readTime: "5 min read"
    },
    {
      id: "opportunity-investing",
      title: "What we've learned over five years investing in opportunity—and delivering results",
      excerpt: "Insights from our journey in opportunity zone investments and their impact on communities.",
      date: "July 23, 2025",
      image: "https://picsum.photos/600/400?random=5",
      readTime: "8 min read"
    },
    {
      id: "parental-leave",
      title: "Moms First and McKinsey team up to increase usage of paid parental leave",
      excerpt: "A partnership aimed at supporting working parents through better leave policies and awareness.",
      date: "July 18, 2025",
      image: "https://picsum.photos/600/400?random=6",
      readTime: "6 min read"
    },
    {
      id: "mental-healthcare",
      title: "McKinsey Health Institute and global partners explore AI's role in closing the mental healthcare gap",
      excerpt: "Examining how artificial intelligence can help address the growing mental health crisis worldwide.",
      date: "July 15, 2025",
      image: "https://picsum.photos/600/400?random=7",
      readTime: "7 min read"
    },
    {
      id: "space-innovation",
      title: "From apprenticeship in space to selecting microbes: Meet McKinsey's game-based innovation lab",
      excerpt: "Discover how our innovation lab uses gaming and simulation to solve complex business challenges.",
      date: "July 9, 2025",
      image: "https://picsum.photos/600/400?random=8",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="What's your next brilliant move?"
        ctaText="Get started"
        ctaLink="#"
        backgroundImage="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Featured Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {contentSections.map((section, index) => (
            <ImageTextCard
              key={section.id}
              image={section.image}
              title={section.title}
              description={section.description}
              ctaText={section.ctaText}
              ctaLink={section.ctaLink}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              backgroundColor={section.backgroundColor}
              textColor={section.textColor}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection
        title="Latest Insights"
      />

      {/* Societal Impact Section */}
      <SocietalImpact
        eyebrow="Societal Impact"
        heading="Sharing our best to help more people succeed"
      />
    </div>
  );
}
