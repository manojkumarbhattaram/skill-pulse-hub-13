import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertTriangle, Users, Calendar } from "lucide-react";

const WorkforcePlanning = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [timeHorizon, setTimeHorizon] = useState("12");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "operations", label: "Operations" },
    { value: "customer-service", label: "Customer Service" }
  ];

  const skillsGaps = [
    { skill: "5G Network Engineering", currentCount: 12, requiredCount: 25, priority: "Critical", department: "Engineering" },
    { skill: "Cloud Architecture", currentCount: 8, requiredCount: 18, priority: "High", department: "Engineering" },
    { skill: "Data Analytics", currentCount: 15, requiredCount: 22, priority: "Medium", department: "Operations" },
    { skill: "Customer Success", currentCount: 6, requiredCount: 12, priority: "High", department: "Customer Service" },
    { skill: "Digital Marketing", currentCount: 4, requiredCount: 8, priority: "Medium", department: "Marketing" }
  ];

  const attritionRisks = [
    { department: "Engineering", riskScore: 75, atRiskCount: 18, trend: "up" },
    { department: "Sales", riskScore: 45, atRiskCount: 8, trend: "down" },
    { department: "Operations", riskScore: 60, atRiskCount: 12, trend: "stable" },
    { department: "Marketing", riskScore: 35, atRiskCount: 5, trend: "down" }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 70) return "text-red-600";
    if (score >= 40) return "text-orange-600";
    return "text-green-600";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "destructive";
      case "High": return "secondary";
      case "Medium": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">AI-Driven Strategic Workforce Planning</h1>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Parameters</CardTitle>
          <CardDescription>Configure your workforce planning analysis</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="department">Department</Label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
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
          <div>
            <Label htmlFor="horizon">Planning Horizon</Label>
            <Select value={timeHorizon} onValueChange={setTimeHorizon}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 months</SelectItem>
                <SelectItem value="12">12 months</SelectItem>
                <SelectItem value="24">24 months</SelectItem>
                <SelectItem value="36">36 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">
              Update Forecast
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Gaps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Predicted Skills Gaps</span>
            </CardTitle>
            <CardDescription>AI-identified critical skill shortages for the next {timeHorizon} months</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillsGaps.map((gap, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{gap.skill}</h4>
                  <Badge variant={getPriorityColor(gap.priority)}>
                    {gap.priority}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{gap.department}</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {gap.currentCount}</span>
                    <span>Required: {gap.requiredCount}</span>
                  </div>
                  <Progress value={(gap.currentCount / gap.requiredCount) * 100} />
                  <div className="text-sm text-red-600">
                    Gap: {gap.requiredCount - gap.currentCount} positions
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Attrition Risk */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Attrition Risk by Department</span>
            </CardTitle>
            <CardDescription>ML-predicted retention risks and trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {attritionRisks.map((risk, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{risk.department}</h4>
                  <div className={`text-lg font-bold ${getRiskColor(risk.riskScore)}`}>
                    {risk.riskScore}%
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={risk.riskScore} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{risk.atRiskCount} employees at risk</span>
                    <span className={`flex items-center ${
                      risk.trend === 'up' ? 'text-red-600' : 
                      risk.trend === 'down' ? 'text-green-600' : 
                      'text-gray-600'
                    }`}>
                      {risk.trend === 'up' ? '↗' : risk.trend === 'down' ? '↘' : '→'}
                      {risk.trend}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>AI Recommendations</span>
          </CardTitle>
          <CardDescription>Proactive actions to address workforce challenges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 space-y-2">
              <div className="font-semibold text-red-600">Urgent: 5G Skills Gap</div>
              <div className="text-sm text-muted-foreground">
                Start recruitment for 13 5G Network Engineers immediately. Consider partnerships with telecom schools.
              </div>
              <Button size="sm" className="w-full">Create Job Posting</Button>
            </div>
            <div className="border rounded-lg p-4 space-y-2">
              <div className="font-semibold text-orange-600">Retention Risk: Engineering</div>
              <div className="text-sm text-muted-foreground">
                18 engineers at high risk. Recommend salary review and career development discussions.
              </div>
              <Button size="sm" variant="outline" className="w-full">Schedule Reviews</Button>
            </div>
            <div className="border rounded-lg p-4 space-y-2">
              <div className="font-semibold text-blue-600">Learning Opportunity</div>
              <div className="text-sm text-muted-foreground">
                7 employees could be upskilled to cloud architecture roles through targeted training.
              </div>
              <Button size="sm" variant="outline" className="w-full">Create Learning Path</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkforcePlanning;