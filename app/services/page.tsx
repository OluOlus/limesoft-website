import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Limesoft System',
  description:
    'Cybersecurity, Infrastructure, Applications, and Managed Services — tailored technology solutions from Limesoft System.',
}

const services = [
  {
    id: 'cybersecurity',
    num: '01',
    accent: '#14b8a6',
    label: 'Cybersecurity',
    headline: 'Protect Your Critical Assets',
    subline: 'Confidentiality. Integrity. Availability.',
    description: [
      'In an era where threats evolve faster than defences, your security posture must be proactive, not reactive. Limesoft System delivers comprehensive cybersecurity solutions that go beyond perimeter defence — embedding security into every layer of your technology estate.',
      'Our team holds certifications from ISC2, Palo Alto (PCNSE, PCNSA), Sophos, Fortinet (NSE), and Cisco (CCNP Security) — giving you access to multi-vendor expertise under a single, accountable partner.',
    ],
    capabilities: [
      { name: 'Next-Generation Firewall',  desc: 'Sophos XGS, Palo Alto NGFW, Fortinet FortiGate — design, deployment, and ongoing management.' },
      { name: 'Zero Trust Architecture',   desc: 'Identity-centric security that eliminates implicit trust across users, devices, and networks.' },
      { name: 'Network Perimeter Security',desc: 'Secure ingress/egress controls, DMZ design, and threat prevention at the boundary.' },
      { name: 'Endpoint Protection',       desc: 'EDR/XDR solutions that detect and respond to threats across managed devices in real time.' },
      { name: 'Security Operations',       desc: 'Threat intelligence, log management, and incident response — keeping you ahead of attackers.' },
      { name: 'Vulnerability Management',  desc: 'Regular assessment, penetration testing, and remediation guidance aligned to industry standards.' },
      { name: 'Compliance Advisory',       desc: 'NDPA, GDPR, ISO 27001 alignment — we map your controls to regulatory requirements.' },
      { name: 'Cloud Security',            desc: 'Secure cloud workloads on AWS and Azure with native and third-party security controls.' },
    ],
    partners: ['Sophos', 'Palo Alto Networks', 'Fortinet', 'Cisco', 'ISC2'],
    project: {
      client: 'Novare Africa',
      headline: 'Next-Generation Firewall Refresh',
      desc: 'Design, implementation, and support of a Secure Network Perimeter Solution using Sophos XGS Series Next-Generation Firewall — protecting enterprise critical assets across multiple sites.',
    },
  },
  {
    id: 'infrastructure',
    num: '02',
    accent: '#38bdf8',
    label: 'Infrastructure',
    headline: 'Resilient, Scalable Technology Stacks',
    subline: 'AI-Ready. Enterprise-Grade. Always On.',
    description: [
      'Modern business demands infrastructure that is not just reliable today — but ready for what comes next. From AI-ready data centres to cloud-native architectures, we design and build technology foundations that grow with your ambition.',
      'Our infrastructure practice spans enterprise networking, data centre design, cloud computing, and software-defined solutions — backed by Cisco CCNP, JNCIA, Juniper, Azure, and AWS certifications.',
    ],
    capabilities: [
      { name: 'Enterprise Networking',    desc: 'Campus, branch, and WAN architecture using Cisco, HPE Aruba, and Juniper platforms.' },
      { name: 'Data Centre Solutions',    desc: 'Design and build of physical and virtual data centre environments for high availability.' },
      { name: 'Cloud Computing',          desc: 'AWS and Azure architecture, migration, and optimisation for cloud-first organisations.' },
      { name: 'AI-Ready Infrastructure', desc: 'High-density compute, GPU clusters, and low-latency fabric for AI/ML workloads.' },
      { name: 'SD-WAN',                  desc: 'Software-defined WAN for distributed enterprises — connecting offices, cloud, and remote workers.' },
      { name: 'SD-WLAN',                 desc: 'UniFi, Cisco Meraki, and Mist AI-powered wireless LAN for large-scale wireless deployments.' },
      { name: 'F5 Application Delivery', desc: 'Load balancing, application acceleration, and WAF using F5 BIG-IP and NGINX platforms.' },
      { name: 'Network Automation',      desc: 'Python, Ansible, and Cisco DevNet tooling to automate repetitive infrastructure tasks.' },
    ],
    partners: ['Cisco', 'HPE', 'AWS', 'Microsoft Azure', 'F5', 'Juniper', 'UniFi'],
    project: {
      client: 'Elysium Diem',
      headline: 'SD-WLAN Across 30+ Offices',
      desc: 'Design, implementation, and support of a UniFi Software Defined Wireless-LAN solution rolled out across 30+ offices serving over 400 users — delivering unified visibility, policy control, and seamless roaming.',
    },
  },
  {
    id: 'applications',
    num: '03',
    accent: '#14b8a6',
    label: 'Applications',
    headline: 'Software That Drives Productivity',
    subline: 'Custom-Built. Enterprise-Grade. Impactful.',
    description: [
      'Off-the-shelf software rarely fits perfectly. Our development team specialises in custom and enterprise-grade applications that are built around your workflows — not the other way around.',
      'From web and mobile to complex integrations and cloud-native services, we deliver software that eliminates bottlenecks, accelerates operations, and creates measurable business value.',
    ],
    capabilities: [
      { name: 'Custom Web Applications', desc: 'Full-stack development using modern frameworks — React, Next.js, Node.js, and more.' },
      { name: 'Mobile Applications',     desc: 'iOS and Android applications built natively or with cross-platform frameworks.' },
      { name: 'Enterprise Software',     desc: 'ERP integrations, workflow automation, and enterprise portals tailored to your processes.' },
      { name: 'API Design & Integration',desc: 'RESTful and GraphQL APIs, third-party integrations, and microservices architecture.' },
      { name: 'Cloud-Native Development',desc: 'Containerised applications on AWS ECS, EKS, or Azure Kubernetes Service.' },
      { name: 'DevOps & CI/CD',          desc: 'Automated pipelines, infrastructure as code, and continuous delivery practices.' },
      { name: 'Database Architecture',   desc: 'Relational and NoSQL database design, optimisation, and migration services.' },
      { name: 'Legacy Modernisation',    desc: 'Refactoring and re-platforming of legacy systems to modern, maintainable architectures.' },
    ],
    partners: ['AWS', 'Microsoft Azure', 'Cisco DevNet'],
    project: {
      client: 'Rocksteady Studios',
      headline: 'Cloud & Application Services',
      desc: 'End-to-end cloud and application services — design, implementation, and sustained support enabling seamless digital delivery and operations for a creative technology studio.',
    },
  },
  {
    id: 'services',
    num: '04',
    accent: '#38bdf8',
    label: 'Managed Services',
    headline: 'Expert Support. Continuous Innovation.',
    subline: 'Advisory. Support. Managed Operations.',
    description: [
      'Technology does not manage itself. Our managed services team provides the ongoing expertise, monitoring, and support that organisations need to keep their infrastructure secure, performant, and optimised — without the overhead of building an in-house team for every domain.',
      'Our ITIL v4, PMP, and PRINCE2-certified consultants bring structured service management discipline to every engagement.',
    ],
    capabilities: [
      { name: 'Managed Networks',       desc: 'Proactive monitoring, management, and optimisation of your network infrastructure.' },
      { name: 'Managed Firewall',       desc: 'Policy management, rule reviews, firmware updates, and 24/7 alerting on your firewall estate.' },
      { name: 'IT Consulting',          desc: 'Strategic technology advisory — roadmaps, vendor selection, architecture reviews, and more.' },
      { name: 'Project Management',     desc: 'PMP and PRINCE2-certified PMs delivering technology projects on time and within budget.' },
      { name: 'ITIL Service Management',desc: 'Incident, change, and problem management aligned to ITIL v4 best practice.' },
      { name: 'Technical Advisory',     desc: 'Fractional CTO and advisory services for growing organisations building their tech capability.' },
      { name: 'Vendor Management',      desc: 'We manage your vendor relationships, renewals, and SLAs on your behalf.' },
      { name: 'SLA-backed Support',     desc: 'Defined response times and escalation paths — you always know who to call.' },
    ],
    partners: ['Sophos', 'Cisco', 'Fortinet'],
    project: {
      client: 'Jott Limited',
      headline: 'Managed Networks & Firewall',
      desc: 'Ongoing managed network and firewall services, technical advisory and consultancy — keeping infrastructure secure, available, and performant as a continuously evolving managed service.',
    },
  },
]

