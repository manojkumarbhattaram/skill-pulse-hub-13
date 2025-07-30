import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCheck, Bell, Users, TrendingDown, Calendar, MessageSquare } from "lucide-react";

const LeadershipEnablement = () => {
  const [selectedManager, setSelectedManager] = useState("all");

  const managers = [
    { value: "all", label: "All Managers" },
    { value: "sarah-johnson", label: "Sarah Johnson - Engineering Manager" },
    { value: "mike-chen", label: "Mike Chen - Sales Director" },
    { value: "emma-davis", label: "Emma Davis - Operations Lead" },
    { value: "john-smith", label: "John Smith - Customer Success Manager" }
  ];

  const managerNudges = [
    {
      priority: "urgent",
      manager: "Sarah Johnson",
      action: "Check in with Alex Kim",
      reason: "Sentiment score dropped to 45% (-20% this week)",
      employee: "Alex Kim - Senior Developer",
      context: "Recent feedback indicates frustration with project deadlines and workload",
      suggestedActions: [
        "Schedule 1:1 within 24 hours",
        "Discuss workload redistribution",
        "Explore flexible working options"
      ],
      lastAction: "No recent contact",
      risk: "High attrition risk"
    },
    {
      priority: "high",
      manager: "Mike Chen",
      action: "Celebrate with Maria Santos",
      reason: "Exceeded sales targets by 150% this quarter",
      employee: "Maria Santos - Account Executive",
      context: "Top performer who should be recognized and potentially promoted",
      suggestedActions: [
        "Public recognition at team meeting",
        "Discuss career advancement",
        "Consider mentor role for junior staff"
      ],
      lastAction: "Last 1:1 was 3 weeks ago",
      risk: "Retention opportunity"
    },
    {
      priority: "medium",
      manager: "Emma Davis",
      action: "Development discussion with James Park",
      reason: "Completed leadership training program",
      employee: "James Park - Operations Analyst",
      context: "Ready for increased responsibilities and team lead opportunities",
      suggestedActions: [
        "Assign stretch project",
        "Introduce to cross-functional teams",
        "Create development plan"
      ],
      lastAction: "Career discussion 2 months ago",
      risk: "Growth opportunity"
    },
    {
      priority: "medium",
      manager: "John Smith",
      action: "Support check for Lisa Wong",
      reason: "Handling difficult customer escalations",
      employee: "Lisa Wong - Customer Success Specialist",
      context: "Multiple challenging cases affecting stress levels",
      suggestedActions: [
        "Provide additional resources",
        "Offer stress management support",
        "Review case assignment process"
      ],
      lastAction: "Quick check-in yesterday",
      risk: "Burnout prevention"
    }
  ];

  const teamInsights = [
    {
      manager: "Sarah Johnson",
      team: "Engineering",
      size: 12,
      avgSentiment: 72,
      atRiskCount: 2,
      topPerformers: 3,
      recentTrends: [
        { metric: "Code Quality", trend: "up", value: "+8%" },
        { metric: "Sprint Completion", trend: "stable", value: "94%" },
        { metric: "Team Satisfaction", trend: "down", value: "-5%" }
      ],
      recommendations: [
        "Address workload concerns in sprint planning",
        "Implement code review best practices workshop",
        "Consider team building activities"
      ]
    },
    {
      manager: "Mike Chen",
      team: "Sales",
      size: 8,
      avgSentiment: 85,
      atRiskCount: 1,
      topPerformers: 4,
      recentTrends: [
        { metric: "Sales Performance", trend: "up", value: "+15%" },
        { metric: "Customer Satisfaction", trend: "up", value: "+7%" },
        { metric: "Team Collaboration", trend: "stable", value: "89%" }
      ],
      recommendations: [
        "Maintain current momentum",
        "Share best practices across team",
        "Consider expanding high-performer territories"
      ]
    }
  ];

  const leadershipContent = [
    {
      type: "article",
      title: "Managing Remote Teams Effectively",
      description: "Best practices for leading distributed teams in telecom",
      readTime: "5 min",
      relevance: "High",
      tags: ["Remote Work", "Team Management"]
    },
    {
      type: "training",
      title: "Difficult Conversations Workshop",
      description: "Interactive training on handling performance discussions",
      duration: "2 hours",
      relevance: "Medium",
      tags: ["Communication", "Performance Management"]
    },
    {
      type: "podcast",
      title: "Leadership in Crisis Situations",
      description: "Strategies for maintaining team morale during challenges",
      duration: "30 min",
      relevance: "High",
      tags: ["Crisis Management", "Team Morale"]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive";
      case "high": return "secondary";
      case "medium": return "outline";
      default: return "outline";
    }
  };

  const getPriorityBgColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950";
      case "high": return "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950";
      case "medium": return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <UserCheck className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">AI Leadership Enablement</h1>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Manager Dashboard</CardTitle>
          <CardDescription>AI-powered insights and recommendations for people managers</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Select Manager</label>
            <Select value={selectedManager} onValueChange={setSelectedManager}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {managers.map((manager) => (
                  <SelectItem key={manager.value} value={manager.value}>
                    {manager.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Send Nudge Notifications
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="nudges" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="nudges">Manager Nudges</TabsTrigger>
          <TabsTrigger value="insights">Team Insights</TabsTrigger>
          <TabsTrigger value="content">Leadership Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="nudges" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>AI-Generated Manager Nudges</span>
              </CardTitle>
              <CardDescription>Proactive recommendations for employee interactions and support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {managerNudges.map((nudge, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getPriorityBgColor(nudge.priority)}`}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant={getPriorityColor(nudge.priority)}>
                            {nudge.priority.toUpperCase()}
                          </Badge>
                          <span className="font-semibold">{nudge.action}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Manager: <span className="font-medium">{nudge.manager}</span>
                        </div>
                        <div className="text-sm">
                          Employee: <span className="font-medium">{nudge.employee}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Risk Level</div>
                        <div className="text-sm font-medium">{nudge.risk}</div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-sm font-medium mb-1">AI Analysis:</div>
                      <div className="text-sm">{nudge.reason}</div>
                      <div className="text-xs text-muted-foreground mt-1">{nudge.context}</div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-2">Suggested Actions:</div>
                      <ul className="text-sm space-y-1">
                        {nudge.suggestedActions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Last Action: {nudge.lastAction}</span>
                      <div className="flex space-x-2">
                        <Button size="sm">Schedule 1:1</Button>
                        <Button size="sm" variant="outline">Send Message</Button>
                        <Button size="sm" variant="outline">Mark Complete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Team Performance Insights</span>
              </CardTitle>
              <CardDescription>AI-powered analysis of team dynamics and performance trends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {teamInsights.map((team, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{team.team} Team</h3>
                      <p className="text-sm text-muted-foreground">Manager: {team.manager}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{team.avgSentiment}%</div>
                      <div className="text-xs text-muted-foreground">Avg Sentiment</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-semibold">{team.size}</div>
                      <div className="text-muted-foreground">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-600">{team.atRiskCount}</div>
                      <div className="text-muted-foreground">At Risk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-600">{team.topPerformers}</div>
                      <div className="text-muted-foreground">Top Performers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">{team.recentTrends.length}</div>
                      <div className="text-muted-foreground">Key Metrics</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Recent Trends:</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {team.recentTrends.map((trend, trendIndex) => (
                        <div key={trendIndex} className="flex items-center justify-between text-sm border rounded p-2">
                          <span>{trend.metric}</span>
                          <div className="flex items-center space-x-1">
                            <span className={`text-xs ${
                              trend.trend === 'up' ? 'text-green-600' : 
                              trend.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {trend.trend === 'up' ? '↗' : trend.trend === 'down' ? '↘' : '→'}
                            </span>
                            <span>{trend.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">AI Recommendations:</div>
                    <ul className="text-sm space-y-1">
                      {team.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Team Meeting</Button>
                    <Button size="sm" variant="outline">Action Plan</Button>
                    <Button size="sm" variant="outline">Detailed Report</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Curated Leadership Content</CardTitle>
              <CardDescription>AI-recommended resources for leadership development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadershipContent.map((content, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{content.type}</Badge>
                        <Badge variant={content.relevance === 'High' ? 'default' : 'secondary'}>
                          {content.relevance}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{content.title}</CardTitle>
                      <CardDescription>{content.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        Duration: {content.readTime || content.duration}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {content.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full">Access Content</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Nudges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Manager Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">Nudge response rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">1:1s Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">From AI recommendations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Impact Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+12%</div>
                <p className="text-xs text-muted-foreground">Team sentiment improvement</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadershipEnablement;