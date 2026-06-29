export const siteConfig = {
  name: "Jungwoo Suh",
  title: "Undergraduate Researcher",
  description: "Portfolio website of Jungwoo Suh",
  accentColor: "#1d4ed8",
  social: {
    email: "candorleo02@gmail.com",
    linkedin: "https://www.linkedin.com/in/jungwoo-suh-/",
    github: "https://github.com/glaubeleo-ruth",
  },
  aboutMe:
    "I build systems where mathematical optimization and machine learning intersect to solve real operational problems. My background is in Industrial Engineering with a focus on Operations Research — spanning fleet routing, energy prediction, and simulation modeling. I am currently expanding into AI applications through research projects.",
  skills: [
    "Python",
    "XGBoost",
    "Scikit-learn",
    "PyTorch",
    "Gurobi",
    "MILP",
    "PuLP",
    "Arena",
    "Pandas",
    "NumPy",
    "R",
    "C++",
    "ROS2",
  ],
  projects: [
    {
      name: "ML-MILP EV Fleet Optimization",
      description:
        "Integrated XGBoost energy prediction and MILP routing optimization for HVAC-aware electric vehicle fleet operations. Improved service level by 12%, reduced non-revenue operations by 37%, and achieved R²=0.94 on energy estimation across 135 evaluated scenarios.",
      link: "https://github.com/glaubeleo-ruth/ml-milp-ev-fleet-optimization",
      skills: ["Python", "Gurobi", "XGBoost", "MILP"],
    },
    {
      name: "Food Delivery Delay Prediction",
      description:
        "Binary classification pipeline predicting delivery delays across ~15,000 orders. Compared KNN and XGBoost under 90/10 class imbalance. XGBoost achieved AUC-ROC 0.997 and F1 0.89 on the minority class via scale_pos_weight tuning. Team project (2 members).",
      link: "https://github.com/glaubeleo-ruth/food-delivery-delay-prediction",
      skills: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    },
    {
      name: "Distribution Center Simulation",
      description:
        "Led a 3-member team to model and improve distribution center operations using discrete-event simulation. Identified AGV routing as the primary throughput bottleneck via data-driven analysis and proposed optimized routing and buffer strategies to improve operational efficiency.",
      link: "",
      skills: ["Arena", "Simulation Modeling"],
    },
  ],
  experience: [
    {
      company: "IMSI Lab, Seoul National University",
      title: "Undergraduate Researcher",
      dateRange: "Jun 2026 - Present",
      bullets: [
        "Conducting medical AI research on Chest X-ray classification as part of the CineFlow team",
        "Working toward a co-authored publication targeting December 2026",
      ],
    },
    {
      company: "IDEA Lab, Soongsil University",
      title: "Undergraduate Researcher (Incoming)",
      dateRange: "Sep 2026 - Present",
      bullets: [
        "Research in industrial time-series analysis and NLP applications under Prof. Heejeong Choi",
        "Targeting a first-author publication by mid-2027",
      ],
    },
    {
      company: "Illinois Institute of Technology",
      title: "Visiting Researcher — Optimization",
      dateRange: "Jan 2026 - Feb 2026",
      bullets: [
        "Developed XGBoost energy prediction model (R²=0.94), reducing estimation error by ±18%",
        "Improved fleet service level by 12% and reduced non-revenue operations by 37% through MILP routing",
        "Evaluated 135 scenarios to validate robustness of data-driven dispatch decisions",
      ],
    },
    {
      company: "Soongsil University",
      title: "Team Project — Distribution Center Simulation",
      dateRange: "Sep 2025 - Dec 2025",
      bullets: [
        "Led a 3-member team to analyze and improve distribution center operations using simulation modeling",
        "Identified AGV routing as the key bottleneck impacting throughput through data-driven analysis",
        "Improved operational efficiency by proposing optimized routing and buffer strategies",
      ],
    },
  ],
  education: [
    {
      school: "Soongsil University",
      degree: "B.Eng. Industrial Engineering · Double Major in AI-Convergence",
      dateRange: "Mar 2022 - Aug 2027 (Expected)",
      achievements: [
        "GPA 3.52 / 4.50",
        "TOEFL iBT 101 / 120",
        "Relevant coursework: Operations Research, Machine Learning, Algorithms, Simulation Modeling, Statistics",
      ],
    },
  ],
};
