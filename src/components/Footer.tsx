import React from "react";
import { Gavel } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-legal-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/63bca008-a591-40ab-8f9b-a0f334e6c8d5.png" 
                alt="Nyayasethu Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Nyayasethu</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering individuals through legal knowledge and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-legal-gold">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-gold">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm6.948 7.369l-1.64.024c-1.287 0-1.536.61-1.536 1.502v1.97h3.066l-.4 3.095h-2.666V21H12.68v-5.04H10.02v-3.095h2.66v-2.273c0-2.635 1.61-4.072 3.962-4.072 1.127 0 2.094.084 2.375.122v2.727h-.069z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-gold">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5.433 14.096c-.168.372-.546.681-.957.777-2.619.604-7.369.604-9.988 0-.411-.096-.789-.405-.957-.777-.309-.677-.309-2.615 0-3.292.168-.371.546-.681.957-.777 2.619-.603 7.369-.603 9.988 0 .411.097.789.406.957.777.309.677.309 2.615 0 3.292z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-gold">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.162 5.656c-.806.36-1.674.606-2.583.69 1.032-.618 1.793-1.593 2.16-2.756-.964.575-2.03.985-3.164 1.21C17.76 3.738 16.672 3.2 15.5 3.2c-2.247 0-4.07 1.823-4.07 4.07 0 .32.037.63.103.923-3.386-.17-6.387-1.792-8.396-4.258-.35.598-.55 1.296-.55 2.032 0 1.41.72 2.658 1.82 3.386-.67-.02-1.297-.204-1.85-.51v.053c0 1.972 1.4 3.614 3.264 3.99-.342.096-.7.143-1.07.143-.262 0-.518-.025-.768-.074.517 1.617 2.018 2.794 3.794 2.827-1.392 1.09-3.14 1.74-5.04 1.74-.33 0-.65-.02-.97-.058 1.8 1.15 3.94 1.824 6.24 1.824 7.49 0 11.59-6.2 11.59-11.58 0-.177-.004-.355-.012-.53.798-.576 1.49-1.295 2.03-2.114z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-legal-gold">Legal Consultation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-legal-gold">Document Review</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-legal-gold">Legal Representation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-legal-gold">Rights Education</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-legal-gold">Legal Workshops</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Legal FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Document Templates</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-legal-gold">Latest News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Legal Glossary</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Practice Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Employment Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Housing Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Immigration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legal-gold">Civil Rights</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Nyayasethu. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-legal-gold">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-legal-gold">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-legal-gold">Cookie Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-legal-gold">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
