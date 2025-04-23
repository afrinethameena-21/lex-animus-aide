import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const gavelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gavelElement = gavelRef.current;
    if (!gavelElement) return;

    const animateGavel = () => {
      gavelElement.style.animation = 'gavel-raise 0.8s forwards';
      
      setTimeout(() => {
        gavelElement.style.animation = 'gavel-hit 0.8s forwards';
      }, 1000);
      
      setTimeout(() => {
        gavelElement.style.animation = '';
      }, 1800);
    };

    // Initial animation
    setTimeout(animateGavel, 500);
    
    // Repeat animation every 5 seconds
    const interval = setInterval(animateGavel, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-legal-lightgray to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal-navy mb-6 leading-tight">
              Know Your Rights, <br />
              <span className="text-legal-gold">Secure Your Future</span>
            </h1>
            <p className="text-lg md:text-xl text-legal-darkgray mb-8 max-w-lg">
              Access expert legal resources, understand your rights, and get the guidance you need to navigate the legal system with confidence.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-legal-navy hover:bg-opacity-90 text-white px-6 py-3 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white px-6 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-72 h-72 flex items-center justify-center">
              <div className="absolute bottom-16 w-24 h-6 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-lg shadow-lg"></div>
              
              <div 
                ref={gavelRef} 
                className="absolute origin-bottom-right transform rotate-0 transition-transform"
                style={{ bottom: '4rem', right: '9rem' }}
              >
                <div className="relative">
                  <div className="w-56 h-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full shadow-md"></div>
                  
                  <div className="absolute top-0 left-4 w-24 h-4 flex space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-4 h-4 bg-[#5C3317] opacity-20 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-14 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-md shadow-lg">
                    <div className="absolute inset-2 flex flex-col space-y-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-px bg-[#5C3317] opacity-20"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-4 border-legal-navy rounded-full opacity-20"></div>
              <div className="absolute inset-8 border-2 border-legal-gold rounded-full opacity-10"></div>
              <div className="absolute inset-12 border border-legal-navy rounded-full opacity-5"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 right-20 w-32 h-32 bg-legal-navy bg-opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-legal-gold bg-opacity-5 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
