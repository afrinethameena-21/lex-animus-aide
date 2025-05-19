
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for Supabase session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (data.session) {
        setUser(data.session.user);
      } else {
        // Fallback to localStorage for backward compatibility
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
          setUser(JSON.parse(currentUser));
        } else {
          // Redirect to login if no user is logged in
          navigate("/auth");
        }
      }
    };
    
    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Sign out from Supabase
      await supabase.auth.signOut();
      
      // Also clear localStorage for backward compatibility
      localStorage.removeItem("currentUser");
      
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Logout error:", error);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-legal-lightgray to-white p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-legal-navy mb-4">
            Welcome, {user.name || user.email}
          </h2>
          <p className="text-legal-darkgray mb-6">
            This is your personalized dashboard
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-legal-lightgray p-4 rounded-md">
            <h3 className="text-legal-navy font-semibold mb-2">Your Details</h3>
            <p>Email: {user.email}</p>
            {user.name && <p>Name: {user.name}</p>}
          </div>

          <Button 
            onClick={handleLogout} 
            className="w-full bg-legal-navy hover:bg-opacity-90 text-white"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
