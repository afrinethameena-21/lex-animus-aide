
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "./LanguageSelector";

// Sample legal knowledge base for demo purposes
const legalKnowledge = {
  copyrights: "Copyright is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.",
  trademarks: "A trademark is a sign capable of distinguishing the goods or services of one enterprise from those of other enterprises. Trademarks are protected by intellectual property rights.",
  patents: "A patent is an exclusive right granted for an invention, which is a product or a process that provides a new way of doing something, or offers a new technical solution to a problem.",
  divorce: "Divorce is the process of legally dissolving a marriage. The laws governing divorce vary depending on the jurisdiction, but they typically address issues such as division of property, child custody, and alimony.",
  custody: "Child custody refers to the legal and practical relationship between a parent and child, including the right to make decisions for the child and the duty to care for them.",
  tenancy: "Tenancy refers to the possession or occupancy of land, buildings, or other property by title, under a lease, or on payment of rent.",
  employment: "Employment law regulates the relationship between employers and employees, covering areas such as wages, working hours, health and safety, anti-discrimination, and termination of employment."
};

// Function to find relevant information based on keywords in the query
const findLegalAnswer = (query: string) => {
  query = query.toLowerCase();
  
  // Check for keywords in the query
  if (query.includes("copyright") || query.includes("artistic work") || query.includes("literary")) {
    return legalKnowledge.copyrights;
  } else if (query.includes("trademark") || query.includes("brand") || query.includes("logo")) {
    return legalKnowledge.trademarks;
  } else if (query.includes("patent") || query.includes("invention") || query.includes("innovation")) {
    return legalKnowledge.patents;
  } else if (query.includes("divorce") || query.includes("marriage") || query.includes("separation")) {
    return legalKnowledge.divorce;
  } else if (query.includes("custody") || query.includes("child") || query.includes("parent")) {
    return legalKnowledge.custody;
  } else if (query.includes("rent") || query.includes("tenant") || query.includes("landlord") || query.includes("lease")) {
    return legalKnowledge.tenancy;
  } else if (query.includes("work") || query.includes("job") || query.includes("employer") || query.includes("fired") || query.includes("termination")) {
    return legalKnowledge.employment;
  }
  
  // Default response
  return "I understand you have a legal question. Could you provide more specific details about your situation? I can help with information about copyrights, trademarks, patents, divorce, child custody, tenancy, and employment law.";
};

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatbotSection = () => {
  const { t, currentLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! I'm your legal assistant. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate bot typing effect
  const simulateBotTyping = (response: string) => {
    setIsTyping(true);
    const typingTime = Math.min(response.length * 20, 2000); // Cap at 2 seconds
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: response }
      ]);
    }, typingTime);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { sender: "user", text: message }]);
    
    // Get response based on user query
    const userQuery = message;
    setMessage("");
    
    // Process the user query after a short delay
    setTimeout(() => {
      const response = findLegalAnswer(userQuery);
      simulateBotTyping(response);
    }, 500);
  };

  // Reset messages when language changes
  useEffect(() => {
    setMessages([
      { sender: "bot", text: "Hello! I'm your legal assistant. How can I help you today?" },
    ]);
  }, [currentLanguage]);

  return (
    <section id="chatbot" className="py-16 bg-legal-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">{t("legalAssistant")}</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            Have questions about your legal rights? Our AI-powered legal assistant can help guide you through common legal questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-legal-navy p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="text-white mr-2 h-5 w-5" />
              <h3 className="text-white font-medium">{t("legalAssistant")}</h3>
            </div>
            <div>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-legal-gold transition-colors"
              >
                {isOpen ? "Minimize" : "Expand"}
              </button>
            </div>
          </div>

          {isOpen && (
            <>
              <div className="p-4 h-80 overflow-y-auto bg-white border-b">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block rounded-lg py-2 px-4 max-w-xs lg:max-w-md ${
                        msg.sender === "user"
                          ? "bg-legal-navy text-white"
                          : "bg-legal-lightgray text-legal-darkgray"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left mb-4">
                    <div className="inline-block rounded-lg py-2 px-4 bg-legal-lightgray text-legal-darkgray">
                      <span className="flex gap-1">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("askQuestion")}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    className="bg-legal-navy hover:bg-opacity-90"
                    disabled={isTyping}
                  >
                    {t("send")}
                  </Button>
                </form>
              </div>
            </>
          )}

          {!isOpen && (
            <div className="p-4 text-center">
              <Button 
                onClick={() => setIsOpen(true)}
                className="bg-legal-navy hover:bg-opacity-90"
              >
                {t("chatWithAssistant")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
