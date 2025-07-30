import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Heart,
  UserCheck,
  Target,
  BarChart3,
  Home,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/skills-mapping", label: "Skills Mapping", icon: Users },
  { path: "/workforce-planning", label: "Workforce Planning", icon: TrendingUp },
  { path: "/learning-journeys", label: "Learning Journeys", icon: BookOpen },
  { path: "/career-coach", label: "Career Coach", icon: MessageSquare },
  { path: "/sentiment-monitoring", label: "Sentiment Monitor", icon: Heart },
  { path: "/leadership-enablement", label: "Leadership Tools", icon: UserCheck },
  { path: "/retention-modeling", label: "Retention Model", icon: Target },
  { path: "/operating-model", label: "Operating Model", icon: BarChart3 },
];

export const Navigation = () => {
  const location = useLocation();

  const NavContent = () => (
    <div className="flex flex-col space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-card border-r flex-col p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            HR AI Platform
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Intelligent workforce solutions
          </p>
        </div>
        <NavContent />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            HR AI Platform
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Navigation</h2>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};