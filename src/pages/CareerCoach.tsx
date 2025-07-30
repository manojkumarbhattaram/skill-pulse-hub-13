import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Bot, User, Briefcase, Users, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const CareerCoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI Career Coach. I can help you with:\n\n• Finding internal opportunities based on your skills\n• Career development guidance\n• HR policy questions\n• Skills gap analysis\n• Mentorship connections\n\nWhat would you like to explore today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const quickActions = [
    { text: "Show me internal job opportunities", icon: Briefcase },
    { text: "Who should I reach out to for mentorship?", icon: Users },
    { text: "What skills should I develop for promotion?", icon: FileText },
    { text: "How do I request a lateral move?", icon: MessageSquare }
  ];

  const commonQueries = [
    "Who is at risk of leaving in engineering?",
    "List people with data science + telco experience",
    "Draft email to low engagement team",
    "Show me candidates for senior developer role",
    "What's our current retention rate?",
    "Which departments have skill gaps?"
  ];

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputMessage;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateAIResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('job') || lowerInput.includes('opportunities') || lowerInput.includes('positions')) {
      return `Based on your profile as a Software Engineer with 5 years experience, here are relevant internal opportunities:

🎯 **Senior Full Stack Developer** - Engineering Team
- Match Score: 92%
- Location: Cape Town
- Skills needed: React, Node.js, Python (you have 2/3)
- Application deadline: 2 weeks

🎯 **Technical Lead** - Product Team  
- Match Score: 87%
- Location: Johannesburg
- Skills needed: Leadership, System Design, Mentoring
- Recommended action: Complete leadership training first

💡 **Next Steps:**
1. Update your skills profile in Aspire Pro
2. Schedule a chat with Sarah Johnson (current Tech Lead)
3. Consider the "Leadership for Technical Teams" course

Would you like me to help you draft an application or connect you with the hiring manager?`;
    }

    if (lowerInput.includes('mentorship') || lowerInput.includes('mentor')) {
      return `Great question! Based on your career goals and current role, here are recommended mentors:

👨‍💼 **David Chen** - Senior Engineering Manager
- 12 years at CellC, expert in career transitions
- Available for mentorship (last updated: 2 days ago)
- Focus areas: Technical leadership, team management

👩‍💼 **Sarah Williams** - VP of Technology
- Successful track record in developing junior engineers
- Open to 1-2 new mentees per quarter
- Focus areas: Strategic thinking, executive presence

🤝 **Peer Mentorship:**
- Engineering Circle meets Fridays 2pm
- Cross-functional mentoring program starting next month

Would you like me to send a connection request to any of these mentors?`;
    }

    if (lowerInput.includes('skills') || lowerInput.includes('develop') || lowerInput.includes('promotion')) {
      return `For your promotion to Senior Developer, here's your skills gap analysis:

✅ **Current Strengths:**
- JavaScript/React (Expert level)
- Problem solving (High)
- Code quality (High)

📈 **Skills to Develop:**
- **System Design** (Critical for senior role)
- **Mentoring/Leadership** (Important for team growth)
- **Cloud Architecture** (AWS/Azure experience)

🎯 **Recommended Learning Path:**
1. "System Design Fundamentals" (4 weeks) - Internal Academy
2. "Technical Leadership" course (6 weeks) - LinkedIn Learning  
3. AWS Certification prep (8 weeks)

📊 **Timeline to Promotion:** 4-6 months with focused development

Start with system design - it's the biggest gap for senior roles. Shall I enroll you in the course?`;
    }

    if (lowerInput.includes('at risk') || lowerInput.includes('leaving')) {
      return `📊 **Current Attrition Risk Analysis:**

🔴 **High Risk (Engineering):**
- 18 employees with risk score >70%
- Top concerns: Career growth, compensation
- Recommended actions: Immediate 1:1s, career development discussions

🟡 **Medium Risk:**
- 12 employees in customer service
- Main factor: Work-life balance concerns

📈 **Retention Strategies:**
- Flexible work arrangements
- Skills development budget increase
- Internal mobility program expansion

Would you like detailed profiles of high-risk employees or help drafting retention conversations?`;
    }

    if (lowerInput.includes('data science') && lowerInput.includes('telco')) {
      return `🔍 **Employees with Data Science + Telecom Experience:**

👨‍💻 **John Mitchell** - Senior Data Analyst
- 6 years telecom, 4 years data science
- Skills: Python, SQL, Network Analytics, 5G optimization
- Availability: Open to new projects

👩‍💻 **Lisa Park** - ML Engineer  
- 8 years CellC, 3 years AI/ML
- Skills: Machine Learning, Telecom Operations, Customer Analytics
- Current: Leading churn prediction project

👨‍💻 **Ahmed Hassan** - Business Intelligence Lead
- 10 years telecom industry, 5 years advanced analytics
- Skills: Data modeling, Telecom KPIs, Predictive analytics

Would you like me to connect you with any of these team members or see their detailed profiles?`;
    }

    if (lowerInput.includes('lateral move') || lowerInput.includes('transfer')) {
      return `📋 **Lateral Move Process at CellC:**

**Step 1: Self-Assessment** (Week 1)
- Complete career interest survey in Aspire Pro
- Identify target department/role
- Assess skills transferability

**Step 2: Manager Discussion** (Week 2)  
- Schedule formal career discussion
- Present your case with business justification
- Get manager support/feedback

**Step 3: Networking** (Weeks 3-4)
- Connect with target team members
- Schedule informational interviews
- Understand team needs and culture

**Step 4: Application** (Week 5)
- Submit internal transfer request
- Include manager endorsement
- Highlight relevant skills/experience

🕒 **Timeline:** Typically 6-8 weeks for approval
📝 **Success Rate:** 78% for lateral moves with manager support

Need help with any specific step?`;
    }

    // Default response
    return `I understand you're asking about "${input}". Let me help you with that.

As your AI Career Coach, I can assist with:

🎯 **Career Development:**
- Internal opportunities matching your skills
- Skills gap analysis and learning recommendations
- Promotion pathway guidance

👥 **People & Teams:**
- Finding mentors and subject matter experts
- Team dynamics and collaboration advice
- Networking within the organization

📋 **HR Processes:**
- Policy clarifications
- Benefits and compensation questions
- Performance review preparation

Could you provide more specific details about what you'd like to explore?`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Digital Career Coach & AI Assistant</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>AI Career Assistant</span>
              </CardTitle>
              <CardDescription>Ask questions about career development, opportunities, and HR policies</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col space-y-4">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex space-x-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                      {message.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about career opportunities, skills, or HR policies..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={() => handleSendMessage()} disabled={!inputMessage.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>Common career coaching topics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => handleSendMessage(action.text)}
                  >
                    <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{action.text}</span>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">HR Analytics Queries</CardTitle>
              <CardDescription>Sample questions for HR teams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {commonQueries.map((query, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-2 text-xs"
                  onClick={() => handleSendMessage(query)}
                >
                  "{query}"
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary" className="w-full justify-center">Natural Language Processing</Badge>
              <Badge variant="secondary" className="w-full justify-center">Real-time Analytics</Badge>
              <Badge variant="secondary" className="w-full justify-center">Personalized Recommendations</Badge>
              <Badge variant="secondary" className="w-full justify-center">Teams Integration</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerCoach;