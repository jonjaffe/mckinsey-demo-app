import { BlogSection } from "../components/BlogSection";

export default function Blog() {
  const articles = [
    {
      id: "aging-strategy",
      title: "How Ohio is enhancing lives with a healthy aging strategy",
      excerpt: "A comprehensive approach to supporting older adults through innovative programs and community partnerships that improve quality of life.",
      date: "July 28, 2025",
      image: "https://picsum.photos/600/400?random=10",
      category: "Healthcare",
      readTime: "5 min read"
    },
    {
      id: "opportunity-investing",
      title: "What we've learned over five years investing in opportunity—and delivering results",
      excerpt: "Insights from our journey in opportunity zone investments and their transformative impact on underserved communities across America.",
      date: "July 23, 2025",
      image: "https://picsum.photos/600/400?random=11",
      category: "Social Impact",
      readTime: "8 min read"
    },
    {
      id: "parental-leave",
      title: "Moms First and McKinsey team up to increase usage of paid parental leave",
      excerpt: "A groundbreaking partnership aimed at supporting working parents through better leave policies, increased awareness, and workplace culture change.",
      date: "July 18, 2025",
      image: "https://picsum.photos/600/400?random=12",
      category: "Workplace Innovation",
      readTime: "6 min read"
    },
    {
      id: "mental-healthcare",
      title: "McKinsey Health Institute and global partners explore AI's role in closing the mental healthcare gap",
      excerpt: "Examining how artificial intelligence and machine learning can help address the growing mental health crisis affecting millions worldwide.",
      date: "July 15, 2025",
      image: "https://picsum.photos/600/400?random=13",
      category: "AI & Technology",
      readTime: "7 min read"
    },
    {
      id: "space-innovation",
      title: "From apprenticeship in space to selecting microbes: Meet McKinsey's game-based innovation lab",
      excerpt: "Discover how our cutting-edge innovation lab uses gaming, simulation, and immersive experiences to solve complex business challenges.",
      date: "July 9, 2025",
      image: "https://picsum.photos/600/400?random=14",
      category: "Innovation",
      readTime: "9 min read"
    },
    {
      id: "climate-action",
      title: "Accelerating climate action: How companies can lead the transition to net zero",
      excerpt: "A comprehensive guide to implementing sustainable business practices and achieving carbon neutrality in the next decade.",
      date: "July 5, 2025",
      image: "https://picsum.photos/600/400?random=15",
      category: "Sustainability",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">McKinsey Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights and perspectives on the issues that matter most to leaders around the world
          </p>
        </div>
      </div>
      
      <BlogSection 
        title="Featured Articles"
        articles={articles}
        showHeader={false}
      />
    </div>
  );
}
