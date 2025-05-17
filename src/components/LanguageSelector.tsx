
import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/sonner";

export type Language = {
  code: string;
  name: string;
};

export const languages = [
  { code: "en", name: "English" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "hi", name: "हिन्दी" },
  { code: "ta", name: "தமிழ்" },
  { code: "mr", name: "मराठी" },
];

// Create a translations object
export const translations = {
  en: {
    home: "Home",
    services: "Services",
    chatbot: "Chatbot",
    news: "News",
    community: "Community",
    contact: "Contact",
    login: "Log In",
    signup: "Sign Up",
    profile: "Profile",
    legalAssistant: "Legal Assistant",
    askQuestion: "Type your legal question here...",
    send: "Send",
    chatWithAssistant: "Chat with Legal Assistant",
    ourServices: "Our Services",
    servicesDescription: "We provide comprehensive legal services to help you navigate complex legal issues and protect your rights.",
    legalConsultation: "Legal Consultation",
    consultationDescription: "Get expert advice from our qualified attorneys on a wide range of legal matters.",
    documentReview: "Document Review",
    documentDescription: "Have your legal documents reviewed for accuracy, completeness, and compliance.",
    legalRepresentation: "Legal Representation",
    representationDescription: "Full representation services for court proceedings and legal disputes.",
    rightsEducation: "Rights Education",
    educationDescription: "Educational resources to help you understand your legal rights and responsibilities.",
    // Add new translation keys
    minimize: "Minimize",
    expand: "Expand",
    botWelcomeMessage: "Hello! I'm your legal assistant. How can I help you today?",
    chatbotDescription: "Have questions about your legal rights? Our AI-powered legal assistant can help guide you through common legal questions."
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    chatbot: "चैटबॉट",
    news: "समाचार",
    community: "समुदाय",
    contact: "संपर्क",
    login: "लॉग इन",
    signup: "साइन अप",
    profile: "प्रोफाइल",
    legalAssistant: "कानूनी सहायक",
    askQuestion: "यहां अपना कानूनी प्रश्न लिखें...",
    send: "भेजें",
    chatWithAssistant: "कानूनी सहायक से चैट करें",
    ourServices: "हमारी सेवाएं",
    servicesDescription: "हम जटिल कानूनी मुद्दों को नेविगेट करने और आपके अधिकारों की रक्षा करने में आपकी मदद करने के लिए व्यापक कानूनी सेवाएं प्रदान करते हैं।",
    legalConsultation: "कानूनी परामर्श",
    consultationDescription: "विभिन्न कानूनी मामलों पर हमारे योग्य वकीलों से विशेषज्ञ सलाह प्राप्त करें।",
    documentReview: "दस्तावेज़ समीक्षा",
    documentDescription: "अपने कानूनी दस्तावेजों की सटीकता, पूर्णता और अनुपालन के लिए समीक्षा करवाएं।",
    legalRepresentation: "कानूनी प्रतिनिधित्व",
    representationDescription: "अदालती कार्यवाही और कानूनी विवादों के लिए पूर्ण प्रतिनिधित्व सेवाएं।",
    rightsEducation: "अधिकार शिक्षा",
    educationDescription: "आपको अपने कानूनी अधिकारों और जिम्मेदारियों को समझने में मदद करने के लिए शैक्षिक संसाधन।",
    // Add new translation keys
    minimize: "छोटा करें",
    expand: "विस्तार करें",
    botWelcomeMessage: "नमस्ते! मैं आपका कानूनी सहायक हूं। मैं आज आपकी कैसे मदद कर सकता हूं?",
    chatbotDescription: "क्या आपके कानूनी अधिकारों के बारे में प्रश्न हैं? हमारा एआई-संचालित कानूनी सहायक आपको सामान्य कानूनी प्रश्नों के बारे में मार्गदर्शन कर सकता है।"
  },
  kn: {
    home: "ಹೋಮ್",
    services: "ಸೇವೆಗಳು",
    chatbot: "ಚಾಟ್‌ಬಾಟ್",
    news: "ಸುದ್ದಿ",
    community: "ಸಮುದಾಯ",
    contact: "ಸಂಪರ್ಕ",
    login: "ಲಾಗಿನ್",
    signup: "ಸೈನ್ ಅಪ್",
    profile: "ಪ್ರೊಫೈಲ್",
    legalAssistant: "ಕಾನೂನು ಸಹಾಯಕ",
    askQuestion: "ನಿಮ್ಮ ಕಾನೂನು ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...",
    send: "ಕಳುಹಿಸಿ",
    chatWithAssistant: "ಕಾನೂನು ಸಹಾಯಕದೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    ourServices: "ನಮ್ಮ ಸೇವೆಗಳು",
    servicesDescription: "ನಾವು ಸಂಕೀರ್ಣ ಕಾನೂನು ಸಮಸ್ಯೆಗಳನ್ನು ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ರಕ್ಷಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಮಗ್ರ ಕಾನೂನು ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
    legalConsultation: "ಕಾನೂನು ಸಲಹೆ",
    consultationDescription: "ವಿಶಾಲ ಶ್ರೇಣಿಯ ಕಾನೂನು ವಿಷಯಗಳ ಬಗ್ಗೆ ನಮ್ಮ ಅರ್ಹ ವಕೀಲರಿಂದ ತಜ್ಞರ ಸಲಹೆಯನ್ನು ಪಡೆಯಿರಿ.",
    documentReview: "ದಾಖಲೆ ಪರಿಶೀಲನೆ",
    documentDescription: "ನಿಖರತೆ, ಪೂರ್ಣತೆ ಮತ್ತು ಅನುಸರಣೆಗಾಗಿ ನಿಮ್ಮ ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
    legalRepresentation: "ಕಾನೂನು ಪ್ರಾತಿನಿಧ್ಯ",
    representationDescription: "ನ್ಯಾಯಾಲಯದ ವಿಚಾರಣೆಗಳು ಮತ್ತು ಕಾನೂನು ವಿವಾದಗಳಿಗಾಗಿ ಪೂರ್ಣ ಪ್ರಾತಿನಿಧ್ಯದ ಸೇವೆಗಳು.",
    rightsEducation: "ಹಕ್ಕುಗಳ ಶಿಕ್ಷಣ",
    educationDescription: "ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕುಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಶೈಕ್ಷಣಿಕ ಸಂಪನ್ಮೂಲಗಳು.",
    // Add new translation keys
    minimize: "ಕಡಿಮೆ ಮಾಡಿ",
    expand: "ವಿಸ್ತರಿಸಿ",
    botWelcomeMessage: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕಾನೂನು ಸಹಾಯಕ. ನಾನು ನಿಮಗೆ ಇಂದು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    chatbotDescription: "ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕುಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮ AI-ಸಂಚಾಲಿತ ಕಾನೂನು ಸಹಾಯಕವು ನಿಮ್ಮನ್ನು ಸಾಮಾನ್ಯ ಕಾನೂನು ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ಮಾಡಬಹುದು."
  },
  ta: {
    home: "முகப்பு",
    services: "சேவைகள்",
    chatbot: "சாட்போட்",
    news: "செய்திகள்",
    community: "சமூகம்",
    contact: "தொடர்பு",
    login: "உள்நுழைய",
    signup: "பதிவு செய்ய",
    profile: "சுயவிவரம்",
    legalAssistant: "சட்ட உதவியாளர்",
    askQuestion: "உங்கள் சட்டக் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
    send: "அனுப்பு",
    chatWithAssistant: "சட்ட உதவியாளருடன் அரட்டை",
    ourServices: "எங்கள் சேவைகள்",
    servicesDescription: "சிக்கலான சட்டப் பிரச்சினைகளை எதிர்கொள்ளவும், உங்கள் உரிமைகளைப் பாதுகாக்கவும் உதவ விரிவான சட்ட சேவைகளை வழங்குகிறோம்.",
    legalConsultation: "சட்ட ஆலோசனை",
    consultationDescription: "பரந்த சட்டப் பிரச்சினைகளில் எங்கள் தகுதிவாய்ந்த வழக்கறிஞர்களிடமிருந்து நிபுணத்துவ ஆலோசனையைப் பெறுங்கள்.",
    documentReview: "ஆவண மதிப்பாய்வு",
    documentDescription: "துல்லியம், முழுமை மற்றும் இணக்கத்திற்காக உங்கள் சட்ட ஆவணங்களை மதிப்பாய்வு செய்யவும்.",
    legalRepresentation: "சட்ட பிரதிநிதித்துவம்",
    representationDescription: "நீதிமன்ற விசாரணைகள் மற்றும் சட்ட சர்ச்சைகளுக்கான முழு பிரதிநிதித்துவ சேவைகள்.",
    rightsEducation: "உரிமைகள் கல்வி",
    educationDescription: "உங்கள் சட்ட உரிமைகள் மற்றும் பொறுப்புகளைப் புரிந்துகொள்ள உதவும் கல்வி வளங்கள்.",
    // Add new translation keys
    minimize: "சுருக்கு",
    expand: "விரிவாக்கு",
    botWelcomeMessage: "வணக்கம்! நான் உங்கள் சட்ட உதவியாளர். இன்று உங்களுக்கு எப்படி உதவ முடியும்?",
    chatbotDescription: "உங்கள் சட்ட உரிமைகள் குறித்து கேள்விகள் உள்ளதா? எங்களின் AI சக்தி கொண்ட சட்ட உதவியாளர் பொதுவான சட்டக் கேள்விகள் குறித்து உங்களுக்கு வழிகாட்ட உதவும்."
  },
  mr: {
    home: "होम",
    services: "सेवा",
    chatbot: "चॅटबॉट",
    news: "बातम्या",
    community: "समुदाय",
    contact: "संपर्क",
    login: "लॉग इन",
    signup: "साइन अप",
    profile: "प्रोफाइल",
    legalAssistant: "कायदेशीर सहाय्यक",
    askQuestion: "तुमचा कायदेशीर प्रश्न येथे टाइप करा...",
    send: "पाठवा",
    chatWithAssistant: "कायदेशीर सहाय्यकाशी चॅट करा",
    ourServices: "आमच्या सेवा",
    servicesDescription: "आम्ही जटिल कायदेशीर समस्यांचे निराकरण करण्यास आणि तुमचे अधिकार संरक्षित करण्यास मदत करण्यासाठी सर्वसमावेशक कायदेशीर सेवा प्रदान करतो.",
    legalConsultation: "कायदेशीर सल्लामसलत",
    consultationDescription: "विविध कायदेशीर बाबींवर आमच्या पात्र वकीलांकडून तज्ञ सल्ला मिळवा.",
    documentReview: "दस्तऐवज पुनरावलोकन",
    documentDescription: "अचूकता, पूर्णता आणि अनुपालनासाठी तुमचे कायदेशीर दस्तऐवज तपासले जातात.",
    legalRepresentation: "कायदेशीर प्रतिनिधित्व",
    representationDescription: "न्यायालयीन कार्यवाही आणि कायदेशीर वादांसाठी पूर्ण प्रतिनिधित्व सेवा.",
    rightsEducation: "अधिकार शिक्षण",
    educationDescription: "तुमचे कायदेशीर अधिकार आणि जबाबदाऱ्या समजून घेण्यास मदत करण्यासाठी शैक्षणिक संसाधने.",
    // Add new translation keys
    minimize: "कमी करा",
    expand: "विस्तार करा",
    botWelcomeMessage: "नमस्कार! मी तुमचा कायदेशीर सहाय्यक आहे. आज मी तुम्हाला कशी मदत करू शकतो?",
    chatbotDescription: "तुमच्या कायदेशीर अधिकारांबद्दल प्रश्न आहेत? आमचा AI-संचालित कायदेशीर सहाय्यक तुम्हाला सामान्य कायदेशीर प्रश्नांमधून मार्गदर्शन करण्यास मदत करू शकतो."
  }
};

// Create a context for translations
export const TranslationContext = createContext<{
  t: (key: keyof typeof translations.en) => string;
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}>({
  t: (key) => key,
  currentLanguage: "en",
  setCurrentLanguage: () => {}
});

// Hook to use translations
export const useTranslation = () => useContext(TranslationContext);

// TranslationProvider component
export const TranslationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || "en";
  });

  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = (key: keyof typeof translations.en) => {
    //@ts-ignore - We know all languages have the same keys
    return translations[currentLanguage]?.[key] || translations.en[key];
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

const LanguageSelector = () => {
  const { currentLanguage, setCurrentLanguage } = useTranslation();

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
