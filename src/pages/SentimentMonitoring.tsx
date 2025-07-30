import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, TrendingDown, TrendingUp, AlertTriangle, Users, MessageCircle } from "lucide-react";

const SentimentMonitoring = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "operations", label: "Operations" },
    { value: "support", label: "Customer Support" }
  ];

  const sentimentData = [
    { 
      department: "Engineering", 
      score: 72, 
      trend: "down", 
      change: -8,
      issues: ["Workload", "Career Growth"],
      totalResponses: 145,
      riskEmployees: 12
    },
    { 
      department: "Sales", 
      score: 85, 
      trend: "up", 
      change: +5,
      issues: ["Commission Structure"],
      totalResponses: 89,
      riskEmployees: 3
    },
    { 
      department: "Marketing", 
      score: 78, 
      trend: "stable", 
      change: -1,
      issues: ["Resource Allocation"],
      totalResponses: 67,
      riskEmployees: 5
    },
    { 
      department: "Operations", 
      score: 65, 
      trend: "down", 
      change: -12,
      issues: ["Process Inefficiency", "Communication"],
      totalResponses: 112,
      riskEmployees: 18
    },
    { 
      department: "Customer Support", 
      score: 58, 
      trend: "down", 
      change: -15,
      issues: ["Burnout", "Management Support"],
      totalResponses: 78,
      riskEmployees: 22
    }
  ];

  const recentFeedback = [
    {
      type: "negative",
      department: "Customer Support",
      comment: "Feeling overwhelmed with the increased ticket volume and lack of adequate staffing...",
      sentiment: -0.8,
      keywords: ["overwhelmed", "understaffed", "burnout"],
      date: "2 hours ago"
    },
    {
      type: "positive", 
      department: "Engineering",
      comment: "Really enjoying the new development tools and the team collaboration has improved significantly...",
      sentiment: 0.7,
      keywords: ["enjoying", "improved", "collaboration"],
      date: "5 hours ago"
    },
    {
      type: "neutral",
      department: "Sales",
      comment: "The new commission structure is okay but could use some adjustments for fairness...",
      sentiment: 0.2,
      keywords: ["okay", "adjustments", "fairness"],
      date: "1 day ago"
    },
    {
      type: "negative",
      department: "Operations",
      comment: "Process inefficiencies are causing delays and frustration across the team...",
      sentiment: -0.6,
      keywords: ["inefficiencies", "delays", "frustration"],
      date: "1 day ago"
    }
  ];

  const culturePulse = [
    { metric: "Overall Engagement", score: 72, target: 80, trend: "down" },
    { metric: "Manager Effectiveness", score: 78, target: 85, trend: "up" },
    { metric: "Work-Life Balance", score: 65, target: 75, trend: "down" },
    { metric: "Career Development", score: 69, target: 80, trend: "stable" },
    { metric: "Company Culture", score: 81, target: 85, trend: "up" }
  ];

  const getSentimentColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <span className="text-gray-600">→</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Heart className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">AI-Powered Sentiment & Culture Monitoring</h1>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Analysis Parameters</CardTitle>
          <CardDescription>Configure sentiment analysis settings</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Time Period</label>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Department</label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">Refresh Analysis</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">By Department</TabsTrigger>
          <TabsTrigger value="feedback">Recent Feedback</TabsTrigger>
          <TabsTrigger value="culture">Culture Pulse</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Overall Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">71%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                  -6% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">At-Risk Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">60</div>
                <p className="text-xs text-muted-foreground">Negative sentiment trend</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Feedback Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">491</div>
                <p className="text-xs text-muted-foreground">Responses this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Response Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">87%</div>
                <p className="text-xs text-muted-foreground">+3% participation</p>
              </CardContent>
            </Card>
          </div>

          {/* Top Issues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Top Issues Identified by AI</span>
              </CardTitle>
              <CardDescription>Most frequently mentioned concerns across all feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="font-semibold text-red-600">Workload & Burnout</div>
                  <div className="text-sm text-muted-foreground">Mentioned in 34% of negative feedback</div>
                  <div className="text-xs">Departments: Support, Operations</div>
                  <Badge variant="destructive" className="text-xs">Critical</Badge>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="font-semibold text-orange-600">Career Development</div>
                  <div className="text-sm text-muted-foreground">Mentioned in 28% of feedback</div>
                  <div className="text-xs">Departments: Engineering, Marketing</div>
                  <Badge variant="secondary" className="text-xs">High Priority</Badge>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="font-semibold text-yellow-600">Communication</div>
                  <div className="text-sm text-muted-foreground">Mentioned in 22% of feedback</div>
                  <div className="text-xs">Cross-departmental issue</div>
                  <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Sentiment Analysis</CardTitle>
              <CardDescription>AI-analyzed sentiment scores and trends by department</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sentimentData.map((dept, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{dept.department}</h3>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(dept.trend)}
                      <span className={`text-xl font-bold ${getSentimentColor(dept.score)}`}>
                        {dept.score}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Change</div>
                      <div className={dept.change > 0 ? "text-green-600" : "text-red-600"}>
                        {dept.change > 0 ? "+" : ""}{dept.change}%
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Responses</div>
                      <div>{dept.totalResponses}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">At Risk</div>
                      <div className="text-red-600">{dept.riskEmployees}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Top Issues</div>
                      <div className="flex flex-wrap gap-1">
                        {dept.issues.map((issue, issueIndex) => (
                          <Badge key={issueIndex} variant="outline" className="text-xs">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Progress value={dept.score} className="h-2" />
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="outline">Action Plan</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Recent Feedback Analysis</span>
              </CardTitle>
              <CardDescription>Real-time AI sentiment analysis of employee feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentFeedback.map((feedback, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={
                          feedback.type === 'positive' ? 'default' : 
                          feedback.type === 'negative' ? 'destructive' : 'secondary'
                        }
                      >
                        {feedback.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{feedback.department}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{feedback.date}</span>
                  </div>
                  
                  <blockquote className="text-sm italic border-l-4 border-muted pl-4">
                    {feedback.comment}
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {feedback.keywords.map((keyword, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm">
                      Sentiment: <span className={
                        feedback.sentiment > 0.4 ? "text-green-600" : 
                        feedback.sentiment < -0.4 ? "text-red-600" : "text-yellow-600"
                      }>
                        {feedback.sentiment > 0 ? "+" : ""}{feedback.sentiment}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="culture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Culture Pulse Metrics</CardTitle>
              <CardDescription>Key cultural indicators tracked over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {culturePulse.map((metric, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{metric.metric}</h3>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(metric.trend)}
                      <span className={`font-bold ${getSentimentColor(metric.score)}`}>
                        {metric.score}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: {metric.score}%</span>
                      <span>Target: {metric.target}%</span>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                    <div className="text-sm text-muted-foreground">
                      Gap to target: {metric.target - metric.score}%
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SentimentMonitoring;