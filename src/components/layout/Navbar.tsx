
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Wallet, 
  Gamepad2, 
  BarChart3, 
  Settings, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <header className="bg-crypto-dark-700 border-b border-crypto-dark-600">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-crypto-purple to-crypto-blue bg-clip-text text-transparent">
            GameTerminal
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink icon={<LayoutDashboard size={18} />} label="Dashboard" isActive />
          <NavLink icon={<Gamepad2 size={18} />} label="Games" />
          <NavLink icon={<Wallet size={18} />} label="Tokens" />
          <NavLink icon={<BarChart3 size={18} />} label="Markets" />
          <NavLink icon={<Settings size={18} />} label="Settings" />
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="bg-crypto-dark-600 border-crypto-dark-500 hover:bg-crypto-dark-500"
          >
            <Wallet size={16} className="mr-2" />
            Connect
          </Button>
          
          <Button 
            onClick={() => setIsNavOpen(!isNavOpen)} 
            variant="ghost" 
            className="md:hidden"
          >
            {isNavOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isNavOpen && (
        <div className="md:hidden p-4 bg-crypto-dark-700 border-b border-crypto-dark-600 animate-slide-up">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink icon={<LayoutDashboard size={18} />} label="Dashboard" isActive />
            <MobileNavLink icon={<Gamepad2 size={18} />} label="Games" />
            <MobileNavLink icon={<Wallet size={18} />} label="Tokens" />
            <MobileNavLink icon={<BarChart3 size={18} />} label="Markets" />
            <MobileNavLink icon={<Settings size={18} />} label="Settings" />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  icon, 
  label, 
  isActive = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean;
}) => (
  <a 
    href="#" 
    className={`flex items-center px-3 py-1.5 rounded-md transition-colors ${
      isActive 
        ? "bg-crypto-dark-600 text-white" 
        : "text-gray-300 hover:bg-crypto-dark-600 hover:text-white"
    }`}
  >
    <span className="mr-2">{icon}</span>
    <span>{label}</span>
  </a>
);

const MobileNavLink = ({ 
  icon, 
  label, 
  isActive = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean;
}) => (
  <a 
    href="#" 
    className={`flex items-center p-3 rounded-md transition-colors ${
      isActive 
        ? "bg-crypto-dark-600 text-white" 
        : "text-gray-300 hover:bg-crypto-dark-600 hover:text-white"
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{label}</span>
  </a>
);

export default Navbar;
