import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, User, Target, Clock, Star } from "lucide-react";

const LearningJourneys = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [learningStyle, setLearningStyle] = useState("");

  const employees = [
    { value: "sarah-johnson", label: "Sarah Johnson - Data Analyst" },
    { value: "mike-chen", label: "Mike Chen - Software Engineer" },
    { value: "emma-davis", label: "Emma Davis - Project Manager" },
    { value: "john-smith", label: "John Smith - Network Engineer" }
  ];

  const learningRecommendations = [
    {
      title: "Advanced Data Science Certification",
      provider: "LinkedIn Learning",
      duration: "8 weeks",
      relevance: 95,
      description: "Master advanced analytics and machine learning techniques",
      skills: ["Python", "TensorFlow", "Statistical Analysis"],
      reason: "Aligns with your data analysis background and career aspirations in AI"
    },
    {
      title: "Telecommunications 5G Fundamentals",
      provider: "Internal Academy",
      duration: "4 weeks",
      relevance: 88,
      description: "Deep dive into 5G technology and network architecture",
      skills: ["5G Networks", "RF Engineering", "Network Planning"],
      reason: "Critical for your role in network operations team"
    },
    {
      title: "Leadership for Technical Teams",
      provider: "Coursera",
      duration: "6 weeks",
      relevance: 82,
      description: "Develop leadership skills for managing technical professionals",
      skills: ["Team Leadership", "Technical Communication", "Mentoring"],
      reason: "Based on your high performance ratings and team lead potential"
    }
  ];

  const currentLearning = [
    {
      course: "Cloud Computing Fundamentals",
      progress: 75,
      timeRemaining: "2 weeks",
      provider: "AWS Training"
    },
    {
      course: "Agile Project Management",
      progress: 45,
      timeRemaining: "4 weeks",
      provider: "Internal Academy"
    }
  ];

  const learningPaths = [
    {
      title: "Data Science Career Track",
      courses: 8,
      duration: "6 months",
      level: "Intermediate to Advanced",
      skills: ["Python", "Machine Learning", "Data Visualization", "Statistics"]
    },
    {
      title: "5G Network Specialist",
      courses: 6,
      duration: "4 months",
      level: "Advanced",
      skills: ["5G Technology", "Network Architecture", "RF Engineering", "Protocol Testing"]
    },
    {
      title: "Technical Leadership Program",
      courses: 10,
      duration: "8 months",
      level: "Management",
      skills: ["Team Leadership", "Strategic Planning", "Technical Mentoring", "Communication"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Hyper-Personalised Learning Journeys</h1>
      </div>

      {/* Employee Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Personalization Settings</CardTitle>
          <CardDescription>Configure AI recommendations based on employee profile and preferences</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="employee">Select Employee</Label>
            <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
              <SelectTrigger>
                <SelectValue placeholder="Choose employee" />
              </SelectTrigger>
              <SelectContent>
                {employees.map((employee) => (
                  <SelectItem key={employee.value} value={employee.value}>
                    {employee.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="learning-style">Learning Style</Label>
            <Select value={learningStyle} onValueChange={setLearningStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Learning preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visual">Visual Learner</SelectItem>
                <SelectItem value="auditory">Auditory Learner</SelectItem>
                <SelectItem value="kinesthetic">Hands-on Learner</SelectItem>
                <SelectItem value="reading">Reading/Writing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">
              Generate Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="current">Current Learning</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Personalized Course Recommendations</span>
              </CardTitle>
              <CardDescription>AI-curated learning content based on role, performance, and career aspirations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningRecommendations.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{course.provider}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{course.relevance}%</div>
                      <div className="text-xs text-muted-foreground">Relevance</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Skills You'll Gain:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-sm font-medium mb-1">Why this course?</div>
                    <div className="text-sm text-muted-foreground">{course.reason}</div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">Enroll Now</Button>
                    <Button variant="outline">Add to Wishlist</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Learning Progress</CardTitle>
              <CardDescription>Track ongoing courses and completion status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentLearning.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{course.course}</h3>
                    <Badge variant="outline">{course.provider}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}% complete</span>
                    </div>
                    <Progress value={course.progress} />
                    <div className="text-sm text-muted-foreground">
                      Estimated time remaining: {course.timeRemaining}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Continue Learning</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paths" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Curated Learning Paths</CardTitle>
              <CardDescription>Structured learning journeys for career development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningPaths.map((path, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <CardDescription>
                        {path.courses} courses • {path.duration} • {path.level}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Key Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {path.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">Start Learning Path</Button>
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
                <CardTitle className="text-sm font-medium text-muted-foreground">Courses Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">+4 this quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Learning Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">This year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Skills Gained</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">New certifications</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  4.8 <Star className="h-4 w-4 text-yellow-500 ml-1" />
                </div>
                <p className="text-xs text-muted-foreground">Average rating</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningJourneys;