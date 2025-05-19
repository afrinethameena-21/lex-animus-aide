
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, UserRound, LogOut } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import LanguageSelector, { useTranslation } from "./LanguageSelector";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // Check for Supabase session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (data.session) {
        setCurrentUser(data.session.user);
      } else {
        // Fallback to localStorage for backward compatibility
        const localUser = localStorage.getItem("currentUser");
        if (localUser) {
          setCurrentUser(JSON.parse(localUser));
        } else {
          setCurrentUser(null);
        }
      }
    };
    
    checkSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setCurrentUser(session.user);
        } else {
          setCurrentUser(null);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

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
            <Link to="/" className="text-xl font-bold text-legal-navy">Nyayasethu</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-legal-darkgray hover:text-legal-navy font-medium flex items-center gap-2">
                <Home size={20} />
                {t("home")}
              </Link>
              <a href="#services" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("services")}</a>
              <a href="#chatbot" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("chatbot")}</a>
              <a href="#news" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("news")}</a>
              <a href="#community" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("community")}</a>
              <a href="#contact" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("contact")}</a>
            </nav>

            {/* Auth/Profile Section */}
            <div className="flex items-center space-x-2">
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button 
                        variant="ghost"
                        className="flex items-center gap-2"
                        onClick={() => navigate("/dashboard")}
                      >
                        <UserRound size={20} />
                        {t("profile")}
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto p-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium">User: {currentUser.email}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 flex items-center gap-2"
                          onClick={handleLogout}
                        >
                          <LogOut size={16} />
                          {t("logout")}
                        </Button>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white"
                    onClick={() => navigate("/auth")}
                  >
                    {t("login")}
                  </Button>
                  <Button 
                    className="bg-legal-navy hover:bg-opacity-90"
                    onClick={() => navigate("/auth")}
                  >
                    {t("signup")}
                  </Button>
                </>
              )}
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
              <Link to="/" className="text-legal-darkgray hover:text-legal-navy font-medium flex items-center gap-2">
                <Home size={20} />
                {t("home")}
              </Link>
              <a href="#services" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("services")}</a>
              <a href="#chatbot" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("chatbot")}</a>
              <a href="#news" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("news")}</a>
              <a href="#community" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("community")}</a>
              <a href="#contact" className="text-legal-darkgray hover:text-legal-navy font-medium">{t("contact")}</a>
            </nav>
            {currentUser ? (
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => navigate("/dashboard")}
                >
                  <UserRound size={20} className="mr-2" />
                  {t("profile")}
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={handleLogout}
                >
                  <LogOut size={20} className="mr-2" />
                  {t("logout")}
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white"
                  onClick={() => navigate("/auth")}
                >
                  {t("login")}
                </Button>
                <Button 
                  className="bg-legal-navy hover:bg-opacity-90"
                  onClick={() => navigate("/auth")}
                >
                  {t("signup")}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
