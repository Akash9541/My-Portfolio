import React, { useState, useEffect } from 'react';
import akashImg from './assets/images/Akash.jpeg';
import logobannerImg from './assets/images/logobanner.png';

import { Search, ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, Code, Briefcase, GraduationCap, Award, User, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const resumeUrl = '/resume/Akash_Thakur_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Akash_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = ['ReactJS', 'JavaScript', 'Node.js', 'Python', 'MYSQL', 'MongoDB', 'Git', 'TailwindCSS', 'HTML', 'CSS'];

  const projects = [
    {
      title: "Student's Counter",
      description: 'A student-friendly web platform designed to help newcomers easily find PGs, hostels, messes, and other essential services near PICT.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      github: '#',
      live: 'https://studentscorner.great-site.net/studentcorner/home.php',
      image: logobannerImg 
    },
    {
      title: 'Smart Helmet Detection',
      description: 'A real-time safety system using YOLOv3 to detect whether riders are wearing helmets.',
      tech: ['Python', 'YOLOv3', 'OpenCV', 'TensorFlow'],
      github: '#',
      live: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8WktR6hJIOQsmaKe32cPubMCpjwtM04XTQ&s',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-blue-600">Port</span>folio
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3 py-3 border border-blue-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-slate-400' : 'text-blue-600'}`}>{item}</button>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left px-3 py-2 text-blue-600 hover:text-gray-700 capitalize">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 w-full">
        <div className="w-full text-center px-4">
          <div className="mb-8">
            <img src={akashImg} alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Akash Thakur</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer & Problem Solver</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              I specialize in crafting exceptional digital experiences using modern technologies. With a strong focus on clean code, intuitive user interfaces, and continuous learning, I am passionate about building scalable and user-centric solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('projects')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Briefcase className="h-5 w-5" /> View My Work
              </button>
              <button onClick={downloadResume} className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Download className="h-5 w-5" /> Download Resume
              </button>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer currently pursuing my third year in Electronics and Telecommunication Engineering at PICT. With a strong foundation in web development and UI design, I've built several impactful projects and am now expanding my skills towards full-stack development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-4">
                My journey began with a curiosity to build beautiful and functional websites. Over the last two years, I've worked on three diverse projects that challenged my creativity and technical skills. I love solving real-world problems with simple, intuitive designs and clean code.
              </p>
              <p className="text-gray-600 mb-6">
                As I continue learning backend technologies to become a full-stack developer, I focus on writing maintainable code and understanding better practices in modern development. Outside coding, I enjoy exploring tech trends, bikes, and improving my English communication skills.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Frontend</div>
                  <div className="text-gray-600">Development Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">PICT</div>
                  <div className="text-gray-600">Third Year ENTC</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Based in Pune, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Third Year ENTC Student at PICT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Learning MERN stack to become a Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Strong interest in UI/UX and clean design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600">
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Some of my recent work that I'm proud of
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    >
                      <Github className="h-5 w-5" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">akashthakurjk@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">+91 9541661529</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Pune, India</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="www.linkedin.com/in/akash-thakur-6354b934" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:text-black transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/Akash9541" className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-4">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Name</div>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500">
                    Your Name
                  </div>
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500">
                    your.email@example.com
                  </div>
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Message</div>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500 h-24 flex items-start">
                    Your message here...
                  </div>
                </div>
                <button 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Akash Thakur. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;