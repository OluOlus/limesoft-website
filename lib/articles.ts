export const AUTHORS = {
  adewale: { name: 'Adewale',     role: 'Network Engineer',  initials: 'AD', color: '#018ad8' },
  olu:     { name: 'Olu Oluseki', role: 'Cloud & DevOps',    initials: 'OO', color: '#38bdf8' },
}

export type Author = typeof AUTHORS.adewale

export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type Article = {
  slug: string
  category: string
  readTime: string
  date: string
  title: string
  excerpt: string
  href: string
  author: Author
  body: ArticleSection[]
}

export const allArticles: Article[] = [
  {
    slug: 'zero-trust-architecture',
    category: 'Cybersecurity',
    readTime: '8 min read',
    date: 'March 2026',
    title: 'Zero Trust Architecture: Why Perimeter Security Is No Longer Enough',
    excerpt:
      'The traditional "castle and moat" approach to network security is obsolete. With hybrid workforces, multi-cloud environments, and increasingly sophisticated threat actors, organisations need a fundamentally different model.',
    href: '/resources/zero-trust-architecture',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'The Death of the Perimeter',
        paragraphs: [
          'For decades, the network perimeter was the defining boundary of enterprise security. The logic was straightforward: build a hard shell around your internal network, and anything inside is trusted. Firewalls kept the bad actors out; VPNs punched controlled holes through the wall. It worked reasonably well when employees sat in offices and data lived in on-premises data centres.',
          'That world no longer exists. Today\'s enterprise network has no clear edge. Applications run across AWS, Azure, and SaaS platforms. Employees work from home, from hotels, from client sites. Contractors, vendors, and partners access internal systems daily. The perimeter has dissolved — and the security models built around it are now a liability rather than a defence.',
        ],
      },
      {
        heading: 'What Zero Trust Actually Means',
        paragraphs: [
          'Zero Trust is not a product — it is a security philosophy captured in three principles: verify explicitly, use least privilege access, and assume breach. Every access request is authenticated and authorised based on all available data points: identity, device health, location, service, workload, and data classification. Nothing is assumed safe simply because it is "inside the network".',
          'In practice, Zero Trust means replacing implicit trust with continuous verification. A user logging in from a managed corporate device gets one level of access; the same user logging in from an unmanaged personal laptop on a coffee shop network gets a dramatically reduced scope — or triggers an additional authentication challenge. The system makes the access decision in real time, every time.',
          'Key technical components include identity and access management (IAM), multi-factor authentication (MFA), micro-segmentation, device health attestation, and behavioural analytics. Vendors like Microsoft (with their Entra ID and Conditional Access tooling), Palo Alto Networks, and Cisco have built comprehensive Zero Trust platforms — but the architecture requires careful design before any vendor selection.',
        ],
      },
      {
        heading: 'Implementation: Where to Start',
        paragraphs: [
          'Zero Trust adoption is a journey, not a switch. Most organisations begin with identity — ensuring every user is authenticated with MFA and that access is governed by role. This is the highest-impact, lowest-disruption starting point, and Microsoft 365 environments make it particularly accessible through Entra ID Conditional Access policies.',
          'The second phase typically involves device management. Enrolling devices in Microsoft Intune or a similar MDM platform enables the organisation to assess device health before granting access. A device that has not received recent security patches, or one that is not encrypted, can be blocked from sensitive resources automatically.',
          'Network micro-segmentation and application-level access controls come later — and are where the architecture becomes more complex. The goal is to replace broad VPN tunnels (which grant access to entire network segments) with application-specific proxies that authenticate each session individually. This is where Palo Alto\'s Prisma Access and Zscaler Private Access excel.',
        ],
      },
      {
        heading: 'The Business Case Beyond Compliance',
        paragraphs: [
          'Many organisations initially approach Zero Trust as a compliance requirement — for Cyber Essentials, ISO 27001, NDPA, or GDPR. The compliance framing is real, but the business case runs deeper. Breaches that originate from compromised credentials (which account for the majority of incidents) are dramatically harder to exploit in a Zero Trust model because lateral movement is constrained from the start.',
          'Insurance premiums are also a factor. Cyber insurers have begun requiring Zero Trust capabilities — particularly MFA — as conditions for coverage. Organisations that cannot demonstrate mature identity and access management are increasingly finding themselves uninsurable at acceptable rates.',
          'If your organisation is still running a flat network with broad perimeter trust, the question is not whether to move toward Zero Trust, but how quickly. The threat landscape has already moved on. Your security architecture needs to as well.',
        ],
      },
    ],
  },
  {
    slug: 'cybersecurity-compliance-2026',
    category: 'Cybersecurity',
    readTime: '9 min read',
    date: 'January 2026',
    title: 'Cybersecurity Compliance in 2025–2026: NDPC, GDPR, and What African Businesses Must Know',
    excerpt:
      "With Nigeria's Data Protection Commission actively enforcing the NDPA and UK/EU-based operations subject to GDPR, the compliance landscape is increasingly complex. We break it down into actionable steps.",
    href: '/resources/cybersecurity-compliance-2026',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'A New Enforcement Reality',
        paragraphs: [
          'The Nigeria Data Protection Act 2023 (NDPA) came into force with the establishment of the Nigeria Data Protection Commission (NDPC), which has since moved from awareness-raising to active enforcement. Organisations processing personal data of Nigerian residents — whether based in Lagos or London — are subject to its requirements. The NDPC has made clear that cross-border data transfers, consent mechanisms, and data breach notification are priority areas for investigation.',
          'Simultaneously, African enterprises with UK or EU operations remain subject to GDPR and the UK GDPR (now codified in the UK Data Protection Act 2018). For a pan-African business with offices in Nigeria, Cameroon, Rwanda, and the UK, the compliance picture is genuinely complex — multiple regulators, overlapping obligations, and different enforcement timelines.',
        ],
      },
      {
        heading: 'NDPA: What Organisations Must Have in Place',
        paragraphs: [
          'At its core, the NDPA requires a lawful basis for every processing activity, meaningful consent mechanisms where applicable, and data subject rights that must be fulfilled within defined timeframes. Organisations processing significant volumes of personal data must appoint a Data Protection Officer (DPO) and register with the NDPC.',
          'Data Protection Impact Assessments (DPIAs) are mandatory before commencing high-risk processing activities — including the use of AI-driven profiling, large-scale employee monitoring, and systematic processing of sensitive data categories such as health or biometric information. Many organisations have not yet performed DPIAs for their existing processing activities, which represents immediate risk.',
          'Breach notification is the area where enforcement is most likely to create headlines. Under the NDPA, a personal data breach must be reported to the NDPC within 72 hours of discovery — matching the GDPR timeline. Organisations without a documented incident response plan and a tested breach notification procedure are not compliant with this requirement.',
        ],
      },
      {
        heading: 'GDPR Obligations That Are Frequently Missed',
        paragraphs: [
          'Despite GDPR being in force since 2018, several obligations remain routinely unaddressed. Records of Processing Activities (ROPA) — a documented inventory of every data processing activity — are required under Article 30 for organisations with 250 or more employees, but also recommended for smaller organisations. The ROPA is often the first document a regulator requests after an incident.',
          'Legitimate interests assessments (LIAs) are frequently relied upon as a lawful basis without the requisite three-part balancing test being documented. Organisations using legitimate interests for marketing, analytics, or fraud prevention need a formal LIA for each use case. Without it, the lawful basis cannot be substantiated if challenged.',
          'Vendor management is another gap. Under GDPR Article 28, every third party that processes personal data on your behalf must be covered by a Data Processing Agreement (DPA). Many organisations have not audited their vendor lists recently enough to ensure all new SaaS tools, analytics platforms, and cloud services are covered.',
        ],
      },
      {
        heading: 'Practical Steps for 2026',
        paragraphs: [
          'Start with a data mapping exercise — understand what personal data you hold, where it flows, what lawful basis applies, and who has access. This foundation supports every other compliance activity. Many organisations skip this step and then struggle to respond to subject access requests or breach notifications because they cannot locate the relevant data quickly.',
          'Implement technical controls that support your compliance obligations: encryption at rest and in transit, access controls aligned to least privilege, audit logging for all sensitive data access, and automated data retention policies. These controls satisfy both NDPA and GDPR technical requirements and will be reviewed by any competent regulator.',
          'Document everything. Regulators under both the NDPA and GDPR can request documentation of your compliance programme at any time. An organisation that has solid controls but poor documentation is in almost as weak a position as one that has neither. Policies, procedures, training records, DPIA reports, and ROPA entries should all be current and accessible.',
        ],
      },
    ],
  },
  {
    slug: 'ai-ready-infrastructure',
    category: 'Infrastructure',
    readTime: '7 min read',
    date: 'November 2025',
    title: 'AI-Ready Infrastructure: Preparing Your Data Centre for the Intelligence Era',
    excerpt:
      'GPU clusters, NVMe-over-Fabrics, and liquid cooling are no longer niche requirements — they are the new baseline. Here is what you need to build a future-proof foundation.',
    href: '/resources/ai-ready-infrastructure',
    author: AUTHORS.olu,
    body: [
      {
        heading: 'Why Existing Infrastructure Is Not Enough',
        paragraphs: [
          'Traditional data centre design optimises for CPU-bound workloads: web servers, databases, transactional applications. The fundamental constraint is compute per rack unit, with networking sized for east-west traffic patterns familiar from three-tier application architectures. AI workloads break every one of these assumptions.',
          'Training a large language model or running inference at scale demands GPU density, ultra-low-latency interconnects between accelerators, and network fabric speeds that would have seemed excessive for any enterprise workload five years ago. An NVIDIA H100 GPU draws up to 700 watts — nearly ten times a server CPU. A rack of GPU servers may require 40–80 kW of power, compared to the 5–10 kW typical for compute-dense traditional racks. Most data centres, including many co-location facilities, are simply not designed for this.',
        ],
      },
      {
        heading: 'The Network Must Lead',
        paragraphs: [
          'AI infrastructure is fundamentally a networking problem as much as a compute problem. GPU-to-GPU communication during distributed training requires extremely high-bandwidth, low-latency interconnects. NVIDIA\'s NVLink handles intra-node GPU communication; InfiniBand (HDR or NDR, supporting 200Gb/s or 400Gb/s) or RoCE (RDMA over Converged Ethernet) handles inter-node communication at scale.',
          'For AI inference serving — where models respond to user requests in real time — the bottleneck often shifts to the network path between the GPU cluster and the storage layer. NVMe-over-Fabrics (NVMe-oF) with 100GbE or higher Ethernet allows flash storage to be disaggregated from compute while maintaining near-NVMe latency. This is essential for large model deployments where the model weights themselves (sometimes hundreds of gigabytes) must be loaded into GPU memory quickly.',
          'If your current data centre fabric is 10GbE or even 25GbE at the server level, a targeted investment in 100GbE or 400GbE spine infrastructure is likely a prerequisite before any serious AI capability can be deployed on-premises.',
        ],
      },
      {
        heading: 'Power and Cooling: The Physical Constraint',
        paragraphs: [
          'Power density is the most immediate physical limitation in most data centres. The shift to GPU-heavy AI workloads has caught many facilities operators off guard: racks that were safely within thermal and power limits yesterday may require complete row redesigns to support AI servers today.',
          'Traditional air cooling — even high-efficiency hot aisle/cold aisle containment — struggles above approximately 25–30 kW per rack. AI GPU racks regularly require 50–80 kW. Direct liquid cooling (DLC), where coolant is piped directly to heat exchangers on CPUs and GPUs, is increasingly the only viable thermal solution. Immersion cooling — where servers are fully submerged in dielectric fluid — offers even greater efficiency but requires more significant facility modifications.',
          'Before committing to AI infrastructure, a power and cooling audit of your existing facility is essential. Understanding your available power capacity (including UPS and generator sizing), available cooling capacity, and structural limits (floor loading for dense racks) will determine whether an on-premises build is feasible or whether a cloud or AI-optimised co-location provider is the right path.',
        ],
      },
      {
        heading: 'Cloud vs On-Premises for AI',
        paragraphs: [
          'For most enterprises, the right answer is a hybrid model. Cloud platforms — AWS, Microsoft Azure, and Google Cloud — all offer GPU-backed instances that can be provisioned within minutes, making them ideal for experimentation, burst inference workloads, and initial model development. The pay-as-you-go model avoids large upfront capital commitments while the organisation learns what its AI workloads actually require.',
          'As AI workloads mature and usage patterns become predictable, the economics of on-premises or co-location GPU infrastructure improve significantly. A dedicated H100 cluster running at high utilisation will typically outperform the cost of equivalent cloud GPU instances within 18–24 months. The tipping point depends on your utilisation rate and the specific cloud pricing for your region.',
          'The critical infrastructure investment either way is the data platform. AI models are only as good as the data they can access. Building a robust, well-governed data platform — with clear data ingestion pipelines, quality controls, and access management — is the foundational work that unlocks every AI capability above it.',
        ],
      },
    ],
  },
  {
    slug: 'africa-digital-transformation-2025',
    category: 'Digital Transformation',
    readTime: '7 min read',
    date: 'August 2025',
    title: 'Digital Transformation Roadmap for African Enterprises in 2025',
    excerpt:
      "Africa's digital economy is growing faster than any other region. For enterprises across Nigeria, Rwanda, and Cameroon, digital transformation is no longer optional — it is the competitive frontier.",
    href: '/resources/africa-digital-transformation-2025',
    author: AUTHORS.olu,
    body: [
      {
        heading: 'The African Digital Landscape in 2025',
        paragraphs: [
          'The narrative around African technology has shifted. Mobile money has moved from novelty to infrastructure backbone across West and East Africa. Fintech companies have proven that African markets can leapfrog legacy systems entirely — building on mobile-first architectures that European and American banks are now scrambling to replicate. The same opportunity exists across sectors: retail, healthcare, logistics, education, and government.',
          'Nigeria, Rwanda, Kenya, and South Africa continue to lead in technology investment and talent, but the ecosystem is broadening. Cameroon\'s technology sector is growing steadily, and Rwanda\'s deliberate investment in digital infrastructure — including undersea cable connectivity and national data centre capacity — is attracting regional headquarters for international firms. For enterprises operating across the continent, this creates both opportunity and complexity.',
        ],
      },
      {
        heading: 'Where to Start: Foundations Before Features',
        paragraphs: [
          'The most common failure mode in digital transformation is leading with the exciting technology — AI, blockchain, AR — without building the foundational infrastructure that enables these tools to deliver value. Before any organisation can reliably use data for decision-making, that data must be collected consistently, stored reliably, and accessed quickly. For most African enterprises, this means investing first in core IT infrastructure: stable connectivity, reliable cloud or on-premises compute, and a disciplined approach to data management.',
          'Cloud adoption is the single most impactful foundation investment for most enterprises. AWS, Microsoft Azure, and Google Cloud all have African regions (South Africa, with Nigerian and Kenyan regions added by major providers in recent years), reducing latency and data residency concerns. Moving workloads to cloud provides the reliability, scalability, and security baseline that on-premises infrastructure often cannot match — particularly for organisations that have historically underinvested in IT.',
          'The practical starting point is almost always: move email and collaboration to Microsoft 365 or Google Workspace, migrate critical business applications to cloud-hosted or SaaS alternatives, and implement a basic identity and access management system. These moves improve reliability, reduce IT management overhead, and lay the groundwork for every subsequent digital initiative.',
        ],
      },
      {
        heading: 'Building for Mobile-First Reality',
        paragraphs: [
          'African digital transformation must be designed around mobile-first access. Smartphone penetration across Sub-Saharan Africa continues to grow, and for many users, a smartphone is the primary computing device. Designing applications, portals, and services that assume desktop access as the primary mode will reach a fraction of the potential audience.',
          'This has practical implications for application architecture. Web applications need to be genuinely responsive — not just visually, but in terms of performance on lower-bandwidth connections. Progressive Web Apps (PWAs) offer a compelling approach: they work across all devices, can function offline, and do not require app store distribution. For enterprise internal tools, a mobile-first design principle should be part of the brief for any new software development.',
          'Payment integration is a critical component of any consumer-facing digital service in West Africa. USSD-based payment flows remain important for reaching users without smartphones or data plans, while Paystack, Flutterwave, and integrated bank transfer options are the expectation for web and mobile app transactions. Building for the full payment diversity of your target market — not just card-based international payment methods — is essential.',
        ],
      },
      {
        heading: 'Talent, Partners, and the Build vs Partner Decision',
        paragraphs: [
          'Technology talent in Africa is abundant but unevenly distributed and increasingly in demand globally. Remote work has opened African developers and engineers to international markets, which is excellent for individual practitioners but creates retention challenges for enterprises trying to build in-house teams. Salary expectations for experienced cloud architects, security engineers, and full-stack developers in Lagos or Kigali have risen significantly.',
          'For most enterprises, the right model is a combination of core internal capability supplemented by specialist partners. Keep the strategic decisions, product ownership, and data governance in-house. Partner for specialist technical skills — cloud architecture, security, complex integrations — where the expertise requirement is too narrow to justify permanent headcount.',
          'The critical success factor is not the technology or the partners — it is executive commitment to the transformation programme. Digital transformation initiatives that are treated as IT projects rather than business strategy fail at a significantly higher rate. The organisations that achieve meaningful transformation are those where the CEO and board have made it a strategic priority, with dedicated resources, a clear mandate, and patience for the 18–36-month horizon over which real transformation occurs.',
        ],
      },
    ],
  },
  {
    slug: 'aws-vs-azure-guide',
    category: 'Cloud',
    readTime: '6 min read',
    date: 'May 2025',
    title: 'AWS vs Azure: Choosing the Right Cloud Platform for Your Business',
    excerpt:
      'AWS leads in breadth of services and startup ecosystems; Azure excels in hybrid environments and Microsoft-stack integration. Understanding the differences before you migrate matters.',
    href: '/resources/aws-vs-azure-guide',
    author: AUTHORS.olu,
    body: [
      {
        heading: 'The Platform Landscape',
        paragraphs: [
          'AWS and Microsoft Azure together account for over 60% of the global cloud market, and for most enterprise buyers, the choice is genuinely between these two platforms (with Google Cloud as a strong third option, particularly for data and AI workloads). The good news is that both platforms are mature, reliable, and capable of supporting virtually any enterprise workload. The question is not "which is better" but "which is better for your specific situation."',
          'AWS launched in 2006 and has the longest track record in cloud computing. Its service catalogue is the broadest in the industry — over 200 services at last count — and it has the largest ecosystem of third-party tools, integrations, and certified professionals. Azure launched in 2010 and has grown rapidly, particularly in enterprise markets, leveraging Microsoft\'s existing relationships with organisations already using Windows Server, SQL Server, Active Directory, and Office 365.',
        ],
      },
      {
        heading: 'When AWS Makes More Sense',
        paragraphs: [
          'AWS is generally the better choice when you are starting from scratch with a cloud-native architecture, when your team has existing AWS expertise, or when you need access to the broadest range of services. AWS tends to lead in releasing new services and in depth of functionality for infrastructure services like EC2, S3, and the managed database portfolio (RDS, DynamoDB, Aurora).',
          'For startups and technology companies, AWS is often the default choice — partly because of ecosystem familiarity, partly because of generous startup credits through the AWS Activate programme, and partly because the developer community and available talent pool is largest around AWS. If you are hiring cloud engineers, the pool of AWS-certified professionals is larger than Azure-certified professionals in most markets.',
          'Multi-region deployments and global infrastructure are also a strength of AWS. With more regions than any other provider — including a new African region in South Africa and announced regions in Nigeria and Kenya — AWS offers the broadest geographic coverage for organisations with truly global or pan-African footprints.',
        ],
      },
      {
        heading: 'When Azure Makes More Sense',
        paragraphs: [
          'Azure is typically the stronger choice for organisations with significant Microsoft technology investments. If your organisation already uses Microsoft 365 (formerly Office 365), Windows Server, Active Directory, SQL Server, or Dynamics 365, Azure integrates with these systems more deeply than any competing platform. Azure Active Directory (now Microsoft Entra ID) as your identity platform, connecting to Microsoft 365 and Azure-hosted workloads through native integration, is a compelling architecture that competitors cannot match.',
          'Hybrid cloud scenarios — where some workloads remain on-premises and others run in the cloud — are an Azure strength. Azure Arc enables management of on-premises and multi-cloud resources through Azure\'s management plane. Azure Stack, for organisations that need cloud-consistent infrastructure running in their own data centres, is a unique offering without a direct AWS equivalent.',
          'For AI and productivity integration, Microsoft\'s investment in OpenAI has resulted in Copilot features embedded across the Microsoft 365 stack. If your organisation is adopting Microsoft 365 Copilot, the natural extension of that AI capability into your cloud platform is Azure OpenAI Service and the broader Azure AI portfolio.',
        ],
      },
      {
        heading: 'The Practical Decision Framework',
        paragraphs: [
          'Rather than making a theoretical platform comparison, work through these questions. First: what does your team know? Migrating to a platform your team is unfamiliar with adds significant learning curve and risk. If your engineers are AWS-certified, that expertise has real value. Second: what is your Microsoft stack? The more deeply you use Microsoft on-premises — Active Directory, Windows Server, SQL Server — the more natural the Azure integration story becomes.',
          'Third: what are your data residency requirements? For organisations subject to NDPA or GDPR data residency requirements, both AWS and Azure have African and European regions, but the specific services available in each region differ. Some AWS services are not available in all regions; some Azure services are not available in African regions. Check the specific services you need in the specific regions you require before committing.',
          'Finally: consider running a proof of concept on both platforms for your most critical workload. The best way to make an informed decision is to build something real on both platforms and compare the developer experience, performance, and cost at your actual scale. Both AWS and Azure offer substantial free tier credits for evaluation. The upfront investment in a PoC is much cheaper than discovering a platform mismatch after a full migration.',
        ],
      },
    ],
  },
  {
    slug: 'sd-wan-enterprise-networking',
    category: 'Infrastructure',
    readTime: '6 min read',
    date: 'January 2025',
    title: 'The Rise of SD-WAN: How Software-Defined Networking Is Transforming the Enterprise Edge',
    excerpt:
      'SD-WAN delivers the agility, visibility, and cost savings that MPLS-only networks cannot — especially for organisations with pan-African or cross-continental presence.',
    href: '/resources/sd-wan-enterprise-networking',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'Why MPLS Alone Is No Longer the Answer',
        paragraphs: [
          'Multiprotocol Label Switching (MPLS) has been the backbone of enterprise wide-area networking for two decades. Its strengths are real: deterministic performance, quality of service (QoS) guarantees, and reliability that carrier-grade infrastructure can consistently deliver. But MPLS has significant limitations that modern enterprise requirements have exposed.',
          'MPLS circuits are expensive, especially across Africa where carrier pricing has not followed the same cost reduction trajectory as other regions. Provisioning new circuits takes weeks to months. The architecture assumes traffic flowing from branch offices to centralised data centres — exactly the wrong model for an organisation using Microsoft 365, Salesforce, or other SaaS applications where most traffic needs to reach the internet, not a corporate data centre. Backhauling internet-bound traffic through MPLS to a centralised internet breakout point adds latency and cost for workloads that would be better served by direct internet breakout at the branch.',
        ],
      },
      {
        heading: 'What SD-WAN Changes',
        paragraphs: [
          'SD-WAN decouples the network control plane from the physical infrastructure, allowing network policies to be defined centrally in software and applied consistently across all edges — regardless of whether the underlying transport is MPLS, broadband internet, 4G/5G, or satellite. This means an organisation can use a mix of transport options, with SD-WAN making intelligent, real-time decisions about which path each application\'s traffic should use.',
          'Direct internet breakout for cloud and SaaS applications — with MPLS reserved for sensitive internal traffic — becomes straightforward to configure and enforce. Application-aware routing allows video conferencing traffic to be prioritised over background synchronisation, for example, without complex QoS configurations that change with every circuit change. Visibility improves dramatically: SD-WAN controllers provide real-time telemetry across every edge, showing application performance, path utilisation, and anomaly detection in a single dashboard.',
          'For pan-African organisations, the cost impact is significant. Replacing expensive MPLS circuits at branch locations with SD-WAN over broadband internet (where available) or 4G LTE can reduce WAN costs by 40–60% while improving application performance for cloud workloads. The savings fund the SD-WAN platform subscription many times over.',
        ],
      },
      {
        heading: 'Security and SD-WAN: The SASE Convergence',
        paragraphs: [
          'SD-WAN and network security have been converging toward what Gartner coined as Secure Access Service Edge (SASE): a cloud-delivered architecture that combines SD-WAN, next-generation firewall, secure web gateway, CASB (Cloud Access Security Broker), and Zero Trust Network Access into a single service delivered from cloud points of presence worldwide.',
          'The practical advantage of SASE for geographically distributed organisations is significant. Rather than deploying and managing separate SD-WAN appliances and next-generation firewalls at every edge, the security and networking functions are delivered from a cloud service. A user at a branch in Lagos, a remote employee in Rwanda, and a headquarters user in London all receive the same security policy, applied consistently by the nearest SASE point of presence.',
          'Vendors including Palo Alto Networks (Prisma SASE), Cisco (SASE portfolio), and Fortinet (FortiSASE) offer comprehensive SASE platforms. The right vendor depends on your existing infrastructure investments, your team\'s expertise, and your specific performance and compliance requirements.',
        ],
      },
      {
        heading: 'Implementation Considerations for African Deployments',
        paragraphs: [
          'Internet connectivity quality varies dramatically across African markets. SD-WAN\'s ability to use multiple transport links simultaneously — bonding them for performance or failing over automatically when one link degrades — is particularly valuable in markets where fixed broadband reliability is inconsistent. In locations where fixed broadband is unavailable, SD-WAN over 4G/5G LTE provides a viable alternative to expensive MPLS circuits.',
          'Latency to cloud SD-WAN points of presence is an important consideration. Most SASE vendors have PoPs in South Africa and in Europe, but the nearest PoP for a branch in Lagos or Douala may still introduce 80–120ms of latency for internet-bound traffic. Understanding your SASE vendor\'s PoP locations and their latency to your branch locations before making a vendor selection avoids unexpected performance issues post-deployment.',
          'Finally, SD-WAN migrations are live network changes that need careful planning. A phased approach — beginning with a proof-of-concept at a single branch or with a non-critical site — reduces risk significantly. Ensure your SD-WAN implementation partner has verified experience with the specific vendor platform you are deploying and with the carrier and connectivity landscape in your target markets.',
        ],
      },
    ],
  },
  {
    slug: 'ngfw-explained',
    category: 'Cybersecurity',
    readTime: '7 min read',
    date: 'October 2024',
    title: 'Next-Generation Firewalls Explained: What Makes NGFW Different and Why It Matters',
    excerpt:
      'Next-Generation Firewalls inspect application-layer traffic, integrate live threat intelligence, enforce identity-based policies, and provide SSL/TLS decryption.',
    href: '/resources/ngfw-explained',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'Beyond Port and Protocol: What NGFW Actually Does',
        paragraphs: [
          'Traditional firewalls operated at Layers 3 and 4 of the OSI model — they understood IP addresses, ports, and protocols, and they made allow/deny decisions based on rules built from these attributes. This was effective when most traffic was clearly separated: web traffic on port 80, email on port 25, DNS on port 53. Modern applications broke this model entirely.',
          'Today, virtually every application runs over HTTPS on port 443. A traditional firewall cannot distinguish between a legitimate SaaS application and a command-and-control channel for malware — both look like HTTPS traffic on port 443. Next-Generation Firewalls address this by performing deep packet inspection (DPI) at Layer 7, decrypting and inspecting the content of HTTPS traffic, and making decisions based on the actual application, the user identity, and the content — not just the port.',
        ],
      },
      {
        heading: 'Core NGFW Capabilities',
        paragraphs: [
          'Application identification is the foundational capability. An NGFW maintains a library of thousands of application signatures and uses machine learning to classify traffic accurately. This enables policies like "allow Microsoft Teams video calls but block peer-to-peer file sharing applications, even when they tunnel over HTTPS" — something a traditional firewall cannot express.',
          'User identity integration allows policies to reference users and groups rather than just IP addresses. When a user authenticates to Active Directory, the firewall learns the mapping between that user\'s IP address and their identity, enabling policies that follow the user regardless of which device or IP they are on. This is essential in environments with DHCP and dynamic IP assignment.',
          'Intrusion Prevention System (IPS) functionality is integrated into NGFW, replacing the need for separate IPS appliances. The IPS uses signatures and behavioural analysis to detect and block exploitation attempts, vulnerability exploitation, and anomalous network behaviour in real time. Threat intelligence feeds — updated continuously from vendor research teams and community threat sharing — ensure the IPS stays current against emerging attack patterns.',
          'SSL/TLS inspection — sometimes called SSL decryption — is the capability that makes all other inspection capabilities effective against encrypted traffic. By acting as a trusted intermediary (a "man in the middle" that the organisation controls), the NGFW decrypts HTTPS traffic, inspects it, re-encrypts it, and forwards it. Without SSL inspection, the majority of modern internet traffic is invisible to any security control.',
        ],
      },
      {
        heading: 'Choosing an NGFW Platform',
        paragraphs: [
          'The market leaders — Palo Alto Networks, Fortinet, Cisco, and Check Point — all offer mature NGFW platforms with comprehensive capabilities. The differentiation is in the management architecture, the depth of cloud and SD-WAN integration, the quality of the threat intelligence, and the total cost of ownership.',
          'Palo Alto Networks\' Panorama management platform and PAN-OS operating system are consistently rated highest for security efficacy and application identification accuracy. Fortinet\'s FortiGate NGFWs offer exceptional price-to-performance ratios and tightly integrated SD-WAN functionality, making them particularly compelling for mid-market organisations. Cisco\'s Firepower platform integrates deeply with Cisco\'s broader security portfolio — Secure Endpoint, Umbrella, and Identity Services Engine — for organisations heavily invested in Cisco infrastructure.',
          'Sophos XG (now Firewall) deserves mention for smaller and mid-market deployments, offering strong central management through Sophos Central and tight integration with Sophos\'s Intercept X endpoint security — enabling what Sophos calls "Synchronized Security," where firewall and endpoint share threat intelligence in real time.',
        ],
      },
      {
        heading: 'Deployment and Operational Considerations',
        paragraphs: [
          'NGFW deployment requires more planning than traditional firewall replacement. Application control policies need to be built with input from business units — not just the security team — to avoid blocking legitimate applications. An initial period of "learn mode" operation, where the firewall logs but does not block traffic, is valuable for understanding what applications are actually in use before enforcement begins.',
          'SSL inspection, while essential, requires careful certificate management and may break applications that use certificate pinning or non-standard certificate chains. A test phase with a subset of users before full deployment is strongly recommended. Some categories of traffic — banking, healthcare, and government sites — are typically excluded from SSL inspection for privacy and regulatory reasons.',
          'For managed firewall deployments, where Limesoft manages the NGFW estate on behalf of the client, we establish policy management workflows, change control processes, and regular rule review cycles. Firewall rules accumulate over time and without regular hygiene, orphaned rules and overly permissive policies undermine the security posture that the NGFW was deployed to deliver.',
        ],
      },
    ],
  },
  {
    slug: 'build-vs-buy-framework',
    category: 'Applications',
    readTime: '5 min read',
    date: 'July 2024',
    title: 'Build vs Buy: A Decision Framework for Enterprise Software in 2024',
    excerpt:
      "Buying locks you into a vendor's roadmap; building demands internal capacity. We share the framework our advisory team uses with clients across Africa and the UK.",
    href: '/resources/build-vs-buy-framework',
    author: AUTHORS.olu,
    body: [
      {
        heading: 'Why the Decision Is Harder Than It Looks',
        paragraphs: [
          'The build vs buy question appears simple on the surface: do you buy an off-the-shelf software product, or do you build something custom? In practice, the decision is nuanced, depends heavily on context, and the wrong choice is expensive in either direction. Organisations that buy when they should have built end up trapped in vendor contracts with software that never quite fits their processes. Organisations that build when they should have bought spend years maintaining custom systems instead of focusing on their core business.',
          'The rise of SaaS has added a third option — subscribe — that has changed the calculus significantly. For many categories of enterprise software, the question is not build vs buy but rather which SaaS product, or whether to build something custom that integrates with best-of-breed SaaS components. Our framework addresses all three options.',
        ],
      },
      {
        heading: 'The Core Questions',
        paragraphs: [
          'The first question is: does this capability differentiate your business? If the answer is yes — if this software gives you a competitive advantage that your competitors do not have and cannot replicate by buying the same product — then building is almost always the right answer. Netflix does not buy an off-the-shelf content recommendation engine because their recommendation algorithm is a core competitive asset. Your ERP system, by contrast, is not a competitive differentiator: your competitors use the same SAP or Oracle products without disadvantage.',
          'The second question is: what are the total cost of ownership comparisons? Build costs are often underestimated. The initial development budget is only the beginning — ongoing maintenance, bug fixes, security updates, and feature additions typically cost 15–25% of the original development cost per year, indefinitely. SaaS subscriptions feel expensive year over year but include all maintenance, infrastructure, and platform evolution. A genuine TCO comparison over a 5-year horizon often surprises organisations who assume building is cheaper.',
          'The third question is: what is the maturity of available products in this category? For common business functions — accounting, CRM, HR management, project tracking — the SaaS market is mature and competitive. Products like Salesforce, HubSpot, Xero, and Workday have been refined by thousands of customers over many years. Building a custom CRM to compete with Salesforce\'s feature set is almost never justified. But for domain-specific workflows — a custom logistics optimisation engine, a proprietary underwriting model, a bespoke trading platform — commercial alternatives may simply not exist.',
        ],
      },
      {
        heading: 'When to Buy (or Subscribe)',
        paragraphs: [
          'Buy or subscribe when the category is commoditised, when a best-of-breed product exists that covers your requirements at 80%+, and when the remaining 20% can be addressed through configuration, integration, or accepted process change. Most organisations are better served by adapting their processes to fit a best-in-class product than by building something that exactly matches their current process (which will change).',
          'Modern SaaS products offer significant integration flexibility through APIs, webhooks, and pre-built integration platforms like Zapier, Make, or enterprise iPaaS tools. Before deciding to build a custom system, explore whether a SaaS product with strong integration capabilities — plus custom development of the integration and workflow layer — delivers the outcome at lower cost and risk.',
        ],
      },
      {
        heading: 'When to Build',
        paragraphs: [
          'Build when the software is core to your competitive differentiation, when no commercial product adequately covers your requirements, when you have significant data or process sensitivity that makes third-party SaaS unsuitable, or when your scale makes the economics of custom development clearly favourable to subscription costs.',
          'When you decide to build, the most common mistake is scoping too broadly. Start with the minimum viable product (MVP) that delivers the core differentiating value, learn from real user feedback, and iterate. The organisation that tries to build a complete replacement for an existing SaaS product in one go typically delivers late, over budget, and with features users did not actually need. Build the core, ship it, learn, and expand.',
        ],
      },
    ],
  },
  {
    slug: 'managed-services-business-case',
    category: 'Managed Services',
    readTime: '5 min read',
    date: 'March 2024',
    title: 'The Business Case for Managed IT Services: When to Outsource vs Keep In-House',
    excerpt:
      'Cybersecurity operations, network management, and cloud infrastructure are increasingly specialist domains where managed services deliver better outcomes at lower TCO.',
    href: '/resources/managed-services-business-case',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'The Specialist Problem',
        paragraphs: [
          'Enterprise IT now requires deep specialisation in domains that did not exist five years ago: cloud security posture management, Zero Trust architecture, SD-WAN operations, container security, SIEM and SOAR platforms. No single IT team — however talented — can maintain genuine expertise across all of these areas simultaneously. And yet, effective operations in each domain require exactly that expertise.',
          'This is the core business case for managed services: specialist providers accumulate expertise across multiple clients and across more hours of operational experience than any internal team can develop. A managed security provider who has designed and operated NGFW estates for fifty organisations has confronted failure modes, edge cases, and attack patterns that an internal team managing one estate will never encounter.',
        ],
      },
      {
        heading: 'TCO: The Numbers That Change Minds',
        paragraphs: [
          'The immediate comparison is typically managed service fee vs the fully-loaded cost of an equivalent internal hire. But the comparison is rarely that simple. A single senior network security engineer in Lagos or London commands a salary that, with benefits, payroll taxes, equipment, training budget, and management overhead, costs 1.4–1.6x the salary number alone. And one engineer provides coverage during business hours, five days a week — not 24/7.',
          'A managed service agreement covering 24/7 network monitoring, managed NGFW, and monthly reporting typically costs less than the fully-loaded cost of two junior security engineers — while providing deeper coverage and expertise than two junior engineers can deliver. The comparison changes when you account for what you are actually getting at each cost point.',
          'There is also the question of technology licensing. A managed service provider often spreads the cost of vendor licenses, SIEM platforms, and tooling across many clients — reducing the per-client cost of access to enterprise-grade tooling that would be prohibitively expensive for any single organisation to license independently.',
        ],
      },
      {
        heading: 'What to Keep In-House',
        paragraphs: [
          'Outsourcing IT operations does not mean losing control of technology strategy. The functions that should remain in-house are the ones where business context is irreplaceable: technology strategy and roadmap decisions, vendor selection, IT governance and policy, and business relationship management. These require deep understanding of your organisation\'s specific context that an external provider cannot substitute for.',
          'Data governance and security policy ownership should always remain internal — even if the operational execution is handled by a managed service provider. You retain accountability for how your data is handled and how your security posture is defined. A good MSP operates within the governance framework you define; they do not substitute for it.',
        ],
      },
      {
        heading: 'Making the Transition',
        paragraphs: [
          'The most common failure mode in moving to managed services is inadequate transition planning. The knowledge transfer from your internal team to the managed service provider — documentation of existing configurations, understanding of historical decisions and their rationale, relationships with vendors and carriers — takes longer than most organisations anticipate. A three-to-six-month transition period, with parallel running before full handover, is typically required for network and security operations.',
          'Defining the service level agreement carefully is critical. The SLA should specify not just response times but escalation paths, reporting cadence, change management processes, and the conditions under which the provider is responsible vs. when they need client direction. A poorly specified SLA creates ambiguity that both parties will interpret differently — usually at a time of stress when something has gone wrong.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-migration-best-practices',
    category: 'Cloud',
    readTime: '8 min read',
    date: 'October 2023',
    title: 'Cloud Migration Best Practices: A Technical Guide for Moving Workloads to AWS or Azure',
    excerpt:
      'Done well, migration is an opportunity to re-architect for scale, resilience, and security. Done poorly, it creates cloud sprawl, unexpected costs, and new attack surfaces.',
    href: '/resources/cloud-migration-best-practices',
    author: AUTHORS.olu,
    body: [
      {
        heading: 'The Migration Strategy Decision',
        paragraphs: [
          'The "6 Rs" framework for cloud migration remains the best starting point for any migration planning: Rehost (lift and shift), Replatform (lift and optimise), Repurchase (move to SaaS), Refactor (re-architect), Retire, and Retain. Most enterprise migrations use a mix of all six for different workloads — and the choice for each workload should be intentional, not defaulted.',
          'Lift-and-shift (rehost) is the fastest migration strategy and the one most often chosen under time pressure. It moves an on-premises virtual machine directly to a cloud instance without modification. The advantages are speed and familiarity — your applications run in the same configuration they did on-premises. The disadvantages are that you carry forward all the technical debt and architectural limitations of the original system, and you miss the opportunity to improve reliability, security, and cost efficiency that cloud-native architectures enable.',
        ],
      },
      {
        heading: 'Discovery and Assessment',
        paragraphs: [
          'No migration should begin without a thorough discovery phase. The goal is a complete, accurate inventory of: every server and workload (including shadow IT that may not be in the CMDB), all application dependencies and communication patterns, all data flows and data residency requirements, and the performance and availability requirements for each workload.',
          'AWS Migration Hub, Azure Migrate, and third-party tools like Cloudamize and MovePilot can automate much of the discovery work, deploying lightweight agents on existing servers to capture real-time dependency mapping and performance data over a 2–4-week assessment period. The output is a migration wave plan — workloads grouped into logical migration sequences where dependencies are respected.',
          'The discovery phase also surfaces surprises: undocumented dependencies between applications, legacy integrations that connect to systems nobody remembered, data stored in unexpected locations. Better to find these in discovery than mid-migration.',
        ],
      },
      {
        heading: 'Landing Zone and Security First',
        paragraphs: [
          'Before migrating any production workloads, establish your cloud landing zone — the foundational account structure, network architecture, identity configuration, and security baseline that everything else will run within. Attempting to migrate workloads and define the landing zone simultaneously creates chaos.',
          'The landing zone should establish: account vending (how new cloud accounts are created and configured), network design (VPC structure, subnets, transit gateway or hub-spoke peering), identity (SSO with your on-premises Active Directory or Azure AD, role-based access control), and security guardrails (AWS Control Tower SCPs or Azure Policy assignments that enforce your security baseline across all accounts).',
          'Security in the cloud is a shared responsibility model, but many organisations do not fully understand what they are responsible for. The cloud provider secures the infrastructure — the physical data centres, the hypervisor, the managed service plumbing. You are responsible for everything on top: operating system configuration and patching, application security, identity and access management, data encryption, network security groups, and logging and monitoring. A secure migration means designing these controls into the architecture from day one, not retrofitting them later.',
        ],
      },
      {
        heading: 'Cost Management From the Start',
        paragraphs: [
          'Cloud cost overruns are one of the most common post-migration complaints. The flexibility that makes cloud powerful — the ability to provision resources in seconds — also makes it easy to accumulate costs that nobody notices until the invoice arrives. Establishing cost governance from the first day of cloud usage is essential.',
          'Tag every resource with mandatory tags: environment (production, staging, dev), application, owner, and cost centre. Without tagging, cost attribution becomes impossible as the estate grows. Configure AWS Cost Explorer or Azure Cost Management with budget alerts that notify the responsible team when spending exceeds expected thresholds.',
          'Right-sizing is the most impactful cost optimisation action post-migration. Lift-and-shift migrations typically overprovision cloud instances to match on-premises server sizing — which was itself often over-provisioned. After running in the cloud for 4–8 weeks, the actual CPU and memory utilisation data is available; right-sizing to instances that match actual utilisation typically reduces compute costs by 30–50% without any performance impact.',
        ],
      },
    ],
  },
  {
    slug: 'endpoint-security-critical-surface',
    category: 'Cybersecurity',
    readTime: '6 min read',
    date: 'June 2023',
    title: 'Why Endpoint Security Has Become Your Most Critical Attack Surface',
    excerpt:
      "As remote and hybrid work cements itself as the default, organisations that rely on perimeter-only security are exposing themselves to a new class of threats.",
    href: '/resources/endpoint-security-critical-surface',
    author: AUTHORS.adewale,
    body: [
      {
        heading: 'The Endpoint as the New Perimeter',
        paragraphs: [
          'The COVID-19 pandemic accelerated a shift that was already underway: the endpoint — the laptop, desktop, or mobile device — became the primary point of control for enterprise security. With employees working from home networks, hotel networks, and public Wi-Fi, the corporate network perimeter effectively disappeared. Firewalls and network-based controls could no longer be the primary line of defence for an asset they could not see.',
          'This shift has had significant security consequences. Phishing attacks targeting end users have increased dramatically. Ransomware campaigns — which typically begin with a compromised endpoint and then spread laterally across the network — have become the dominant threat category for organisations of all sizes. The IBM Cost of a Data Breach Report consistently shows that compromised credentials and phishing are the most common initial attack vectors, both of which arrive through endpoint interactions.',
        ],
      },
      {
        heading: 'From Antivirus to EDR/XDR',
        paragraphs: [
          'Traditional antivirus software operates on a signature-based model: it maintains a database of known malware signatures and blocks files that match. This approach has a fundamental weakness — it cannot detect malware it has never seen before. Zero-day attacks and polymorphic malware, designed to change their signature to evade detection, routinely bypass traditional AV.',
          'Endpoint Detection and Response (EDR) platforms represent the current state of the art in endpoint security. Rather than relying solely on signatures, EDR continuously records endpoint activity — process executions, file system changes, network connections, registry modifications — and uses behavioural analysis and machine learning to detect anomalous patterns that indicate malicious activity. When suspicious behaviour is detected, the platform can automatically contain the affected endpoint, blocking lateral movement while investigation proceeds.',
          'Extended Detection and Response (XDR) extends the EDR model across the security stack — correlating endpoint telemetry with network logs, email security data, and cloud security signals to detect attacks that span multiple vectors. A phishing email that delivers a payload to an endpoint, which then makes a suspicious network connection to a command-and-control server, is only visible as a coherent attack pattern when all three data sources are correlated.',
        ],
      },
      {
        heading: 'Essential Endpoint Security Controls',
        paragraphs: [
          'Beyond EDR, several foundational controls are essential for robust endpoint security. Patch management — ensuring operating systems and applications receive security updates promptly — remains the most impactful single control for reducing vulnerability to exploitation. The majority of successful endpoint compromises exploit known vulnerabilities for which patches have been available for weeks or months.',
          'Disk encryption (BitLocker on Windows, FileVault on macOS) protects data on lost or stolen devices. In the absence of encryption, a stolen laptop represents not just the loss of a device but a potential data breach affecting all data stored locally. Encryption ensures that physical possession of the device does not grant access to its data without the encryption key.',
          'Application control — restricting which applications can run on endpoints to an approved list — is a high-effort but high-impact control that prevents a wide class of malware from executing. Combined with blocking the execution of scripts from temporary directories (a common malware delivery mechanism), these controls significantly raise the bar for successful endpoint compromise.',
        ],
      },
      {
        heading: 'The Human Layer',
        paragraphs: [
          'Technology controls address technical attack vectors. The human layer — the user clicking on a phishing link, entering credentials on a spoofed website, or plugging in a found USB drive — requires a different approach. Security awareness training that goes beyond annual compliance checkbox exercises and into regular, engaging, practical training significantly reduces susceptibility to social engineering.',
          'Phishing simulations — controlled exercises where the security team sends simulated phishing emails to employees and tracks click rates — provide both a measure of susceptibility and a teachable moment for individuals who click. Organisations that run regular phishing simulations consistently show lower susceptibility rates over time than those that do not.',
          'Ultimately, endpoint security requires the combination of technical controls, user education, and detection capability. No single control prevents all attacks. Defence in depth — multiple overlapping controls that each reduce risk — is the only realistic approach against a threat landscape that continuously evolves to find and exploit weaknesses.',
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export const featuredArticle = allArticles[0]
