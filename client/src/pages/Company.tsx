import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, HeartHandshake, Trophy, Shield, CheckCircle2, Briefcase, Cpu, Users } from "lucide-react"; 
import officeImg from "@assets/building.png";
import ceoImg from "@assets/BD.jpg";
import ctoImg from "@assets/ZH.jpg";
import cooImg from "@assets/RH.jpg";


export default function Company() {
    const stats = [
        { label: "Founded", value: "2002" }, // Updated based on >20 years experience
        { label: "Employees", value: "130+" },
        { label: "Experience", value: ">20 Yrs" },
        { label: "Offices", value: "Global" },
    ];

    const values = [
        {
            icon: Shield,
            title: "Security First",
            description: "We never compromise on the security of our platform or our customers' data."
        },
        {
            icon: HeartHandshake,
            title: "Customer Trust",
            description: "We build long-term partnerships based on transparency and reliability."
        },
        {
            icon: Trophy,
            title: "Innovation",
            description: "We constantly push the boundaries of what's possible in physical security."
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Our solutions protect critical infrastructure and millions of people worldwide."
        }
    ];

    const piamDrivers = [
        "Physical security is turning more into cyber security.",
        "Digitisation of processes.",
        "Harmonisation and integration of systems.",
        "Increasing security demands.",
        "Increasing regulations, e.g. for critical infrastructure.",
        "Compliance and auditability aspects.",
        "Reduction of operational costs",
        "Increase of automation."
    ];

    const services = [
        {
            icon: Cpu,
            title: "Hardware & Personalisation",
            description: "We supply related Hardware and a Personalisation Service for the programming and printing of physical identity cards and tokens."
        },
        {
            icon: Shield,
            title: "Credentials as a Service",
            description: "Complete management of credential lifecycle, from issuance to revocation, delivered as a managed service."
        },
        {
            icon: Briefcase,
            title: "Consultancy & Support",
            description: "Comprehensive Secure Credential Consultancy and Training, Support & Maintenance Services."
        }
    ];

    const customers = [
        {
            title: "Public Sector & Critical Infrastructure",
            description: "Ensuring secure and compliant physical access for government, public and essential services."
        },
        {
            title: "Manufacturing & Industry",
            description: "Protecting facilities, human resources, assets, and intellectual property."
        },
        {
            title: "Financial Services",
            description: "Meeting strict regulatory standards while safeguarding sensitive operations."
        },
        {
            title: "University & Education",
            description: "Managing thousands of credentials and access authorisations across buildings and sites including efficient mass enrolment."
        },
        {
            title: "Aerospace & Defence",
            description: "Supporting high-security environments with advanced physical access management."
        },
        {
            title: "Healthcare & Medical",
            description: "Safeguarding critical medical infrastructure and ensuring patient's and employee's security."
        }
    ];

    const history = [
        {
            year: "2005",
            title: "Founding of ID-ware",
            description: "Founding of ID-ware in Enschede/Netherlands"
        },
        {
            year: "2006",
            title: "German Office",
            description: "Founding of the German office"
        },
        {
            year: "2007",
            title: "HQ Move",
            description: "Move of ID-ware headquarters to Zevenaar"
        },
        {
            year: "2010",
            title: "German Authority Contract",
            description: "Award of first large-size German authority frame contract"
        },
        {
            year: "2011",
            title: "Dutch Rijkspas Contract",
            description: "Award of Dutch Rijkspas contract"
        },
        {
            year: "2013",
            title: "HQ Move to The Hague",
            description: "Move of ID-ware headquarters to The Hague"
        },
        {
            year: "2017",
            title: "First PIAM Solution",
            description: "Launch of first PIAM solution"
        },
        {
            year: "2021",
            title: "New Leadership",
            description: "New CEO Bernd Dieckmann"
        },
        {
            year: "2022",
            title: "Expansion & Integration",
            description: "Move of German office to Frankfurt & Integration of OmniCard into the ID-ware Group"
        },
        {
            year: "2023",
            title: "Growth Milestone",
            description: "100+ Employees"
        },
        {
            year: "2024",
            title: "Cipher10 Integration",
            description: "Integration of Cipher10 into the ID-ware Group & Move of OmniCard and ID-ware International to one joint office in The Hague"
        },
        {
            year: "2025",
            title: "OmniCard Merger",
            description: "Merger of OmniCard into ID-ware International B.V."
        },
        {
            year: "2025",
            title: "New CTO",
            description: "New CTO Zak Habgood"
        }
    ];

    const team = [
        {
            name: "Bernd Dieckmann",
            role: "Chief Executive Officer",
            image: ceoImg,
            bio: "Leading ID-ware since 2021."
        },
        {
            name: "Reinier Hasselman",
            role: "Group Finance Director",
            image: cooImg,
            bio: "Driving operational excellence and global service delivery strategies."
        },
        {
            name: "Zak Habgood",
            role: "Chief Technology Officer",
            image: ctoImg,
            bio: "Appointed as CTO in 2025."
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative py-24 border-b border-white/10">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold font-display mb-8"
                    >
                        We Are <span className="text-primary">ID-ware</span>
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto mt-16 mb-16">
                        <div className="bg-card/30 p-8 rounded-xl border border-white/5">
                            <h3 className="text-2xl font-bold font-display mb-4 text-primary">Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We partner with our customers and provide state-of-the-art identity and access management solutions for physical access.
                            </p>
                        </div>
                        <div className="bg-card/30 p-8 rounded-xl border border-white/5">
                            <h3 className="text-2xl font-bold font-display mb-4 text-primary">Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The protection of resources and costs – whether human or material – is key for any organisation. Only if these resources and assets are available in complete and intact form, an organisation is enabled to constantly operate.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold font-display mb-6">Leader in PIAM Solutions</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            With more than 130 employees worldwide, ID-ware is a leading global provider of state-of-the-art Physical Identity and Access Management (PIAM) solutions.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            With over 20 years of experience, we are a specialised expert for smart identification and authentication processes, delivering software and services as well as related hardware.
                        </p>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
                            <p className="text-sm text-primary font-mono">
                                We are an international company group with entities around the world, holding relevant quality management certifications such as <span className="font-bold">ISO 9001</span> and <span className="font-bold">27001</span>, and work according to the highest security and compliance standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full h-[500px] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay" />
                <img src={officeImg} alt="ID Security Operations Center" className="w-full h-full object-cover" />
            </div>

            {/* Stats Grid */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-6 border border-white/10 rounded-lg bg-card/30 backdrop-blur-sm">
                            <div className="text-4xl font-bold font-display text-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* New Section: Why PIAM? */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-display mb-8 text-center">Why PIAM?</h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        PIAM solutions are mainly suited for complex organisations such as government customers, industry, financial institutions, universities, etc. There is an increasing need of PIAM solutions driven by:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {piamDrivers.map((driver, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-white/5"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground/90">{driver}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* New Section: Services */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Product & Services Range</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-white/10 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* New Section: Customers */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-display mb-6">Our Customers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our customers span a wide range of sectors, each with unique security and compliance needs. We provide dedicated PIAM solutions tailored to these environments.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customers.map((customer, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 rounded-xl bg-card/30 border border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">{customer.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{customer.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 p-8 rounded-xl bg-primary/5 border border-primary/10 text-center max-w-4xl mx-auto">
                        <p className="text-muted-foreground">
                            We support all our customers in streamlining processes, centralising authorisation and physical access management (cross-site), reducing costs, increasing compliance and auditability (e.g. ISO, NIS2, GDPR) as well as centralising documentation and reporting/evaluations.
                        </p>
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold font-display mb-12 text-center">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center text-center p-8 rounded-xl bg-card/30 border border-white/5 hover:bg-white/5 transition-colors"
                            >
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/10 group-hover:border-primary transition-colors shadow-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-bold font-display text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-mono text-sm mb-4">{member.role}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Company History */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-display mb-12 text-center">Our History</h2>
                    <div className="relative border-l border-primary/20 ml-6 md:ml-0">
                        {history.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-12 ml-8 md:ml-12 relative"
                            >
                                <div className="absolute -left-[41px] md:-left-[57px] h-5 w-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center mb-2">
                                    <span className="text-2xl font-bold font-display text-primary">{item.year}</span>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="mb-12">
                    {/* <div className="mb-24"> */}
                    <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-6 p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors"
                            >
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <val.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display mb-2">{val.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{val.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

