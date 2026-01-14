import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ExternalLink, Code, Server, Cloud, Settings } from "lucide-react";
import { link } from "framer-motion/client";

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  const projectsData = [
    { 
      title: "Production-ready Devsecops Pipeline", 
      description: "Engineered a production-ready DevSecOps pipeline using security best practices and GitOps Principles.",
      icon: <Settings className="w-6 h-6" />,
      tags: ["Jenkins", "Terraform", "Ansible", "Kubernetes", "Gitops", "Sonarqube"]
    },
    { 
      title: "End to End Monitoring Setup", 
      description: "Deployed the entire Prometheus Monitoring Stack with Slack Reporting Using Ansible and Terraform.",
      icon: <Server className="w-6 h-6" />,
      tags: ["Ansible", "Terraform", "AWS", "Slack", "Prometheus", "Grafana"],
      link: "https://github.com/Arijit9721/End-To-End-Monitoring-Setup-With-Ansible.git"
    },
    { 
      title: "AWS Serverless Website Deployment", 
      description: "Deployed a website with a live counter serverlessly using Lambda and S3",
      icon: <Code className="w-6 h-6" />,
      tags: ["AWS S3", "Dynamodb", "AWS lambda", "Python(Boto3)", "Terraform", "Github Actions"],
      link: "https://github.com/Arijit9721/aws-serverless-terraform-cicd-deployment.git"
    },
    { 
      title: "Production Ready Kubernetes Cluster", 
      description: "Deployed a production-ready EKS cluster with high availability using Terraform",
      icon: <Code className="w-6 h-6" />,
      tags: ["Kubernetes", "AWS EKS", "Python", "Terraform"],
      link: "https://github.com/Arijit9721/Production-Ready-EKS-Cluster-Using-Terraform.git"
    },
  ];

  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    // Default to dark mode, only switch if user has explicitly saved light mode preference
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null ? true : JSON.parse(savedMode);
    setDarkMode(isDarkMode);
    
    // Apply dark class immediately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProjects((prev) => [...prev].sort(() => Math.random() - 0.5));
  //   }, 8000);
  //   return () => clearInterval(interval);
  // }, []);

  const achievements = [
    { text: "AWS Emerging Talent Community Member", icon: "🏆" },
    { text: "GCP Certified Associate Cloud Engineer", icon: "🎓" },
    { text: "Completed Kodekloud 100 Days of DevOps Challenge", icon: "☁️" },
    { text: "KodeKloud Certified Chaos Engineer", icon: "🔒" }
  ];

  const skills = [
    "Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", 
    "Ansible", "Prometheus", "Grafana", "Python", "GitHub Actions"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Arijit Das
          </motion.div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</a>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="https://github.com/Arijit9721" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-100">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/arijitdas97/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-100">
                <LinkedinIcon />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-100">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              DevOps Engineer
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              🚀 Transforming ideas into <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">bulletproof infrastructure</span>. 
              Building the bridges between development dreams and production reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-500">⚡</span>
                <span className="font-medium">Zero-Downtime Deployments</span>
              </div>
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-green-500">🛡️</span>
                <span className="font-medium">Security-First Architecture</span>
              </div>
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <span className="text-purple-500">📈</span>
                <span className="font-medium">Scalable Cloud Solutions</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800 text-blue-400 border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-500/30' 
                    : 'bg-blue-100 text-blue-800 border border-blue-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-400/40'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>


        {/* About */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className={`p-8 md:p-12 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer group h-full ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10' 
              : 'bg-white/80 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:border-gray-300/70 hover:bg-white'
          }`}>
            <motion.p 
              whileHover={{ scale: 1.01 }}
              className="text-base md:text-lg leading-loose md:leading-loose text-justify w-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              I am a passionate DevOps Engineer specializing in cloud-native solutions, CI/CD pipelines, and infrastructure automation. 
              I thrive on optimizing systems, enhancing deployment processes, and building resilient, scalable environments that empower 
              teams to deliver exceptional software experiences. My expertise spans containerization, orchestration, monitoring, and 
              security best practices.
            </motion.p>
          </div>
        </motion.section>


        {/* Achievements */}
        <motion.section 
          id="achievements"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`p-6 rounded-xl transition-all duration-100 cursor-pointer ${
                  darkMode 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50 hover:border-gray-500/70 hover:shadow-xl hover:shadow-blue-500/10' 
                    : 'bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{achievement.icon}</span>
                  <p className="font-medium">{achievement.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Best Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group p-6 rounded-2xl transition-all duration-100 cursor-pointer ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20' 
                      : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-200/50'
                  }`}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg transition-colors duration-100 ${
                      darkMode 
                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                        : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                    }`}>
                      {project.icon}
                    </div>
                    <ExternalLink className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-md transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300 group-hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className={`p-8 md:p-12 rounded-2xl transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Infrastructure?</h2>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Let's discuss how we can accelerate your deployments and build something amazing together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              {!showEmail ? (
                <motion.button
                  onClick={() => setShowEmail(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30' 
                      : 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Get In Touch
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <motion.a
                    href="mailto:arijitdas2197@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30' 
                        : 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <MailIcon />
                    <span>arijitdas2197@gmail.com</span>
                  </motion.a>
                  <motion.button
                    onClick={() => setShowEmail(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-4 rounded-full font-semibold transition-all duration-300 border-2 ${
                      darkMode 
                        ? 'border-gray-600 text-gray-400 hover:bg-gray-700 hover:border-gray-500' 
                        : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    Hide
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Floating particles background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-blue-500/20' : 'bg-blue-200/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}