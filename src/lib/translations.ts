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
            subtitle: "AI-driven energy management solutions for smart heating and cooling. Unmatched precision and control for a sustainable future.",
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
            desc: "We provide intelligent solutions for smart heating and cooling systems. Our platform connects, monitors, and optimizes thermal networks in real-time.",
            steps: [
                { title: "Connect", desc: "Seamlessly integrate with your existing infrastructure and data sources." },
                { title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
                { title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." },
            ],
            button: "See Success Stories"
        },
        footer: {
            desc: "Intelligent thermal energy systems for a sustainable future.",
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
            subText: "Our AI-driven solutions optimize thermal networks, reduce waste, and help organizations achieve sustainability goals—without compromising comfort or reliability.",
            cards: {
                efficiency: { title: "Efficiency First", desc: "Maximize output, minimize waste" },
                impact: { title: "Global Impact", desc: "Carbon-neutral future" }
            }
        },
        copilot: {
            new: "NEW",
            title: "Meet NODA CoPilot",
            subtitle: "Advanced analytics at your fingertips",
            desc: "An AI-powered module designed for energy and utility companies. Transform complex operational data into actionable insights for smarter thermal energy management decisions.",
            features: [
                "Real-time energy optimization",
                "Predictive maintenance",
                "Carbon footprint tracking",
                "Seamless integration"
            ],
            learnMore: "Learn More",
            metrics: {
                efficiency: "Efficiency",
                savings: "Savings",
                co2: "CO₂ Cut"
            }
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
                titlePrefix: "Meet",
                desc: "Advanced AI analytics for thermal energy optimization. Transform complex operational data into actionable insights.",
                cta: "Request a Demo"
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
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Serving the energy sector with a focus on",
                titleHighlight: "thermal excellence"
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
                { title: "European Energy Provider", sector: "Utilities", result: "35% reduction in energy waste", quote: "NODA's platform has revolutionized how we manage our district heating network." },
                { title: "Nordic Municipality", sector: "Public Sector", result: "€2.4M annual savings", quote: "The integration was seamless, and the results were immediate." },
                { title: "Real Estate Portfolio", sector: "Commercial Buildings", result: "40% efficiency improvement", quote: "We've achieved comfort optimization while significantly cutting costs." },
                { title: "Industrial Complex", sector: "Manufacturing", result: "28% CO₂ reduction", quote: "NODA helped us meet our sustainability targets two years ahead of schedule." }
            ],
            cta: {
                title: "Ready to write your success story?",
                button: "Get in touch"
            }
        },
        resourcesPage: {
            hero: {
                label: "RESOURCES",
                title: "How can we help?"
            },
            resources: [
                { title: "Documentation", desc: "Technical guides, API reference, and integration documentation.", link: "View docs" },
                { title: "Downloads", desc: "Product sheets, whitepapers, and presentation materials.", link: "Browse downloads" },
                { title: "Support", desc: "Get help from our team with technical issues or questions.", link: "Contact support" }
            ],
            contact: {
                title: "Get in touch",
                desc: "Ready to learn more about NODA? Our team is here to help.",
                email: "Email",
                headquarters: "Headquarters",
                location: "Netport Science Park, 374 35 Karlshamn, Sweden",
                portal: "Customer Portal",
                accessPortal: "Access Portal",
                openContactForm: "Open Contact Form"
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
            mainText: "Den globala energieterrfrågan förväntas öka med 21% till 2040. Vi tror att svaret inte ligger i att producera mer energi, utan i att använda det vi har smartare.",
            subText: "Våra AI-drivna lösningar optimerar termiska nätverk, minskar spill och hjälper organisationer att nå hållbarhetsmål—utan att kompromissa med komfort eller tillförlitlighet.",
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
                titlePrefix: "Möt",
                desc: "Avancerad AI-analys för optimering av termisk energi. Omvandla komplexa driftdata till praktiska insikter.",
                cta: "Begär en Demo"
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
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Vi betjänar energisektorn med fokus på",
                titleHighlight: "termisk excellens"
            },
            values: {
                title: "Vad som driver oss",
                items: [
                    { title: "Effektivitet Först", desc: "Varje beslut optimerar för maximal output med minimalt avfall. Vi tror att effektivitet är grunden för hållbarhet." },
                    { title: "Kundfokus", desc: "Våra lösningar byggs i nära samarbete med energibolag, allmännyttiga företag och fastighetsägare som möter verkliga utmaningar dagligen." },
                    { title: "Global Påverkan", desc: "Vi arbetar mot en koldioxidneutral framtid, ett termiskt nätverk i taget. Vår teknik skalar för att möta globala klimatmål." }
                ]
            },
            cta: {
                title: "Var med och forma framtiden",
                desc: "Vi letar alltid efter talanger som delar vår vision.",
                button: "Se lediga tjänster"
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
                { title: "Europeisk Energileverantör", sector: "Allmännytta", result: "35% minskning av energispill", quote: "NODAs plattform har revolutionerat hur vi hanterar vårt fjärrvärmenät." },
                { title: "Nordisk Kommun", sector: "Offentlig Sektor", result: "€2.4M årliga besparingar", quote: "Integrationen var sömlös och resultaten var omedelbara." },
                { title: "Fastighetsportfölj", sector: "Kommersiella Byggnader", result: "40% effektivitetsförbättring", quote: "Vi har uppnått komfortoptimering samtidigt som vi har sänkt kostnaderna avsevärt." },
                { title: "Industrikomplex", sector: "Tillverkning", result: "28% CO₂-minskning", quote: "NODA hjälpte oss att nå våra hållbarhetsmål två år före tidtabell." }
            ],
            cta: {
                title: "Redo att skriva er framgångssaga?",
                button: "Kontakta oss"
            }
        },
        resourcesPage: {
            hero: {
                label: "RESURSER",
                title: "Hur kan vi hjälpa till?"
            },
            resources: [
                { title: "Dokumentation", desc: "Tekniska guider, API-referens och integrationsdokumentation.", link: "Visa dokumentation" },
                { title: "Nedladdningar", desc: "Produktblad, whitepapers och presentationsmaterial.", link: "Bläddra bland nedladdningar" },
                { title: "Support", desc: "Få hjälp av vårt team med tekniska problem eller frågor.", link: "Kontakta support" }
            ],
            contact: {
                title: "Kontakta oss",
                desc: "Redo att lära dig mer om NODA? Vårt team är här för att hjälpa till.",
                email: "E-post",
                headquarters: "Huvudkontor",
                location: "Netport Science Park, 374 35 Karlshamn, Sverige",
                portal: "Kundportal",
                accessPortal: "Gå till Portal",
                openContactForm: "Öppna Kontaktformulär"
            }
        }
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
            subText: "Vores AI-drevne løsninger optimerer termiske netværk, reducerer spild og hjælper organisationer med at nå bæredygtighedsmål—uden at gå på kompromis med komfort eller pålidelighed.",
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
                titlePrefix: "Mød",
                desc: "Avanceret AI-analyse til optimering af termisk energi. Omdan komplekse driftsdata til handlingsrettet indsigt.",
                cta: "Anmod om en Demo"
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
            }
        },
        innovationPage: {
            hero: {
                label: "INNOVATION",
                titlePrefix: "Vi betjener energisektoren med fokus på",
                titleHighlight: "termisk ekspertise"
            },
            values: {
                title: "Hvad der driver os",
                items: [
                    { title: "Effektivitet Først", desc: "Hver beslutning optimerer for maksimalt output med minimalt spild. Vi tror på, at effektivitet er fundamentet for bæredygtighed." },
                    { title: "Kundefokus", desc: "Vores løsninger bygges i tæt samarbejde med energiselskaber, forsyningsselskaber og bygningsejere, der står over for reelle udfordringer dagligt." },
                    { title: "Global Indflydelse", desc: "Vi arbejder mod en kulstofneutral fremtid, ét termisk netværk ad gangen. Vores teknologi skalerer for at møde globale klimamål." }
                ]
            },
            cta: {
                title: "Vær med til at forme fremtiden",
                desc: "Vi leder altid efter talentfulde mennesker, der deler vores vision.",
                button: "Se ledige stillinger"
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
                { title: "Europæisk Energileverandør", sector: "Forsyning", result: "35% reduktion i energispill", quote: "NODAs platform har revolutioneret, hvordan vi styrer vores fjernvarmenet." },
                { title: "Nordisk Kommune", sector: "Offentlig Sektor", result: "€2.4M årlige besparelser", quote: "Integrationen var problemfri, og resultaterne var øjeblikkelige." },
                { title: "Ejendomsportefølje", sector: "Kommercielle Bygninger", result: "40% effektivitetsforbedring", quote: "Vi har opnået komfortoptimering samtidig med betydelige omkostningsbesparelser." },
                { title: "Industrikomplex", sector: "Produktion", result: "28% CO₂-reduktion", quote: "NODA hjalp os med at nå vores bæredygtighedsmål to år før tidsplanen." }
            ],
            cta: {
                title: "Klar til at skrive jeres succeshistorie?",
                button: "Kontakt os"
            }
        },
        resourcesPage: {
            hero: {
                label: "RESSOURCER",
                title: "Hvordan kan vi hjælpe?"
            },
            resources: [
                { title: "Dokumentation", desc: "Tekniske guider, API-reference og integrationsdokumentation.", link: "Se dokumentation" },
                { title: "Downloads", desc: "Produktblade, whitepapers og præsentationsmateriale.", link: "Gennemse downloads" },
                { title: "Support", desc: "Få hjælp fra vores team med tekniske problemer eller spørgsmål.", link: "Kontakt support" }
            ],
            contact: {
                title: "Kontakt os",
                desc: "Klar til at lære mere om NODA? Vores team er her for at hjælpe.",
                email: "E-mail",
                headquarters: "Hovedkvarter",
                location: "Netport Science Park, 374 35 Karlshamn, Sverige",
                portal: "Kundeportal",
                accessPortal: "Gå till Portal",
                openContactForm: "Åbn Kontaktformular"
            }
        }
    }
};
