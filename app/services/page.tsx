import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Limesoft System',
  description:
    'Managed Security, Infrastructure, Applications, and Managed Services — expert technology solutions from Limesoft System.',
}

const securityCapabilities = [
  {
    name: 'Network Security',
    desc: 'Next-generation firewalls, segmentation, IDS/IPS, VPN, Zero Trust access and secure remote connectivity.',
  },
  {
    name: 'Cloud Security',
    desc: 'AWS and Azure security design, cloud posture reviews, IAM/RBAC, encryption, logging, monitoring and threat detection.',
  },
  {
    name: 'Microsoft 365 Security',
    desc: 'Defender, Entra ID, MFA, Conditional Access, Intune, Purview DLP, Exchange Online Protection, SharePoint, OneDrive and Teams security.',
  },
  {
    name: 'Penetration Testing',
    desc: 'External, internal, web, mobile, cloud and Microsoft 365 testing with clear remediation actions.',
  },
  {
    name: 'Endpoint Security',
    desc: 'EDR/XDR, device hardening, patching, mobile device management and device control across Windows, macOS, Linux and mobile.',
  },
  {
    name: 'Application Security',
    desc: 'Secure SDLC, code review, SAST/DAST, dependency scanning, secrets scanning and API security.',
  },
  {
    name: 'End-to-End Encryption',
    desc: 'TLS, VPN, email/file encryption, PKI, AWS KMS, Azure Key Vault and secure key management.',
  },
  {
    name: 'Optional',
    desc: 'SOC monitoring, threat hunting and incident response retainer.',
    optional: true,
  },
]

const infrastructurePlatforms = [
  {
    name: 'AWS Cloud',
    desc: 'Landing zones, networking, compute, storage, databases, containers, backup, disaster recovery, monitoring and cost optimisation.',
  },
  {
    name: 'Azure Cloud',
    desc: 'Azure landing zones, virtual networks, virtual machines, storage, Azure Kubernetes Service, App Services, backup, governance and monitoring.',
  },
  {
    name: 'Microsoft 365',
    desc: 'Exchange Online, SharePoint, OneDrive, Teams, Intune, Entra ID, Defender and Purview configuration, migration, governance and support.',
  },
  {
    name: 'AI-Ready Infrastructure',
    desc: 'Right-sized GPU/CPU, storage and networking for training and inference; secure data pipelines, MLOps foundations and cost controls.',
  },
  {
    name: 'Enterprise Networking',
    desc: 'Campus, branch, and WAN architecture using Cisco, HPE Aruba, and Juniper platforms — SD-WAN, SD-WLAN, and network automation included.',
  },
  {
    name: 'Data Centre Solutions',
    desc: 'Design and build of physical and virtual data centre environments for high availability and business continuity.',
  },
]

const applicationCapabilities = [
  {
    name: 'Custom Web Applications',
    desc: 'Full-stack development using modern frameworks — React, Next.js, Node.js — tailored to your workflows.',
  },
  {
    name: 'Mobile Applications',
    desc: 'iOS and Android applications built natively or with cross-platform frameworks for broad device reach.',
  },
  {
    name: 'Enterprise Software',
    desc: 'ERP integrations, workflow automation, and enterprise portals designed around your processes.',
  },
  {
    name: 'API Design & Integration',
    desc: 'RESTful and GraphQL APIs, third-party integrations, and microservices architecture for connected systems.',
  },
  {
    name: 'Cloud-Native Development',
    desc: 'Containerised applications on AWS ECS, EKS, or Azure Kubernetes Service with full DevOps pipelines.',
  },
  {
    name: 'Legacy Modernisation',
    desc: 'Refactoring and re-platforming of legacy systems to modern, maintainable architectures that scale.',
  },
]

const managedCapabilities = [
  {
    name: 'Managed Networks',
    desc: 'Proactive monitoring, management, and optimisation of your network infrastructure around the clock.',
  },
  {
    name: 'Managed Firewall',
    desc: 'Policy management, rule reviews, firmware updates, and 24/7 alerting on your firewall estate.',
  },
  {
    name: 'IT Consulting',
    desc: 'Strategic technology advisory — roadmaps, vendor selection, architecture reviews, and technology due diligence.',
  },
  {
    name: 'Project Management',
    desc: 'PMP and PRINCE2-certified PMs delivering technology projects on time and within budget.',
  },
  {
    name: 'ITIL Service Management',
    desc: 'Incident, change, and problem management aligned to ITIL v4 best practice.',
  },
  {
    name: 'SLA-backed Support',
    desc: 'Defined response times and escalation paths — you always know who to call and what to expect.',
  },
]

