
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "./LanguageSelector";

// Expanded legal knowledge base for more comprehensive responses
const legalKnowledge = {
  copyrights: "Copyright is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.",
  trademarks: "A trademark is a sign capable of distinguishing the goods or services of one enterprise from those of other enterprises. Trademarks are protected by intellectual property rights.",
  patents: "A patent is an exclusive right granted for an invention, which is a product or a process that provides a new way of doing something, or offers a new technical solution to a problem.",
  divorce: "Divorce is the process of legally dissolving a marriage. The laws governing divorce vary depending on the jurisdiction, but they typically address issues such as division of property, child custody, and alimony.",
  custody: "Child custody refers to the legal and practical relationship between a parent and child, including the right to make decisions for the child and the duty to care for them.",
  tenancy: "Tenancy refers to the possession or occupancy of land, buildings, or other property by title, under a lease, or on payment of rent.",
  employment: "Employment law regulates the relationship between employers and employees, covering areas such as wages, working hours, health and safety, anti-discrimination, and termination of employment.",
  criminal: "Criminal law deals with crimes and their punishment. It defines conduct that is considered threatening, harmful, or endangering to property, health, safety, and moral welfare of people.",
  civilRights: "Civil rights are personal rights guaranteed and protected by the Constitution and federal laws enacted by Congress, such as the Civil Rights Act of 1964.",
  property: "Property law governs the various forms of ownership and tenancy in real property and personal property. It refers to the legal relations between people regarding tangible and intangible assets.",
  tax: "Tax law is the practice of law that relates to the assessment and payment of taxes. Tax lawyers help their clients understand tax laws and conduct their affairs in a legal way that minimizes their tax burden.",
  immigration: "Immigration law refers to the national statutes, regulations, and legal precedents governing immigration into and deportation from a country.",
  medical: "Medical law concerns the rights and duties of medical professionals and their patients. The main areas of medical law include confidentiality, negligence, and consent.",
  business: "Business law deals with the creation, operation, and dissolution of businesses and corporations. It covers many areas such as contracts, sales, property, taxes, and commercial transactions.",
  insurance: "Insurance law involves the regulation of insurance policies and claims. It covers life, health, property, and liability insurance.",
  wills: "The law of wills covers what happens to a person's estate after they die. It encompasses testamentary capacity, valid execution of wills, and estate administration."
};

// Enhanced function to find relevant information in the query
const findLegalAnswer = (query: string) => {
  query = query.toLowerCase();
  
  // Create a mapping of keywords to topics
  const topicKeywords = {
    copyrights: ["copyright", "artistic", "literary", "creation", "author", "books", "music", "paintings", "artwork"],
    trademarks: ["trademark", "brand", "logo", "business name", "company symbol", "service mark"],
    patents: ["patent", "invention", "innovation", "new product", "technical", "solution"],
    divorce: ["divorce", "marriage", "separation", "alimony", "matrimonial", "spouse"],
    custody: ["custody", "child", "parent", "visitation", "guardian", "minor"],
    tenancy: ["rent", "tenant", "landlord", "lease", "property", "apartment", "eviction", "housing"],
    employment: ["work", "job", "employee", "employer", "fired", "termination", "workplace", "salary", "wage", "labor"],
    criminal: ["crime", "criminal", "arrest", "jail", "prison", "offense", "felony", "misdemeanor", "police", "theft", "assault"],
    civilRights: ["rights", "discrimination", "equality", "freedom", "constitutional", "liberty", "speech", "religion", "assembly"],
    property: ["property", "land", "real estate", "deed", "ownership", "title", "boundary", "fence", "neighbor"],
    tax: ["tax", "taxes", "irs", "income", "deduction", "filing", "audit", "return"],
    immigration: ["immigration", "visa", "passport", "citizenship", "alien", "green card", "deportation", "asylum"],
    medical: ["medical", "healthcare", "hospital", "doctor", "patient", "malpractice", "treatment", "consent"],
    business: ["business", "company", "corporation", "startup", "llc", "partnership", "contract", "commercial"],
    insurance: ["insurance", "policy", "claim", "coverage", "premium", "deductible"],
    wills: ["will", "testament", "estate", "probate", "inheritance", "heir", "beneficiary", "executor", "deceased"]
  };
  
  // Find the best matching topic
  let bestMatch = "";
  let matchCount = 0;
  
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    const topicMatchCount = keywords.filter(keyword => query.includes(keyword)).length;
    if (topicMatchCount > matchCount) {
      matchCount = topicMatchCount;
      bestMatch = topic;
    }
  }
  
  // If we found a match, return the corresponding legal knowledge
  if (bestMatch && matchCount > 0) {
    return legalKnowledge[bestMatch as keyof typeof legalKnowledge];
  }
  
  // If no specific match but contains legal terms, try to provide general guidance
  const legalTerms = ["law", "legal", "court", "judge", "lawyer", "attorney", "rights", "lawsuit", "sue", "case"];
  if (legalTerms.some(term => query.includes(term))) {
    return "Your question seems to be related to a legal matter. For specific legal advice, it's best to consult with a qualified attorney. However, I can provide general information about various legal topics like copyrights, trademarks, patents, divorce, child custody, tenancy, employment law, criminal law, civil rights, property law, tax law, immigration law, medical law, business law, insurance law, and wills and estates. Could you please provide more details about your specific legal concern?";
  }
  
  // Default response for completely unmatched queries
  return "I understand you have a legal question. Could you provide more specific details about your situation? I can help with information about many legal topics including copyrights, trademarks, patents, divorce, child custody, tenancy, employment law, criminal law, civil rights, property law, tax law, immigration law, medical law, business law, insurance law, and wills and estates.";
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
    setMessages(prevMessages => [...prevMessages, { sender: "user", text: message }]);
    
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
      { sender: "bot", text: t("botWelcomeMessage") || "Hello! I'm your legal assistant. How can I help you today?" },
    ]);
  }, [currentLanguage, t]);

  return (
    <section id="chatbot" className="py-16 bg-legal-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">{t("legalAssistant")}</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            {t("chatbotDescription") || "Have questions about your legal rights? Our AI-powered legal assistant can help guide you through common legal questions."}
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
                {isOpen ? t("minimize") || "Minimize" : t("expand") || "Expand"}
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
                    placeholder={t("askQuestion") || "Ask a legal question..."}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    className="bg-legal-navy hover:bg-opacity-90"
                    disabled={isTyping}
                  >
                    {t("send") || "Send"}
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
                {t("chatWithAssistant") || "Chat with Assistant"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
