
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface Question {
  id: number;
  avatar: string;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  isVerified?: boolean;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    avatar: "/placeholder.svg",
    author: "Jane Smith",
    title: "Can I file a complaint against cyber fraud?",
    content: "Someone scammed me online. How do I report it?",
    category: "Cybercrime",
    likes: 12,
    isVerified: true,
  },
  {
    id: 2,
    avatar: "/placeholder.svg",
    author: "John Doe",
    title: "Is maternity leave mandatory for private companies?",
    content: "Are all companies required to provide maternity leave?",
    category: "Employment Laws",
    likes: 8,
  }
];

const categories = [
  { name: "Legal Advice", emoji: "⚖️" },
  { name: "Family Laws", emoji: "👨‍👩‍👧‍👦" },
  { name: "Cybercrime", emoji: "💻" },
  { name: "Employment Laws", emoji: "🏢" },
];

const CommunitySection = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [newQuestion, setNewQuestion] = useState("");

  const handlePostQuestion = () => {
    if (!newQuestion.trim()) return;
    
    const newQuestionObj: Question = {
      id: questions.length + 1,
      avatar: "/placeholder.svg",
      author: "Anonymous User",
      title: newQuestion,
      content: newQuestion,
      category: "Legal Advice",
      likes: 0,
    };

    setQuestions([newQuestionObj, ...questions]);
    setNewQuestion("");
  };

  return (
    <section id="community" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">Community</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            Join our legal community to ask questions and get answers from experts.
          </p>
        </div>

        {/* Question Input */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Ask a legal question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handlePostQuestion} className="bg-green-500 hover:bg-green-600">
                Post
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="bg-gray-50 hover:bg-gray-100"
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={question.avatar} alt={question.author} />
                    <AvatarFallback>{question.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{question.title}</h3>
                    <p className="text-sm text-legal-darkgray">{question.content}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{question.category}</Badge>
                  {question.isVerified && (
                    <Badge className="bg-green-500">Verified Answer</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    👍 {question.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    Reply
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-red-500">
                  Report
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
