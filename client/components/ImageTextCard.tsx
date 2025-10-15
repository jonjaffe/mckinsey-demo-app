import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface ImageTextCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imagePosition?: "left" | "right" | "top";
  backgroundColor?: string;
  textColor?: string;
}

export function ImageTextCard({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  imagePosition = "left",
  backgroundColor = "bg-white",
  textColor = "text-slate-900"
}: ImageTextCardProps) {
  if (imagePosition === "top") {
    return (
      <div className={`${backgroundColor} rounded-lg overflow-hidden shadow-sm`}>
        <div className="aspect-video w-full">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className={`text-2xl font-semibold ${textColor} mb-4 leading-tight`}>
            {title}
          </h3>
          <p className={`${textColor === 'text-slate-900' ? 'text-gray-600' : 'text-white/80'} mb-6 leading-relaxed`}>
            {description}
          </p>
          <Button 
            variant="ghost" 
            className={`p-0 h-auto font-medium ${textColor} hover:${textColor}`}
            asChild
          >
            <a href={ctaLink} className="inline-flex items-center space-x-2">
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  const isImageLeft = imagePosition === "left";
  
  return (
    <div className={`${backgroundColor} rounded-lg overflow-hidden shadow-sm`}>
      <div className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} h-80`}>
        <div className="flex-1">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h3 className={`text-2xl font-semibold ${textColor} mb-4 leading-tight`}>
            {title}
          </h3>
          <p className={`${textColor === 'text-slate-900' ? 'text-gray-600' : 'text-white/80'} mb-6 leading-relaxed`}>
            {description}
          </p>
          <Button 
            variant="ghost" 
            className={`p-0 h-auto font-medium ${textColor} hover:${textColor} self-start`}
            asChild
          >
            <a href={ctaLink} className="inline-flex items-center space-x-2">
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
