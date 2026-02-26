import { useState, useEffect } from 'react';
import { ChevronDown, Database, TrendingUp, Mail, Phone, Linkedin, Award, Code, Lightbulb, Rocket, ExternalLink, X, Brain, Server } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Analyst / Business Analyst with 2+ years delivering KPI reporting and data-driven insights using SQL, Python, Snowflake, Tableau, and Power BI across analytics and research environments. Built BI and data systems at NYU, including a Snowflake SQL schema that cut processing time by 20% and Power BI dashboards that increased student participation by 25%. Automated forecasting and analytics workflows using Python/SQL, reducing manual planning by 30%, improving forecast precision by 40%, and delivering time-series and RAG-based analysis solutions validated at 90% expert preference.";

  const experience = [
    {
      company: "Quant AI Research",
      role: "Machine Learning Engineer – LLM & RAG Systems",
      location: "New York, NY",
      dates: "Sept. 2025 – Present",
      highlights: [
        "Engineered an equity research analytics workflow processing 10+ years of SEC filings, earnings transcripts, and macroeconomic time-series, generating 1K+ retrieval-ready document chunks for structured analysis.",
        "Implemented time-consistent data ingestion and indexing with publish-date constraints and a vector database to enable section-aware retrieval and reduce temporal leakage across 10+ years of source documents.",
        "Streamlined domain-expert evaluation and acceptance testing, achieving 100% predefined scope completion and 90% expert preference for analysis quality and usability."
      ]
    },
    {
      company: "New York University",
      role: "Research Data Scientist – Prof. Carlos De Oliveira",
      location: "New York, NY",
      dates: "May. 2024 – May. 2025",
      highlights: [
        "Built and evaluated LSTM-based time-series models on USD–EUR FX data sourced via Polygon API using Python, achieving RMSE < 0.05 through systematic feature engineering and model tuning.",
        "Developed and executed a backtesting and performance analysis pipeline, measuring outcomes across historical windows and achieving 95% directional accuracy with observed profit margins of 0.16%–8.61% under defined assumptions.",
        "Analyzed multi-year historical datasets in Python and MongoDB, testing rule-based and model-driven variants and delivering up to 50% improvement in simulated cumulative returns over 8 years."
      ]
    },
    {
      company: "New York University",
      role: "Data Services Graduate Assistant",
      location: "New York, NY",
      dates: "May. 2024 – May. 2025",
      highlights: [
        "Designed and implemented a Snowflake SQL schema supporting multi-school student engagement analytics, reducing data processing time by 20% and improving metric consistency.",
        "Built Power BI dashboards analyzing outreach campaigns and student demographics, increasing overall student participation by 25%, with targeted gains among underrepresented groups.",
        "Automated dataset preparation and refresh workflows for recurring analytics deliverables, standardizing KPI definitions and improving reporting reliability across stakeholders."
      ]
    },
    {
      company: "Atra Phygital Pvt. Ltd",
      role: "Data Analyst Intern",
      location: "Mumbai, India",
      dates: "Jun. 2023 – Aug. 2023",
      highlights: [
        "Automated Excel-based forecasting and planning reports using Python and SQL, reducing manual planning effort by 30% and improving reporting turnaround for recurring cycles.",
        "Launched a time-series sales forecasting model using Facebook Prophet on 5 years of historical data plus external factors, improving forecast reliability for demand planning."
      ]
    }
  ];

  const projects = [
    {
      title: "End-to-End Retail Lakehouse Pipeline",
      subtitle: "Databricks | Spark | Delta Lake | AWS S3",
      category: "Data Engineering",
      introduction: "Developed an end-to-end Databricks lakehouse consolidating post-merger data across 3 Medallion layers and 5+ Gold tables.",
      problem: "Post-merger data silos and high latency in aggregation for business reporting.",
      objective: "Create a unified, BI-ready analytics platform with reduced aggregation latency.",
      methodology: [
        "Architected data pipeline using Databricks and Apache Spark.",
        "Implemented Medallion architecture (Bronze, Silver, Gold) for data quality.",
        "Utilized Delta Lake and Amazon S3 for scalable storage and versioning."
      ],
      results: [
        "Reduced aggregation latency significantly.",
        "Delivered BI-ready analytics for 5+ Gold tables.",
        "Consolidated data across multiple post-merger entities."
      ],
      conclusion: "Demonstrated expertise in modern data lakehouse architecture and cloud-based ETL."
    },
    {
      title: "OLIST Ecommerce Platform Analytics",
      subtitle: "Tableau Prep | Tableau | KPI Dashboards",
      category: "Business Intelligence",
      introduction: "Consolidated 500K+ e-commerce transactions from 8 datasets to deliver comprehensive business dashboards.",
      problem: "Disparate data sources making it difficult to track business KPIs and customer churn.",
      objective: "Create a unified view of e-commerce performance with 15+ tracked KPIs.",
      methodology: [
        "Used Tableau Prep to clean and join 8 disparate datasets (500K+ rows).",
        "Designed 20+ interactive Tableau dashboards.",
        "Focused on KPIs including churn, retention, and sales trends."
      ],
      results: [
        "Delivered 20 dashboards tracking 15+ business KPIs.",
        "Enabled data-driven decision making for marketing and sales teams.",
        "Identified key churn indicators through cohort analysis."
      ],
      conclusion: "Showcased ability to handle large-scale data integration and visualization."
    },
    {
      title: "Real-Time Forex Analysis with ML",
      subtitle: "Polygon API | MongoDB | SQLite | KNN",
      category: "Machine Learning",
      introduction: "Deployed a real-time FX pipeline to analyze GBPUSD and USDJPY trends using machine learning.",
      problem: "Need for real-time analysis of foreign exchange trends with high accuracy.",
      objective: "Build a low-latency pipeline for FX data ingestion and predictive modeling.",
      methodology: [
        "Ingested real-time data using Polygon API.",
        "Stored data in MongoDB and SQLite for flexibility.",
        "Engineered short-term features and applied KNN for trend analysis."
      ],
      results: [
        "Achieved RMSE of 0.0099 on trend predictions.",
        "Successfully analyzed GBPUSD and USDJPY pairs.",
        "Created a robust pipeline for real-time financial analytics."
      ],
      conclusion: "Combined real-time data engineering with machine learning for financial markets."
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Databases',
      skills: ['Python', 'SQL', 'R', 'MongoDB', 'PostgreSQL', 'MySQL', 'SSMS']
    },
    {
      icon: Server,
      title: 'Data Engineering',
      skills: ['Apache Spark', 'Databricks', 'Delta Lake', 'Snowflake']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Predictive Modeling', 'Time-Series Analysis', 'Feature Engineering', 'PyTorch', 'LLMs', 'RAG', 'Vector Databases']
    },
    {
      icon: TrendingUp,
      title: 'BI & Visualization',
      skills: ['Tableau', 'Power BI', 'Looker', 'AWS QuickSight', 'Excel (Advanced)', 'Matplotlib']
    }
  ];

  const certifications = [
    'Project Management Professional (PMP)',
    'Google Analytics',
    'AWS Certified Cloud Practitioner (In Progress)'
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">SHUBH KAMDAR</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Shubh Kamdar"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SHUBH KAMDAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Analyst | Business Analytics & BI
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              SQL, Python, Tableau, Power BI
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📊 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'DATA PROCESSING', value: '20%', detail: 'Time Reduction' },
              { label: 'STUDENT ENGAGEMENT', value: '25%', detail: 'Increase via BI' },
              { label: 'FORECAST PRECISION', value: '40%', detail: 'Improvement' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data Analyst specializing in BI systems, machine learning, and cloud data architecture with proven impact in academic and research environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Database,
                title: 'Data Architecture',
                detail: 'Designed Snowflake schemas and Databricks lakehouses, reducing processing time by 20% and enabling scalable analytics.'
              },
              {
                icon: TrendingUp,
                title: 'Advanced Analytics',
                detail: 'Built LSTM models for time-series forecasting and RAG systems for equity research, achieving 90% expert validation.'
              },
              {
                icon: Lightbulb,
                title: 'Business Intelligence',
                detail: 'Created Power BI and Tableau dashboards that drove 25% increase in student engagement and automated 30% of manual reporting.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Delivering data-driven solutions across AI research, academic institutions, and industry.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              End-to-end data pipelines, business intelligence solutions, and machine learning applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical expertise spanning data engineering, analytics, and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Professional credentials in project management and cloud technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">New York University</h3>
                  <p className="text-brown font-medium">Master of Management of Technology, Data Science</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  New York, NY · Sep. 2023 - May. 2025
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Advanced coursework in data science, machine learning, and technology management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">University of Mumbai</h3>
                  <p className="text-brown font-medium">Bachelor of Technology, Mechanical Engineering</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Mumbai, India · Aug. 2019 - Jul. 2023
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Foundation in engineering principles with focus on analytical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss data analytics, BI implementations, or machine learning projects.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+15163220346"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (516) 322-0346
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/shubhkamdar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:shubhk20122001@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                shubhk20122001@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Rocket className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">Brooklyn, New York, USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Shubh Kamdar · Data Analyst & Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;