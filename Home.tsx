import { Link } from "wouter";
import { ArrowRight, CheckCircle, Calculator, BookOpen, MapPin, Users, Award, TrendingUp, Shield, Target, Brain, Zap, Star, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: "6+", label: "Branches", icon: MapPin },
    { value: "20+", label: "Years Experience", icon: Award },
    { value: "2004", label: "Established", icon: TrendingUp },
    { value: "100%", label: "Client Satisfaction", icon: Target },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Modern office workspace with professionals working" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          

          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className={`text-center text-white px-4 max-w-4xl ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                <span className="gradient-text animate-pulse-gentle">CVR Corpacs</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Your Trusted Business Partner Since 2004. Delivering innovative, tailor-made solutions for MNCs and Indian corporations across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services" 
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-500 font-semibold text-lg transform hover:scale-105 inline-flex items-center justify-center glow-effect card-hover"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-500 font-semibold text-lg inline-flex items-center justify-center card-hover shimmer"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-blue-50 opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`micro-card bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600 group cursor-pointer glow-on-hover ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                      e.currentTarget.querySelector('.stat-icon')?.classList.add('animate-bounce-gentle');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.querySelector('.stat-icon')?.classList.remove('animate-bounce-gentle');
                    }}
                  >
                    <div className="stat-icon bg-red-100 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-red-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="text-4xl font-bold font-heading text-gray-900 mb-2 group-hover:text-red-600 transition-colors counter-animate">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Dashboard Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Get Started Today
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive business solutions with intelligent recommendations powered by AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Recommendations",
                description: "Get personalized service suggestions",
                icon: Brain,
                href: "/recommendations",
                color: "bg-blue-500",
                hoverColor: "hover:bg-blue-600"
              },
              {
                title: "Tax Services",
                description: "Direct & indirect tax solutions",
                icon: Calculator,
                href: "/services#direct-tax",
                color: "bg-green-500",
                hoverColor: "hover:bg-green-600"
              },
              {
                title: "Knowledge Hub",
                description: "Access GST documents & resources",
                icon: BookOpen,
                href: "/knowledge-pool",
                color: "bg-purple-500",
                hoverColor: "hover:bg-purple-600"
              },
              {
                title: "Expert Consultation",
                description: "Schedule professional guidance",
                icon: Users,
                href: "/contact",
                color: "bg-red-500",
                hoverColor: "hover:bg-red-600"
              }
            ].map((action, index) => (
              <Link key={action.title} href={action.href}>
                <div 
                  className={`micro-card group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 glow-on-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.querySelector('.action-icon')?.classList.add('animate-wiggle');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className={`action-icon w-12 h-12 ${action.color} ${action.hoverColor} rounded-lg flex items-center justify-center transition-all duration-300 mb-4 group-hover:scale-110 micro-icon`}>
                    <action.icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-200">
                    {action.description}
                  </p>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
          

        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                About CVR Corpacs
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mb-8"></div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception in 2004, CVR Corpacs has been a steadfast pillar of support for businesses across India. Over the past two decades, we have cultivated strong, enduring relationships with both multinational corporations (MNCs) and Indian corporations (INCs) by delivering innovative, tailor-made solutions that address the unique challenges of modern business.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Tax Advisory</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Regulatory Compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Business Formation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Multi-City Presence</span>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team in meeting discussing strategies" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-semibold text-gray-900">Trusted Partner</span>
                </div>
                <p className="text-sm text-gray-600">Serving businesses across 6 major Indian cities with excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions tailored to meet your organization's unique requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Direct Tax */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 transform hover:-translate-y-1">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Calculator className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Direct Tax</h3>
              <p className="text-gray-600 text-sm">Professional tax advisory and strategic planning services for optimal compliance.</p>
            </div>

            {/* Indirect Tax */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 transform hover:-translate-y-1">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Indirect Tax</h3>
              <p className="text-gray-600 text-sm">Expert GST, VAT advisory and compliance management for regulatory requirements.</p>
            </div>

            {/* Accounting & MIS */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 transform hover:-translate-y-1">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Accounting & MIS</h3>
              <p className="text-gray-600 text-sm">Comprehensive accounting services and management information systems.</p>
            </div>

            {/* Business Support */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Business Support</h3>
              <p className="text-gray-600 text-sm">Strategic business formation, hiring support, and operational management.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold inline-flex items-center"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/knowledge-pool" 
                className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-all duration-300 font-semibold inline-flex items-center"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Knowledge Pool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendation Engine Feature */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              DeepSeek AI-Powered Recommendations
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get intelligent consulting service recommendations powered by DeepSeek R1, analyzing your business profile for precise matches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg inline-block mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Analysis</h3>
              <p className="text-blue-100">
                Advanced algorithms analyze your business profile to understand your unique requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg inline-block mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Matching</h3>
              <p className="text-blue-100">
                Get matched with the most relevant services in seconds based on your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg inline-block mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Confidence Scoring</h3>
              <p className="text-blue-100">
                Each recommendation comes with a confidence score and detailed explanations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/recommendations" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center transform hover:scale-105"
            >
              <Brain className="mr-3 h-6 w-6" />
              Try AI Recommendations
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
