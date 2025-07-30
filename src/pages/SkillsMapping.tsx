import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Users, Zap, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SkillsMapping = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setUploadedFiles(files);
      toast({
        title: "Files uploaded",
        description: `${files.length} CV(s) uploaded successfully`,
      });
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults({
        totalProfiles: uploadedFiles.length,
        skillsClusters: [
          { name: "Data Science", count: 12, skills: ["Python", "SQL", "Machine Learning", "Statistics"] },
          { name: "Software Development", count: 18, skills: ["JavaScript", "React", "Node.js", "Docker"] },
          { name: "Project Management", count: 8, skills: ["Agile", "Scrum", "PRINCE2", "Risk Management"] },
          { name: "Telecommunications", count: 15, skills: ["5G", "Network Architecture", "RF Engineering", "OSS/BSS"] }
        ],
        roleMatches: [
          { role: "Senior Data Scientist", candidates: 3, topMatch: "Sarah Johnson", score: 94 },
          { role: "Full Stack Developer", candidates: 5, topMatch: "Mike Chen", score: 89 },
          { role: "Network Engineer", candidates: 7, topMatch: "David Smith", score: 92 }
        ]
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "Skills mapping analysis has been completed",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Users className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">AI-Powered Skills & Capability Mapping</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload CVs or LinkedIn Profiles</span>
              </CardTitle>
              <CardDescription>
                Upload employee CVs or provide LinkedIn profile URLs for AI-powered skills analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload CVs</TabsTrigger>
                  <TabsTrigger value="linkedin">LinkedIn URLs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="space-y-4">
                  <div>
                    <Label htmlFor="cv-upload">Select CV files (PDF, DOC, DOCX)</Label>
                    <Input
                      id="cv-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="mt-2"
                    />
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {uploadedFiles.length} file(s) selected
                      </p>
                      <div className="space-y-1">
                        {uploadedFiles.map((file, index) => (
                          <Badge key={index} variant="secondary">
                            {file.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="linkedin" className="space-y-4">
                  <div>
                    <Label htmlFor="linkedin-urls">LinkedIn Profile URLs (one per line)</Label>
                    <textarea
                      id="linkedin-urls"
                      placeholder="https://linkedin.com/in/profile1&#10;https://linkedin.com/in/profile2"
                      className="w-full h-32 px-3 py-2 border border-input rounded-md resize-none"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button 
                onClick={handleAnalyze} 
                disabled={uploadedFiles.length === 0 || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Skills...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Start AI Analysis
                  </>
                )}
              </Button>

              {isAnalyzing && (
                <div className="space-y-2">
                  <Progress value={66} />
                  <p className="text-sm text-muted-foreground">Processing CVs and extracting skills...</p>
                </div>
              )}
            </CardContent>
          </Card>

          {analysisResults && (
            <Card>
              <CardHeader>
                <CardTitle>Skills Clusters</CardTitle>
                <CardDescription>AI-identified skill groups within your workforce</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysisResults.skillsClusters.map((cluster: any, index: number) => (
                    <Card key={index} className="border-2">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{cluster.name}</CardTitle>
                        <CardDescription>{cluster.count} employees</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1">
                          {cluster.skills.map((skill: string, skillIndex: number) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Analysis Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysisResults ? (
                <>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{analysisResults.totalProfiles}</div>
                    <p className="text-sm text-muted-foreground">Profiles Analyzed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{analysisResults.skillsClusters.length}</div>
                    <p className="text-sm text-muted-foreground">Skills Clusters</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{analysisResults.roleMatches.length}</div>
                    <p className="text-sm text-muted-foreground">Role Matches</p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  Upload CVs and run analysis to see results
                </p>
              )}
            </CardContent>
          </Card>

          {analysisResults && (
            <Card>
              <CardHeader>
                <CardTitle>Top Role Matches</CardTitle>
                <CardDescription>AI-recommended candidates for open positions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysisResults.roleMatches.map((match: any, index: number) => (
                  <div key={index} className="border rounded-lg p-3 space-y-2">
                    <div className="font-medium">{match.role}</div>
                    <div className="text-sm text-muted-foreground">
                      Top Match: {match.topMatch}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={match.score} className="flex-1" />
                      <span className="text-sm font-medium">{match.score}%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {match.candidates} candidates found
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsMapping;