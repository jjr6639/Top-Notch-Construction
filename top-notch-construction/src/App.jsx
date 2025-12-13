import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, HardHat, Hammer, Building2, Users, Zap, Award, TrendingUp } from 'lucide-react';

export default function TopNotchConstruction() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { icon: Building2, title: 'Commercial Construction', desc: 'Large-scale commercial projects delivered on time and within budget' },
        { icon: HardHat, title: 'Residential Building', desc: 'Custom homes built to your exact specifications' },
        { icon: Hammer, title: 'Renovations & Remodeling', desc: 'Transform your existing spaces with expert craftsmanship' },
        { icon: Users, title: 'Project Management', desc: 'Comprehensive construction management from start to finish' }
    ];

    const projects = [
        { name: 'Office Complex', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
        { name: 'Residential Home', type: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
        { name: 'Shopping Center', type: 'Commercial', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800' }
    ];

    const testimonials = [
        { name: 'Client A', role: 'Homeowner', text: 'Exceptional service from start to finish. The team was professional and delivered exactly what we wanted.' },
        { name: 'Client B', role: 'Business Owner', text: 'Our commercial project was completed on schedule and within budget. Highly professional team.' },
        { name: 'Client C', role: 'Property Developer', text: 'Outstanding quality and attention to detail. Would definitely work with them again on future projects.' }
    ];

    const stats = [
        { icon: Zap, number: '500+', label: 'Projects Completed' },
        { icon: Award, number: '25+', label: 'Awards Won' },
        { icon: Users, number: '10K+', label: 'Happy Clients' },
        { icon: TrendingUp, number: '20+', label: 'Years Experience' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Modern Glassmorphic Polygonal Navigation */}
            <nav className="fixed w-full z-50 px-4 pt-6">
                <div className="max-w-7xl mx-auto">
                    {/* Polygonal Glass Container */}
                    <div
                        className={`relative transition-all duration-500 ${scrolled ? 'bg-black/60' : 'bg-black/30'} backdrop-blur-2xl border-2 border-orange-500/30 shadow-2xl shadow-orange-500/10`}
                        style={{
                            clipPath: 'polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}
                    >
                        {/* Orange Gradient Border Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-50 blur-sm"></div>

                        <div className="relative px-6 py-4">
                            <div className="flex justify-between items-center">
                                {/* Logo */}
                                <a href="#home" className="flex items-center space-x-3 group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-orange-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                        <div
                                            className="relative w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300"
                                            style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}
                                        >
                                            <HardHat className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                    <span className="block text-xl font-bold uppercase tracking-tight bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                      Top Notch
                    </span>
                                        <span className="block text-xs text-gray-400 tracking-widest uppercase" style={{fontFamily: 'Oswald, sans-serif'}}>Construction</span>
                                    </div>
                                </a>

                                {/* Desktop Menu */}
                                <div className="hidden lg:flex items-center space-x-2">
                                    {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="relative px-5 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 group overflow-hidden"
                                            style={{fontFamily: 'Oswald, sans-serif'}}
                                        >
                      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'}}
                                            ></div>
                                        </a>
                                    ))}
                                </div>

                                {/* CTA Button Desktop */}
                                <div className="hidden lg:block">
                                    <a
                                        href="#contact"
                                        className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-0.5 group overflow-hidden"
                                        style={{
                                            fontFamily: 'Oswald, sans-serif',
                                            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)'
                                        }}
                                    >
                                        <span className="relative z-10">Free Quote</span>
                                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </a>
                                </div>

                                {/* Mobile Hamburger Menu Button */}
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="lg:hidden relative group p-3 bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50"
                                    style={{clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'}}
                                >
                                    <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
                                        <span className={`block w-6 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                        <span className={`block w-6 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                        <span className={`block w-6 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div
                            className="bg-black/60 backdrop-blur-2xl border-2 border-orange-500/30 shadow-2xl shadow-orange-500/10 p-4 space-y-2"
                            style={{clipPath: 'polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px))'}}
                        >
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-gray-300 hover:text-white bg-orange-500/5 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 transition-all uppercase tracking-wider font-medium"
                                    style={{
                                        fontFamily: 'Oswald, sans-serif',
                                        clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-center mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 font-semibold uppercase tracking-wider hover:shadow-xl hover:shadow-orange-500/50 transition-all"
                                style={{
                                    fontFamily: 'Oswald, sans-serif',
                                    clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'
                                }}
                            >
                                Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
                {/* Modern Glassmorphic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>

                {/* Animated Glass Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl"></div>

                {/* Polygonal Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(249, 115, 22, 0.3) 49%, rgba(249, 115, 22, 0.3) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(249, 115, 22, 0.3) 49%, rgba(249, 115, 22, 0.3) 51%, transparent 52%)
            `,
                        backgroundSize: '100px 100px'
                    }}></div>
                </div>

                {/* Floating Glassmorphic Cards */}
                <div className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 backdrop-blur-md border border-orange-500/20 rotate-12 animate-float"
                     style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-white/5 backdrop-blur-md border border-orange-500/20 -rotate-12 animate-float delay-500"
                     style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>

                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-24">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 shadow-lg shadow-orange-500/20"
                             style={{clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)'}}>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                            <span className="text-sm text-orange-400 uppercase tracking-widest font-medium" style={{fontFamily: 'Oswald, sans-serif'}}>Louisiana's Premier Builder</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold leading-none" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                            <span className="block text-white drop-shadow-2xl">BUILD</span>
                            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">YOUR FUTURE</span>
                            <span className="block text-white drop-shadow-2xl">TODAY</span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed backdrop-blur-sm" style={{fontFamily: 'Oswald, sans-serif'}}>
                            Premium construction services with over 20 years of excellence. We deliver quality, reliability, and innovation in every project.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 group"
                                style={{
                                    fontFamily: 'Oswald, sans-serif',
                                    clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
                                }}
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-orange-500/40 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500 hover:-translate-y-1"
                                style={{
                                    fontFamily: 'Oswald, sans-serif',
                                    clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
                                }}
                            >
                                <span>View Projects</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                            {stats.map((stat, idx) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={idx} className="text-center p-4 bg-white/5 backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 transition-all"
                                         style={{clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)'}}>
                                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wide" style={{fontFamily: 'Oswald, sans-serif'}}>
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Image with Glassmorphic Frame */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent blur-3xl"></div>
                        <div className="relative p-1 bg-gradient-to-br from-orange-500/50 to-orange-600/50"
                             style={{clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)'}}>
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                                alt="Construction"
                                className="w-full shadow-2xl"
                                style={{clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)'}}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative py-32 px-4 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-6">
                            <span className="text-sm uppercase tracking-widest text-orange-500" style={{fontFamily: 'Oswald, sans-serif'}}>Services</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                            What We <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Offer</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{fontFamily: 'Oswald, sans-serif'}}>
                            Comprehensive construction solutions tailored to your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={idx} className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                                    <div className="relative h-full bg-zinc-900/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm group-hover:border-orange-500/50 transition-all">
                                        <div className="mb-6 inline-block p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-8 h-8 text-orange-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed" style={{fontFamily: 'Oswald, sans-serif'}}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="about" className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
                                alt="Why Choose Us"
                                className="relative rounded-3xl shadow-2xl border border-orange-500/20"
                            />
                        </div>

                        <div>
                            <div className="inline-block mb-6">
                                <span className="text-sm uppercase tracking-widest text-orange-500" style={{fontFamily: 'Oswald, sans-serif'}}>Why Us</span>
                            </div>
                            <h2 className="text-6xl md:text-7xl font-bold mb-8 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                Louisiana's <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Trusted</span> Builder
                            </h2>

                            <div className="space-y-6">
                                {[
                                    'Over 20 years of construction excellence',
                                    'Licensed and fully insured professionals',
                                    'On-time delivery and budget adherence',
                                    'Premium materials and craftsmanship',
                                    'Comprehensive project management',
                                    '24/7 customer support'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all">
                                            <CheckCircle className="w-5 h-5 text-orange-500" />
                                        </div>
                                        <p className="text-gray-300 text-lg leading-relaxed" style={{fontFamily: 'Oswald, sans-serif'}}>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-32 px-4 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-6">
                            <span className="text-sm uppercase tracking-widest text-orange-500" style={{fontFamily: 'Oswald, sans-serif'}}>Portfolio</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                            Recent <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{fontFamily: 'Oswald, sans-serif'}}>
                            Explore our portfolio of completed construction projects
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-xs uppercase tracking-wider text-orange-500 mb-3" style={{fontFamily: 'Oswald, sans-serif'}}>
                    {project.type}
                  </span>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-6">
                            <span className="text-sm uppercase tracking-widest text-orange-500" style={{fontFamily: 'Oswald, sans-serif'}}>Testimonials</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                            Client <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Feedback</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{fontFamily: 'Oswald, sans-serif'}}>
                            What our clients say about working with us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                                <div className="relative h-full bg-zinc-900/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm group-hover:border-orange-500/50 transition-all">
                                    <div className="flex mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-8 leading-relaxed" style={{fontFamily: 'Oswald, sans-serif'}}>
                                        "{testimonial.text}"
                                    </p>
                                    <div className="pt-4 border-t border-orange-500/20">
                                        <div className="font-bold uppercase tracking-wide" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-orange-500 uppercase tracking-wider" style={{fontFamily: 'Oswald, sans-serif'}}>
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-32 px-4 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-block mb-6">
                                <span className="text-sm uppercase tracking-widest text-orange-500" style={{fontFamily: 'Oswald, sans-serif'}}>Contact</span>
                            </div>
                            <h2 className="text-5xl font-bold mb-6 uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                Get In <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
                            </h2>
                            <p className="text-gray-400 mb-12 text-lg leading-relaxed" style={{fontFamily: 'Oswald, sans-serif'}}>
                                Ready to start your project? Contact us today for a free consultation and quote.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, text: '(504) 555-0123' },
                                    { icon: Mail, text: 'info@topnotchconstruction.com' },
                                    { icon: MapPin, text: 'Louisiana, United States' }
                                ].map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={idx} className="flex items-center space-x-4 group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all">
                                                <IconComponent className="w-5 h-5 text-orange-500" />
                                            </div>
                                            <span className="text-gray-300 text-lg" style={{fontFamily: 'Oswald, sans-serif'}}>
                        {item.text}
                      </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl blur-xl"></div>
                            <form onSubmit={handleSubmit} className="relative bg-zinc-900/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                                        style={{fontFamily: 'Oswald, sans-serif'}}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                                        style={{fontFamily: 'Oswald, sans-serif'}}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                                        style={{fontFamily: 'Oswald, sans-serif'}}
                                        required
                                    />
                                </div>
                                <div>
                  <textarea
                      placeholder="Project Details"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                      style={{fontFamily: 'Oswald, sans-serif'}}
                      required
                  ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-0.5"
                                    style={{fontFamily: 'Oswald, sans-serif'}}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Footer */}
            <footer className="relative bg-zinc-950 border-t border-orange-500/10">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
                                    <HardHat className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold uppercase tracking-tight" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                        Top Notch
                                    </div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest" style={{fontFamily: 'Oswald, sans-serif'}}>
                                        Construction
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6" style={{fontFamily: 'Oswald, sans-serif'}}>
                                Building excellence across Louisiana for over two decades. Your trusted partner in construction.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-gray-400 hover:text-orange-500 transition-colors uppercase tracking-wide text-sm"
                                            style={{fontFamily: 'Oswald, sans-serif'}}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6" style={{fontFamily: 'Bebas Neue, Impact, sans-serif'}}>
                                Contact Info
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="text-gray-400" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    (504) 555-0123
                                </li>
                                <li className="text-gray-400" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    info@topnotchconstruction.com
                                </li>
                                <li className="text-gray-400" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    Louisiana, United States
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-orange-500/10">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-500 text-sm" style={{fontFamily: 'Oswald, sans-serif'}}>
                                © 2024 Top Notch Construction. All rights reserved.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    Privacy Policy
                                </a>
                                <span className="text-gray-700">|</span>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    Terms of Service
                                </a>
                                <span className="text-gray-700">|</span>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors" style={{fontFamily: 'Oswald, sans-serif'}}>
                                    Careers
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </footer>
        </div>
    );
}