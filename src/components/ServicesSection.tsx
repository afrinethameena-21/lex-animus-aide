
import { Gavel, FileText, MessageSquare, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Legal Consultation",
    description: "Get expert advice from our qualified attorneys on a wide range of legal matters.",
    icon: Gavel,
  },
  {
    title: "Document Review",
    description: "Have your legal documents reviewed for accuracy, completeness, and compliance.",
    icon: FileText,
  },
  {
    title: "Legal Representation",
    description: "Full representation services for court proceedings and legal disputes.",
    icon: MessageSquare,
  },
  {
    title: "Rights Education",
    description: "Educational resources to help you understand your legal rights and responsibilities.",
    icon: BookOpen,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">Our Services</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            We provide comprehensive legal services to help you navigate complex legal issues and protect your rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow duration-300 bg-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-legal-lightgray flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-legal-navy" />
                </div>
                <CardTitle className="text-xl font-bold text-legal-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-legal-darkgray">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
