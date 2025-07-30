import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Heart,
  UserCheck,
  Target,
  BarChart3,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Skills & Capability Mapping",
    description: "AI-powered analysis of workforce capabilities vs strategic needs",
    icon: Users,
    path: "/skills-mapping",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Strategic Workforce Planning",
    description: "ML-driven workforce demand modeling and skills gap prediction",
    icon: TrendingUp,
    path: "/workforce-planning",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Personalized Learning",
    description: "AI-recommended learning journeys based on role and aspirations",
    icon: BookOpen,
    path: "/learning-journeys",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Digital Career Coach",
    description: "Smart assistant for career guidance and HR policy questions",
    icon: MessageSquare,
    path: "/career-coach",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Sentiment Monitoring",
    description: "Real-time culture and sentiment analysis with AI insights",
    icon: Heart,
    path: "/sentiment-monitoring",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Leadership Enablement",
    description: "Auto-curated manager nudges and leadership insights",
    icon: UserCheck,
    path: "/leadership-enablement",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Retention Modeling",
    description: "Predictive analytics for attrition risk and retention actions",
    icon: Target,
    path: "/retention-modeling",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Operating Model Analytics",
    description: "Smart analysis of spans, layers, and team efficiency",
    icon: BarChart3,
    path: "/operating-model",
    color: "from-teal-500 to-teal-600"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI-Powered HR Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage artificial intelligence to improve productivity, reduce costs, and retain talent with data-driven insights
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">At-Risk Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">127</div>
              <p className="text-xs text-muted-foreground">-8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Skills Gaps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">23</div>
              <p className="text-xs text-muted-foreground">Critical roles identified</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">78%</div>
              <p className="text-xs text-muted-foreground">+5% from last quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.path} className="group hover:shadow-soft transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Link to={feature.path} className="flex items-center justify-center">
                      Open Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used AI-powered tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
                <Link to="/career-coach">
                  <MessageSquare className="h-6 w-6" />
                  <span>Ask AI Assistant</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
                <Link to="/skills-mapping">
                  <Users className="h-6 w-6" />
                  <span>Upload CVs</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
                <Link to="/sentiment-monitoring">
                  <Heart className="h-6 w-6" />
                  <span>Check Team Sentiment</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;