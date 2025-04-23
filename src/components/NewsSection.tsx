
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "New Housing Rights Law Takes Effect",
    date: "May 15, 2025",
    summary: "The newly passed Housing Rights Act provides additional protections for tenants against unfair evictions and rent increases.",
    category: "Housing Law",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Supreme Court Decision on Privacy Rights",
    date: "May 10, 2025",
    summary: "In a landmark decision, the Supreme Court ruled in favor of expanding digital privacy protections for citizens.",
    category: "Constitutional Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcmVtZSUyMGNvdXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Employment Rights Workshop Series",
    date: "May 5, 2025",
    summary: "Join our free workshop series to learn about your rights in the workplace, including anti-discrimination protections.",
    category: "Employment Law",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wbG95bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">Latest Legal News</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            Stay informed about the latest legal developments and how they might affect your rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 bg-legal-lightgray text-legal-navy rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-legal-darkgray">{item.date}</span>
                </div>
                <CardTitle className="text-lg font-bold text-legal-navy">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-legal-darkgray">{item.summary}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-legal-navy hover:text-legal-gold">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
