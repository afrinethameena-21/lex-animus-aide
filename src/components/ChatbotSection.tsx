
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your legal assistant. How can I help you today?" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { sender: "user", text: message }]);
    setMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { 
          sender: "bot", 
          text: "Thank you for your question. I'd be happy to help you understand your rights in this situation. Could you provide a few more details so I can give you the most accurate information?" 
        },
      ]);
    }, 1000);
  };

  return (
    <section id="chatbot" className="py-16 bg-legal-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">Legal Assistant</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            Have questions about your legal rights? Our AI-powered legal assistant can help guide you through common legal questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-legal-navy p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="text-white mr-2 h-5 w-5" />
              <h3 className="text-white font-medium">Legal Rights Assistant</h3>
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
              </div>

              <div className="p-4 bg-white">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your legal question here..."
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-legal-navy hover:bg-opacity-90">
                    Send
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
                Chat with Legal Assistant
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
