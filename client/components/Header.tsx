import { Search, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center h-full">
              <div className="text-2xl font-bold text-slate-900 leading-none">
                McKinsey
                <span className="text-sm font-normal ml-1">&amp; Company</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              Industries
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              Capabilities
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              Featured Insights
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              Locations
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              Careers
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              About Us
            </button>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-full">
              McKinsey Blog
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 p-2 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <button className="text-gray-700 hover:text-gray-900 px-2 py-1">Sign in</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-700 hover:text-gray-900 px-2 py-1">Subscribe</button>
            </div>
            <button className="text-gray-500 hover:text-gray-700 md:hidden p-2 flex items-center justify-center">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
