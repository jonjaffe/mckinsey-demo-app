import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Industries",
      links: [
        "Automotive & Assembly",
        "Banking",
        "Capital Projects & Infrastructure",
        "Chemicals",
        "Consumer Packaged Goods",
        "Electric Power & Natural Gas",
        "Healthcare Systems & Services",
        "Oil & Gas",
        "Retail",
        "Technology, Media & Telecommunications",
      ]
    },
    {
      title: "Capabilities",
      links: [
        "Analytics",
        "Digital",
        "Implementation",
        "Learning",
        "Operations",
        "Organization",
        "Risk",
        "Strategy & Corporate Finance",
        "Sustainability",
        "Transformation",
      ]
    },
    {
      title: "About",
      links: [
        "Our mission",
        "What sets us apart",
        "Our people",
        "Alumni",
        "McKinsey Global Institute",
        "Locations worldwide",
        "Social responsibility",
        "Diversity & inclusion",
        "Careers",
        "Contact us",
      ]
    },
    {
      title: "Featured Insights",
      links: [
        "McKinsey Quarterly",
        "Business technology",
        "COVID-19",
        "Future of work",
        "Sustainability",
        "The war for talent",
        "McKinsey Explainers",
        "Forward Thinking podcast",
        "Interactive",
        "Video center",
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold">
                McKinsey &amp; Company
              </Link>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Preferences
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <span>&copy; 2025 McKinsey &amp; Company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
