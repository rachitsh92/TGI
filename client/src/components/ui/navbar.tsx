import { Link } from "wouter";
import { Button } from "./button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              TGI
            </a>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-gray-600 hover:text-blue-600"
            >
              Our Mission
            </button>
            <button 
              onClick={() => scrollToSection('problems')}
              className="text-gray-600 hover:text-blue-600"
            >
              Problems
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-blue-600"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-600 hover:text-blue-600"
            >
              Use Cases
            </button>
          </div>

          <Button 
            variant="outline"
            onClick={() => scrollToSection('join')}
          >
            Join the Cause
          </Button>
        </div>
      </div>
    </nav>
  );
}