const sections = [
  { id: 'managed-security', label: 'Managed Security' },
  { id: 'infrastructure',   label: 'Infrastructure' },
  { id: 'applications',     label: 'Applications' },
  { id: 'managed-services', label: 'Managed Services' },
]

function Divider() {
  return <div className="border-t border-slate-200/70 my-10" />
}

function CapabilityList({ items }: { items: { name: string; desc: string; optional?: boolean }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.name} className="flex gap-3">
          <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-neon" />
          <p className="text-gray-600 text-[15px] leading-relaxed">
            <span className={`font-semibold ${item.optional ? 'text-gray-500 italic' : 'text-gray-900'}`}>
              {item.name}:
            </span>{' '}
            {item.desc}
          </p>
        </li>
      ))}
    </ul>
  )
}

function PlatformGrid({ items }: { items: { name: string; desc: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <div key={item.name} className="group">
          <h4 className="text-[15px] font-bold text-gray-900 mb-1.5">{item.name}</h4>
          <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-[#f8fafb] border-b border-slate-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-neon/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-7 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-[11px] font-bold tracking-[0.35em] uppercase">Solutions &amp; Services</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.04] tracking-tight mb-6 max-w-3xl">
            Technology that Protects, Scales, and Performs
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-12">
            From managed security and cloud infrastructure to bespoke software and ongoing support —
            certified expertise under one accountable partner.
          </p>

          {/* Jump nav */}
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[11px] font-bold tracking-[0.25em] uppercase border border-slate-200 bg-white text-gray-500 px-4 py-2 rounded hover:border-cyan-neon/50 hover:text-cyan-neon transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANAGED SECURITY ─── */}
      <section id="managed-security" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-5 mb-10">
            <div className="mt-1 w-1 h-12 bg-cyan-neon rounded-full shrink-0" />
            <div>
              <p className="text-cyan-neon text-[11px] font-bold tracking-[0.3em] uppercase mb-1">01</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Managed Security</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                Keep threats out, protect data, and meet compliance requirements without slowing your team.
              </p>
            </div>
          </div>

          <CapabilityList items={securityCapabilities} />

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon hover:gap-4 transition-all duration-200"
            >
              Talk to a security expert →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── INFRASTRUCTURE ─── */}
      <section id="infrastructure" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-5 mb-10">
            <div className="mt-1 w-1 h-12 bg-cyan-neon rounded-full shrink-0" />
            <div>
              <p className="text-cyan-neon text-[11px] font-bold tracking-[0.3em] uppercase mb-1">02</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Infrastructure</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                Design, build and run resilient platforms for modern workloads.
              </p>
            </div>
          </div>

          <PlatformGrid items={infrastructurePlatforms} />

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon hover:gap-4 transition-all duration-200"
            >
              Discuss your infrastructure →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── APPLICATIONS ─── */}
      <section id="applications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-5 mb-10">
            <div className="mt-1 w-1 h-12 bg-cyan-neon rounded-full shrink-0" />
            <div>
              <p className="text-cyan-neon text-[11px] font-bold tracking-[0.3em] uppercase mb-1">03</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Applications</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                Custom software and enterprise-grade applications built around your workflows — not the other way around.
              </p>
            </div>
          </div>

          <CapabilityList items={applicationCapabilities} />

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon hover:gap-4 transition-all duration-200"
            >
              Start a software project →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Divider />
      </div>

      {/* ─── MANAGED SERVICES ─── */}
      <section id="managed-services" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-5 mb-10">
            <div className="mt-1 w-1 h-12 bg-cyan-neon rounded-full shrink-0" />
            <div>
              <p className="text-cyan-neon text-[11px] font-bold tracking-[0.3em] uppercase mb-1">04</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Managed Services</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                Ongoing expertise, monitoring, and support — so your technology keeps running at its best
                without the overhead of an in-house team for every domain.
              </p>
            </div>
          </div>

          <CapabilityList items={managedCapabilities} />

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon hover:gap-4 transition-all duration-200"
            >
              Explore managed support →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#f8fafb] border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Not sure which service fits?
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Our experts will assess your environment and point you in the right direction.
              No commitment — just an honest conversation.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-cyan-neon text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide hover:bg-[#0179c0] transition-colors text-center"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/about"
              className="border border-slate-200 text-gray-600 font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide hover:border-gray-400 hover:text-gray-800 transition-colors text-center"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
