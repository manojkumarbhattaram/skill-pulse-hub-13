import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3, Upload, Layers, Users, Repeat, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OperatingModel = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const spansLayersAnalysis = {
    currentState: {
      totalLayers: 8,
      avgSpan: 6.2,
      inefficiencies: 23,
      duplicatedRoles: 12
    },
    recommendations: [
      {
        type: "Layer Reduction",
        description: "Remove middle management layer in Operations",
        impact: "Reduce decision time by 40%",
        affectedEmployees: 15,
        savings: "R2.1M annually"
      },
      {
        type: "Span Optimization",
        description: "Increase span of control for team leads",
        impact: "Improve resource utilization by 25%",
        affectedEmployees: 8,
        savings: "R1.8M annually"
      },
      {
        type: "Role Consolidation",
        description: "Merge similar coordinator positions",
        impact: "Eliminate role duplication",
        affectedEmployees: 6,
        savings: "R3.2M annually"
      }
    ]
  };

  const duplicateEffortAnalysis = [
    {
      project: "Customer Data Analytics",
      teams: ["Marketing Analytics", "Sales Operations", "Customer Success"],
      overlap: 78,
      description: "Three teams independently analyzing customer behavior data",
      recommendation: "Centralize under Data Analytics team",
      potentialSavings: "R850K annually",
      timeWasted: "320 hours/month"
    },
    {
      project: "Network Performance Monitoring",
      teams: ["Network Operations", "Customer Support", "Quality Assurance"],
      overlap: 65,
      description: "Multiple monitoring systems for similar network metrics",
      recommendation: "Implement unified monitoring platform",
      potentialSavings: "R1.2M annually",
      timeWasted: "180 hours/month"
    },
    {
      project: "Employee Training Programs",
      teams: ["HR Learning", "IT Training", "Operations Training"],
      overlap: 52,
      description: "Overlapping training content and delivery methods",
      recommendation: "Create centralized learning platform",
      potentialSavings: "R640K annually",
      timeWasted: "240 hours/month"
    }
  ];

  const agileTeamSuggestions = [
    {
      teamName: "5G Innovation Squad",
      purpose: "Accelerate 5G service development and deployment",
      members: [
        { name: "Sarah Kim", role: "Product Owner", skills: ["5G Tech", "Product Management"], department: "Product" },
        { name: "David Chen", role: "Tech Lead", skills: ["Network Engineering", "5G"], department: "Engineering" },
        { name: "Lisa Park", role: "UX Designer", skills: ["User Experience", "Mobile Apps"], department: "Design" },
        { name: "Ahmed Hassan", role: "Data Scientist", skills: ["Analytics", "Network Optimization"], department: "Data" },
        { name: "Emma Wilson", role: "QA Engineer", skills: ["Testing", "5G Networks"], department: "Quality" }
      ],
      duration: "6 months",
      expectedOutcome: "Launch 5G consumer services",
      synergy: 92
    },
    {
      teamName: "Customer Experience Revolution",
      purpose: "Transform customer service delivery and satisfaction",
      members: [
        { name: "John Smith", role: "Service Design Lead", skills: ["Service Design", "Customer Journey"], department: "Customer Success" },
        { name: "Maria Santos", role: "Backend Developer", skills: ["API Development", "Integration"], department: "Engineering" },
        { name: "James Park", role: "Data Analyst", skills: ["Customer Analytics", "Reporting"], department: "Analytics" },
        { name: "Sophie Taylor", role: "Process Designer", skills: ["Business Process", "Automation"], department: "Operations" }
      ],
      duration: "4 months",
      expectedOutcome: "Reduce customer complaints by 50%",
      synergy: 88
    },
    {
      teamName: "Revenue Optimization Engine",
      purpose: "Develop AI-driven pricing and revenue strategies",
      members: [
        { name: "Alex Kim", role: "ML Engineer", skills: ["Machine Learning", "Python"], department: "Engineering" },
        { name: "Rebecca Jones", role: "Business Analyst", skills: ["Financial Modeling", "Strategy"], department: "Finance" },
        { name: "Mike Chen", role: "Sales Analyst", skills: ["Sales Analytics", "Market Research"], department: "Sales" },
        { name: "Nina Patel", role: "Pricing Specialist", skills: ["Pricing Strategy", "Market Analysis"], department: "Marketing" }
      ],
      duration: "8 months",
      expectedOutcome: "Increase ARPU by 15%",
      synergy: 85
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
      toast({
        title: "File uploaded",
        description: "Organization chart uploaded successfully",
      });
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "Organization structure analysis completed",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Smart Operating Model Analytics</h1>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Organization Structure Upload</span>
          </CardTitle>
          <CardDescription>Upload org charts, team structures, or project summaries for AI analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="org-file">Upload Organization Chart (PDF, Excel, Visio)</Label>
            <Input
              id="org-file"
              type="file"
              accept=".pdf,.xlsx,.xls,.vsd,.vsdx"
              onChange={handleFileUpload}
              className="mt-2"
            />
          </div>
          {uploadedFile && (
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{uploadedFile.name}</Badge>
              <span className="text-sm text-muted-foreground">Ready for analysis</span>
            </div>
          )}
          <Button 
            onClick={handleAnalyze} 
            disabled={!uploadedFile || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? "Analyzing Structure..." : "Start AI Analysis"}
          </Button>
          {isAnalyzing && (
            <div className="space-y-2">
              <Progress value={66} />
              <p className="text-sm text-muted-foreground">Processing organization structure and identifying inefficiencies...</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="spans-layers" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="spans-layers">Spans & Layers</TabsTrigger>
          <TabsTrigger value="duplication">Duplicate Efforts</TabsTrigger>
          <TabsTrigger value="agile-teams">Agile Teaming</TabsTrigger>
        </TabsList>

        <TabsContent value="spans-layers" className="space-y-6">
          {/* Current State Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Layers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{spansLayersAnalysis.currentState.totalLayers}</div>
                <p className="text-xs text-muted-foreground">Above optimal (6 layers)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg Span of Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{spansLayersAnalysis.currentState.avgSpan}</div>
                <p className="text-xs text-muted-foreground">Target: 7-9 reports</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Inefficiencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{spansLayersAnalysis.currentState.inefficiencies}</div>
                <p className="text-xs text-muted-foreground">Issues identified</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Duplicate Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{spansLayersAnalysis.currentState.duplicatedRoles}</div>
                <p className="text-xs text-muted-foreground">Can be consolidated</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5" />
                <span>Optimization Recommendations</span>
              </CardTitle>
              <CardDescription>AI-identified opportunities to improve organizational efficiency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {spansLayersAnalysis.recommendations.map((rec, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{rec.type}</h3>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {rec.savings}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Impact:</span>
                      <div className="font-medium">{rec.impact}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Affected Employees:</span>
                      <div className="font-medium">{rec.affectedEmployees}</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Implement Plan</Button>
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="outline">Impact Analysis</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="duplication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Repeat className="h-5 w-5" />
                <span>Duplicate Effort Detection</span>
              </CardTitle>
              <CardDescription>AI analysis of overlapping work and redundant processes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {duplicateEffortAnalysis.map((duplicate, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{duplicate.project}</h3>
                      <p className="text-sm text-muted-foreground">{duplicate.description}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{duplicate.overlap}%</div>
                      <div className="text-xs text-muted-foreground">Overlap</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Involved Teams:</div>
                    <div className="flex flex-wrap gap-2">
                      {duplicate.teams.map((team, teamIndex) => (
                        <Badge key={teamIndex} variant="secondary">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Progress value={duplicate.overlap} className="h-2" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Potential Savings:</span>
                      <div className="font-medium text-green-600">{duplicate.potentialSavings}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Time Wasted:</span>
                      <div className="font-medium">{duplicate.timeWasted}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Recommendation:</span>
                      <div className="font-medium">{duplicate.recommendation}</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Create Consolidation Plan</Button>
                    <Button size="sm" variant="outline">Team Discussion</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agile-teams" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Agile Team Formation</span>
              </CardTitle>
              <CardDescription>AI-suggested cross-functional teams based on skills, workload, and collaboration potential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {agileTeamSuggestions.map((team, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{team.teamName}</h3>
                      <p className="text-sm text-muted-foreground">{team.purpose}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{team.synergy}%</div>
                      <div className="text-xs text-muted-foreground">Synergy Score</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-medium">{team.duration}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Team Size:</span>
                      <div className="font-medium">{team.members.length} members</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expected Outcome:</span>
                      <div className="font-medium">{team.expectedOutcome}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-3">Proposed Team Members:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {team.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="border rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{member.name}</div>
                            <Badge variant="outline" className="text-xs">{member.department}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">{member.role}</div>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Form Team</Button>
                    <Button size="sm" variant="outline">Adjust Members</Button>
                    <Button size="sm" variant="outline">Alternative Suggestions</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Formation Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Team Formation Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">78%</div>
                  <div className="text-sm text-muted-foreground">Cross-functional collaboration potential</div>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">65%</div>
                  <div className="text-sm text-muted-foreground">Skill complementarity across departments</div>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">43</div>
                  <div className="text-sm text-muted-foreground">Employees available for agile teams</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OperatingModel;