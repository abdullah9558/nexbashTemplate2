const stories = [
    {
      id: 'geospatial',
      tag: 'Utilities · Public Works · Urban Planning',
      title: 'Enterprise 3D Geospatial Intelligence Platform',
      description: 'A SaaS platform eliminating data silos by integrating satellite imagery, aerial photogrammetry, and ground-sensor feeds into a single, high-performance 3D rendering pipeline for real-time situational awareness.',
      image: '/assets/project-geospatial.png',
      industry: 'Utilities · Public Works · Urban Planning',
      duration: '14 months (ongoing) · 8-12 engineers and data scientists',
      metrics: [
        {
          value: '45%',
          label: 'Faster Analysis Time'
        },
        {
          value: '99.9%',
          label: 'System Uptime'
        },
        {
          value: '10TB+',
          label: 'Daily Data Processing'
        }
      ],
      challenge: 'Legacy systems created data silos preventing real-time decision making. Teams operated with disconnected tools across satellite imagery, aerial surveys, and ground sensors. This fragmentation resulted in delayed analysis, missed insights, and inability to coordinate emergency response or infrastructure planning across departments.',
      solution: 'We built a unified 3D geospatial platform integrating multi-source sensor data into a high-performance rendering pipeline. The system combines satellite imagery, aerial photogrammetry, and IoT ground sensors into coherent 3D models. Real-time processing engines enable instant analysis and cross-departmental coordination with sub-second query response times.',
      implementation: [
        {
          title: 'Multi-Source Data Integration',
          text: 'Standardized and ingested satellite, photogrammetry, and sensor data'
        },
        {
          title: '3D Rendering Pipeline',
          text: 'Built high-performance WebGL/Three.js rendering for 100TB+ datasets'
        },
        {
          title: 'Real-Time Query Engine',
          text: 'Implemented spatial indexing for sub-second analysis queries'
        },
        {
          title: 'Cross-Department Portal',
          text: 'Deployed collaborative interface for unified situational awareness'
        }
      ],
      stack: {
        'Tools & Languages': [
          'Three.js',
          'PostGIS',
          'Python',
          'GDAL',
          'Mapbox GL'
        ],
        Frameworks: [
          'Express.js',
          'WebGL',
          'OpenGL'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Elasticsearch',
          'Redis'
        ],
        Infrastructure: [
          'AWS',
          'S3',
          'CloudFront',
          'GPU Acceleration'
        ]
      },
      achievements: [
        'Integrated satellite, photogrammetry, and sensor data in single platform',
        'Achieved 45% faster analysis time vs legacy systems',
        'Maintained 99.9% uptime processing 10TB+ daily data',
        'Enabled real-time coordination across 5+ departments'
      ]
    },
    {
      id: 'market-insights',
      tag: 'Business Intelligence · Retail · Marketing Technology',
      title: 'Business Intelligence & Market Insights Platform',
      description: 'A GIS-Based SaaS platform unifying fragmented business registration data and consumer behavior silos to drive smarter site selection and targeted marketing campaigns.',
      image: '/assets/project-market-insights.png',
      industry: 'Business Intelligence · Retail · Marketing Technology',
      duration: '28 months (Ongoing) · 6-10 engineers, data specialists, and product designers',
      metrics: [
        {
          value: '-60%',
          label: 'Reduced Analytics Reliance'
        },
        {
          value: '92%',
          label: 'Growth Prediction Accuracy'
        },
        {
          value: '4x',
          label: 'Optimized Marketing'
        }
      ],
      challenge: 'Enterprises and retail chains often struggle with vast amounts of siloed customer data that lacks spatial context. Without the ability to visualize where customers are actually located relative to store locations, businesses face an inability to plan targeted marketing or optimize expansion strategies. This disconnect results in wasted ad spend and missed opportunities in high-potential geographic clusters.',
      solution: 'We engineered a comprehensive GIS-driven visualization platform that ingests CRM data to generate real-time insights. By utilizing AI-based customer profiling, the system identifies high-value retail clusters. Furthermore, it features integrated Meta and Google ad management, allowing marketers to instantly push geo-fenced campaigns to specific high-performing zones directly from the map interface.',
      implementation: [
        {
          title: 'Data Integration & Normalization',
          text: 'Unified CRM, geo-location, and transaction data across 50+ retail chains'
        },
        {
          title: 'GIS Visualization Layer',
          text: 'Built interactive map interface with Mapbox for real-time cluster analysis'
        },
        {
          title: 'AI Customer Profiling',
          text: 'Implemented ML models for predictive customer segmentation'
        },
        {
          title: 'Ad Campaign Integration',
          text: 'Connected Meta and Google APIs for geo-fenced campaign deployment'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React',
          'TypeScript',
          'PostGIS',
          'Python'
        ],
        Frameworks: [
          'Express.js',
          'GraphQL',
          'Mapbox'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Redis'
        ],
        Infrastructure: [
          'AWS',
          'Docker',
          'S3'
        ]
      },
      achievements: [
        'Unified data from 50+ retail locations into single GIS interface',
        'Achieved 92% accuracy in growth prediction models',
        'Reduced marketing spend waste by 60%',
        'Enabled 10x faster site selection analysis'
      ]
    },
    {
      id: 'smart-home',
      tag: 'Smart Home · IoT · Consumer Application',
      title: 'Smart Living & Device Management Platform',
      description: 'A unified digital experience merging smart home controls with personal health metrics, eliminating app fragmentation and enabling context-aware automation.',
      image: '/assets/project-smart-home.png',
      industry: 'Smart Home · IoT · Consumer Application',
      duration: 'Ongoing product development · Mobile, backend, and IoT integration teams',
      metrics: [
        {
          value: '1 App',
          label: 'Simplified Management'
        },
        {
          value: '+45%',
          label: 'Higher Engagement'
        },
        {
          value: 'Sync',
          label: 'Seamless Health Integration'
        }
      ],
      challenge: 'Users needed a single, reliable mobile application to manage and monitor multiple smart home devices while also viewing selected personal health metrics. Existing solutions were fragmented, requiring separate apps for device control and data visibility.',
      solution: 'Delivered an iOS-based smart living platform that acts as a central hub for controlling connected devices such as lights, sensors, and appliances. Integrated device management with automation and status monitoring to simplify everyday smart home interactions. Enabled HealthKit integration to sync supported body metrics, allowing users to view selected health data alongside their smart living controls.',
      implementation: [
        {
          title: 'Device Ecosystem Mapping',
          text: 'Catalogued 50+ IoT device manufacturers and standardized communication protocols'
        },
        {
          title: 'HomeKit Integration',
          text: 'Implemented Apple HomeKit framework for secure device pairing and control'
        },
        {
          title: 'HealthKit Synchronization',
          text: 'Built bidirectional sync with HealthKit for 15+ health data types'
        },
        {
          title: 'Context-Aware Automation',
          text: 'Created intelligent automation rules based on device state and health metrics'
        }
      ],
      stack: {
        'Tools & Languages': [
          'Swift',
          'HomeKit',
          'HealthKit'
        ],
        Frameworks: [
          'iOS SDK',
          'Combine',
          'SwiftUI'
        ],
        Infrastructure: [
          'AWS IoT Core',
          'Firebase',
          'CloudKit'
        ]
      },
      achievements: [
        'Unified 50+ IoT device manufacturers into single interface',
        'Achieved 99.9% uptime for critical device control systems',
        'Integrated HealthKit with 15+ health data types seamlessly',
        'Reduced app context switching by 87% for users'
      ]
    },
    {
      id: 'digital-archive',
      tag: 'Knowledge Management · Public Sector · Research Institutions',
      title: 'National Digital Archive & Information Gateway',
      description: 'Unifying 50+ years of archived research, multimedia assets, and institutional records into a single, searchable, governed digital ecosystem.',
      image: '/assets/project-digital-archive.png',
      industry: 'Knowledge Management · Public Sector · Research Institutions',
      duration: '09 months · 4-6 engineers and product specialists',
      metrics: [
        {
          value: '40,000+',
          label: 'Documents Processed'
        },
        {
          value: '~92%',
          label: 'Reduction in Retrieval Time'
        }
      ],
      challenge: 'Government records were deteriorating in obsolete physical formats. Departments operated in isolation with distinct metadata standards, making cross-agency data sharing impossible. The lack of a unified digital strategy meant critical historical footage and legislative documents were inaccessible to the public and internal researchers alike, creating a "dark archive" of unsearchable assets.',
      solution: 'We engineered a cloud-native Centralized Portal powered by a robust search engine. The solution introduces a governed publishing workflow that enforces metadata standards upon ingestion. By utilizing automated tagging and optical character recognition (OCR), we transformed static files into searchable, interconnected knowledge assets. Dublin Core metadata standardization ensures consistency across all media types.',
      implementation: [
        {
          title: 'Legacy System Assessment',
          text: 'Analyzed 50+ years of physical and digital records across 15 agencies'
        },
        {
          title: 'Metadata Standardization',
          text: 'Implemented Dublin Core standards for unified metadata across all asset types'
        },
        {
          title: 'Automated OCR & Tagging',
          text: 'Processed 40,000+ documents with Apache Tesseract and AI-based tagging'
        },
        {
          title: 'Search & Discovery Layer',
          text: 'Deployed Elasticsearch with full-text indexing for sub-300ms query response'
        }
      ],
      stack: {
        'Tools & Languages': [
          'Elasticsearch',
          'Apache Tesseract',
          'Python',
          'React'
        ],
        'Backend Services': [
          'PostgreSQL',
          'Cloud Backend',
          'Node.js'
        ],
        Infrastructure: [
          'AWS',
          'Docker',
          'S3 Object Storage',
          'CloudFront',
          'Data Standards',
          'Dublin Core',
          'DICOM v3.0',
          'H.7 FHIR R4'
        ]
      },
      achievements: [
        'Successfully digitized 50+ years of government records',
        'Achieved 92% reduction in document retrieval time',
        'Enabled cross-agency data sharing for first time',
        'Made 40,000+ documents publicly accessible via unified portal'
      ]
    },
    {
      id: 'property-regtech',
      tag: 'Real Estate · Property Management · Public Sector Compliance',
      title: 'Property Management & Regulatory Intelligence Platform',
      description: 'We took a chaotic web of local bylaws and turned them into a single, intelligent engine. By using ElasticSearch, we have made it possible for enterprise portfolios to get NOCs automatically with instant data-backed clarity.',
      image: '/assets/project-property-regtech.png',
      industry: 'Real Estate · Property Management · Public Sector Compliance',
      duration: '10 months · 5-7 engineers and domain specialists',
      metrics: [
        {
          value: '10X',
          label: 'Regulatory Speed'
        },
        {
          value: '99.9%',
          label: 'Due Diligence Accuracy'
        },
        {
          value: '-85%',
          label: 'Compliance Overhead'
        }
      ],
      challenge: 'Property managers and stakeholders struggled to manage property records while complying with complex, location-specific government regulations, NOCs, and legislation. Regulatory data was fragmented across departments, making verification, reporting, and due diligence slow and error-prone.',
      solution: 'Delivered a property management platform that centralizes property records and integrates regulatory and legislative data into a unified system. Implemented ElasticSearch-powered indexing to enable fast retrieval of property details, government approvals, and compliance status. Built configurable reporting workflows that generate detailed, location-aware property reports aligned with local authority rules and NOC requirements.',
      implementation: [
        {
          title: 'Regulatory Data Consolidation',
          text: 'Aggregated bylaws, NOC requirements, and legislation from 50+ local jurisdictions'
        },
        {
          title: 'Elasticsearch Implementation',
          text: 'Built sub-second search index for 100,000+ regulatory documents'
        },
        {
          title: 'Property Record Management',
          text: 'Centralized property data with automated compliance status updates'
        },
        {
          title: 'Automated Report Generation',
          text: 'Created configurable workflows for location-aware compliance reports'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React',
          'Tailwind CSS',
          'TypeScript',
          'Mapbox'
        ],
        Frameworks: [
          'Express.js',
          'Redux'
        ],
        'Backend Services': [
          'Elastic Search',
          'PostgreSQL',
          'Node.js'
        ],
        Infrastructure: [
          'AWS',
          'Docker',
          'RDS'
        ]
      },
      achievements: [
        'Consolidated 50+ jurisdiction regulatory databases',
        'Achieved 10x faster regulatory verification process',
        'Reduced compliance overhead by 85% through automation',
        'Maintained 99.9% accuracy in due diligence assessments'
      ]
    },
    {
      id: 'fashion-ree',
      tag: 'E-commerce · Fashion · Mobile Marketplaces',
      title: 'Ree: The Future of P2P Fashion',
      description: 'A mobile-first marketplace designed to revolutionize the circular fashion economy by building trust, simplifying the listing process, and creating a social shopping experience.',
      image: '/assets/project-fashion-ree.png',
      industry: 'E-commerce · Fashion · Mobile Marketplaces',
      duration: 'Ongoing releases · Mobile and backend development team',
      metrics: [
        {
          value: '64%',
          label: 'Sustainable, Repeat Usage'
        },
        {
          value: '3.2x',
          label: 'Inventory Turnover'
        },
        {
          value: '99.9%',
          label: 'Uptime Guaranteed'
        }
      ],
      challenge: 'Peer-to-peer fashion discovery is traditionally plagued by clutter and lack of trust. Users struggle to find quality items amidst thousands of poor-quality listings, while sellers face high drop-off rates due to complex listing processes. Existing platforms suffer from significant transaction friction and low user retention, making "the hunt" for vintage items more frustrating than rewarding.',
      solution: 'We implemented a refined item listing workflow that guides sellers through structured data entry, enabling powerful filtering algorithms on the backend. The solution introduces a "Smart Feed" that learns from user interactions to present relevant items, coupled with a secure messaging system that builds trust between buyer and seller before the transaction occurs.',
      implementation: [
        {
          title: 'Seller Onboarding Simplification',
          text: 'Built guided workflow reducing listing time from 15 minutes to 3 minutes'
        },
        {
          title: 'Smart Feed Development',
          text: 'Implemented ML-based recommendation engine using collaborative filtering'
        },
        {
          title: 'Trust & Messaging System',
          text: 'Created secure messaging and dispute resolution mechanisms'
        },
        {
          title: 'Payment & Escrow',
          text: 'Integrated Stripe for secure escrow-based transactions'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React Native',
          'TypeScript',
          'Stripe API'
        ],
        Frameworks: [
          'Redux',
          'Express.js'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Firebase'
        ],
        Infrastructure: [
          'AWS',
          'Docker',
          'CDN'
        ]
      },
      achievements: [
        'Reduced seller listing time by 80% through guided workflow',
        'Achieved 3.2x faster inventory turnover',
        'Maintained 64% sustainable repeat usage rate',
        'Processed $150M+ in transaction volume annually'
      ]
    },
    {
      id: 'work-os',
      tag: 'Productivity · Team Collaboration · SaaS',
      title: 'The Operating System for Modern Work',
      description: 'A comprehensive project to streamline organizational workflows by centralizing communication, task management, and file storage into a single, synchronized interface.',
      image: '/assets/project-work-os.png',
      industry: 'Productivity · Team Collaboration · SaaS',
      duration: '18 Months · Cross-functional product and engineering team',
      metrics: [
        {
          value: '2.5h/day',
          label: 'Saved per User on Team'
        },
        {
          value: '+40%',
          label: 'Sprint Velocity'
        },
        {
          value: '99.9%',
          label: 'Uptime Guaranteed'
        }
      ],
      challenge: 'Modern distributed teams face significant friction due to disconnected toolchains. Information is fragmented across email, instant messaging apps, and separate task management boards. This "tool fatigue" results in constant context switching, lost data, and a 25% decrease in overall operational efficiency as teams struggle to maintain a single source of truth for their projects.',
      solution: 'Flow introduces a unified workspace that bridges the gap between communication and execution. By embedding chat directly within task contexts and file repositories, we eliminated silos. The platform leverages a high-performance sync engine to ensure every stakeholder sees the same state, instantly. Intelligent assignment and automated status updates based on activity reduce manual overhead.',
      implementation: [
        {
          title: 'Workflow Analysis & Design',
          text: 'Studied 50+ teams to understand communication and task patterns'
        },
        {
          title: 'Core Platform Development',
          text: 'Built unified workspace with embedded chat and task context'
        },
        {
          title: 'Real-Time Sync Engine',
          text: 'Implemented WebSocket-based synchronization for instant updates'
        },
        {
          title: 'AI-Powered Automation',
          text: 'Added intelligent task assignment and status auto-updates'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React',
          'TypeScript',
          'WebSocket'
        ],
        Frameworks: [
          'Express.js',
          'Socket.io',
          'GraphQL'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Redis'
        ],
        Infrastructure: [
          'AWS',
          'Kubernetes',
          'CloudFront'
        ]
      },
      achievements: [
        'Reduced context switching by 87% for average user',
        'Saved 2.5 hours per day per team member',
        'Increased sprint velocity by 40% across teams',
        'Maintained 99.9% uptime with <100ms sync latency'
      ]
    },
    {
      id: 'healthcare-ai',
      tag: 'Healthcare · Clinical Diagnostics',
      title: 'AI-Enabled Early Cancer Detection Platform',
      description: 'A clinical deep-dive into pixel-level diagnostic accuracy & real-time implementation for early-stage pulmonary nodule detection using neural networks.',
      image: '/assets/project-healthcare-ai.png',
      industry: 'Healthcare · Clinical Diagnostics',
      duration: '12 months · 6-10 specialists',
      metrics: [
        {
          value: '98.4%',
          label: 'Total Detection Rate'
        },
        {
          value: '2.4x',
          label: 'Efficiency Multiplier'
        },
        {
          value: '-15%',
          label: 'Operational Cost Reduction'
        }
      ],
      challenge: 'Early-stage oncology diagnostics face a critical bottleneck: the manual review of thousands of high-resolution DICOM slices. Radiologists are under increasing pressure, leading to fatigue-induced oversights in identifying anomalies smaller than 3mm. Current manual screening methods exhibit a baseline accuracy of 82.1%, with a significant 12.5% false positive rate that leads to unnecessary invasive biopsies.',
      solution: 'We implemented a multi-stage Deep Convolutional Neural Network (DCNN) architecture specifically optimized for pixel-level anomaly detection in volumetric medical data. The system utilizes a custom feature pyramid network (FPN) to maintain spatial awareness across different zoom levels, ensuring that even sub-millimeter nodules are identified with high confidence. Direct DICOM integration with hospital PACS systems eliminates conversion loss.',
      implementation: [
        {
          title: 'Clinical Dataset Curation',
          text: 'Assembled 10,000+ annotated DICOM scans from 20+ medical institutions'
        },
        {
          title: 'DCNN Architecture Development',
          text: 'Designed and trained multi-stage network with custom FPN module'
        },
        {
          title: 'Validation & Clinical Trials',
          text: 'Conducted rigorous validation against radiologist benchmark'
        },
        {
          title: 'PACS Integration',
          text: 'Direct integration with hospital systems for seamless workflow'
        }
      ],
      stack: {
        'Tools & Languages': [
          'OpenCV',
          'NumPy',
          'Scikit-learn'
        ],
        Frameworks: [
          'PyTorch 2.0',
          'FastAPI',
          'CUDA 11.8',
          'TensorFlow'
        ],
        Infrastructure: [
          'Python',
          'AWS HealthLake',
          'Docker',
          'GPU Acceleration',
          'Data Standards',
          'DICOM v3.0',
          'HL7 FHIR R4'
        ]
      },
      achievements: [
        'Achieved 98.4% detection rate vs 82.1% baseline',
        'Reduced false positive rate from 12.5% to 3.2%',
        'Enabled sub-15ms inference on GPU',
        'FDA-cleared for clinical use in 12 institutions'
      ]
    },
    {
      id: 'cyber-punk',
      tag: 'Web3 · Cryptocurrency · Fintech · Gaming',
      title: 'Cyber Punk Wallet',
      description: 'A next-generation Web3 wallet redesigned for the gaming-native crypto community, combining decentralized asset management with gamified rewards and social trading features.',
      image: '/assets/story-cyber-punk.webp',
      industry: 'Web3 · Cryptocurrency · Fintech · Gaming',
      duration: 'Ongoing expansion · Mobile, blockchain, and backend teams',
      metrics: [
        {
          value: '87%',
          label: 'Active Daily Users'
        },
        {
          value: '42M',
          label: 'Daily Transaction Volume'
        },
        {
          value: '9.2%',
          label: 'Average Yield Generated'
        }
      ],
      challenge: 'Traditional crypto wallets suffer from steep learning curves and complex UX that alienates gaming and younger audiences. Users struggle with asset fragmentation across multiple wallets, lack transparent trading mechanisms, and miss opportunities for yield optimization. Current solutions fail to combine security with social engagement and rewards mechanisms.',
      solution: 'We engineered a Web3 wallet with a futuristic cyberpunk aesthetic that democratizes crypto management for gaming communities. The platform features instant multi-chain asset aggregation with real-time portfolio analytics, integrated DEX routing for optimal swap execution, and a social leaderboard system that gamifies yield farming and trading. Smart contract automation enables non-custodial staking rewards without manual claiming.',
      implementation: [
        {
          title: 'Gaming Community Research',
          text: 'Conducted UX research with 2,000+ gaming and crypto users'
        },
        {
          title: 'Multi-Chain Integration',
          text: 'Implemented support for Ethereum, Polygon, and Arbitrum chains'
        },
        {
          title: 'DEX Routing Optimization',
          text: 'Built smart routing engine for optimal token swaps'
        },
        {
          title: 'Gamification & Social Layer',
          text: 'Created leaderboards and social trading features'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React Native',
          'Web3.js',
          'Ethers.js',
          'TypeScript'
        ],
        Frameworks: [
          'Redux',
          'GraphQL',
          'Express.js'
        ],
        'Backend Services': [
          'Node.js',
          'Solidity',
          'Hardhat'
        ],
        Infrastructure: [
          'AWS',
          'IPFS',
          'Infura API'
        ]
      },
      achievements: [
        'Achieved 87% daily active user rate (industry benchmark: 25%)',
        'Processed $42M+ daily transaction volume',
        'Generated 9.2% average yield for users',
        'Onboarded 500,000+ users from gaming communities'
      ]
    },
    {
      id: 'authentic-voices',
      tag: 'Web3 · Social Media · Creator Economy · Fintech',
      title: 'Authentic Voices: AI-Powered Creator Network',
      description: 'A Web3-native social media platform where every moment goes live with AI-assisted content discovery, blockchain-backed creator monetization, and decentralized content ownership.',
      image: '/assets/story-authentic-voices.webp',
      industry: 'Web3 · Social Media · Creator Economy · Fintech',
      duration: '16 Months · AI, mobile, blockchain, and community teams',
      metrics: [
        {
          value: '2.3M',
          label: 'Active Creators Onboarded'
        },
        {
          value: '$47M',
          label: 'Creator Earnings Generated'
        },
        {
          value: '78%',
          label: 'Content Ownership Retention'
        }
      ],
      challenge: 'Traditional social media platforms extract value from creators while offering limited monetization and no content ownership rights. Content discovery algorithms perpetuate echo chambers, authentic moments are buried in algorithmic feeds, and creators lack direct economic incentives. Users struggle to build authentic communities while platforms control data and engagement metrics.',
      solution: 'We built a Web3 social platform with AI-powered content recommendation that prioritizes authentic engagement over engagement maximization. Creators earn through tokenized rewards, direct fan support, and retained copyright ownership via NFT-backed content anchored on-chain. An AI assistant selection mechanism matches creators with niche audiences using sophisticated sentiment and content quality analysis, ensuring discovery surfaces meaningful moments rather than algorithmic noise.',
      implementation: [
        {
          title: 'Creator Research & Interviews',
          text: 'Conducted 200+ interviews with creators across platforms'
        },
        {
          title: 'AI Discovery Engine',
          text: 'Developed NLP-based sentiment and content quality analysis'
        },
        {
          title: 'Blockchain Integration',
          text: 'Implemented NFT-backed content ownership on Polygon'
        },
        {
          title: 'Monetization & Rewards',
          text: 'Built tokenized rewards and direct fan support mechanisms'
        }
      ],
      stack: {
        'Tools & Languages': [
          'React',
          'Next.js',
          'TypeScript',
          'TensorFlow.js'
        ],
        Frameworks: [
          'Express.js',
          'GraphQL',
          'Hardhat'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Web3.py'
        ],
        Infrastructure: [
          'AWS',
          'IPFS',
          'Arweave',
          'Polygon'
        ]
      },
      achievements: [
        'Onboarded 2.3M creators with 78% content ownership retention',
        'Generated $47M+ in direct creator earnings',
        'Reduced algorithmic echo chamber effect by 65%',
        'Achieved 40% higher authentic engagement vs competitors'
      ]
    },
    {
      id: 'ai-music',
      tag: 'Music Technology · Audio AI · Creator Economy',
      title: 'AI Music Revolution Platform',
      description: 'A cutting-edge music creation platform powered by generative AI, enabling musicians to compose songs, create AI covers with diverse voice models, and collaborate in real-time with intelligent voice synthesis.',
      image: '/assets/story-ai-music.webp',
      industry: 'Music Technology · Audio AI · Creator Economy',
      duration: '14 Months · AI/ML, audio engineering, and product teams',
      metrics: [
        {
          value: '1.8M',
          label: 'Songs Generated'
        },
        {
          value: '52K',
          label: 'AI Cover Creations/Month'
        },
        {
          value: '94%',
          label: 'Quality Satisfaction Rating'
        }
      ],
      challenge: 'Music production traditionally requires expensive equipment, years of training, and access to professional studios. Emerging artists face prohibitive costs, lack of voice talent access, and complex workflows that slow creative iteration. Cover creation requires expensive session musicians, and cross-language music distribution remains fragmented and inaccessible to independent creators.',
      solution: 'We engineered a generative AI music platform that democratizes production by combining natural language song description generation with state-of-the-art voice synthesis models. The system features an intelligent voice library with multi-language support and artist-licensed voice clones, enabling creators to generate AI covers instantly. Real-time collaborative workspace allows multiple artists to iterate on compositions, with advanced prompt engineering guiding AI generation toward specific emotional and sonic profiles.',
      implementation: [
        {
          title: 'Music AI Model Training',
          text: 'Trained generative models on 1M+ songs from diverse genres'
        },
        {
          title: 'Voice Synthesis Engine',
          text: 'Implemented multi-language voice synthesis with artist licensing'
        },
        {
          title: 'Natural Language Interface',
          text: 'Built prompt engineering system for precise music generation'
        },
        {
          title: 'Collaborative Workspace',
          text: 'Developed real-time collaboration features for multiple artists'
        }
      ],
      stack: {
        'Tools & Languages': [
          'TensorFlow',
          'PyTorch',
          'Librosa',
          'React'
        ],
        Frameworks: [
          'FastAPI',
          'GraphQL',
          'WebSocket'
        ],
        'Backend Services': [
          'Node.js',
          'PostgreSQL',
          'Redis'
        ],
        Infrastructure: [
          'AWS',
          'GPU Acceleration',
          'Docker'
        ]
      },
      achievements: [
        'Generated 1.8M+ songs with 94% user satisfaction',
        'Created 52K+ AI covers monthly',
        'Supported 50+ languages and musical genres',
        'Reduced music production time from weeks to hours'
      ]
    }
  ];

export default stories;
