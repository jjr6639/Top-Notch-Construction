import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, HardHat, Hammer, Building2, Users, ChevronDown, Zap, Award, TrendingUp } from 'lucide-react';

export default function TopNotchConstruction() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { icon: Building2, title: 'Commercial Construction', desc: 'Large-scale commercial projects delivered on time', color: 'from-orange-500 to-red-500' },
        { icon: HardHat, title: 'Residential Building', desc: 'Custom homes built to your specifications', color: 'from-orange-500 to-yellow-500' },
        { icon: Hammer, title: 'Renovations', desc: 'Transform your existing spaces beautifully', color: 'from-orange-400 to-orange-600' },
        { icon: Users, title: 'Project Management', desc: 'End-to-end construction management', color: 'from-orange-600 to-red-600' }
    ];

    const projects = [
        { name: 'Downtown Office Complex', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
        { name: 'Luxury Residence', type: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
        { name: 'Modern Shopping Center', type: 'Commercial', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800' }
    ];

    const testimonials = [
        { name: 'Sarah Mitchell', role: 'Homeowner', text: 'Top Notch Construction exceeded our expectations. Professional, timely, and exceptional quality.' },
        { name: 'David Chen', role: 'Business Owner', text: 'They completed our commercial project ahead of schedule. Highly recommend!' },
        { name: 'Emily Rodriguez', role: 'Property Developer', text: 'Outstanding craftsmanship and attention to detail. A pleasure to work with.' }
    ];

    const stats = [
        { icon: Building2, value: '500+', label: 'Projects', color: 'orange' },
        { icon: Award, value: '20+', label: 'Years', color: 'red' },
        { icon: TrendingUp, value: '100%', label: 'Satisfaction', color: 'yellow' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
            {/* Animated background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-orange-500/5 via-black to-red-500/5 pointer-events-none"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)] pointer-events-none"></div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/20' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <div className="relative">
                                <HardHat className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                TOP NOTCH CONSTRUCTION
              </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative group px-1 py-2"
                                >
                  <span className="relative z-10 text-sm uppercase tracking-wider hover:text-orange-500 transition-colors">
                    {item}
                  </span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
                                </a>
                            ))}

                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg hover:border-orange-500 transition-all group"
                                >
                                    <span className="text-sm uppercase tracking-wider">Quick_Nav</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-orange-500/30 rounded-xl shadow-2xl overflow-hidden">
                                        {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item, idx) => (
                                            <a
                                                key={item}
                                                href={`#${item.toLowerCase()}`}
                                                onClick={() => setDropdownOpen(false)}
                                                className={`block px-4 py-3 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all ${idx !== 4 ? 'border-b border-zinc-800' : ''} group`}
                                            >
                        <span className="text-sm uppercase tracking-wider group-hover:text-orange-500 group-hover:translate-x-1 inline-block transition-all">
                          → {item}
                        </span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="md:hidden relative group" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-orange-500/20">
                        <div className="px-4 py-4 space-y-2">
                            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-sm uppercase tracking-wider hover:text-orange-500 hover:translate-x-2 transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    → {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-block">
                                <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
                                    <span className="text-sm uppercase tracking-wider text-orange-400">[ Building Excellence ]</span>
                                </div>
                            </div>

                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                <span className="block text-white">BUILD</span>
                                <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                   THE FUTURE
                </span>
                                <span className="block text-white">TODAY</span>
                            </h1>

                            <p className="text-xl text-gray-400 leading-relaxed">
                                // Premium construction services with over 20 years of excellence.
                                <br />
                                // We deliver quality, reliability, and innovation in every project.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                                    <span className="relative flex items-center space-x-2">
                    <span className="uppercase tracking-wider">Start Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                                </a>
                                <a href="#projects" className="group px-8 py-4 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/10 transition-all backdrop-blur-sm">
                                    <span className="uppercase tracking-wider">View Work</span>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                                        <div className="relative bg-zinc-900/50 p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm group-hover:border-orange-500/50 transition-all">
                                            <stat.icon className="w-6 h-6 text-orange-500 mb-2" />
                                            <div className="text-3xl font-bold bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
                                alt="Construction site"
                                className="relative rounded-2xl shadow-2xl border border-orange-500/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-sm uppercase tracking-widest text-orange-500">[ Services ]</span>
                        </div>
                        <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                WHAT WE OFFER
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg">// Comprehensive construction solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                                <div className="relative h-full bg-zinc-900/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/50 transition-all">
                                    <div className="relative mb-6">
                                        <service.icon className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform" />
                                        <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                    <div className="mt-6 flex items-center text-orange-500 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                                        <span className="uppercase tracking-wider">Learn_More</span>
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-sm uppercase tracking-widest text-orange-500">[ Portfolio ]</span>
                        </div>
                        <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                FEATURED PROJECTS
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg">// Showcasing our finest work</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 z-10"></div>
                                <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 group-hover:border-orange-500/50 transition-all">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full backdrop-blur-sm mb-3">
                                            <span className="text-orange-400 text-xs uppercase tracking-wider font-semibold">[ {project.type} ]</span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-wide">{project.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative py-32 px-4 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block mb-6">
                                <span className="text-sm uppercase tracking-widest text-orange-500">[ Why Us ]</span>
                            </div>
                            <h2 className="text-5xl font-bold mb-8 uppercase tracking-tight">
                                WHY CHOOSE<br />
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  TOP NOTCH
                </span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    'Licensed and Insured Professionals',
                                    'Transparent Pricing with No Hidden Fees',
                                    'On-Time Project Delivery Guaranteed',
                                    'Premium Quality Materials',
                                    'Dedicated Project Management',
                                    '24/7 Customer Support'
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-500/5 transition-all">
                                        <div className="relative mt-1">
                                            <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                                            <div className="absolute inset-0 bg-orange-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                        </div>
                                        <span className="text-lg group-hover:text-orange-400 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                                alt="Construction team"
                                className="relative rounded-2xl shadow-2xl border border-orange-500/20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-sm uppercase tracking-widest text-orange-500">[ Testimonials ]</span>
                        </div>
                        <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                CLIENT FEEDBACK
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg">// Real feedback from real customers</p>
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
                                    <p className="text-gray-300 mb-8 leading-relaxed">"{testimonial.text}"</p>
                                    <div className="pt-4 border-t border-orange-500/20">
                                        <div className="font-bold uppercase tracking-wide">{testimonial.name}</div>
                                        <div className="text-sm text-orange-500 uppercase tracking-wider">{testimonial.role}</div>
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
                                <span className="text-sm uppercase tracking-widest text-orange-500">[ Contact ]</span>
                            </div>
                            <h2 className="text-5xl font-bold mb-6 uppercase tracking-tight">
                                GET_IN_<br />
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  TOUCH_
                </span>
                            </h2>
                            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                                Ready to start your project? Contact us today for a free consultation and quote.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, title: 'Phone', info: '(555) 123-4567' },
                                    { icon: Mail, title: 'Email', info: 'info@topnotchconstruction.com' },
                                    { icon: MapPin, title: 'Address', info: '123 Builder Street, Construction City, ST 12345' }
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-500/5 transition-all">
                                        <div className="relative mt-1">
                                            <item.icon className="w-6 h-6 text-orange-500" />
                                            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                        </div>
                                        <div>
                                            <div className="font-semibold uppercase tracking-wide text-sm mb-1">{item.title}</div>
                                            <div className="text-gray-400">{item.info}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-zinc-900/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
                                <div className="space-y-6">
                                    {[
                                        { label: 'Name', type: 'text', key: 'name' },
                                        { label: 'Email', type: 'email', key: 'email' },
                                        { label: 'Phone', type: 'tel', key: 'phone' }
                                    ].map((field) => (
                                        <div key={field.key}>
                                            <label className="block mb-2 font-semibold uppercase tracking-wider text-sm text-gray-400">
                                                {field.label}_
                                            </label>
                                            <input
                                                type={field.type}
                                                value={formData[field.key]}
                                                onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                                                className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:border-orange-500 focus:outline-none transition-all backdrop-blur-sm"
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label className="block mb-2 font-semibold uppercase tracking-wider text-sm text-gray-400">
                                            Message_
                                        </label>
                                        <textarea
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:border-orange-500 focus:outline-none transition-all backdrop-blur-sm resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="group w-full relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                                        <span className="relative uppercase tracking-wider flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-orange-500/20 py-12 px-4 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4 group">
                        <div className="relative">
                            <HardHat className="w-6 h-6 text-orange-500" />
                            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        </div>
                        <span className="text-xl font-bold uppercase tracking-wider bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Top Notch Construction
            </span>
                    </div>
                    <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">// Building excellence since 2003</p>
                    <p className="text-gray-600 text-xs uppercase tracking-widest">© 2024 Top Notch Construction. All_Rights_Reserved.</p>
                </div>
            </footer>
        </div>
    );
}