import type { Metadata } from 'next'
import Link from 'next/link'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Home — Building Sustainable Peace',
  description:
    'International Peace Crusaders is a global NGO dedicated to sustainable peacebuilding across individuals, families, communities, and nations.',
}

const programmes = [
  {
    icon: '🎓',
    title: 'Skill Acquisition Programme',
    desc: 'Empowering individuals with vocational and entrepreneurial skills to break cycles of poverty and conflict.',
  },
  {
    icon: '🗳️',
    title: 'Free & Fair Election Crusade',
    desc: 'Promoting democratic values, civic education, and non-violent electoral participation across communities.',
  },
  {
    icon: '🌟',
    title: 'Talent Hunt Initiative',
    desc: 'Discovering, mentoring, and platforming youth talent as a catalyst for peace and national development.',
  },
  {
    icon: '🤝',
    title: 'Community Peace Movement',
    desc: 'Grassroots conflict resolution, dialogue facilitation, and inter-communal reconciliation programmes.',
  },
  {
    icon: '🌱',
    title: 'Environmental Services',
    desc: 'Sustainable livelihoods through environmental stewardship, green jobs, and community-led conservation.',
  },
  {
    icon: '📢',
    title: 'Workshops & Seminars',
    desc: 'High-impact trainings, award presentations, and knowledge exchange events driving lasting change.',
  },
]

const impactStats = [
  { value: '250,000+', label: 'Lives Impacted' },
  { value: '840+', label: 'Communities Served' },
  { value: '34', label: 'Countries Active' },
  { value: '12,000+', label: 'Volunteers Mobilised' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `
            radial-gradient(ellipse at 15% 60%, rgb(22 163 74 / 0.13) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 30%, rgb(217 119 6 / 0.09) 0%, transparent 50%),
            linear-gradient(160deg, #f0fdf4 0%, #fff 50%, #fefce8 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '72px',
        }}
      >
        {/* Decorative dots pattern */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgb(22 163 74 / 0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative ring */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-10%',
            top: '10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '60px solid rgb(22 163 74 / 0.06)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem 1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            {/* Badge */}
            <div
              className="animate-fade-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 1rem',
                background: 'rgb(22 163 74 / 0.1)',
                border: '1px solid rgb(22 163 74 / 0.2)',
                borderRadius: '9999px',
                color: 'var(--color-ipc-green-dark)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.85rem',
                marginBottom: '1.75rem',
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-ipc-green)', display: 'inline-block' }} />
              Global Peacebuilding Alliance
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-ipc-charcoal)',
                marginBottom: '1.5rem',
              }}
            >
              Building{' '}
              <span className="text-gradient-green">Sustainable</span>
              <br />
              Peace for{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  color: 'var(--color-ipc-gold)',
                }}
              >
                Every
              </span>{' '}
              Life
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.8,
                color: '#4b5563',
                marginBottom: '2.5rem',
                maxWidth: '580px',
              }}
            >
              IPC is a global alliance dedicated to building peace from the individual outward — across families, communities, nations, and the world. Known not by our size, but by the character of our volunteers and the tangible impact of our programmes.
            </p>

            <div
              className="animate-fade-up delay-300"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="/contact" className="btn-primary">
                Donate & Support ↗
              </a>
              <a href="/contact" className="btn-outline">
                Volunteer With Us
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="animate-fade-up delay-400"
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}
            >
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.6rem',
                      color: 'var(--color-ipc-green)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ─────────────────────────────────────────── */}
      <section
        aria-labelledby="mission-heading"
        style={{
          background: 'var(--color-ipc-green)',
          padding: '3.5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p
            id="mission-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}
          >
            &ldquo;A world where every individual lives in freedom, harmony, cooperation, and shared prosperity — guided by absolute values of faith, true love, and obedience to divine will and conscience.&rdquo;
          </p>
          <p style={{ color: 'rgb(255 255 255 / 0.75)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.08em' }}>
            — OUR VISION
          </p>
        </div>
      </section>

      {/* ── PROGRAMMES ────────────────────────────────────────────── */}
      <section
        aria-labelledby="programmes-heading"
        className="section-pad"
        style={{ background: '#fff', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.875rem',
                background: 'rgb(22 163 74 / 0.08)',
                borderRadius: '9999px',
                color: 'var(--color-ipc-green-dark)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.875rem',
              }}
            >
              Core Programmes
            </span>
            <h2
              id="programmes-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              How We Build Peace
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              Six interconnected programmes delivering measurable impact across communities, youth, environment, and governance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {programmes.map((prog, i) => (
              <article
                key={prog.title}
                className="card"
                style={{ padding: '2rem' }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '0.75rem',
                    background: 'rgb(22 163 74 / 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '1.25rem',
                  }}
                  aria-hidden="true"
                >
                  {prog.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--color-ipc-charcoal)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {prog.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {prog.desc}
                </p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/about#programmes" className="btn-outline">
              Explore All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ──────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        style={{
          background: `linear-gradient(135deg, var(--color-ipc-charcoal) 0%, #292524 100%)`,
          padding: '5rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgb(22 163 74 / 0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2
            id="cta-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            Join the Movement for{' '}
            <span className="text-gradient-gold">Lasting Peace</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Whether you choose to donate, volunteer, or partner — your contribution directly transforms lives and communities around the world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-gold">Donate Today</a>
            <a href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Volunteer
            </a>
            <Link href="/partners" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