export default function ServicesPage() {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#eef2f7]">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-sky-100/50 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Solutions & Services</span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.02] tracking-tight mb-8 max-w-4xl">
            Intelligent Technology for Every Challenge
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            From cybersecurity and infrastructure to custom software and managed services — certified experts,
            proven methodology, and a commitment to your success.
          </p>
          {/* Jump nav */}
          <div className="mt-12 flex flex-wrap gap-4">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs font-semibold tracking-widest uppercase border border-slate-200 text-gray-500 px-4 py-2 bg-white hover:border-cyan-neon/50 hover:text-cyan-neon transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EACH SERVICE */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id}
          className={`py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f4f7fa]'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-start gap-6 mb-16 pb-8 border-b border-slate-200/60">
              <span className="text-gray-200 text-sm font-mono mt-1">{s.num}</span>
              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-2" style={{ color: s.accent }}>
                  {s.label}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{s.headline}</h2>
                <p className="text-gray-400 text-sm">{s.subline}</p>
              </div>
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Description */}
              <div className="lg:col-span-4 space-y-8">
                {s.description.map((para, j) => (
                  <p key={j} className="text-gray-500 leading-relaxed">{para}</p>
                ))}

                {/* Partners */}
                <div className="pt-4">
                  <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase mb-3">Technology Partners</p>
                  <div className="flex flex-wrap gap-2">
                    {s.partners.map((p) => (
                      <span key={p}
                        className="px-3 py-1.5 border border-slate-200 text-gray-400 text-xs bg-white hover:text-gray-700 hover:border-gray-300 transition-colors cursor-default">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reference project */}
                <div className="mt-6 pt-6 border-t border-slate-200/60">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3" style={{ color: s.accent }}>
                    Reference Project
                  </p>
                  <p className="text-gray-400 text-xs mb-2">{s.project.client}</p>
                  <h4 className="text-gray-900 font-semibold mb-3">{s.project.headline}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.project.desc}</p>
                </div>

                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all mt-2"
                  style={{ color: s.accent }}>
                  Enquire about this service →
                </Link>
              </div>

              {/* Capabilities grid */}
              <div className="lg:col-span-8">
                <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase mb-8">Capabilities</p>
                <div className="grid sm:grid-cols-2 gap-px bg-gray-100">
                  {s.capabilities.map((cap) => (
                    <div key={cap.name}
                      className={`p-6 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f4f7fa]'} hover:bg-[#f0fdfa] transition-colors group`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.accent }} />
                        <h4 className="text-gray-900 text-sm font-semibold">{cap.name}</h4>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-[#eef2f7] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Not sure which service you need?
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Our experts will assess your environment and recommend the right solution.
              No commitment required — just an honest conversation.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/contact"
              className="bg-cyan-neon text-[#0d1f3c] font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-200 text-center">
              Book a Free Consultation
            </Link>
            <Link href="/about"
              className="border border-slate-200 text-gray-500 font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide hover:border-gray-400 hover:text-gray-800 transition-colors duration-200 text-center">
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
