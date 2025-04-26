import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/sonner";

const languages = [
  { code: "en", name: "English" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "hi", name: "हिन्दी" },
  { code: "ta", name: "தமிழ்" },
  { code: "mr", name: "मराठी" },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || "en";
  });

  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    toast.success(`Language changed to ${languages.find(lang => lang.code === langCode)?.name}`);
    console.log(`Language changed to: ${langCode}`);
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === currentLanguage)?.name || "English";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center space-x-1 text-legal-darkgray hover:text-legal-navy hover:bg-legal-lightgray transition-all duration-200 hover:scale-105"
        >
          <span className="mr-1 text-base transition-transform duration-200 hover:rotate-12">🌐</span>
          <span>{getCurrentLanguageName()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white border border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer transition-colors duration-200 ${
              currentLanguage === language.code 
                ? "bg-legal-lightgray font-medium" 
                : "hover:bg-legal-lightgray/50"
            }`}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
