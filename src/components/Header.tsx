
import { useState } from "react";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/63bca008-a591-40ab-8f9b-a0f334e6c8d5.png" 
              alt="Nyayasethu Logo" 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-legal-navy">Nyayasethu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#services" className="text-legal-darkgray hover:text-legal-navy font-medium">Services</a>
              <a href="#chatbot" className="text-legal-darkgray hover:text-legal-navy font-medium">Chatbot</a>
              <a href="#news" className="text-legal-darkgray hover:text-legal-navy font-medium">News</a>
              <a href="#contact" className="text-legal-darkgray hover:text-legal-navy font-medium">Contact</a>
            </nav>

            {/* Desktop Search */}
            <SearchBar className="w-64" />

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white">
                Log In
              </Button>
              <Button className="bg-legal-navy hover:bg-opacity-90">Sign Up</Button>
            </div>

            {/* Language Selector */}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-legal-darkgray hover:bg-legal-lightgray" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <nav className="flex flex-col space-y-4 mb-4">
              <a href="#services" className="text-legal-darkgray hover:text-legal-navy font-medium">Services</a>
              <a href="#chatbot" className="text-legal-darkgray hover:text-legal-navy font-medium">Chatbot</a>
              <a href="#news" className="text-legal-darkgray hover:text-legal-navy font-medium">News</a>
              <a href="#contact" className="text-legal-darkgray hover:text-legal-navy font-medium">Contact</a>
            </nav>
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white">
                Log In
              </Button>
              <Button className="bg-legal-navy hover:bg-opacity-90">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
