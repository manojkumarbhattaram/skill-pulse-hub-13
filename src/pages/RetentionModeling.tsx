import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, AlertTriangle, TrendingDown, Users, Calendar, DollarSign } from "lucide-react";

const RetentionModeling = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [riskThreshold, setRiskThreshold] = useState("70");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "operations", label: "Operations" },
    { value: "support", label: "Customer Support" }
  ];

  const highRiskEmployees = [
    {
      name: "Alex Kim",
      role: "Senior Software Engineer",
      department: "Engineering",
      riskScore: 89,
      tenure: "3.2 years",
      salary: "R850,000",
      lastPromotion: "18 months ago",
      riskFactors: ["Career stagnation", "Below market salary", "High workload"],
      recentActions: ["Declined overtime", "Reduced participation in meetings"],
      interventions: [
        { action: "Salary review", urgency: "immediate", cost: "High" },
        { action: "Career development discussion", urgency: "this week", cost: "Low" },
        { action: "Workload redistribution", urgency: "this week", cost: "Medium" }
      ],
      estimatedImpact: "R2.1M replacement cost"
    },
    {
      name: "Sarah Johnson", 
      role: "Marketing Manager",
      department: "Marketing",
      riskScore: 82,
      tenure: "2.8 years",
      salary: "R720,000",
      lastPromotion: "Never",
      riskFactors: ["No promotion path", "Remote work restrictions", "Team conflicts"],
      recentActions: ["Updated LinkedIn profile", "Increased networking activities"],
      interventions: [
        { action: "Promotion discussion", urgency: "immediate", cost: "High" },
        { action: "Remote work policy review", urgency: "this month", cost: "Low" },
        { action: "Team mediation", urgency: "this week", cost: "Medium" }
      ],
      estimatedImpact: "R1.8M replacement cost"
    },
    {
      name: "Mike Chen",
      role: "Customer Success Specialist", 
      department: "Customer Support",
      riskScore: 76,
      tenure: "1.5 years",
      salary: "R480,000",
      lastPromotion: "Never",
      riskFactors: ["Burnout symptoms", "Difficult customers", "Limited growth"],
      recentActions: ["Increased sick days", "Lower customer satisfaction scores"],
      interventions: [
        { action: "Stress management support", urgency: "immediate", cost: "Low" },
        { action: "Role rotation opportunity", urgency: "this month", cost: "Medium" },
        { action: "Customer handling training", urgency: "this week", cost: "Low" }
      ],
      estimatedImpact: "R960K replacement cost"
    }
  ];

  const departmentRisks = [
    { department: "Customer Support", riskScore: 78, atRiskCount: 22, trend: "increasing", avgTenure: "1.8 years" },
    { department: "Engineering", riskScore: 65, atRiskCount: 18, trend: "stable", avgTenure: "3.2 years" },
    { department: "Operations", riskScore: 58, atRiskCount: 12, trend: "decreasing", avgTenure: "4.1 years" },
    { department: "Marketing", riskScore: 52, atRiskCount: 8, trend: "increasing", avgTenure: "2.9 years" },
    { department: "Sales", riskScore: 45, atRiskCount: 6, trend: "stable", avgTenure: "3.5 years" }
  ];

  const retentionPrograms = [
    {
      program: "Fast Track Promotion",
      description: "Accelerated career advancement for high performers",
      targetAudience: "High performers at risk",
      cost: "R150K per person",
      effectiveness: "85%",
      timeline: "3-6 months",
      currentEnrollees: 12
    },
    {
      program: "Flexible Work Plus",
      description: "Enhanced remote work and flexible schedules",
      targetAudience: "Work-life balance concerns",
      cost: "R25K setup per person",
      effectiveness: "72%",
      timeline: "1-2 months",
      currentEnrollees: 34
    },
    {
      program: "Skills Investment Fund",
      description: "Personal development budget and learning time",
      targetAudience: "Career development seekers",
      cost: "R50K per person annually",
      effectiveness: "78%",
      timeline: "Ongoing",
      currentEnrollees: 67
    },
    {
      program: "Wellness & Support",
      description: "Mental health support and wellness programs",
      targetAudience: "Burnout and stress cases",
      cost: "R30K per person annually",
      effectiveness: "68%",
      timeline: "Immediate",
      currentEnrollees: 45
    }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    return "text-green-600";
  };

  const getRiskBadgeColor = (score: number) => {
    if (score >= 80) return "destructive";
    if (score >= 60) return "secondary";
    return "outline";
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "immediate": return "destructive";
      case "this week": return "secondary";
      case "this month": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Target className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Predictive Retention Modeling</h1>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Analysis Parameters</CardTitle>
          <CardDescription>Configure retention risk analysis settings</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div>
            <label className="text-sm font-medium">Risk Threshold</label>
            <Select value={riskThreshold} onValueChange={setRiskThreshold}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">50% and above</SelectItem>
                <SelectItem value="60">60% and above</SelectItem>
                <SelectItem value="70">70% and above</SelectItem>
                <SelectItem value="80">80% and above</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">Update Analysis</Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Risk Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">66</div>
            <p className="text-xs text-muted-foreground">80%+ risk score</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Potential Cost Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R47.2M</div>
            <p className="text-xs text-muted-foreground">Replacement costs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Interventions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">158</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">74%</div>
            <p className="text-xs text-muted-foreground">Retention interventions</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="high-risk" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="high-risk">High Risk Employees</TabsTrigger>
          <TabsTrigger value="departments">Department Analysis</TabsTrigger>
          <TabsTrigger value="programs">Retention Programs</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="high-risk" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Critical Retention Cases</span>
              </CardTitle>
              <CardDescription>Employees requiring immediate intervention to prevent regrettable attrition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {highRiskEmployees.map((employee, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{employee.name}</h3>
                        <Badge variant={getRiskBadgeColor(employee.riskScore)}>
                          {employee.riskScore}% Risk
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {employee.role} • {employee.department}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Tenure:</span>
                          <div className="font-medium">{employee.tenure}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Salary:</span>
                          <div className="font-medium">{employee.salary}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Promotion:</span>
                          <div className="font-medium">{employee.lastPromotion}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Impact:</span>
                          <div className="font-medium text-red-600">{employee.estimatedImpact}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getRiskColor(employee.riskScore)}`}>
                        {employee.riskScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">Risk Score</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Risk Factors:</div>
                      <div className="space-y-1">
                        {employee.riskFactors.map((factor, factorIndex) => (
                          <Badge key={factorIndex} variant="outline" className="mr-1 mb-1 text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Recent Warning Signs:</div>
                      <ul className="text-sm space-y-1">
                        {employee.recentActions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-3">Recommended Interventions:</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {employee.interventions.map((intervention, intIndex) => (
                        <div key={intIndex} className="border rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-sm">{intervention.action}</div>
                            <Badge variant={getUrgencyColor(intervention.urgency)} className="text-xs">
                              {intervention.urgency}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Cost: {intervention.cost}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Start Intervention</Button>
                    <Button size="sm" variant="outline">Schedule 1:1</Button>
                    <Button size="sm" variant="outline">View Full Profile</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Risk Analysis</CardTitle>
              <CardDescription>Attrition risk assessment by department</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {departmentRisks.map((dept, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{dept.department}</h3>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${getRiskColor(dept.riskScore)}`}>
                        {dept.riskScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">Avg Risk</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm text-center">
                    <div>
                      <div className="text-lg font-semibold text-red-600">{dept.atRiskCount}</div>
                      <div className="text-muted-foreground">At Risk</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{dept.avgTenure}</div>
                      <div className="text-muted-foreground">Avg Tenure</div>
                    </div>
                    <div>
                      <div className={`text-lg font-semibold ${
                        dept.trend === 'increasing' ? 'text-red-600' : 
                        dept.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {dept.trend === 'increasing' ? '↗' : dept.trend === 'decreasing' ? '↘' : '→'}
                      </div>
                      <div className="text-muted-foreground">{dept.trend}</div>
                    </div>
                  </div>

                  <Progress value={dept.riskScore} className="h-2" />

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Detailed Analysis</Button>
                    <Button size="sm" variant="outline">Department Action Plan</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Retention Programs</CardTitle>
              <CardDescription>Current initiatives and their effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {retentionPrograms.map((program, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{program.program}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Target:</span>
                          <div className="font-medium">{program.targetAudience}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Cost:</span>
                          <div className="font-medium">{program.cost}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Effectiveness:</span>
                          <div className="font-medium text-green-600">{program.effectiveness}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timeline:</span>
                          <div className="font-medium">{program.timeline}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Current Enrollment</span>
                          <span>{program.currentEnrollees} employees</span>
                        </div>
                        <Progress value={(program.currentEnrollees / 100) * 100} className="h-2" />
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">Enroll Employee</Button>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>30-Day Prediction</CardTitle>
                <CardDescription>Likely departures in the next month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">8-12</div>
                  <div className="text-sm text-muted-foreground">Predicted departures</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Customer Support</span>
                    <span className="font-medium">4-6 departures</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Engineering</span>
                    <span className="font-medium">2-3 departures</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Marketing</span>
                    <span className="font-medium">1-2 departures</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Operations</span>
                    <span className="font-medium">1 departure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Impact</CardTitle>
                <CardDescription>Cost implications of predicted attrition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>Replacement Costs</span>
                    </span>
                    <span className="font-bold text-red-600">R18.7M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Time to Hire</span>
                    </span>
                    <span className="font-bold">14-21 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <TrendingDown className="h-4 w-4" />
                      <span>Productivity Loss</span>
                    </span>
                    <span className="font-bold text-orange-600">R5.2M</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-semibold">Total Impact</span>
                    <span className="font-bold text-red-600">R23.9M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RetentionModeling;