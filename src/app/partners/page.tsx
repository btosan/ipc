import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import PartnerCard from '@/components/PartnerCard'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'IPC partners with corporations, NGOs, government bodies, and faith-based organisations to multiply the impact of our peacebuilding work.',
}

const tiers = [
  {
    id: 'corporate',
    label: 'Corporate Partners',
    icon: '🏢',
    color: '#1d4ed8',
    bg: 'rgb(29 78 216 / 0.06)',
    desc: 'Businesses that align CSR with sustainable peace and community development.',
  },
  {
    id: 'ngo',
    label: 'NGO & Civil Society',
    icon: '🌍',
    color: 'var(--color-ipc-green)',
    bg: 'rgb(22 163 74 / 0.06)',
    desc: 'Fellow organisations co-delivering programmes and amplifying field impact.',
  },
  {
    id: 'government',
    label: 'Government & Intergovernmental',
    icon: '🏛️',
    color: '#7c3aed',
    bg: 'rgb(124 58 237 / 0.06)',
    desc: 'State actors and international bodies integrating IPC into policy frameworks.',
  },
  {
    id: 'faith-based',
    label: 'Faith-Based Organisations',
    icon: '✝☪',
    color: 'var(--color-ipc-gold)',
    bg: 'rgb(217 119 6 / 0.06)',
    desc: 'Religious institutions harnessing moral authority for inter-faith reconciliation.',
  },
]

const fallbackPartners = [
  { id: '1', name: 'United Nations Development Programme', tier: 'government', website: 'https://undp.org', logo: null },
  { id: '2', name: 'African Union Commission', tier: 'government', website: 'https://au.int', logo: null },
  { id: '3', name: 'World Peace Foundation', tier: 'ngo', website: '#', logo: null },
  { id: '4', name: 'Seeds of Peace', tier: 'ngo', website: '#', logo: null },
  { id: '5', name: 'Access Bank Nigeria', tier: 'corporate', website: '#', logo: null },
  { id: '6', name: 'Dangote Foundation', tier: 'corporate', website: '#', logo: null },
  { id: '7', name: 'Christian Association of Nigeria', tier: 'faith-based', website: '#', logo: null },
  { id: '8', name: 'Supreme Council for Islamic Affairs', tier: 'faith-based', website: '#', logo: null },
]

async function getPartners() {
  try {
    return await prisma.partner.findMany({ orderBy: { createdAt: 'asc' } })
  } catch {
    return fallbackPartners
  }
}

export default async function PartnersPage() {
  const partners = await getPartners()

  return (
    <>
      <style>{`
        .partner-card:hover {
          border-color: var(--color-ipc-green) !important;
          box-shadow: 0 4px 20px rgb(22 163 74 / 0.12) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <section
        aria-label="Partners page header"
        style={{
          background: `
            radial-gradient(ellipse at 20% 60%, rgb(22 163 74 / 0.12) 0%, transparent 55%),
            linear-gradient(160deg, #f0fdf4 0%, #fff 60%)
          `,
          paddingTop: '120px',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '660px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.25rem 0.875rem',
              background: 'rgb(22 163 74 / 0.1)',
              borderRadius: '9999px',
              color: 'var(--color-ipc-green-dark)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem',
            }}
          >
            Our Partners
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-ipc-charcoal)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Stronger Together for <span className="text-gradient-green">Peace</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
            IPC&apos;s impact is multiplied through strategic alliances with corporations, NGOs, governments, and faith communities across the globe.
          </p>
        </div>
      </section>

      {/* ── TIER DESCRIPTIONS ─────────────────────────────────────── */}
      <section aria-labelledby="tiers-heading" style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 id="tiers-heading" className="sr-only">Partnership tiers</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {tiers.map((tier) => (
              <article key={tier.id} className="card" style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.625rem',
                    background: tier.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    marginBottom: '1rem',
                  }}
                  aria-hidden="true"
                >
                  {tier.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: tier.color,
                    marginBottom: '0.5rem',
                  }}
                >
                  {tier.label}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{tier.desc}</p>
              </article>
            ))}
          </div>

          {tiers.map((tier) => {
            const tierPartners = partners.filter((p) => p.tier === tier.id)
            if (tierPartners.length === 0) return null
            return (
              <section key={tier.id} style={{ marginBottom: '3.5rem' }} aria-labelledby={`tier-${tier.id}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '2px solid rgb(22 163 74 / 0.1)',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }} aria-hidden="true">{tier.icon}</span>
                  <h3
                    id={`tier-${tier.id}`}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: 'var(--color-ipc-charcoal)',
                    }}
                  >
                    {tier.label}
                  </h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                  {tierPartners.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} tier={tier} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      {/* ── BECOME A PARTNER CTA ──────────────────────────────────── */}
      <section
        aria-labelledby="partner-cta-heading"
        style={{ background: 'var(--color-ipc-green)', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }} aria-hidden="true">🤝</div>
          <h2
            id="partner-cta-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            Become an IPC Partner
          </h2>
          <p style={{ color: 'rgb(255 255 255 / 0.85)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Join a global community of organisations committed to sustainable peace. Whether you&apos;re a corporation, NGO, government body, or faith institution — there&apos;s a place for you at the IPC table.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: '#fff',
              color: 'var(--color-ipc-green-dark)',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Start a Conversation →
          </a>
        </div>
      </section>
    </>
  )
}