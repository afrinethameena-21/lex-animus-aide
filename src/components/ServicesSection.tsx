
import { Gavel, FileText, MessageSquare, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "./LanguageSelector";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("legalConsultation"),
      description: t("consultationDescription"),
      icon: Gavel,
      link: "/legal-consultation"
    },
    {
      title: t("documentReview"),
      description: t("documentDescription"),
      icon: FileText,
      link: "/document-review"
    },
    {
      title: t("legalRepresentation"),
      description: t("representationDescription"),
      icon: MessageSquare,
      link: "/legal-representation"
    },
    {
      title: t("rightsEducation"),
      description: t("educationDescription"),
      icon: BookOpen,
      link: "/rights-education"
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">{t("ourServices")}</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            {t("servicesDescription")}
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
                <CardDescription className="text-legal-darkgray mb-4">{service.description}</CardDescription>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
