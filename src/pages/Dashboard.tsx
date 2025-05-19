
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, MessageSquare, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [documentReviews, setDocumentReviews] = useState<any[]>([]);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for Supabase session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (data.session) {
        setUser(data.session.user);
        await fetchUserData(data.session.user.id);
      } else {
        // Redirect to login if no user is logged in
        navigate("/auth");
      }
    };
    
    checkSession();
  }, [navigate]);

  const fetchUserData = async (userId: string) => {
    setIsLoading(true);
    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (profileError) {
        console.error("Error fetching profile:", profileError);
      } else {
        setProfile(profileData);
      }

      // Fetch consultations
      const { data: consultationsData, error: consultationsError } = await supabase
        .from('consultations')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (consultationsError) {
        console.error("Error fetching consultations:", consultationsError);
      } else {
        setConsultations(consultationsData || []);
      }

      // Fetch document reviews
      const { data: documentReviewsData, error: documentReviewsError } = await supabase
        .from('document_reviews')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (documentReviewsError) {
        console.error("Error fetching document reviews:", documentReviewsError);
      } else {
        setDocumentReviews(documentReviewsData || []);
      }

      // Fetch contact messages
      const { data: contactMessagesData, error: contactMessagesError } = await supabase
        .from('contact_messages')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (contactMessagesError) {
        console.error("Error fetching contact messages:", contactMessagesError);
      } else {
        setContactMessages(contactMessagesData || []);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to load user data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      // Sign out from Supabase
      await supabase.auth.signOut();
      
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Logout error:", error);
    }
  };

  const renderStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      processing: "bg-blue-100 text-blue-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || colors.pending}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="animate-spin h-8 w-8 mx-auto text-legal-navy mb-4" />
            <p className="text-legal-darkgray">Loading your dashboard...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-legal-lightgray to-white p-4">
        <div className="container mx-auto max-w-5xl py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold text-legal-navy">
                  Welcome, {profile?.name || user.email.split('@')[0]}
                </h2>
                <p className="text-legal-darkgray mt-1">
                  Manage your legal services and inquiries
                </p>
              </div>
              <Button 
                onClick={handleLogout} 
                className="mt-4 md:mt-0 bg-legal-navy hover:bg-opacity-90 text-white"
              >
                Logout
              </Button>
            </div>

            <div className="p-4 bg-legal-lightgray rounded-md">
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 text-legal-navy" />
                <div>
                  <h3 className="text-lg font-medium text-legal-navy">Your Details</h3>
                  <p className="text-legal-darkgray">Email: {user.email}</p>
                  {profile?.phone && <p className="text-legal-darkgray">Phone: {profile.phone}</p>}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/legal-consultation')}
                className="bg-legal-gold hover:bg-opacity-90 text-white"
              >
                Book Consultation
              </Button>
              <Button 
                onClick={() => navigate('/document-review')}
                className="bg-legal-navy hover:bg-opacity-90 text-white"
              >
                Submit Documents
              </Button>
            </div>
          </div>

          <Tabs defaultValue="consultations">
            <TabsList className="mb-6 w-full border-b border-gray-200">
              <TabsTrigger value="consultations" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Consultations ({consultations.length})
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Document Reviews ({documentReviews.length})
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages ({contactMessages.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="consultations">
              {consultations.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                  <Calendar className="h-10 w-10 mx-auto text-legal-navy opacity-40 mb-2" />
                  <h3 className="text-xl font-medium text-legal-navy">No consultations yet</h3>
                  <p className="text-legal-darkgray mt-2">
                    Book a consultation with one of our legal experts.
                  </p>
                  <Button 
                    onClick={() => navigate('/legal-consultation')}
                    className="mt-4 bg-legal-navy hover:bg-opacity-90"
                  >
                    Book Consultation
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {consultations.map((consultation) => (
                    <Card key={consultation.id} className="shadow-md overflow-hidden">
                      <CardHeader className="bg-legal-lightgray bg-opacity-50">
                        <CardTitle className="flex justify-between items-center">
                          {consultation.lawyer_type} Consultation
                          <div>{renderStatusBadge(consultation.status)}</div>
                        </CardTitle>
                        <CardDescription>
                          {format(new Date(consultation.date), 'MMMM d, yyyy')} at {consultation.time}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        {consultation.details && (
                          <div className="mb-4">
                            <p className="font-semibold mb-1">Details:</p>
                            <p className="text-gray-700">{consultation.details}</p>
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                          <div>
                            <span className="font-medium">Date Submitted:</span>
                            <p className="text-gray-600">
                              {format(new Date(consultation.created_at), 'MMMM d, yyyy')}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="documents">
              {documentReviews.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                  <FileText className="h-10 w-10 mx-auto text-legal-navy opacity-40 mb-2" />
                  <h3 className="text-xl font-medium text-legal-navy">No document reviews yet</h3>
                  <p className="text-legal-darkgray mt-2">
                    Submit documents for our legal experts to review.
                  </p>
                  <Button 
                    onClick={() => navigate('/document-review')}
                    className="mt-4 bg-legal-navy hover:bg-opacity-90"
                  >
                    Submit Documents
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {documentReviews.map((review) => (
                    <Card key={review.id} className="shadow-md overflow-hidden">
                      <CardHeader className="bg-legal-lightgray bg-opacity-50">
                        <CardTitle className="flex justify-between items-center">
                          {review.document_type} Review
                          <div>{renderStatusBadge(review.status)}</div>
                        </CardTitle>
                        <CardDescription>
                          Submitted on {format(new Date(review.created_at), 'MMMM d, yyyy')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        {review.details && (
                          <div className="mb-4">
                            <p className="font-semibold mb-1">Details:</p>
                            <p className="text-gray-700">{review.details}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="messages">
              {contactMessages.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                  <MessageSquare className="h-10 w-10 mx-auto text-legal-navy opacity-40 mb-2" />
                  <h3 className="text-xl font-medium text-legal-navy">No messages yet</h3>
                  <p className="text-legal-darkgray mt-2">
                    Send us a message with your legal inquiries.
                  </p>
                  <Button 
                    onClick={() => navigate('/#contact')}
                    className="mt-4 bg-legal-navy hover:bg-opacity-90"
                  >
                    Contact Us
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {contactMessages.map((message) => (
                    <Card key={message.id} className="shadow-md overflow-hidden">
                      <CardHeader className="bg-legal-lightgray bg-opacity-50">
                        <CardTitle>{message.subject}</CardTitle>
                        <CardDescription>
                          Sent on {format(new Date(message.created_at), 'MMMM d, yyyy')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-700">{message.message}</p>
                      </CardContent>
                      <CardFooter className="bg-gray-50 text-sm text-gray-600">
                        <p>We'll respond to your inquiry as soon as possible.</p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
