
export interface PathwayNodeType {
  id: string;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
}

export const pathwayData: PathwayNodeType[] = [
  {
    id: "degree",
    title: "What Is Actuarial Degree?",
    description: "An Actuarial Science degree focuses on applying mathematical and statistical methods to assess risk in insurance, finance, and other industries.",
    details: [
      "Combines mathematics, statistics, and business knowledge",
      "Prepares students to assess financial implications of future events",
      "Teaches risk management and financial analysis techniques",
      "Provides foundation for professional actuarial certification exams"
    ],
    icon: "Book"
  },
  {
    id: "prerequisites",
    title: "Prerequisites",
    description: "Strong foundation in mathematics is essential before pursuing an actuarial degree.",
    details: [
      "Advanced mathematics: calculus, algebra, and statistics",
      "Strong analytical and problem-solving skills",
      "Basic understanding of economics and finance concepts",
      "Computer literacy and basic programming knowledge"
    ],
    icon: "Triangle"
  },
  {
    id: "daily-life",
    title: "Day to Day Life",
    description: "Student life involves a mixture of theoretical learning and practical applications through various assessment methods.",
    details: [
      "Lectures in mathematics, statistics, economics, and finance",
      "Practical lab sessions for statistical software and programming",
      "Individual and group assignments applying theoretical concepts",
      "Regular quizzes and mid-term examinations",
      "Research projects analyzing real-world financial data"
    ],
    icon: "Calendar"
  },
  {
    id: "duration",
    title: "Duration",
    description: "Typical actuarial science programs run over standard academic terms with specific structures.",
    details: [
      "Bachelor's degree: 3-4 years (6-8 semesters)",
      "Master's degree: 1-2 additional years",
      "Approximately 12-15 weeks per semester",
      "20-25 hours of class time per week",
      "Additional 15-20 hours of self-study recommended weekly"
    ],
    icon: "Clock"
  },
  {
    id: "commitment",
    title: "Commitment",
    description: "Pursuing an actuarial degree requires significant dedication both during studies and for professional exams.",
    details: [
      "High workload with mathematics-intensive courses",
      "Extensive homework and practice problems",
      "Self-study for professional certification exams alongside coursework",
      "Summer internships in related fields",
      "Continuous learning even after graduation"
    ],
    icon: "BookOpen"
  },
  {
    id: "assessments",
    title: "Assessments",
    description: "Students are evaluated through various assessment methods that test both theoretical knowledge and practical applications.",
    details: [
      "Individual assignments (60-70% of course evaluations)",
      "Group projects and presentations (15-20%)",
      "Practical case studies analyzing real-world data",
      "Written examinations with both computational and theoretical questions",
      "Capstone projects in final year"
    ],
    icon: "FileText"
  },
  {
    id: "success-strategies",
    title: "How to Succeed",
    description: "Success in actuarial studies requires specific approaches and study techniques.",
    details: [
      "Establish strong mathematical foundations early in the program",
      "Develop consistent study habits and time management skills",
      "Form study groups for difficult concepts",
      "Begin preparation for professional exams during undergraduate studies",
      "Seek internship opportunities as early as possible",
      "Utilize professor office hours and university resources"
    ],
    icon: "Award"
  },
  {
    id: "topics",
    title: "Specific Topics",
    description: "Actuarial science programs cover a broad range of technical and business subjects.",
    details: [
      "Probability and statistics",
      "Financial mathematics and interest theory",
      "Life contingencies and mortality models",
      "Risk theory and credibility",
      "Investment and asset management",
      "Insurance and pension systems",
      "Regulatory frameworks and compliance",
      "Predictive modeling and data analytics"
    ],
    icon: "Layers"
  },
  {
    id: "challenges",
    title: "Common Challenges",
    description: "Students often face specific difficulties when pursuing actuarial studies.",
    details: [
      "Mathematical rigor and complex statistical concepts",
      "Balancing coursework with professional exam preparation",
      "Applying theoretical knowledge to practical problems",
      "Keeping up with evolving industry regulations",
      "Developing both technical skills and business acumen",
      "Securing relevant internships in competitive markets"
    ],
    icon: "AlertTriangle"
  },
  {
    id: "extracurricular",
    title: "Extra Curricular",
    description: "Activities outside the classroom that enhance actuarial education and career prospects.",
    details: [
      "Actuarial student clubs and societies",
      "Case competitions in risk management and finance",
      "Networking events with industry professionals",
      "Research assistantships with faculty members",
      "Professional development workshops",
      "Volunteer work with financial literacy programs"
    ],
    icon: "Users"
  },
  {
    id: "misconceptions",
    title: "Misconceptions",
    description: "Common misunderstandings about actuarial studies and the profession.",
    details: [
      "Myth: Actuaries only work with insurance",
      "Reality: Actuaries work in various fields including healthcare, investments, banking, and government",
      "Myth: It's all about mathematics with little human interaction",
      "Reality: Actuaries frequently collaborate with teams and present findings to stakeholders",
      "Myth: Only mathematically gifted students can succeed",
      "Reality: Persistent study and application are more important than natural talent"
    ],
    icon: "HelpCircle"
  },
  {
    id: "outcomes",
    title: "Outcomes",
    description: "Expected results and achievements from completing an actuarial science degree.",
    details: [
      "Strong foundation for professional actuarial certification exams",
      "Highly developed quantitative and analytical skills",
      "Problem-solving abilities for complex risk scenarios",
      "Understanding of financial and insurance markets",
      "Preparation for graduate studies in related fields",
      "Readiness for entry-level positions in actuarial departments"
    ],
    icon: "Target"
  },
  {
    id: "impact",
    title: "Impact on the World",
    description: "How actuaries contribute to society and global economic stability.",
    details: [
      "Ensuring financial security systems remain viable (pensions, insurance)",
      "Developing models for climate change financial risk",
      "Creating healthcare funding systems that remain sustainable",
      "Helping businesses manage unforeseen risks and disasters",
      "Informing public policy on financial security matters",
      "Developing models for emerging risks like cyber security"
    ],
    icon: "Globe"
  },
  {
    id: "career",
    title: "Career Paths",
    description: "Various professional trajectories available to actuarial science graduates.",
    details: [
      "Insurance actuary (life, health, property, casualty)",
      "Consulting actuary for businesses and governments",
      "Enterprise risk management specialist",
      "Investment or pension actuary",
      "Healthcare actuary analyzing medical costs",
      "Data scientist specializing in risk analytics",
      "Product development and pricing specialist",
      "Chief Risk Officer (executive level)"
    ],
    icon: "Briefcase"
  }
];
