import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get current authenticated user if any
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id;
      
      // Insert contact message to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null, // Handle empty phone
          subject: formData.subject,
          message: formData.message,
          user_id: userId || null // Link to user if authenticated
        });

      if (error) {
        console.error("Error submitting contact form:", error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Thank you! Your message has been sent successfully.");
      
      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-legal-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">Contact Us</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            Have questions or need legal assistance? Reach out to our team of experts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-legal-navy mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-legal-darkgray">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-legal-darkgray">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-legal-darkgray">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-legal-darkgray">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Legal Question"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-legal-darkgray">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your legal issue or question..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-legal-navy hover:bg-opacity-90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-legal-navy mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-legal-gold mt-1" />
                  <div>
                    <p className="font-medium text-legal-navy">Phone</p>
                    <p className="text-legal-darkgray">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-legal-gold mt-1" />
                  <div>
                    <p className="font-medium text-legal-navy">Email</p>
                    <p className="text-legal-darkgray">info@knowyourrights.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-legal-gold mt-1" />
                  <div>
                    <p className="font-medium text-legal-navy">Office Address</p>
                    <p className="text-legal-darkgray">
                      123 Legal Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 text-legal-gold mt-1" />
                  <div>
                    <p className="font-medium text-legal-navy">Office Hours</p>
                    <p className="text-legal-darkgray">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-legal-navy mb-4">Emergency Legal Assistance</h3>
              <p className="text-legal-darkgray mb-4">
                Need urgent legal help after hours? Call our 24/7 emergency legal hotline.
              </p>
              <Button className="bg-legal-gold hover:bg-opacity-90 text-white">
                Emergency Hotline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
