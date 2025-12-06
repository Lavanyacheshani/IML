export interface ModuleSession {
  session: number;
  duration: string;
  lessonOutcome: string;
  content: string;
  teachingMethod: string;
}

export interface ModuleObject {
  name: string;
  totalDuration: string;
  deliveryMethod: string;
  sessions: ModuleSession[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  commencement?: string;
  schedule?: string;
  investment?: string;
  ukExamFee?: string;
  targetAudience?: string;
  accreditation?: string;
  modules?: (string | ModuleObject)[];
  entryRequirements?: string;
  careerOpportunities?: string[];
  progressionPathway?: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const coursesData: Record<string, Course[]> = {
  certificate: [
    {
      id: "certificate-hrm",
      title: "Certificate in Human Resource Management (CHRM)",
      description: "Designed as an introductory HRM credential, ideal for early-career professionals. Completers can advance to the IQN UK Diploma in HRM.",
      duration: "4 months",
      investment: "LKR 24,000",
      targetAudience: "Early-career professionals",
      accreditation: "Qualification registered with TVEC",
      modules: [
        "Introduction to HRM",
        "Recruitment and Selection",
        "Employee Relations",
        "Performance Management",
        "Training and Development"
      ],
      entryRequirements: "Open to all",
      progressionPathway: "Can advance to IQN UK Diploma in HRM",
      image: "/assets/c1.jpg",
      category: "certificate",
      featured: true
    },
    {
      id: "certificate-business-management",
      title: "Certificate in Business Management (CBM)",
      description: "Upon completion, students can enter into higher-level Diplomas and Degree programs offered by IML, IQN UK, or other institutions.",
      duration: "4 months",
      investment: "LKR 20,000",
      targetAudience: "Business professionals and students",
      accreditation: "Qualification registered with TVEC",
      modules: [
        "Business Fundamentals",
        "Management Principles",
        "Marketing Basics",
        "Financial Management",
        "Business Communication"
      ],
      entryRequirements: "Open to all",
      progressionPathway: "Pathway to higher-level Diplomas and Degree programs",
      image: "/assets/c2.jpg",
      category: "certificate",
      featured: true
    },
    {
      id: "certificate-fashion-marketing",
      title: "Certificate in Fashion Marketing",
      description: "The Diploma in Fashion Marketing at Asian Institute of Management & Leadership (AIML) Business School is crafted for individuals passionate about the fashion industry and looking to build a career in branding, retail, and marketing within the fashion world.",
      duration: "6 Months",
      investment: "Contact for pricing",
      targetAudience: "Fashion enthusiasts, boutique owners, marketing professionals",
      modules: [
        "Introduction to Fashion & Retail Industry",
        "Fashion Marketing Principles",
        "Consumer Behaviour in Fashion",
        "Branding & Fashion Identity",
        "Digital & Social Media Marketing",
        "Fashion Buying & Merchandising",
        "Event Management in Fashion",
        "Public Relations & Influencer Marketing"
      ],
      entryRequirements: "G.C.E. O/L or A/L Qualification",
      careerOpportunities: [
        "Fashion Brand Manager",
        "Retail Marketing Executive",
        "Social Media Coordinator",
        "Fashion PR & Event Assistant",
        "Fashion Entrepreneur / Boutique Owner"
      ],
      image: "/assets/c3.jpg",
      category: "certificate",
      featured: false
    },
    {
      id: "certificate-fashion-designing",
      title: "Certificate in Fashion Designing",
      description: "The Certificate in Fashion Designing at Asian Institute of Management & Leadership (AIML) Business School is designed for aspiring designers who want to transform their creativity into a professional career.",
      duration: "6 to 12 Months",
      investment: "Contact for pricing",
      targetAudience: "Aspiring fashion designers, entrepreneurs, creative individuals",
      modules: [
        "Introduction to Fashion & Design Principles",
        "Fashion Illustration & Sketching",
        "Textile Science & Fabric Knowledge",
        "Pattern Making & Garment Construction",
        "Sewing Techniques & Draping",
        "Fashion Portfolio Development",
        "Trend Forecasting & Design Research",
        "Fashion Show Production & Styling"
      ],
      entryRequirements: "G.C.E. O/L or A/L Qualification",
      careerOpportunities: [
        "Fashion Designer / Assistant Designer",
        "Pattern Maker or Garment Technician",
        "Fashion Illustrator",
        "Boutique Owner / Clothing Brand Founder",
        "Fashion Stylist or Consultant"
      ],
      image: "/assets/c4.jpg",
      category: "certificate",
      featured: false
    }
  ],
  diploma: [
    {
      id: "diploma-hrm",
      title: "Diploma in HRM",
      description: "Employing and managing the right people is critical to the growth and sustainability of every organisation. With the IQN Diploma in Human Resource Management, you can make a difference and contribute to HR solutions across any industry.",
      duration: "4 Months",
      commencement: "26 JUNE 2025",
      schedule: "Thursday 8:00PM - 9:30PM (SL time)",
      investment: "Rs. 20,000 (payable in 4 installments)",
      ukExamFee: "79 GBP",
      targetAudience: "Executives, Trainees & new comers",
      accreditation: "Accredited by University of the West of Scotland (UK). Recognized on the Scottish Credit and Qualifications Framework (SCQF) as a level 7 qualification.",
      image: "/assets/c1.jpg",
      category: "diploma",
      featured: true
    },
    {
      id: "diploma-marketing",
      title: "Diploma in Marketing Management",
      description: "Earn your accredited SCQF Level 7 Diploma in Marketing with IQN and stand out in today's competitive market. Our comprehensive qualification covers essential marketing concepts, strategies, and tactics, equipping you with the specialised skills needed to excel in the industry.",
      duration: "6 Months",
      commencement: "25 June 2025",
      schedule: "WEDNESDAY 7:30PM - 9:30PM (CMB - SL)",
      investment: "LKR 32,000 (in 4 installments)",
      ukExamFee: "79 GBP",
      targetAudience: "Executives, Trainees & new comers",
      accreditation: "Accredited by University of the West of Scotland (UK)",
      image: "/assets/c2.jpg",
      category: "diploma",
      featured: true,
      modules: [
        {
          name: "Module 1: Principles of Marketing (MKT 01)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, Case Study, Group Work",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Define the marketing concept and environment", content: "5 marketing concepts, internal/external factors", teachingMethod: "Lecture + Case Study" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Explain market segmentation and targeting", content: "Segmentation types, Targeting strategies", teachingMethod: "Group Activity + Examples" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Analyze consumer behavior", content: "Decision process, buying influences", teachingMethod: "Discussion + Model Application" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Develop positioning strategies", content: "USP, positioning maps", teachingMethod: "Workshop + Peer Review" }
          ]
        },
        {
          name: "Module 2: Marketing Research and Planning (MKT 02)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, Group Project, Presentation",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Understand research methods in marketing", content: "Qualitative vs quantitative methods", teachingMethod: "Lecture + Examples" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Design basic marketing research", content: "Sampling, questionnaires", teachingMethod: "Case Activity + Survey Design" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Analyze research data", content: "Data coding, charts, interpretation", teachingMethod: "Excel Workshop + Group Discussion" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Create a marketing plan", content: "Objectives, strategy, budgeting", teachingMethod: "Group Presentation + Review" }
          ]
        },
        {
          name: "Module 3: Digital Marketing (MKT 03)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, Digital Tools Practice, Video Demo",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Define digital marketing", content: "SEO, SEM, content marketing", teachingMethod: "Lecture + Digital Tool Overview" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Use social media for business", content: "Facebook, Instagram, LinkedIn strategies", teachingMethod: "Demo + Campaign Planning" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Measure online performance", content: "Google Analytics, KPIs", teachingMethod: "Tools Practice + Reporting Exercise" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Plan a digital marketing campaign", content: "Digital mix, timeline, ROI", teachingMethod: "Case Study + Project Work" }
          ]
        },
        {
          name: "Module 4: Branding and Communication (MKT 04)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, Role Play, Workshop",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Understand brand identity", content: "Elements of branding, logos", teachingMethod: "Lecture + Brand Analysis" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Design integrated marketing communications", content: "ATL, BTL, TTL strategies", teachingMethod: "Group Work + Role Play" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Create brand positioning strategy", content: "Storytelling, emotional branding", teachingMethod: "Workshop + Ad Creation" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Assess communication effectiveness", content: "Feedback, metrics, improvement areas", teachingMethod: "Presentation + Peer Evaluation" }
          ]
        },
        {
          name: "Module 5: Customer Relationship Management (CRM) (MKT 05)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, CRM Software Demo, Case Study",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Define CRM and its importance", content: "Lifecycle value, retention, loyalty", teachingMethod: "Lecture + CRM Concepts" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Use CRM tools", content: "CRM systems: Salesforce, Zoho", teachingMethod: "Software Demo + Practice" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Analyze customer data", content: "Segmentation, customer insights", teachingMethod: "Case Study + Group Analysis" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Build long-term customer value", content: "Loyalty programs, satisfaction tools", teachingMethod: "Workshop + CRM Strategy Drafting" }
          ]
        },
        {
          name: "Module 6: Strategic Marketing and Global Perspectives (MKT 06)",
          totalDuration: "12 Hours",
          deliveryMethod: "Lecture, Case Review, Strategy Game",
          sessions: [
            { session: 1, duration: "3 hrs", lessonOutcome: "Align marketing with corporate vision", content: "Strategic fit, SWOT, competitive advantage", teachingMethod: "Lecture + SWOT Activity" },
            { session: 2, duration: "3 hrs", lessonOutcome: "Evaluate global marketing options", content: "Standardization vs adaptation", teachingMethod: "Case Review + Debate" },
            { session: 3, duration: "3 hrs", lessonOutcome: "Plan strategic marketing actions", content: "Ansoff matrix, brand portfolio management", teachingMethod: "Group Project + Feedback" },
            { session: 4, duration: "3 hrs", lessonOutcome: "Present a strategic marketing plan", content: "Global trends, sustainability, innovation", teachingMethod: "Presentation + Evaluation" }
          ]
        }
      ]
    },
    {
      id: "diploma-supply-chain",
      title: "Diploma in Supply Chain Management",
      description: "Supply Chain Management is an integral part of most businesses and is essential to organisation's success and customer satisfaction. With IQN Diploma in Supply Chain Management, you will have a clear understanding of how to minimize damage caused by supply chain disruptions, strategise and operationalise risk management procedures, and initiate cost reduction efforts.",
      duration: "7 Months",
      commencement: "October 2025",
      schedule: "Friday 7:30PM - 9:30PM (CMB - SL)",
      investment: "LKR. 57,000 (6 installments)",
      ukExamFee: "99 GBP",
      targetAudience: "Executives, Trainees & new comers",
      accreditation: "Accredited by University of the West of Scotland (UK)",
      image: "/assets/c3.jpg",
      category: "diploma",
      featured: false
    }
  ],
  "postgraduate-diploma": [
    {
      id: "pgd-hrm",
      title: "Post Graduate Diploma in Human Resource Management (PGDHRM)",
      description: "The Post Graduate Diploma in Human Resource Management (PGDHRM) at Asian Institute of Management & Leadership (AIML) Business School is designed for aspiring HR professionals, managers, and business leaders seeking to strengthen their knowledge in people management, organizational strategy, and HR practices.",
      duration: "6 to 12 Months",
      investment: "Contact for pricing",
      targetAudience: "Graduates, mid-level professionals, entrepreneurs, HR Assistants/Officers",
      accreditation: "Awarded by: Asian Institute of Management & Leadership (AIML) Business School",
      modules: [
        "Human Resource Development & Planning",
        "Talent Acquisition & Management",
        "Employee Relations & Labour Law",
        "Performance Management",
        "Strategic HRM",
        "Organizational Behaviour",
        "Compensation & Benefits",
        "Training & Development"
      ],
      entryRequirements: "A Degree or Professional Qualification OR Minimum 2 years of work experience in HR/Administration",
      progressionPathway: "Successful candidates may be eligible for direct entry into MBA or Level 7 HRM qualifications from affiliated UK universities or professional bodies.",
      image: "/assets/c4.jpg",
      category: "postgraduate-diploma",
      featured: true
    }
  ],
  professional: [
    {
      id: "certified-strategic-manager",
      title: "Certified Strategic Manager",
      description: "Upon the completion of the CSM certification, you will gain the understanding and competence to jump start your career. And as a Certified Strategic Manager, you will have a significant advantage over others who seek leadership and management positions.",
      duration: "6 Months",
      commencement: "5 July 2025",
      schedule: "Saturday 2:30PM - 4:30PM SL Time",
      investment: "LKR. 45,000 (5 installments) / USD 200 (overseas students)",
      ukExamFee: "119 GBP",
      targetAudience: "Professionals seeking leadership and management positions",
      accreditation: "Accredited by University of the West of Scotland (UK) with external quality assurance",
      image: "/assets/c1.jpg",
      category: "professional",
      featured: true
    },
    {
      id: "certified-project-management-analyst",
      title: "Certified Project Management Analyst (CPMA)",
      description: "Having the CPMA designation not only uniquely qualifies you for the competitive job market, but also proves that you are up to date on the CPMA Body of Knowledge, which is based on the Project Management Analysis Framework.",
      duration: "6 Months",
      commencement: "8 July 2025",
      schedule: "Tuesday 8:00PM - 10:00PM SL Time",
      investment: "LKR.45,000 / 200 USD (5 installments)",
      ukExamFee: "119 GBP",
      targetAudience: "Executives, trainees & new comers with minimum one year professional work experience",
      accreditation: "External quality assurance by University of the West of Scotland",
      image: "/assets/c2.jpg",
      category: "professional",
      featured: true
    }
  ]
}

export const categoryTitles = {
  certificate: "Certificate Courses",
  diploma: "Diploma Courses",
  "postgraduate-diploma": "Postgraduate Diploma Courses",
  professional: "Professional Certifications",
  mba: "MBA Programs",
}

export const categoryDescriptions = {
  certificate: "Short-term professional development and skill enhancement programs",
  diploma: "Comprehensive diploma programs for career advancement",
  "postgraduate-diploma": "Advanced programs for graduates seeking specialized knowledge",
  professional: "Industry-recognized professional certifications",
  mba: "Master of Business Administration programs for aspiring leaders",
}

export const contactInfo = {
  phone: "+94768545962",
  name: "Kavindy"
}

export function getCourseById(id: string): Course | undefined {
  for (const category of Object.values(coursesData)) {
    const course = category.find(c => c.id === id)
    if (course) return course
  }
  return undefined
}

export function getCoursesByCategory(category: string): Course[] {
  return coursesData[category] || []
}

export function getAllCourses(): Course[] {
  return Object.values(coursesData).flat()
}

export function getFeaturedCourses(): Course[] {
  return getAllCourses().filter(course => course.featured)
} 