export type Language = 'en' | 'sv' | 'da';

// Define the structure for the rich title parts
type TitlePart = { text: string; highlight?: boolean };

export const translations = {
    en: {
        nav: {
            product: "Product",
            innovation: "Innovation",
            successStories: "Success Stories",
            resources: "Resources",
            portal: "Customer Portal",
        },
        hero: {
            label: "AI-Powered Energy Management",
            titleParts: [
                { text: "We" }, { text: "are" }, { text: "dedicated" }, { text: "to" },
                { text: "thermal", highlight: true }, { text: "excellence", highlight: true }
            ] as TitlePart[],
            subtitle: "AI-driven energy management solutions for smart heating and cooling. Unmatched precision for a sustainable future.",
        },
        cta: {
            title: "Ready for smarter energy?",
            subtitle: "Let's discuss how NODA can transform your thermal energy management.",
            getInTouch: "Get in touch",
            learnMore: "Learn more",
        },
        whatWeDo: {
            label: "What We Do",
            title: "AI-Driven Energy Management",
            desc: "NODA powers the efficient energy systems of tomorrow. Our Intelligent Platform and AI agents adapt in real-time, appearing in buildings and networks worldwide to reduce fossil dependence and optimize capacity. We've championed self-learning systems long before AI was mainstream, empowering you to always make the right energy choice.",
            steps: [
                { title: "Connect", desc: "Seamlessly integrate with your existing infrastructure and data sources." },
                { title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
                { title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." },
            ],
            button: "See Success Stories"
        },
        footer: {
            desc: "Intelligent thermal energy systems for a sustainable future.",
            location: "Karlshamn, Sweden",
            columns: {
                product: "Product",
                company: "Company",
                resources: "Resources",
                legal: "Legal"
            },
            links: {
                coPilot: "CoPilot",
                platform: "Platform",
                integrations: "Integrations",
                about: "About",
                news: "News",
                caseStudies: "Case Studies",
                documentation: "Documentation",
                support: "Support",
                privacy: "Privacy",
                terms: "Terms",
                cookies: "Cookies"
            }
        },
        stats: {
            years: "Years of Excellence",
            connected: "Connected Systems",
            efficiency: "Efficiency Gains",
            co2: "CO₂ Reduced Annually",
            trustedBy: "Trusted by Industry Leaders"
        },
        vision: {
            titleParts: [
                { text: "Serving the energy sector," },
                { text: "with a particular focus on" },
                { text: "the ", highlight: true, highlightText: "complex thermal" },
                { text: "energy landscape.", gradient: true }
            ],
            label: "Our Vision",
            mainText: "Global energy demand is projected to increase by 21% by 2040. We believe the answer lies not in producing more energy, but in using what we have more intelligently.",
            title: "We are dedicated to thermal excellence",
            cards: {
                efficiency: { title: "Efficiency First", desc: "Maximize output, minimize waste" },
                impact: { title: "Global Impact", desc: "Carbon-neutral future" }
            }
        },
        copilot: {
            new: "NEW",
            label: "Flagship Product",
            title: "Meet NODA CoPilot",
            subtitle: "Advanced analytics at your fingertips",
            desc: "An AI-powered energy optimization system that learns from your building's unique thermal behavior. Reduce waste, lower costs, and maximize comfort automatically.",
            features: [
                "Real-time energy optimization",
                "Predictive maintenance",
                "Carbon footprint tracking",
                "Seamless integration"
            ],
            explore: "Explore CoPilot",
            bookDemo: "Book Demo",
            learnMore: "Learn More",
            metrics: {
                efficiency: "Efficiency",
                savings: "Savings",
                co2: "CO₂ Cut"
            }
        },
        patentedSoftware: {
            label: "Intellectual Property",
            title: "Our Patented Software",
            desc: "With over 20 years of experience, the NODA Intelligent Platform transforms complex thermal energy data into tangible business outcomes. We master the intricacies of diverse data sources to deliver reliable, optimized solutions that overcome the compounded error risks inherent in modern energy networks."
        },
        appAreas: {
            label: "Application Areas",
            title: "Solutions for Every Sector",
            desc: "Tailored AI-driven solutions delivering measurable results wherever thermal energy flows.",
            items: [
                { title: "District Heating & Cooling", category: "Clean Energy", desc: "Geothermal, HVAC systems, hydrogen integration, and heat pump optimization." },
                { title: "Building Clusters", category: "Real Estate", desc: "Smart energy management for campuses, hotels, schools, and municipal buildings." },
                { title: "Energy Providers", category: "Utilities", desc: "Solutions for public and private energy providers to optimize distribution." },
                { title: "Industrial Entities", category: "Manufacturing", desc: "AI-driven thermal optimization for manufacturing and processing facilities." }
            ],
            learnMore: "Learn more"
        },
        customerSegments: {
            label: "Success Stories",
            title: "Trusted Across Industries",
            desc: "See how leading organizations leverage NODA to transform their thermal operations.",
            items: [
                { title: "Energy Services", quote: "Proven energy savings across our entire portfolio." },
                { title: "Utility Companies", quote: "Real-time visibility and predictive insights." },
                { title: "Municipalities", quote: "Sustainable infrastructure for communities." },
                { title: "Real Estate", quote: "Tenant comfort with reduced operational costs." }
            ]
        },
        testimonials: [
            { quote: "NODA's AI platform has revolutionized how we manage our district heating network. The predictive analytics alone have saved us millions.", author: "R&D Lead", company: "Engie" },
            { quote: "The integration was seamless, and the results were immediate. We've seen a 35% improvement in thermal efficiency.", author: "Product Manager", company: "C4 Energi" },
            { quote: "Their expertise in thermal systems combined with cutting-edge AI is unmatched in the industry.", author: "Chief Operations Officer", company: "Umeå Energi" }
        ],
        productPage: {
            hero: {
                label: "PRODUCT",
                titlePrefix: "The intelligent platform for ",
                titleHighlight: "thermal energy",
                desc: "Advanced AI-driven control that connects, simulates, and optimizes district heating and cooling networks in real-time.",
            },
            features: [
                { title: "Real-time Optimization", desc: "AI continuously analyzes and optimizes your thermal network performance, reducing energy waste and costs." },
                { title: "Predictive Maintenance", desc: "Anticipate equipment failures before they happen with machine learning-powered diagnostics." },
                { title: "Carbon Tracking", desc: "Monitor and report on CO₂ emissions with automated sustainability dashboards." }
            ],
            howItWorks: {
                title: "How it works",
                steps: [
                    { num: "01", title: "Connect", desc: "Integrate with your existing infrastructure and data sources seamlessly." },
                    { num: "02", title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
                    { num: "03", title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." }
                ]
            },
            cta: {
                title: "See CoPilot in action",
                desc: "Schedule a demo with our team to learn how CoPilot can work for you.",
                button: "Request a demo"
            },
            buildingUnits: {
                label: "System Architecture",
                title: "Building Units",
                units: [
                    { title: "Digital Twin", desc: "A living virtual replica of your thermal network that simulates real-world behavior to predict future outcomes." },
                    { title: "CoPilot", desc: "The intelligent brain that autonomously optimizes flow temperature and return temperatures in real-time." },
                    { title: "Impact", desc: "Measurable sustainability outcomes. Track CO2 reduction and energy savings with certified precision." },
                    { title: "Building", desc: "Smart integration with building management systems to ensure end-to-end efficiency from plant to radiator." }
                ]
            },
            impactService: {
                label: "New Paradigm",
                title: "Impact as a Service",
                desc1: "Traditional software sells licenses. We sell outcomes. Impact as a Service means we are partners in your efficiency journey.",
                desc2: "Our model is built on shared success. We continuously monitor, update, and optimize your system to ensure that the savings we promise are the savings you realize. It's not just a tool; it's a guarantee of performance.",
                stamp: "Certified Excellence",
                stamps: {
                    achilles: "Achilles Network Member",
                    unce: "UNCE Silver Plus"
                }
            },
            essence: {
                label: "The Essence",
                quote: "Intelligence is not about collecting data. It's about knowing what to do with it before anyone else does.",
                desc: "At Noda, we believe that the future of energy is autonomous. We strip away the complexity of thermal dynamics and replace it with elegant, self-driving efficiency. This is the essence of our engineering philosophy.",
                caption: "The Noda Intelligent Platform Architecture"
            },
            vastValue: {
                label: "Value Proposition",
                title: "Vast Value Realization",
                items: [
                    { k: "Operational Efficiency", v: "Reduce manual adjustments and human error by 90%." },
                    { k: "Energy Savings", v: "Achieve up to 20% reduction in peak load demand." },
                    { k: "Carbon Footprint", v: "Directly lower Scope 2 emissions through smarter consumption." }
                ]
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Serving the energy sector with a focus on",
                titleHighlight: "thermal excellence",
                desc: "Pushing the boundaries of energy optimization through continuous research, academic partnerships, and cutting-edge data science."
            },
            position: {
                label: "Our Position",
                title: "Noda is at the absolute forefront of thermal AI.",
                desc: "Born in 2005 from cutting-edge AI research at Blekinge Institute of Technology, we don’t just follow innovation, we lead it. With the most advanced thermal AI solutions on the market and a forward-thinking IP strategy, we are redefining what’s possible. From in-house R&D to global collaborations, we aren't just imagining the future. We're delivering it."
            },
            projects: {
                label: "R&D",
                title: "International Research Projects",
                items: [
                    { title: "DIGICITY", focus: "ERA-NET Smart Energy Systems", desc: "Digiciti is a project funded within the ERA-NET Smart Energy Systems program. It contributes to a more resilient and sustainable society through digital transformation, focusing on using thermal energy to create more flexible energy systems by combining supply and demand." },
                    { title: "ENFLATE", focus: "EU Horizon Europe", desc: "Enflate builds upon existing solutions on data-driven energy services. It develops a consumer-centered flexibility platform tested in Bulgaria, Greece, Spain, Sweden, and Switzerland, engaging local consumers, TSOs, DSOs, and market operators." },
                    { title: "COLLECTiEF", focus: "EU Horizon 2020", desc: "COLLECTiEF uses collective intelligence to improve building energy performance and contribute to global climate goals. The project aims to increase data security, energy flexibility, and climate resilience of existing buildings while reducing installation costs." },
                    { title: "FLEXISYNC", focus: "ERA-Net Smart Energy Systems", desc: "FlexiSync aims to optimize the flexibility in the district energy sector. The project gathers 16 partners from Austria, Germany, Spain, and Sweden to demonstrate how district energy can balance the wider energy system." },
                    { title: "TEMPO", focus: "EU Horizon 2020", desc: "TEMPO developments technical innovations that enable district heating networks to operate at lower temperatures, reducing heat losses and allowing higher shares of renewable heat." },
                    { title: "BIGDATA", focus: "Knowledge Foundation", desc: "Integrating expertise in machine learning, data mining, and computer engineering to develop scalable, resource-conscious systems. Applications include decision support systems and image processing, in collaboration with Ericsson, Telenor, and Sony." },
                    { title: "DAD", focus: "Knowledge Foundation", desc: "Data Analytics for Fault Detection in District Heating (DAD) aims to enhance energy efficiency through advanced analytics. Focused on predictive algorithms for fault monitoring, detection, and prediction in collaboration with Borås Energi and AB Bostäder." },
                    { title: "SHINE", focus: "IoTAP", desc: "NODA and Malmö University used state-of-the-art IoT technologies to tie smart homes together with intelligent energy systems. Developed a decentralized cyber-physical system for automated heating and cooling control." },
                    { title: "STORM", focus: "EU Horizon 2020", desc: "Tackled energy efficiency at the district level by developing an innovative DHC network controller based on self-learning algorithms. The controller maximizes the use of waste heat and renewable energy sources in DHC networks." },
                    { title: "FLEXIBLE HEAT & POWER", focus: "EU Horizon 2020", desc: "Explores the inertia of power-to-heat solutions for electric and thermal flexibility. Heat pumps, central heating, and forced ventilation systems act as interfaces connecting thermal storage and inertia to the electrical distribution grid." },
                    { title: "ARROWHEAD", focus: "ARTEMIS Innovation Pilot", desc: "Aimed to enhance interoperability among diverse Service-Oriented Architecture (SOA) technologies across production, smart buildings, electromobility, and energy markets. Budget of €70 million with 80 partners from 15 countries." }
                ],
                visitSite: "Visit Project Site",
                completed: "Project Completed"
            },
            values: {
                title: "What drives us",
                items: [
                    { title: "Efficiency First", desc: "Every decision optimizes for maximum output with minimum waste. We believe efficiency is the foundation of sustainability." },
                    { title: "Customer Focus", desc: "Our solutions are built in close collaboration with energy companies, utilities, and building owners who face real challenges daily." },
                    { title: "Global Impact", desc: "We're working toward a carbon-neutral future, one thermal network at a time. Our technology scales to meet global climate goals." }
                ]
            },
            cta: {
                title: "Join us in shaping the future",
                desc: "We're always looking for talented people who share our vision.",
                button: "View open positions"
            },
            featuredExperts: {
                label: "Featured Domain Experts",
                title: "The innovation champions",
                experts: [
                    { name: "Dr. Christian Johansson", role: "Co-Founder", image: "/images/innovation/christian.webp" },
                    { name: "Dr. Jens Brage", role: "Head of R&D", image: "/images/innovation/jens.jpeg" },
                    { name: "Tatiana Brandt", role: "CEO", image: "/images/innovation/tatiana.jpg" }
                ]
            }
        },
        successStoriesPage: {
            hero: {
                label: "SUCCESS STORIES",
                titlePrefix: "See how NODA",
                titleHighlight: "delivers results",
                desc: "Real outcomes from organizations across industries."
            },
            caseStudies: [
                {
                    title: "Total Optimization of District Heating",
                    sector: "District Heating",
                    challenge: "Long distribution lines in the district heating network cause narrow sections and the need for investments in peak load capacity.",
                    solution: "Active demand response and energy services for demand profile management combined with existing traditional production optimisation software.",
                    result: "Prolonged lifetime of existing distribution infrastructure and avoiding the need for investment in new peak load capacity infrastructure.",
                    stats: ["12% increase in flexibility capacity", "Minimum time from proof-of-concept to deployment", "Collaboration between demand response and production"]
                },
                {
                    title: "Optimizing Skyscrapers",
                    sector: "Real Estate",
                    client: "Hines",
                    challenge: "Decarbonisation of the building stock of New York is an ongoing challenge. To make heat-pumps cost-efficient at scale, they need to fit seamlessly with existing infrastructure.",
                    solution: "AI-based analytics and control to optimise not only the application of new heat-pumps but also existing gas and steam solutions.",
                    result: "New heat-pump solutions work within the constraints of the current infrastructure and existing gas and steam customers can be offered active energy services.",
                    stats: ["Software integration for rapid deployment", "Significant peak demand reductions"]
                },
                {
                    title: "Active Energy Services",
                    sector: "Heat Consumers",
                    challenge: "Consumer heating systems are often managed inefficiently resulting in higher heating costs and suboptimal indoor climate quality.",
                    solution: "Active energy services with business applications for controlling heat usage, managing demand profiles, improving return temperatures, and predictive maintenance.",
                    result: "Improved insights for the energy provider coupled with better demand profiles and lower return temperatures, while customers reduce costs.",
                    stats: ["10-20% cost savings at consumer side", "Minimum time to deployed active service", "Increased collaboration"]
                },
                {
                    title: "Gas Reduction in District Heating",
                    sector: "Utilities",
                    client: "Engie",
                    challenge: "A production mix with cheaper baseload fuels and more expensive fossil gas for peak loads. Physical storage tank somewhat too small resulted in increased gas usage.",
                    solution: "Aktiv demand response on the consumer side operating in relation to the temperature levels of the physical storage tank, creating virtual storage.",
                    result: "Total storage capacity increased by about 50% leading to a significant reduction in gas usage without influencing the amount of sold energy.",
                    stats: ["14% reduction in gas use", "Virtual storage capacity added", "Reduced CO2 emissions"]
                },
                {
                    title: "Industrial Heat Network Optimization",
                    sector: "Manufacturing",
                    client: "Daimler Truck",
                    challenge: "A major industrial facility facing a substantial increase in district heating costs together with a more complex pricing structure.",
                    solution: "Active control of forward temperature, active demand response in buildings, and continuous analytics for improved parameter settings throughout the facility.",
                    result: "Reduced amount of purchased district heating (~140 GWh) as well as lowered peak and flow requirements.",
                    stats: ["0.5-1M€/yr reduced cost", "5°C reduction of forward temperature", "20-30% reduced peak load", "10% energy savings"]
                },
                {
                    title: "Network Management in Asia",
                    sector: "International",
                    challenge: "High energy costs and high peak loads increase fossil peak fuel usage. Disconnect between energy supply and demand causes heat losses.",
                    solution: "Active demand response in 83 buildings (595,000 m²) combined with active control of two network mixing stations.",
                    result: "Reduced peak fuel consumption and more even pressure levels across the network.",
                    stats: ["23-27% reduced peak load", "200K€/yr reduced cost", "Reduced CO2 emissions"]
                },
                {
                    title: "Load Management to Avoid Peak Capacity",
                    sector: "Utilities",
                    client: "City of Gothenburg",
                    challenge: "A need for large investments in peak load capacity to manage current and future demand profiles.",
                    solution: "Active demand response and energy services for demand profile management to create flexibility.",
                    result: "Prolonged lifetime of existing distribution infrastructure and avoiding the need for investment in new peak load capacity infrastructure.",
                    stats: ["100MW avoided investments", "5,500 buildings included", "Data sharing between demand response and automation"]
                }
            ],
            cta: {
                title: "Ready to write your success story?",
                button: "Get in touch"
            },
            headers: {
                useCases: "Use Cases",
                provenImpact: "Proven Impact",
                subtitle: "Real-world results from energy networks worldwide.",
                challenge: "Challenge",
                solution: "Solution",
                keyResult: "Key Result"
            },
            ctaMain: {
                title: "Transform your energy network today.",
                subtitle: "Join the leading energy providers who are setting new standards for efficiency and sustainability with Noda.",
                button: "Get in Touch"
            }
        },
        resourcesPage: {
            hero: {
                label: "Resources",
                titlePrefix: "Knowledge for the",
                titleHighlight: "energy transition",
                desc: "Explore our collection of technical guides, industry reports, and expert insights designed to help you navigate the future of thermal energy.",
                teamLead: "Meet the team driving this innovation, or access our whitepapers, technical documentation, and expert insights below."
            },
            collage: {
                hq: "Headquarters",
                netport: "Netport Science Park",
                netportDesc: "Where our energy innovation begins. Located in the heart of Karlshamn.",
                est: "2005",
                estDesc: "Established in Sweden",
                visit: "Visit Us",
                directions: "Get Directions"
            },
            dna: {
                label: "Our DNA",
                title: "Built by Engineers, Driven by Purpose.",
                desc: "At Noda, curiosity is our engine and sustainability is our compass. We believe that the hardest problems typically have the most elegant solutions if you look deep enough.",
                items: ["Scientific Rigor", "Scandinavian Design", "Global Ambition"]
            },
            values: {
                label: "Company Values",
                title: "Core Principles",
                items: [
                    { tag: "#speed", desc: "Retain the agility, clear communication, swift decision-making, and freedom of a startup, while demonstrating the capabilities and solutions of a large-scale enterprise. Hit heavy, stay small." },
                    { tag: "#ambition", desc: "We love people who aim for greatness. They inspire and excite their teammates, raising the bar for all of us. Ambition by the boatload!" },
                    { tag: "#trust", desc: "We're big fans of transparency and trust for many reasons, but the abridged version is: it makes life easier." },
                    { tag: "#courage", desc: "We're a team of self-starters and bold pioneers who take serious pride in our work – and it shows." },
                    { tag: "#empathy", desc: "When we lift each other up, strive to understand each other, and empower those around us to thrive, everyone benefits." },
                    { tag: "#togetherness", desc: "We work together to bring our passions and expertise to make NODA the best it can be." }
                ]
            },
            teamList: {
                label: "Leadership",
                title: "Meet the Team",
                members: [
                    { name: "Tatiana Brandt", role: "CEO", desc: "Experienced business executive and thought leader with extensive knowledge in digitalization, innovation and energy industry from Microsoft, Schlumberger and the first Norwegian unicorn." },
                    { name: "Dr. Christian Johansson", role: "CSPO & Co-Founder", desc: "Innovator and entrepreneur with deep knowledge in thermal networks, energy workflows, artificial intelligence and mathematics. NODA co-founder (2005) and the largest shareholder." },
                    { name: "Charlotta Feith", role: "CRO", desc: "Experienced business development leader with an unwavering commitment on driving customer success and championing the value of our industry-leading Impact-as-a-Service (IaaS) software." },
                    { name: "Martin Borgquist", role: "COO", desc: "Experienced leader and domain expert in energy systems, automation and optimization processes. And a customer success champion." },
                    { name: "Karl-Johan Johnsson", role: "CTO", desc: "Experienced technical leader driving our platform's architecture and engineering excellence. Expert in DevOps and continuous delivery, ensuring our solutions are scalable, robust, and always evolving." }
                ]
            },
            team: [
                { name: "Christian Johansson", role: "Co-Founder", image: "/images/innovation/christian.webp" },
                { name: "Martin Olofsson", role: "CTO", image: "/images/resources/Martin.webp" },
                { name: "Charlotta", role: "Head of Operations", image: "/images/resources/Charlotta.jpg" },
                { name: "Karl-Johan", role: "Lead Developer", image: "/images/resources/kalle.jpeg" }
            ],
            resources: [
                { title: "Documentation", desc: "Technical guides, API reference, and integration documentation.", link: "View docs" },
                { title: "Downloads", desc: "Product sheets, whitepapers, and presentation materials.", link: "Browse downloads" },
                { title: "Support", desc: "Get help from our team with technical issues or questions.", link: "Contact support" }
            ],
            contact: {
                title: "Get in touch",
                desc: "Ready to learn more about NODA? Our team is here to help you transform your energy management.",
                emailLabel: "Email",
                email: "info@noda.se",
                openForm: "Open Form",
                portalLabel: "Customer Portal",
                portalTitle: "Existing Client?",
                accessPortal: "Access Portal",
                hqLabel: "Headquarters",
                hqAddress: "Netport Science Park, 374 35 Karlshamn, Sweden",
                viewMap: "View Map",
                headquarters: "Headquarters",
                location: "Netport Science Park, 374 35 Karlshamn, Sweden",
                portal: "Customer Portal",
                openContactForm: "Open Contact Form"
            },
            subItems: {
                apiDocs: "API Docs",
                glossary: "Glossary",
                whitepaper: "White Paper: Energy Savings",
                caseStudy: "Case Study: Building Efficiency"
            }
        }
    },
    sv: {
        nav: {
            product: "Produkt",
            innovation: "Innovation",
            successStories: "Kundcase",
            resources: "Resurser",
            portal: "Kundportal",
        },
        hero: {
            label: "AI-Driven Energihantering",
            titleParts: [
                { text: "Vi" }, { text: "är" }, { text: "dedikerade" }, { text: "till" },
                { text: "termisk", highlight: true }, { text: "excellens", highlight: true }
            ] as TitlePart[],
            subtitle: "AI-drivna energihanteringslösningar för smart värme och kyla. Oöverträffad precision och kontroll för en hållbar framtid.",
        },
        cta: {
            title: "Redo för smartare energi?",
            subtitle: "Låt oss diskutera hur NODA kan transformera er termiska energihantering.",
            getInTouch: "Kontakta oss",
            learnMore: "Läs mer",
        },
        whatWeDo: {
            label: "Vad Vi Gör",
            title: "AI-Driven Energihantering",
            desc: "Vi erbjuder intelligenta lösningar för smarta värme- och kylsystem. Vår plattform ansluter, övervakar och optimerar termiska nätverk i realtid.",
            steps: [
                { title: "Anslut", desc: "Integrera sömlöst med er befintliga infrastruktur och datakällor." },
                { title: "Övervaka", desc: "Realtidsöverblick över hela ert termiska nätverk i en och samma panel." },
                { title: "Optimera", desc: "AI-drivna beslut för maximal effektivitet och kostnadsminskning." },
            ],
            button: "Se Kundcase"
        },
        footer: {
            desc: "Intelligenta termiska energisystem för en hållbar framtid.",
            columns: {
                product: "Produkt",
                company: "Företag",
                resources: "Resurser",
                legal: "Juridiskt"
            },
            links: {
                coPilot: "CoPilot",
                platform: "Plattform",
                integrations: "Integrationer",
                about: "Om oss",
                news: "Nyheter",
                caseStudies: "Kundcase",
                documentation: "Dokumentation",
                support: "Support",
                privacy: "Integritet",
                terms: "Villkor",
                cookies: "Cookies"
            }
        },
        stats: {
            years: "År av Excellens",
            connected: "Anslutna System",
            efficiency: "Effektivitetsvinster",
            co2: "CO₂ Minskat Årligen",
            trustedBy: "Betrodd av Branschledare"
        },
        vision: {
            titleParts: [
                { text: "Betjänar energisektorn," },
                { text: "med särskilt fokus på" },
                { text: "det ", highlight: true, highlightText: "komplexa termiska" },
                { text: "energilandskapet.", gradient: true }
            ],
            label: "Vår Vision",
            mainText: "Den globala energiefterfrågan förväntas öka med 21% till 2040. Vi tror att svaret inte ligger i att producera mer energi, utan i att använda det vi har smartare.",
            subText: "Våra AI-drivna lösningar optimerar termiska nätverk, minskar spill och hjälper organisationer att nå hållbarhetsmål utan att kompromissa med komfort eller tillförlitlighet.",
            cards: {
                efficiency: { title: "Effektivitet Först", desc: "Maximera output, minimera spill" },
                impact: { title: "Global Påverkan", desc: "Koldioxidneutral framtid" }
            }
        },
        copilot: {
            new: "NYHET",
            title: "Möt NODA CoPilot",
            subtitle: "Avancerad analys vid dina fingertoppar",
            desc: "En AI-driven modul designad för energi- och allmännyttiga företag. Omvandla komplex driftdata till agerbara insikter för smartare beslut inom termisk energihantering.",
            features: [
                "Energipoptimering i realtid",
                "Förebyggande underhåll",
                "Spårning av koldioxidavtryck",
                "Sömlös integration"
            ],
            learnMore: "Läs Mer",
            metrics: {
                efficiency: "Effektivitet",
                savings: "Besparingar",
                co2: "CO₂ Minskning"
            }
        },
        patentedSoftware: {
            label: "Immaterialrätt",
            title: "Vår Patenterade Mjukvara",
            desc: "Med över 20 års erfarenhet transformerar NODA Intelligent Platform komplexa termiska energidata till konkreta affärsresultat. Vi bemästrar krångliga datakällor för att leverera pålitliga, optimerade lösningar som övervinner de risker för sammansatta fel som finns i moderna energinätverk."
        },
        appAreas: {
            label: "Användningsområden",
            title: "Lösningar för Varje Sektor",
            desc: "Skräddarsydda AI-drivna lösningar som levererar mätbara resultat varhelst termisk energi flödar.",
            items: [
                { title: "Fjärrvärme & Kyla", category: "Ren Energi", desc: "Geotermisk, HVAC-system, väteintegration och värmepumpsoptimering." },
                { title: "Fastighetskluster", category: "Fastigheter", desc: "Smart energihantering för campus, hotell, skolor och kommunala byggnader." },
                { title: "Energileverantörer", category: "Allmännytta", desc: "Lösningar för offentliga och privata energileverantörer för att optimera distribution." },
                { title: "Industriella Enheter", category: "Tillverkning", desc: "AI-driven termisk optimering för tillverknings- och processanläggningar." }
            ],
            learnMore: "Läs mer"
        },
        customerSegments: {
            label: "Kundcase",
            title: "Betrodd inom alla branscher",
            desc: "Se hur ledande organisationer använder NODA för att transformera sin termiska verksamhet.",
            items: [
                { title: "Energitjänster", quote: "Bevisade energibesparingar i hela vår portfölj." },
                { title: "Allmännyttiga Företag", quote: "Synlighet i realtid och förebyggande insikter." },
                { title: "Kommuner", quote: "Hållbar infrastruktur för samhällen." },
                { title: "Fastigheter", quote: "Hyresgästkomfort med minskade driftkostnader." }
            ]
        },
        testimonials: [
            { quote: "NODAs AI-plattform har revolutionerat hur vi hanterar vårt fjärrvärmenät. Bara de förebyggande analyserna har sparat oss miljoner.", author: "FoU-chef", company: "Engie" },
            { quote: "Integrationen var sömlös och resultaten omedelbara. Vi har sett en 35% förbättring av termisk effektivitet.", author: "Produktchef", company: "C4 Energi" },
            { quote: "Deras expertis inom termiska system kombinerat med banbrytande AI är oöverträffad i branschen.", author: "Operativ Chef", company: "Umeå Energi" }
        ],
        productPage: {
            hero: {
                label: "PRODUKT",
                titlePrefix: "Den intelligenta plattformen för ",
                titleHighlight: "termisk energi",
                desc: "Avancerad AI-driven styrning som ansluter, simulerar och optimerar fjärrvärme- och kylnätverk i realtid.",
            },
            features: [
                { title: "Realtidsoptimering", desc: "AI analyserar och optimerar kontinuerligt ditt värmenäts prestanda, vilket minskar energispill och kostnader." },
                { title: "Förebyggande Underhåll", desc: "Förutse utrustningsfel innan de inträffar med maskininlärningsdriven diagnostik." },
                { title: "Kolspårning", desc: "Övervaka och rapportera CO₂-utsläpp med automatiserade hållbarhetspaneler." }
            ],
            howItWorks: {
                title: "Hur det fungerar",
                steps: [
                    { num: "01", title: "Anslut", desc: "Integrera sömlöst med din befintliga infrastruktur och datakällor." },
                    { num: "02", title: "Övervaka", desc: "Realtidsöverblick över hela ditt värmenät i en instrumentpanel." },
                    { num: "03", title: "Optimera", desc: "AI-drivna beslut för maximal effektivitet och kostnadsminskning." }
                ]
            },
            cta: {
                title: "Se CoPilot i aktion",
                desc: "Boka en demo med vårt team för att lära dig hur CoPilot kan fungera för dig.",
                button: "Begär en demo"
            },
            buildingUnits: {
                label: "Systemarkitektur",
                title: "Byggstenar",
                units: [
                    { title: "Digital Tvilling", desc: "En levande virtuell kopia av ert termiska nätverk som simulerar verkligt beteende för att förutsäga framtida utfall." },
                    { title: "CoPilot", desc: "Den intelligenta hjärnan som autonomt optimerar fram- och returtemperaturer i realtid." },
                    { title: "Inverkan", desc: "Mätbara hållbarhetsresultat. Spåra CO2-minskning och energibesparingar med certifierad precision." },
                    { title: "Byggnad", desc: "Smart integration med fastighetsautomationssystem för att säkerställa effektivitet från anläggning till radiator." }
                ]
            },
            impactService: {
                label: "Nytt Paradigm",
                title: "Effekt som tjänst",
                desc1: "Traditionell mjukvara säljer licenser. Vi säljer resultat. Impact as a Service betyder att vi är partners i er effektivitetsresa.",
                desc2: "Vår modell bygger på delad framgång. Vi övervakar, uppdaterar och optimerar kontinuerligt ert system för att säkerställa att besparingarna vi lovar är besparingarna ni realiserar. Det är inte bara ett verktyg; det är en garanti för prestanda.",
                stamp: "Certifierad Excellens",
                stamps: {
                    achilles: "Medlem i Achilles Network",
                    unce: "UNCE Silver Plus"
                }
            },
            essence: {
                label: "Kärnan",
                quote: "Intelligens handlar inte om att samla in data. Det handlar om att veta vad man ska göra med den innan någon annan gör det.",
                desc: "På Noda tror vi att energins framtid är autonom. Vi skalar bort komplexiteten i termisk dynamik och ersätter den med elegant, självkörande effektivitet. Detta är kärnan i vår ingenjörsfilosofi.",
                caption: "Noda Intelligent Platform Architecture"
            },
            vastValue: {
                label: "Värdeerbjudande",
                title: "Omfattande Värderealisering",
                items: [
                    { k: "Operativ Effektivitet", v: "Minska manuella justeringar och mänskliga fel med 90%." },
                    { k: "Energibesparingar", v: "Uppnå upp till 20% minskning av topplast." },
                    { k: "Koldioxidavtryck", v: "Sänk Scope 2-utsläpp direkt genom smartare förbrukning." }
                ]
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Vi tjänar energisektorn med fokus på",
                titleHighlight: "termisk excellens",
                desc: "Vi flyttar gränserna för energioptimering genom kontinuerlig forskning, akademiska partnerskap och banbrytande datavetenskap."
            },
            position: {
                label: "Vår Position",
                title: "Noda är i den absoluta framkanten av termisk AI.",
                desc: "Född 2005 ur banbrytande AI-forskning vid Blekinge Tekniska Högskola, följer vi inte bara innovation – vi leder den. Med marknadens mest avancerade termiska AI-lösningar och en framåtblickande IP-strategi omdefinierar vi vad som är möjligt. Från intern FoU till globala samarbeten föreställer vi oss inte bara framtiden. Vi levererar den."
            },
            projects: {
                label: "FoU",
                title: "Internationella Forskningsprojekt",
                items: [
                    { title: "DIGICITY", focus: "ERA-NET Smart Energy Systems", desc: "Digiciti är ett projekt som finansieras inom programmet ERA-NET Smart Energy Systems. Det bidrar till ett mer motståndskraftigt och hållbarare samhälle genom digital transformation, med fokus på att använda termisk energi för att skapa mer flexibla energisystem genom att kombinera tillgång och efterfrågan." },
                    { title: "ENFLATE", focus: "EU Horizon Europe", desc: "Enflate bygger vidare på befintliga lösningar för datadrivna energitjänster. Det utvecklar en konsumentcentrerad flexibilitetsplattform som testas i Bulgarien, Grekland, Spanien, Sverige och Schweiz, och engagerar lokala konsumenter, TSO:er, DSO:er och marknadsoperatörer." },
                    { title: "COLLECTiEF", focus: "EU Horizon 2020", desc: "COLLECTiEF använder kollektiv intelligens för att förbättre byggnaders energiprestanda och bidra till globala klimatmål. Projektet syftar till att öka datasäkerheten, energiflexibiliteten och klimatresiliensen i befintliga byggnader samtidigt som installationskostnaderna minskas." },
                    { title: "FLEXISYNC", focus: "ERA-Net Smart Energy Systems", desc: "FlexiSync syftar till att optimera flexibiliteten inom fjärrvärmesektorn. Projektet samlar 16 partners från Österrike, Tyskland, Spanien och Sverige för att demonstrera hur fjärrvärme kan balansera det bredare energisystemet." },
                    { title: "TEMPO", focus: "EU Horizon 2020", desc: "TEMPO utvecklar tekniska innovationer som gör det möjligt för fjärrvärmenät att drivas vid lägre temperaturer, vilket minskar värmeförluster och tillåter högre andelar förnybar värme." },
                    { title: "BIGDATA", focus: "Knowledge Foundation", desc: "Integrerar expertis inom maskininlärning, data mining och datorteknik för att utveckla skalbara, resurssnåla system. Applikationer inkluderar beslutsstödssystem och bildbehandling, i samarbete med Ericsson, Telenor och Sony." },
                    { title: "DAD", focus: "Knowledge Foundation", desc: "Data Analytics for Fault Detection in District Heating (DAD) syftar till att förbättra energieffektiviteten genom avancerad analys. Fokus på prediktiva algoritmer för felövervakning, detektering och förutsägelse i samarbete med Borås Energi och AB Bostäder." },
                    { title: "SHINE", focus: "IoTAP", desc: "NODA och Malmö universitet använde toppmodern IoT-teknik för att binda samman smarta hem med intelligenta energisystem. Utvecklade ett decentraliserat cyberfysiskt system för automatiserad värme- och kylstyrning." },
                    { title: "STORM", focus: "EU Horizon 2020", desc: "Tog sig an energieffektivitet på distriktsnivå genom att utveckla en innovativ DHC-nätverksstyrenhet baserad på självlärande algoritmer. Styrenheten maximerar användningen av spillvärme och förnybara energikällor i DHC-nätverk." },
                    { title: "FLEXIBLE HEAT & POWER", focus: "EU Horizon 2020", desc: "Utforskar trögheten i power-to-heat-lösningar för elektrisk och termisk flexibilitet. Värmepumpar, centralvärme och forcerad ventilation fungerar som gränssnitt som ansluter termisk lagring och tröghet till eldistributionsnätet." },
                    { title: "ARROWHEAD", focus: "ARTEMIS Innovation Pilot", desc: "Syftade till att förbättre interoperabiliteten mellan olika Service-Oriented Architecture (SOA)-tekniker inom produktion, smarta byggnader, elektromobilitet och energimarknader. Budget på 70 miljoner euro med 80 partners från 15 länder." }
                ],
                visitSite: "Besök projektets webbplats",
                completed: "Projektet avslutat"
            },
            values: {
                title: "Vad som driver oss",
                items: [
                    { title: "Effektivitet Först", desc: "Varje beslut optimeras för maximal uteffekt med minimalt avfall. Vi tror att effektivitet är grunden för hållbarhet." },
                    { title: "Kundfokus", desc: "Våra lösningar byggs i nära samarbete med energibolag, allmännyttiga företag och fastighetsägare som möter verkliga utmaningar dagligen." },
                    { title: "Global Påverkan", desc: "Vi arbetar mot en koldioxidneutral framtid, ett termiskt nätverk i taget. Vår teknik skalar för att möta globala klimatmål." }
                ]
            },
            cta: {
                title: "Var med och forma framtiden",
                desc: "Vi letar alltid efter talanger som delar vår vision.",
                button: "Se lediga tjänster"
            },
            featuredExperts: {
                label: "Utvalda Domänexperter",
                title: "Innovationsmästarna",
                experts: [
                    { name: "Dr. Christian Johansson", role: "Grundare", image: "/images/innovation/christian.webp" },
                    { name: "Dr. Jens Brage", role: "FoU-chef", image: "/images/innovation/jens.webp" },
                    { name: "Tatiana Brandt", role: "VD", image: "/images/innovation/tatiana.jpg" }
                ]
            }
        },
        successStoriesPage: {
            hero: {
                label: "KUNDCASE",
                titlePrefix: "Se hur NODA",
                titleHighlight: "levererar resultat",
                desc: "Verkliga resultat från organisationer inom olika branscher."
            },
            caseStudies: [
                {
                    title: "Total optimering av fjärrvärme",
                    sector: "Fjärrvärme",
                    challenge: "Långa distributionsledningar i fjärrvärmenätet skapar flaskhalsar och behov av investeringar i topplastkapacitet.",
                    solution: "Aktiv efterfrågestyrning och energitjänster för hantering av efterfrågeprofiler kombinerat med befintlig mjukvara för produktionsoptimering.",
                    result: "Förlängd livslängd på befintlig infrastruktur och undvikande av investeringar i ny topplastkapacitet.",
                    stats: ["12% ökad flexibilitet", "Minimal tid från koncept till drift", "Samarbete mellan efterfrågan och produktion"]
                },
                {
                    title: "Optimering av skyskrapor",
                    sector: "Fastigheter",
                    client: "Hines",
                    challenge: "Avkarbonisering av byggnadsbeståndet i New York är en pågående utmaning. För att göra värmepumpar kostnadseffektiva i stor skala måste de passa sömlöst med befintlig infrastruktur.",
                    solution: "AI-baserad analys och styrning för att optimera inte bara nya värmepumpar utan även befintliga gas- och ånglösningar.",
                    result: "Nya värmepumpslösningar fungerar inom ramen för befintlig infrastruktur och befintliga kunder kan erbjudas aktiva energitjänster.",
                    stats: ["Mjukvaruintegration för snabb driftsättning", "Betydande minskning av topplast"]
                },
                {
                    title: "Aktiva energitjänster",
                    sector: "Värmekonsumenter",
                    challenge: "Uppvärmningssystem hos konsumenter hanteras ofta ineffektivt vilket leder till högre kostnader och suboptimalt inomhusklimat.",
                    solution: "Aktiva energitjänster med affärsapplikationer för styrning av värmeanvändning, hantering av efterfrågeprofiler, förbättrade returtemperaturer och förebyggande underhåll.",
                    result: "Ökad insikt för energileverantören kopplat med bättre efterfrågeprofiler och lägre returtemperaturer, medan kunderna minskar sina kostnader.",
                    stats: ["10-20% kostnadsbesparing hos konsument", "Snabb driftsättning av tjänst", "Ökat samarbete"]
                },
                {
                    title: "Gasreduktion i fjärrvärme",
                    sector: "Allmännytta",
                    client: "Engie",
                    challenge: "En produktionsmix med billigare baslastbränslen och dyrare fossilgas för topplaster. Något för liten ackumulatortank resulterade i ökad gasanvändning.",
                    solution: "Aktiv efterfrågestyrning på konsumentsidan som opererar i relation till temperaturnivåerna i tanken, vilket skapar virtuell lagring.",
                    result: "Total lagringskapacitet ökade med cirka 50% vilket ledde till en betydande minskning av gasanvändning utan att påverka mängden såld energi.",
                    stats: ["14% minskning av gasanvändning", "Virtuell lagringskapacitet tillagd", "Minskade CO2-utsläpp"]
                },
                {
                    title: "Optimering av industriella värmenät",
                    sector: "Tillverkning",
                    client: "Daimler Truck",
                    challenge: "En stor industrianläggning stod inför en kraftig ökning av fjärrvärmekostnader tillsammans med en mer komplex prisstruktur.",
                    solution: "Aktiv styrning av framledningstemperatur, aktiv efterfrågestyrning i byggnader och kontinuerlig analys för förbättrade parameterinställningar i hela anläggningen.",
                    result: "Minskad mängd köpt fjärrvärme (~140 GWh) samt sänkta topp- och flödeskrav.",
                    stats: ["0.5-1M€/år i minskad kostnad", "5°C sänkning av framledningstemperatur", "20-30% minskad topplast", "10% energibesparing"]
                },
                {
                    title: "Nätverkshantering i Asien",
                    sector: "Internationellt",
                    challenge: "Höga energikostnader och höga topplaster ökar användningen av fossila bränslen. Glapp mellan tillgång och efterfrågan orsakar värmeförluster.",
                    solution: "Aktiv efterfrågestyrning i 83 byggnader (595,000 m²) kombinerat med aktiv styrning av två blandningsstationer.",
                    result: "Minskad förbrukning av topplastbränsle och jämnare trycknivåer över hela nätverket.",
                    stats: ["23-27% minskad topplast", "200K€/år i minskad kostnad", "Minskade CO2-utsläpp"]
                },
                {
                    title: "Lasthantering för att undvika toppkapacitet",
                    sector: "Allmännytta",
                    client: "Göteborg Energi",
                    challenge: "Ett behov av stora investeringar i topplastkapacitet för att hantera nuvarande och framtida efterfrågeprofiler.",
                    solution: "Aktiv efterfrågestyrning och energitjänster för profilhantering för att skapa flexibilitet.",
                    result: "Förlängd livslängd på befintlig infrastruktur och undvikande av investeringar i ny topplastkapacitet.",
                    stats: ["100MW undvikna investeringar", "5,500 inkluderade byggnader", "Datadelning mellan efterfrågan och automation"]
                }
            ],
            cta: {
                title: "Redo att skriva er framgångssaga?",
                button: "Kontakta oss"
            },
            headers: {
                useCases: "Användningsfall",
                provenImpact: "Bevisad Effekt",
                subtitle: "Verkliga resultat från energinätverk över hela världen.",
                challenge: "Utmaning",
                solution: "Lösning",
                keyResult: "Nyckelresultat"
            },
            ctaMain: {
                title: "Transformera ert energinätverk idag.",
                subtitle: "Gå med i de ledande energileverantörer som sätter nya standarder för effektivitet och hållbarhet med Noda.",
                button: "Kontakta oss"
            }
        },
        resourcesPage: {
            hero: {
                label: "Resurser",
                titlePrefix: "Kunskap för",
                titleHighlight: "energiomställningen",
                desc: "Utforska vår samling av tekniska guider, branschrapporter och expertinsikter designade för att hjälpa dig navigera i framtidens termiska energi.",
                teamLead: "Möt teamet som driver denna innovation, eller få tillgång till våra whitepapers, teknisk dokumentation och expertinsikter nedan."
            },
            collage: {
                hq: "Huvudkontor",
                netport: "Netport Science Park",
                netportDesc: "Där vår energiinnovation börjar. Beläget i hjärtat av Karlshamn.",
                est: "2005",
                estDesc: "Grundat i Sverige",
                visit: "Besök oss",
                directions: "Hitta hit"
            },
            dna: {
                label: "Vårt DNA",
                title: "Byggt av ingenjörer, drivet av syfte.",
                desc: "Hos Noda är nyfikenhet vår motor och hållbarhet vår kompass. Vi tror att de svåraste problemen vanligtvis har de mest eleganta lösningarna om man tittar djupt nog.",
                items: ["Vetenskaplig stringens", "Skandinavisk design", "Global ambition"]
            },
            values: {
                label: "Företagsvärderingar",
                title: "Kärnprinciper",
                items: [
                    { tag: "#speed", desc: "Behåll snabbheten, den tydliga kommunikationen, det snabba beslutsfattandet och friheten hos en startup, samtidigt som vi visar upp förmågan och lösningarna hos ett storföretag. Slå hårt, förbli små." },
                    { tag: "#ambition", desc: "Vi älskar människor som siktar mot stjärnorna. De inspirerar och peppar sina lagkamrater och höjer ribban för oss alla. Ambition i massor!" },
                    { tag: "#trust", desc: "Vi är stora anhängare av transparens och tillit av många anledningar, men den korta versionen är: det gör livet enklare." },
                    { tag: "#courage", desc: "Vi är ett team av självstartare och modiga pionjärer som tar stort ansvar för vårt arbete – och det märks." },
                    { tag: "#empathy", desc: "När vi lyfter varandra, strävar efter att förstå varandra och ger dem runt omkring oss kraft att växa, gynnas alla." },
                    { tag: "#togetherness", desc: "Vi arbetar tillsammans för att använda vår passion och expertis för att göra NODA till det bästa det kan vara." }
                ]
            },
            teamList: {
                label: "Ledarskap",
                title: "Möt teamet",
                members: [
                    { name: "Tatiana Brandt", role: "VD", desc: "Erfaren företagsledare och tankeledare med omfattande kunskap inom digitalisering, innovation och energiindustrin från Microsoft, Schlumberger och den första norska unicornen." },
                    { name: "Dr. Christian Johansson", role: "CSPO & Medgrundare", desc: "Innovatör och entreprenör med djup kunskap inom termiska nätverk, energiarbetsflöden, artificiell intelligens och matematik. NODAs medgrundare (2005) och största aktieägare." },
                    { name: "Charlotta Feith", role: "CRO", desc: "Erfaren ledare inom affärsutveckling med ett orubbligt engagemang för att driva kundframgång och förespråka värdet av vår branschledande Impact-as-a-Service (IaaS) mjukvara." },
                    { name: "Martin Borgquist", role: "COO", desc: "Erfaren ledare och domänexpert inom energisystem, automation och optimeringsprocesser. Och en förkämpe för kundframgång." },
                    { name: "Karl-Johan Johnsson", role: "CTO", desc: "Erfaren teknisk ledare som driver vår plattforms arkitektur och ingenjörsmässiga excellens. Expert på DevOps och kontinuerlig leverans, vilket säkerställer att våra lösningar är skalbara, robusta och alltid under utveckling." }
                ]
            },
            team: [
                { name: "Christian Johansson", role: "Medgrundare", image: "/images/innovation/christian.webp" },
                { name: "Martin Olofsson", role: "CTO", image: "/images/resources/Martin.webp" },
                { name: "Charlotta", role: "Driftschef", image: "/images/resources/Charlotta.jpg" },
                { name: "Karl-Johan", role: "Lead Developer", image: "/images/resources/kalle.jpeg" }
            ],
            resources: [
                { title: "Dokumentation", desc: "Tekniska guider, API-referens och integrationsdokumentation.", link: "Visa dokumentation" },
                { title: "Nedladdningar", desc: "Produktblad, whitepapers och presentationsmaterial.", link: "Bläddra bland nedladdningar" },
                { title: "Support", desc: "Få hjälp från vårt team med tekniska problem eller frågor.", link: "Kontakta support" }
            ],
            contact: {
                title: "Kontakta oss",
                desc: "Redo att lära dig mer om NODA? Vårt team är här för att hjälpa dig transformera din energihantering.",
                emailLabel: "E-post",
                email: "info@noda.se",
                openForm: "Öppna formulär",
                portalLabel: "Kundportal",
                portalTitle: "Befintlig kund?",
                accessPortal: "Gå till portal",
                hqLabel: "Huvudkontor",
                hqAddress: "Netport Science Park, 374 35 Karlshamn, Sverige",
                viewMap: "Visa karta",
                headquarters: "Huvudkontor",
                location: "Netport Science Park, 374 35 Karlshamn, Sverige",
                portal: "Kundportal",
                openContactForm: "Öppna kontaktformulär"
            },
            subItems: {
                apiDocs: "API-dokumentation",
                glossary: "Ordlista",
                whitepaper: "White Paper: Energibesparingar",
                caseStudy: "Case Study: Byggnadseffektivitet"
            }
        },
    },
    da: {
        nav: {
            product: "Produkt",
            innovation: "Innovation",
            successStories: "Kundecases",
            resources: "Ressourcer",
            portal: "Kundeportal",
        },
        hero: {
            label: "AI-Drevet Energistyring",
            titleParts: [
                { text: "Vi" }, { text: "er" }, { text: "dedikerede" }, { text: "til" },
                { text: "termisk", highlight: true }, { text: "ekspertise", highlight: true }
            ] as TitlePart[],
            subtitle: "AI-drevne energiløsninger til smart varme og køling. Uovertruffen præcision og kontrol for en bæredygtig fremtid.",
        },
        cta: {
            title: "Klar til smartere energi?",
            subtitle: "Lad os drøfte, hvordan NODA kan transformere jeres termiske energistyring.",
            getInTouch: "Kontakt os",
            learnMore: "Læs mere",
        },
        whatWeDo: {
            label: "Hvad Vi Gør",
            title: "AI-Drevet Energistyring",
            desc: "Vi leverer intelligente løsninger til smarte varme- og kølesystemer. Vores platform forbinder, overvåger og optimerer termiske netværk i realtid.",
            steps: [
                { title: "Tilslut", desc: "Integrér problemfrit med jeres eksisterende infrastruktur og datakilder." },
                { title: "Overvåg", desc: "Realtidsoverblik over hele jeres termiske netværk i ét dashboard." },
                { title: "Optimér", desc: "AI-drevne beslutninger for maksimal effektivitet og omkostningsreduktion." },
            ],
            button: "Se Kundecases"
        },
        footer: {
            desc: "Intelligente termiske energisystemer for en bæredygtig fremtid.",
            columns: {
                product: "Produkt",
                company: "Virksomhed",
                resources: "Ressourcer",
                legal: "Juridisk"
            },
            links: {
                coPilot: "CoPilot",
                platform: "Platform",
                integrations: "Integrationer",
                about: "Om os",
                news: "Nyheder",
                caseStudies: "Kundecases",
                documentation: "Dokumentation",
                support: "Support",
                privacy: "Privatliv",
                terms: "Vilkår",
                cookies: "Cookies"
            }
        },
        stats: {
            years: "År med Ekspertise",
            connected: "Tilsluttede Systemer",
            efficiency: "Effektivitetsgevinster",
            co2: "CO₂ Reduceret Årligt",
            trustedBy: "Betroet af Brancheledere"
        },
        vision: {
            titleParts: [
                { text: "Betjener energisektoren," },
                { text: "med særligt fokus på" },
                { text: "det ", highlight: true, highlightText: "komplekse termiske" },
                { text: "energilandskab.", gradient: true }
            ],
            label: "Vores Vision",
            mainText: "Den globale energiefterspørgsel forventes at stige med 21% inden 2040. Vi mener ikke, svaret ligger i at producere mere energi, men i at bruge det, vi har, mere intelligent.",
            subText: "Vores AI-drevne løsninger optimerer termiske netværk, reducerer spild og hjælper organisationer med at nå bæredygtighedsmål uden at gå på kompromis med komfort eller pålidelighed.",
            cards: {
                efficiency: { title: "Effektivitet Først", desc: "Maksimér output, minimér spild" },
                impact: { title: "Global Indflydelse", desc: "Kulstofneutral fremtid" }
            }
        },
        copilot: {
            new: "NYHED",
            title: "Mød NODA CoPilot",
            subtitle: "Avanceret analyse ved dine fingerspidser",
            desc: "Et AI-drevet modul designet til energi- og forsyningsselskaber. Transformér komplekse driftsdata til handlingsrettet indsigt for smartere beslutninger inden for termisk energistyring.",
            features: [
                "Energioptimering i realtid",
                "Forudsigende vedligeholdelse",
                "Sporing af CO2-aftryk",
                "Problemfri integration"
            ],
            learnMore: "Læs Mere",
            metrics: {
                efficiency: "Effektivitet",
                savings: "Besparelser",
                co2: "CO₂ Reduktion"
            }
        },
        patentedSoftware: {
            label: "Intellektuel Ejendom",
            title: "Vores Patenterede Software",
            desc: "Med over 20 års erfarenhed transformerer NODA Intelligent Platform komplekse termiske energidata til konkrete forretningsresultater. Vi mestrer indviklede datakilder for at levere pålidelige, optimerede løsninger, der overvinder de risici for sammensatte fejl, der findes i moderne energinetværk."
        },
        appAreas: {
            label: "Anvendelsesområder",
            title: "Løsninger til Enhver Sektor",
            desc: "Skræddersyede AI-drevne løsninger, der leverer målbare resultater, hvor end termisk energi flyder.",
            items: [
                { title: "Fjernvarme & Køling", category: "Ren Energi", desc: "Geotermisk, HVAC-systemer, brintintegration og varmepumpeoptimering." },
                { title: "Bygningsklynger", category: "Ejendom", desc: "Smart energistyring til campusser, hoteller, skoler og kommunale bygninger." },
                { title: "Energileverandører", category: "Forsyning", desc: "Løsninger til offentlige og private energileverandører for at optimere distribution." },
                { title: "Industrielle Enheder", category: "Produktion", desc: "AI-drevet termisk optimering til produktions- og forarbejdningsanlæg." }
            ],
            learnMore: "Læs mere"
        },
        customerSegments: {
            label: "Succeshistorier",
            title: "Betroet på Tværs af Brancher",
            desc: "Se hvordan førende organisationer udnytter NODA til at transformere deres termiske drift.",
            items: [
                { title: "Energitjenester", quote: "Beviste energibesparelser på tværs af hele vores portefølje." },
                { title: "Forsyningsselskaber", quote: "Realtidssynlighed og forudsigende indsigt." },
                { title: "Kommuner", quote: "Bæredygtig infrastruktur for lokalsamfund." },
                { title: "Ejendomme", quote: "Lejerkomfort med reducerede driftsomkostninger." }
            ]
        },
        testimonials: [
            { quote: "NODAs AI-platform har revolutioneret, hvordan vi styrer vores fjernvarmenet. Alene de prædiktive analyser har sparet os millioner.", author: "F&U-leder", company: "Engie" },
            { quote: "Integrationen var problemfri, og resultaterne var øjeblikkelige. Vi har set en 35% forbedring i termisk effektivitet.", author: "Produktchef", company: "C4 Energi" },
            { quote: "Deres ekspertise inden for termiske systemer kombineret med banebrydende AI er uovertruffen i branchen.", author: "Driftsdirektør", company: "Umeå Energi" }
        ],
        productPage: {
            hero: {
                label: "PRODUKT",
                titlePrefix: "Den intelligente platform til ",
                titleHighlight: "termisk energi",
                desc: "Avanceret AI-drevet styring, der forbinder, simulerer og optimerer fjernvarme- og kølenetværk i realtid.",
            },
            features: [
                { title: "Realtidsoptimering", desc: "AI analyserer og optimerer løbende dit varmenets ydeevne, hvilket reducerer energispild og omkostninger." },
                { title: "Forudsigende Vedligeholdelse", desc: "Forudse udstyrsfejl, før de sker, med maskinlæringsdrevet diagnostik." },
                { title: "Kulstofsporing", desc: "Overvåg og rapporter CO₂-emissioner med automatiserede bæredygtighedspaneler." }
            ],
            howItWorks: {
                title: "Sådan fungerer det",
                steps: [
                    { num: "01", title: "Tilslut", desc: "Integrer problemfrit med din eksisterende infrastruktur og datakilder." },
                    { num: "02", title: "Overvåg", desc: "Realtidssynlighed over hele dit varmenet i ét dashboard." },
                    { num: "03", title: "Optimer", desc: "AI-drevne beslutninger for maksimal effektivitet og omkostningsreduktion." }
                ]
            },
            cta: {
                title: "Se CoPilot i aktion",
                desc: "Planlæg en demo med vores team for at lære, hvordan CoPilot kan arbejde for dig.",
                button: "Anmod om en demo"
            },
            buildingUnits: {
                label: "Systemarkitektur",
                title: "Byggesten",
                units: [
                    { title: "Digital Tvilling", desc: "En levende virtuel kopi af jeres termiske netværk, der simulerer adfærd i den virkelige verden for at forudsige fremtidige resultater." },
                    { title: "CoPilot", desc: "Den intelligente hjerne, der autonomt optimerer fremløbs- og returtemperaturer i realtid." },
                    { title: "Indvirkning", desc: "Målbare bæredygtighedsresultater. Spor CO2-reduktion og energibesparelser med certificeret præcision." },
                    { title: "Bygning", desc: "Smart integration med bygningsstyringssystemer for at sikre effektivitet fra anlæg til radiator." }
                ]
            },
            impactService: {
                label: "Nyt Paradigme",
                title: "Indvirkning som tjeneste",
                desc1: "Traditionel software sælger licenser. Vi sælger resultater. Impact as a Service betyder, at vi er partnere i jeres effektivitetsrejse.",
                desc2: "Vores model bygger på fælles succes. Vi overvåger, opdaterer og optimerer kontinuerligt jeres system for at sikre, at de besparelser, vi lover, er de besparelser, I realiserer. Det er ikke bare et værktøj; det er en garanti for ydeevne.",
                stamp: "Certificeret Ekspertise",
                stamps: {
                    achilles: "Medlem af Achilles Network",
                    unce: "UNCE Silver Plus"
                }
            },
            essence: {
                label: "Essensen",
                quote: "Intelligens handler ikke om at indsamle data. Det handler om at vide, hvad man skal gøre med dem, før andre gør det.",
                desc: "Hos Noda tror vi på, at fremtidens energi er autonom. Vi fjerner kompleksiteten i termisk dynamik og erstatter den med elegant, selvkørende effektivitet. Dette er essensen af vores ingeniørfilosofi.",
                caption: "Noda Intelligent Platform Architecture"
            },
            vastValue: {
                label: "Værditilbud",
                title: "Omfattende Værdirealisering",
                items: [
                    { k: "Driftseffektivitet", v: "Reducer manuelle justeringer og menneskelige fejl med 90%." },
                    { k: "Energibesparelser", v: "Opnå op til 20% reduktion i spidsbelastning." },
                    { k: "Kulstofaftryk", v: "Sænk Scope 2-emissioner direkte gennem smartere forbrug." }
                ]
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Vi betjener energisektoren med fokus på",
                titleHighlight: "termisk ekspertise",
                desc: "Vi sprænger rammerne for energioptimering gennem løbende forskning, akademiske partnerskaber og banebrydende datavidenskab."
            },
            position: {
                label: "Vores Position",
                title: "Noda er i den absolutte forkant med termisk AI.",
                desc: "Født i 2005 ud fra banebrydende AI-forskning ved Blekinge Tekniska Högskola, følger vi ikke bare innovation – vi leder den. Med markedets mest avancerede termiske AI-løsninger og en fremadskuende IP-strategi omdefinerer vi, hvad der er muligt. Fra intern R&D til globale samarbejder forestiller vi os ikke bare fremtiden. Vi leverer den."
            },
            projects: {
                label: "FoU",
                title: "Internationale Forskningsprojekter",
                items: [
                    { title: "DIGICITY", focus: "ERA-NET Smart Energy Systems", desc: "Digiciti er et projekt, der finansieres under programmet ERA-NET Smart Energy Systems. Det bidrager till et mere modstandsdygtigt og bæredygtigt samfund gennem digital transformation med fokus på at bruge termisk energi til at skabe mere fleksible energisystemer ved at kombinere udbud og efterspørgsel." },
                    { title: "ENFLATE", focus: "EU Horizon Europe", desc: "Enflate bygger videre på eksisterende løsninger til datadrevne energitjenester. Det udvikler en forbrugercentreret fleksibilitetsplatform, der testes i Bulgarien, Grækenland, Spanien, Sverige og Schweiz, og engagerer lokale forbrugere, TSO'er, DSO'er og markedsoperatører." },
                    { title: "COLLECTiEF", focus: "EU Horizon 2020", desc: "COLLECTiEF bruger kollektiv intelligens til at forbedre bygningers energiydelse og bidrage til globale klimamål. Projektet sigter mod at øge datasikkerheden, energifleksibiliteten och klimaresiliensen i eksisterende bygninger, samtidig med at installationsomkostningerne reduceres." },
                    { title: "FLEXISYNC", focus: "ERA-Net Smart Energy Systems", desc: "FlexiSync sigter mod at optimere fleksibiliteten i fjernvarmesektoren. Projektet samler 16 partnere fra Østrig, Tyskland, Spanien och Sverige for at demonstrere, hvordan fjernvarme kan balancere det bredere energisystem." },
                    { title: "TEMPO", focus: "EU Horizon 2020", desc: "TEMPO udvikler tekniske innovationer, der gør det muligt for fjernvarmenet at fungere ved lavere temperaturer, hvilket reducerer varmetab og giver mulighed for højere andele af vedvarende varme." },
                    { title: "BIGDATA", focus: "Knowledge Foundation", desc: "Integrerer ekspertise inden for maskinlæring, datamining og datateknik til at udvikle skalerbare, ressourceeffektive systemer. Applikationer inkluderer beslutningsstøttesystemer och billedbehandling i samarbejde med Ericsson, Telenor och Sony." },
                    { title: "DAD", focus: "Knowledge Foundation", desc: "Data Analytics for Fault Detection in District Heating (DAD) sigter mod at forbedre energieffektiviteten gennem avanceret analyse. Fokus på prædiktive algoritmer til fejlforvågning, detektering och forudsigelse i samarbejde med Borås Energi och AB Bostäder." },
                    { title: "SHINE", focus: "IoTAP", desc: "NODA og Malmø Universitet brugte topmoderne IoT-teknologi til at forbinde smarte hjem med intelligente energisystemer. Udviklede et decentraliseret kyberfysisk system til automatiseret varme- och kølestyring." },
                    { title: "STORM", focus: "EU Horizon 2020", desc: "Tog fat på energieffektivitet på distriktsplan ved at udvikle en innovativ DHC-netværksstyreenhed baseret på selvlærende algoritmer. Styreenheden maksimerer brugen af spildvarme och vedvarende energikilder i DHC-netværk." },
                    { title: "FLEXIBLE HEAT & POWER", focus: "EU Horizon 2020", desc: "Udforsker trægheden i power-to-heat-løsninger til elektrisk och termisk fleksibilitet. Varmepumper, centralvarme och forceret ventilation fungerer som grænseflader, der forbinder termisk lagring och træghed till eldistributionsnettet." },
                    { title: "ARROWHEAD", focus: "ARTEMIS Innovation Pilot", desc: "Sigtede mod at forbedre interoperabiliteten mellem forskellige Service-Oriented Architecture (SOA)-teknologier inden for produktion, smarte bygninger, elektromobilitet och energimarkeder. Budget på 70 millioner euro med 80 partnere fra 15 lande." }
                ],
                visitSite: "Besøg projektets websted",
                completed: "Projektet afsluttet"
            },
            values: {
                title: "Hvad der driver os",
                items: [
                    { title: "Effektivitet Først", desc: "Hver beslutning optimeres for maksimalt output med minimalt spild. Vi tror på, at effektivitet er fundamentet for bæredygtighed." },
                    { title: "Kundefokus", desc: "Vores løsninger bygges i tæt samarbejde med energiselskaber, forsyningsselskaber og bygningsejere, der står over for reelle udfordringer dagligt." },
                    { title: "Global Indflydelse", desc: "Vi arbejder mod en kulstofneutral fremtid, ét termisk netværk ad gangen. Vores teknologi skalerer for at møde globale klimamål." }
                ]
            },
            cta: {
                title: "Vær med til at forme fremtiden",
                desc: "Vi leder altid efter talentfulde mennesker, der deler vores vision.",
                button: "Se ledige stillinger"
            },
            featuredExperts: {
                label: "Udvalgte Domæneeksperter",
                title: "Innovationsmestrene",
                experts: [
                    { name: "Dr. Christian Johansson", role: "Medstifter", image: "/images/innovation/christian.webp" },
                    { name: "Dr. Jens Brage", role: "R&D-chef", image: "/images/innovation/jens.webp" },
                    { name: "Tatiana Brandt", role: "CEO", image: "/images/innovation/tatiana.jpg" }
                ]
            }
        },
        successStoriesPage: {
            hero: {
                label: "SUCCESHISTORIER",
                titlePrefix: "Se hvordan NODA",
                titleHighlight: "leverer resultater",
                desc: "Virkelige resultater fra organisationer på tværs af brancher."
            },
            caseStudies: [
                {
                    title: "Total optimering af fjernvarme",
                    sector: "Fjernvarme",
                    challenge: "Lange distributionsledninger i fjernvarmenettet skaber flaskehalse og behov for investeringer i spidsbelastningskapacitet.",
                    solution: "Aktiv efterspørgselsstyring og energitjenester til styring af efterspørgselsprofiler kombineret med eksisterende software til produktionsoptimering.",
                    result: "Forlængelse af levetiden for eksisterende infrastruktur og undgåelse af investeringer i ny spidsbelastningskapacitet.",
                    stats: ["12% øget fleksibilitet", "Minimal tid fra koncept till drift", "Samarbejde mellem efterspørgsel og produktion"]
                },
                {
                    title: "Optimering af skyskrabere",
                    sector: "Ejendomme",
                    client: "Hines",
                    challenge: "Dekarbonisering af bygningsmassen i New York er en løbende udfordring. For at gøre varmepumper omkostningseffektive i stor skala skal de passe sømløst ind i den eksisterende infrastruktur.",
                    solution: "AI-baseret analyse og styring for at optimere ikke kun anvendelsen af nye varmepumper, men også eksisterende gas- og dampløsninger.",
                    result: "Nye varmepumpeløsninger fungerer inden for rammerne af den eksisterende infrastruktur, og eksisterende kunder kan tilbydes aktive energitjenester.",
                    stats: ["Softwareintegration til hurtig idriftsættelse", "Betydelig reduktion af spidsbelastning"]
                },
                {
                    title: "Aktive energitjenester",
                    sector: "Varmeforbrugere",
                    challenge: "Opvarmningssystemer hos forbrugere styres ofte ineffektivt, hvilket fører til højere omkostninger og suboptimalt indeklima.",
                    solution: "Aktive energitjenester med forretningsapplikationer til styring af varmeforbrug, håndtering af efterspørgselsprofiler, forbedrede returtemperaturer og forebyggende vedligeholdelse.",
                    result: "Øget indsigt for energileverandøren koblet med bedre efterspørgselsprofiler og lavere returtemperaturer, mens kunderne reducerer deres omkostninger.",
                    stats: ["10-20% omkostningsbesparelse hos forbrugeren", "Hurtig idriftsættelse af tjenesten", "Øget samarbejde"]
                },
                {
                    title: "Gasreduktion i fjernvarme",
                    sector: "Forsyning",
                    client: "Engie",
                    challenge: "Et produktionsmix med billigere baslastbrændstoffer og dyrere fossil gas til spidsbelastninger. En noget for lille akkumulatortank resulterede i øget gasforbrug.",
                    solution: "Aktiv efterspørgselsstyring på forbrugersiden, der opererer i forhold til temperaturniveauerne i tanken, hvilket skaber virtuel lagring.",
                    result: "Den samlede lagerkapacitet steg med ca. 50%, hvilket førte til en betydelig reduktion i gasforbruget uden at påvirke mængden af solgt energi.",
                    stats: ["14% reduktion i gasforbrug", "Virtuel lagerkapacitet tilføjet", "Reducerede CO2-emissioner"]
                },
                {
                    title: "Optimering af industrielle varmenet",
                    sector: "Produktion",
                    client: "Daimler Truck",
                    challenge: "Et stort industrianlæg stod over for en kraftig stigning i fjernvarmeomkostningerne sammen med en mere kompleks prisstruktur.",
                    solution: "Aktiv styring af fremløbstemperatur, aktiv efterspørgselsstyring i bygninger og løbende analyse for forbedrede parameterindstillinger i hele anlægget.",
                    result: "Reduceret mængde købt fjernvarme (~140 GWh) samt lavere spidsbelastnings- og flowkrav.",
                    stats: ["0,5-1 mio. €/år i reducerede omkostninger", "5°C sænkning af fremløbstemperaturen", "20-30% reduktion i spidsbelastning", "10% energibesparelse"]
                },
                {
                    title: "Netværksstyring i Asien",
                    sector: "Internationalt",
                    challenge: "Høje energiomkostninger og høje spidsbelastninger øger brugen af fossile brændstoffer. Gab mellem udbud og efterspørgsel forårsager varmetab.",
                    solution: "Aktiv efterspørgselsstyring i 83 bygninger (595.000 m²) kombineret med aktiv styring af to blandestationer.",
                    result: "Reduceret forbrug af spidsbelastningsbrændstof og jævnere trykniveauer over hele netværket.",
                    stats: ["23-27% reduktion i spidsbelastning", "200.000 €/år i reducerede omkostninger", "Reducerede CO2-emissioner"]
                },
                {
                    title: "Lasthåndtering for at undgå spidskapacitet",
                    sector: "Forsyning",
                    client: "Göteborg Energi",
                    challenge: "Et behov for store investeringer i spidsbelastningskapacitet for at håndtere nuværende og fremtidige efterspørgselsprofiler.",
                    solution: "Aktiv efterspørgselsstyring og energitjenester til profilstyring for at skabe fleksibilitet.",
                    result: "Forlængelse af levetiden for eksisterende infrastruktur og undgåelse af investeringer i ny spidsbelastningskapacitet.",
                    stats: ["100 MW undgåede investeringer", "5.500 inkluderede bygninger", "Datadeling mellem efterspørgsel og automatisering"]
                }
            ],
            cta: {
                title: "Klar til at skrive jeres succeshistorie?",
                button: "Kontakt os"
            },
            headers: {
                useCases: "Anvendelsesmuligheder",
                provenImpact: "Bevist Effekt",
                subtitle: "Virkelige resultater fra energinetværk verden over.",
                challenge: "Udfordring",
                solution: "Løsning",
                keyResult: "Nøgleresultat"
            },
            ctaMain: {
                title: "Transformer jeres energinetværk i dag.",
                subtitle: "Slut jer til de førende energileverandører, der sætter nye standarder for effektivitet og bæredygtighed med Noda.",
                button: "Kontakt os"
            }
        },
        resourcesPage: {
            hero: {
                label: "RESSOURCER",
                title: "Viden til energiomstillingen",
                desc: "NODA blev grundlagt i 2005 som en spin-off fra det svenske akademiske miljø og demokratiserer AI til energiindustrien. Vores deeptech-løsninger gør det muligt for forsyningsselskaber at fremskynde digitaliseringen, optimere termiske processer og skabe reel forretningsmæssig værdi hurtigt, præcist og gentagne gange.",
                teamLead: "Mød teamet bag denne innovation, eller få adgang til vores hvidbøger, tekniske dokumentation og ekspertindsigt herunder."
            },
            collage: {
                hq: "Hovedkvarter",
                netport: "Netport Science Park",
                netportDesc: "Her begynder vores energiinnovation. Beliggende i hjertet af Karlshamn.",
                est: "2005",
                estDesc: "Grundlagt i Sverige",
                visit: "Besøg os",
                directions: "Find vej"
            },
            dna: {
                label: "Vores DNA",
                title: "Bygget af ingeniører, drevet af formål.",
                desc: "Hos Noda er nysgerrighed vores motor og bæredygtighed vores kompas. Vi tror på, at de sværeste problemer typisk har de mest eleganta løsninger, hvis man ser dybt nok.",
                items: ["Videnskabelig stringens", "Skandinavisk design", "Global ambition"]
            },
            values: {
                label: "Værdier",
                title: "Det, der driver os",
                items: [
                    { title: "Empowerment", desc: "Vi giver vores kunder værktøjerne til at tage kontrol over deres egen energifremtid." },
                    { title: "Gennemsigtighed", desc: "Vi tror på åbne data og klare resultater, vi kan stå inde for." },
                    { title: "Innovation", desc: "Vi udfordrer konstant status quo for at finde smartere måder at spare energi på." }
                ]
            },
            team: [
                { name: "Christian Johansson", role: "Medstifter", image: "/images/innovation/christian.webp" },
                { name: "Martin Olofsson", role: "CTO", image: "/images/resources/Martin.webp" },
                { name: "Charlotta", role: "Driftschef", image: "/images/resources/Charlotta.jpg" },
                { name: "Karl-Johan", role: "Lead Developer", image: "/images/resources/kalle.jpeg" }
            ],
            resources: [
                { title: "Dokumentation", desc: "Tekniske vejledninger, API-reference og integrationsdokumentation.", link: "Vis docs" },
                { title: "Downloads", desc: "Produktark, hvidbøger og præsentationsmateriale.", link: "Gennemse downloads" },
                { title: "Support", desc: "Få hjælp fra vores team med tekniske problemer eller spørgsmål.", link: "Kontakt support" }
            ],
            contact: {
                title: "Kontakt os",
                desc: "Klar til at lære mere om NODA? Vores team er her for at hjælpe dig med at transformere din energistyring.",
                emailLabel: "E-mail",
                email: "info@noda.se",
                openForm: "Åbn formular",
                portalLabel: "Kundeportal",
                portalTitle: "Eksisterende kunde?",
                accessPortal: "Gå til portal",
                hqLabel: "Hovedkvarter",
                hqAddress: "Netport Science Park, 374 35 Karlshamn, Sverige",
                viewMap: "Vis kort",
                headquarters: "Hovedkvarter",
                location: "Netport Science Park, 374 35 Karlshamn, Sverige",
                portal: "Kundeportal",
                openContactForm: "Åbn kontaktformular"
            },
            subItems: {
                apiDocs: "API-dokumentation",
                glossary: "Ordliste",
                whitepaper: "Hvidbog: Energibesparelser",
                caseStudy: "Case Study: Bygningseffektivitet"
            }
        },
    }
};
