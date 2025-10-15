import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage = "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <Button 
          className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          asChild
        >
          <a href={ctaLink} className="inline-flex items-center space-x-2">
            <span>{ctaText}</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
