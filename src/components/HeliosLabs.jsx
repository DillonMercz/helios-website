import { useState } from 'react';
import PropTypes from 'prop-types';
import headerImage from '../assets/header.jpeg';
import agile from '../assets/agile.jpeg';
import stack from '../assets/stack.jpeg';
import security from '../assets/security.jpeg';

const HeliosLabs = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNavigation = (item) => {
    setActiveSection(item.id);
    if (item.link.startsWith('#')) {
      // For same-page navigation
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For different page navigation
      window.location.href = item.link;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'services', label: 'Services', link: './services' },
    { id: 'products', label: 'Products', link: './products' },
    { id: 'projects', label: 'Projects', link: './projects' },
    { id: 'contact', label: 'Contact', link: './contact' }
  ];

  const SplitSection = ({ id, title, description, image, buttonText, buttonLink, imageLeft }) => (
    <section id={id} className="relative py-20 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl group">
              <img 
                src={image} 
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${imageLeft ? 'from-black/50 to-transparent' : 'from-transparent to-black/50'}`}></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold leading-tight">{title}</h2>
            <p className="text-xl text-gray-400">{description}</p>
            <a 
              href={buttonLink}
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  SplitSection.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool.isRequired
  };

  const services = [
    {
      title: "Custom Software Development",
      icon: "💻",
      description: "From concept to deployment, we build scalable, custom software solutions tailored to your unique business needs.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"]
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Modernize your infrastructure with cloud-native solutions that scale with your business.",
      features: ["Cloud Migration", "Serverless Architecture", "DevOps", "Microservices"]
    },
    {
      title: "Blockchain Development",
      icon: "⛓️",
      description: "Build secure, decentralized applications and smart contracts on leading blockchain platforms.",
      features: ["Smart Contracts", "DeFi Applications", "NFT Platforms", "Private Blockchains"]
    },
    {
      title: "Big Business Package",
      icon: "🏦",
      description: "Gain the knowledge and experience of battle hardened senior software engineers to work in house.",
      features: ["Hire us for on-premise use", "Let us lead your dev team", "Regular Consultations", "Revamp your stack"]
    },
    {
      title: "Small Business Package",
      icon: "🏡",
      description: "Boost your small business and move away from those pesky tools that don't work for you (cough Wordpress and Sqaure cough).",
      features: ["Websites", "Mobile Apps", "Customer/Client Management Systems", "Automations for manual and tedious tasks"]
    }
  ];

  const splitSections = [
    {
      id: 'process',
      title: "Our Development Process",
      description: "We follow an agile methodology that emphasizes continuous delivery and improvement. Our iterative approach ensures your project evolves with your needs while maintaining the highest quality standards.",
      image: agile,
      buttonText: "Start Your Project",
      buttonLink: "#contact",
      imageLeft: true
    },
    {
      id: 'technology',
      title: "Cutting-Edge Technology Stack",
      description: "From cloud-native architectures to AI-powered solutions, we leverage the latest technologies to build robust, scalable applications that stand the test of time.",
      image: stack,
      buttonText: "Explore Our Tech Stack",
      buttonLink: "#contact",
      imageLeft: false
    },
    {
      id: 'security',
      title: "Enterprise-Grade Security",
      description: "Security isn't an afterthought - it's built into everything we do. Our solutions implement industry-leading security practices to protect your data and systems.",
      image: security,
      buttonText: "Learn About Security",
      buttonLink: "#contact",
      imageLeft: true
    }
  ];

  const projects = [
    {
      title: "AI Sports Prediction Platform",
      description: "Advanced machine learning system achieving 75%+ accuracy in sports betting predictions.",
      tech: ["Python", "TensorFlow", "AWS", "React"],
      metrics: "75% prediction accuracy"
    },
    {
      title: "Infinite LLM Input System",
      description: "Revolutionary system enabling unlimited context windows for large language models.",
      tech: ["PyTorch", "CUDA", "C++", "Redis"],
      metrics: "100x improvement in context length"
    },
    {
      title: "Enterprise Resource Planning Suite",
      description: "Comprehensive ERP system for manufacturing industry with real-time analytics.",
      tech: ["Node.js", "Vue.js", "PostgreSQL", "Docker"],
      metrics: "40% efficiency increase"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Helios Labs delivered beyond our expectations. Their AI solution transformed our business operations.",
      company: "TechCorp"
    },
    {
      name: "Dylan Clayton",
      role: "Founder, Overdog Bets LLC",
      content: "The sports prediction platform they built has revolutionized our approach to analytics.",
      company: "Overdog Bets LLC"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, CloudScale",
      content: "Their expertise in cloud architecture helped us scale our platform to millions of users.",
      company: "CloudScale"
    }
  ];

  return (
    <>
      <div className="relative bg-black">
        {/* Navigation */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
          <div className="media-object">
            <div className="bg-black rounded-full p-1 flex gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                    activeSection === item.id ? 'bg-white text-black' : 'text-white hover:bg-gray-700'
                  }`}
                  onClick={() => handleNavigation(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img 
              src={headerImage}
              alt="Helios Labs Header"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">Building Tomorrow's Software Today</h1>
              <p className="text-xl text-gray-300 mb-8">We develop groundbreaking software solutions that push the boundaries of what's possible. From AI to blockchain, we turn your vision into reality.</p>
              <a 
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>

              <h1 className='italic'>Software is a great combination between artistry and engineering. - Bill Gates</h1>
        
        {/* Split Sections */}
        {splitSections.map((section) => (
          <SplitSection key={section[1]} {...section} />
        ))}

        {/* Services Section */}
        <section id="services" className="relative py-20 px-4 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">Top Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="p-8 border border-white/20 rounded-xl hover:border-white/40 transition-colors duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Featured Projects */}
        <section id="projects" className="relative py-20 px-4 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="p-8 border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-green-400 font-semibold">{project.metrics}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="relative py-20 px-4 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 border border-white/20 rounded-xl">
                  <p className="text-xl mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="relative py-20 px-4 bg-black text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">Start Your Project</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI/ML Solution</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Let&apos;s Build Something Amazing
              </button>
            </form>
          </div>
        </section>

        <style>
          {`
            .media-object {
              --border-width: 1px;
              --radius: 9999px;
              position: relative;
              border-radius: var(--radius);
              border: var(--border-width) solid transparent;
            }

            .media-object::before {
              content: " ";
              position: absolute;
              inset: calc(var(--border-width) * -1);
              z-index: -1;
              border: inherit;
              border-radius: inherit;
              background-image: conic-gradient(from var(--angle), #000 0%, #000 0%, #000 0%, #ffffff 100%);
              background-origin: border-box;
              -webkit-mask: linear-gradient(black, black) content-box,
                          linear-gradient(black, black);
              mask: linear-gradient(black, black) content-box,
                          linear-gradient(black, black);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              animation: spin 3s linear infinite;
            }

            @property --angle {
              syntax: "<angle>";
              inherits: true;
              initial-value: 0turn;
            }

            @keyframes spin {
              to {
                --angle: 1turn;
              }
            }
          `}
        </style>
      </div>

      {/* Background color extension */}
      <div className="fixed inset-0 -z-10 bg-black" />
    </>
  );
};

export default HeliosLabs;
