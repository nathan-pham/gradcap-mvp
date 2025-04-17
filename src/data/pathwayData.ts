
export interface PathwayNodeType {
  id: string;
  title: string;
  description: string;
  details?: string[];
}

export const pathwayData: PathwayNodeType[] = [
  {
    id: "actuary",
    title: "Actuary",
    description: "Actuaries use mathematics, statistics, and financial theory to analyze the financial costs of risk and uncertainty. They are essential in the insurance industry and help businesses evaluate the risk of certain events occurring.",
    details: [
      "Work at the intersection of finance, probability, and statistics",
      "Use mathematics and data to assess risk and model future outcomes",
      "Solve real-world problems for insurance, superannuation, finance & consulting",
      "Require strong analytical skills and problem-solving abilities"
    ]
  },
  {
    id: "student-life",
    title: "Student Life",
    description: "Student life for actuary majors involves a rigorous study schedule balanced with practical applications of complex mathematical concepts. Students develop strong foundations in statistics, mathematics, finance, and economics.",
    details: [
      "Challenging coursework with focus on math, statistics, finance, and economics",
      "Internship opportunities with insurance companies and consulting firms",
      "Active student societies and networking events with industry professionals",
      "Balance between theoretical learning and practical problem-solving"
    ]
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "Excellence in the actuarial field requires continuous learning, analytical precision, and the ability to communicate complex numerical concepts clearly to non-specialists.",
    details: [
      "Strong mathematical and statistical foundation is essential",
      "Problem-solving skills and attention to detail distinguish top performers",
      "Communication skills to explain complex concepts to non-technical audiences",
      "Professional certification through rigorous exams demonstrates excellence"
    ]
  },
  {
    id: "challenges",
    title: "Challenges",
    description: "Pursuing an actuarial career comes with specific challenges including rigorous professional exams, staying current with evolving regulations, and balancing technical expertise with business acumen.",
    details: [
      "Series of challenging professional exams alongside full-time work",
      "Need to constantly update knowledge with changing regulations",
      "Balancing technical expertise with business understanding",
      "High-pressure decision-making that affects financial wellbeing of organizations"
    ]
  },
  {
    id: "solutions",
    title: "Solutions",
    description: "Solutions to the challenges of an actuarial career path include structured study programs, mentorship, professional development resources, and industry networking.",
    details: [
      "Structured study programs and exam preparation resources",
      "Mentorship from experienced actuaries within your organization",
      "Professional societies offering continuing education and support",
      "Developing time management skills to balance work and study",
      "Building a strong professional network within the industry"
    ]
  },
  {
    id: "beyond-books",
    title: "Beyond the Books",
    description: "Beyond academic learning, successful actuaries develop business acumen, professional networks, and specialized industry knowledge through practical experiences and continuous engagement with the profession.",
    details: [
      "Internships provide real-world application of classroom concepts",
      "Industry conferences and seminars offer cutting-edge knowledge",
      "Professional societies provide networking and mentorship opportunities",
      "Soft skills like presentation, negotiation, and leadership are increasingly valued"
    ]
  },
  {
    id: "myths",
    title: "Myths",
    description: "There are several misconceptions about the actuarial profession that can discourage potential candidates from pursuing this rewarding career path.",
    details: [
      "Myth: Actuaries only work with numbers and have limited social interaction",
      "Reality: Modern actuaries regularly collaborate with teams and present to stakeholders",
      "Myth: You need a perfect math score to become an actuary",
      "Reality: While strong math skills are important, problem-solving and business acumen are equally valuable",
      "Myth: The career path is narrow and limited to insurance",
      "Reality: Actuaries work in diverse fields including consulting, healthcare, banking, and government"
    ]
  },
  {
    id: "outcomes",
    title: "Outcomes",
    description: "Graduates with actuarial qualifications enjoy excellent career prospects with opportunities across multiple industries, competitive salaries, and clear paths for career advancement.",
    details: [
      "Strong job security and high demand for qualified actuaries",
      "Competitive starting salaries with excellent progression",
      "Clear career advancement path through professional certification",
      "Transferable skills applicable to various financial and analytical roles",
      "Options to work in insurance, consulting, banking, healthcare, and government"
    ]
  },
  {
    id: "careers",
    title: "Careers",
    description: "The actuarial qualification opens doors to diverse career opportunities beyond traditional insurance roles, with growing demand in emerging areas like climate risk, healthcare analytics, and data science.",
    details: [
      "Insurance: pricing, reserving, risk management, product development",
      "Consulting: advising clients on risk management, mergers and acquisitions",
      "Banking: asset-liability management, capital modeling",
      "Healthcare: pricing medical insurance, analyzing healthcare costs",
      "Enterprise Risk Management: identifying and mitigating organizational risks",
      "Emerging fields: climate risk analysis, cybersecurity risk, data science"
    ]
  }
];
