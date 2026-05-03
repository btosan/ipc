import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About IPC',
  description:
    'Learn about the vision, mission, aims, and core programmes of International Peace Crusaders — a global alliance for sustainable peacebuilding.',
}

const objectives = [
  {
    number: '01',
    title: 'Individual & Family Peace',
    desc: 'Fostering peace within individuals, families, youth groups, and communities in conflict or crisis through counselling, mediation, and reconciliation.',
  },
  {
    number: '02',
    title: 'Hope Through Skills & Jobs',
    desc: 'Creating hope through skill acquisition centres, job creation initiatives, and environmental sustainability — transforming poverty into empowerment.',
  },
  {
    number: '03',
    title: 'Humanitarian Support',
    desc: 'Providing charity services and support to those in need — including orphans, refugees, and displaced persons — restoring dignity and hope.',
  },
  {
    number: '04',
    title: 'Strategic Collaboration',
    desc: 'Collaborating with corporate bodies, NGOs, traditional councils, law enforcement agencies, and inter-religious groups for systemic peace.',
  },
]

const programmes = [
  {
    icon: '🎓',
    title: 'Skill Acquisition Programme',
    desc: 'Vocational training centres providing hands-on skills in trades, technology, fashion, agriculture, and entrepreneurship — breaking poverty cycles permanently.',
    tag: 'Economic Empowerment',
  },
  {
    icon: '🗳️',
    title: 'Free & Fair Election Crusade Project',
    desc: 'Civic education, voter sensitisation, candidate vetting support, and non-violence advocacy during electoral periods across Africa and beyond.',
    tag: 'Democracy & Governance',
  },
  {
    icon: '🌟',
    title: 'Talent Hunt Initiative',
    desc: 'Nationwide talent competitions, mentorship programmes, and scholarship support identifying and nurturing youth potential in arts, sports, STEM, and leadership.',
    tag: 'Youth Development',
  },
  {
    icon: '🤝',
    title: 'Community Peace Movement',
    desc: 'Grassroots conflict resolution, community dialogue sessions, inter-ethnic friendship drives, and peace ambassador programmes in volatile regions.',
    tag: 'Conflict Resolution',
  },
  {
    icon: '🌱',
    title: 'Environmental Services & Job Creation',
    desc: 'Climate-smart agriculture, waste management enterprises, urban greening, and ecotourism ventures generating sustainable livelihoods.',
    tag: 'Environmental Justice',
  },
  {
    icon: '📢',
    title: 'Workshops, Seminars & Award Presentations',
    desc: 'Annual peace conferences, inter-faith dialogues, capacity-building workshops, and recognition ceremonies honouring peacebuilders globally.',
    tag: 'Knowledge Exchange',
  },
]

const modalities = [
  { icon: '🏛️', title: 'Faith-Based Dialogue', desc: 'Harnessing the moral authority of religious institutions to promote tolerance and reconciliation.' },
  { icon: '🏘️', title: 'Community Mobilisation', desc: 'Activating community leaders, women groups, and youth councils as peace agents.' },
  { icon: '🎓', title: 'Capacity Building', desc: 'Training peacebuilders, mediators, and conflict resolution practitioners at all levels.' },
  { icon: '📊', title: 'Policy Advocacy', desc: 'Engaging governments and international bodies to embed peace in legislation and governance.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <section
        aria-label="About IPC header"
        style={{
          background: `
            radial-gradient(ellipse at 20% 60%, rgb(22 163 74 / 0.12) 0%, transparent 55%),
            linear-gradient(160deg, #f0fdf4 0%, #fff 60%)
          `,
          paddingTop: '120px',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
            About IPC
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              color: 'var(--color-ipc-charcoal)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Known Not By Our Size,<br />
            But By Our <span className="text-gradient-green">Impact</span>
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              lineHeight: 1.8,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            International Peace Crusaders is a global alliance and organisation dedicated to building sustainable peace — from the individual level outward across families, communities, nations, and the world.
          </p>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────────── */}
      <section
        aria-labelledby="vision-mission-heading"
        style={{ padding: '5rem 1.5rem', background: '#fff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 id="vision-mission-heading" className="sr-only">Vision and Mission</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Vision */}
            <article
              style={{
                padding: '2.5rem',
                borderRadius: '1rem',
                background: 'var(--color-ipc-green)',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  border: '30px solid rgb(255 255 255 / 0.08)',
                }}
              />
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }} aria-hidden="true">🌍</div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                }}
              >
                Our Vision
              </h3>
              <p style={{ lineHeight: 1.8, color: 'rgb(255 255 255 / 0.9)', fontSize: '1rem' }}>
                A world where every individual lives in freedom, harmony, cooperation, and shared prosperity — guided by absolute values of faith, true love, and obedience to divine will and conscience.
              </p>
            </article>

            {/* Mission */}
            <article
              style={{
                padding: '2.5rem',
                borderRadius: '1rem',
                background: '#f9fafb',
                border: '1px solid rgb(22 163 74 / 0.12)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  border: '30px solid rgb(22 163 74 / 0.06)',
                }}
              />
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }} aria-hidden="true">🎯</div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: 'var(--color-ipc-charcoal)',
                }}
              >
                Our Mission
              </h3>
              <p style={{ lineHeight: 1.8, color: '#4b5563', fontSize: '1rem' }}>
                IPC is a global alliance and organisation dedicated to building sustainable peace from the individual level outward — across families, communities, nations, and the world. Principled, passionate, and results-driven, we are known not by our size, but by the character of our volunteers and the tangible impact of our programmes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── AIMS & OBJECTIVES ─────────────────────────────────────── */}
      <section
        aria-labelledby="objectives-heading"
        style={{ padding: '5rem 1.5rem', background: '#f9fafb' }}
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
              What We Stand For
            </span>
            <h2
              id="objectives-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              Aims & Objectives
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {objectives.map((obj) => (
              <article key={obj.number} className="card" style={{ padding: '2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '2.5rem',
                    color: 'rgb(22 163 74 / 0.15)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                  aria-hidden="true"
                >
                  {obj.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--color-ipc-charcoal)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {obj.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{obj.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ────────────────────────────────────────────── */}
      <section
        id="programmes"
        aria-labelledby="programmes-heading"
        style={{ padding: '5rem 1.5rem', background: '#fff' }}
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
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              How We Deliver Change
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {programmes.map((prog) => (
              <article key={prog.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
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
                    }}
                    aria-hidden="true"
                  >
                    {prog.icon}
                  </div>
                  <span
                    style={{
                      padding: '0.2rem 0.6rem',
                      background: 'rgb(217 119 6 / 0.1)',
                      color: 'var(--color-ipc-gold)',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {prog.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--color-ipc-charcoal)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {prog.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{prog.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE MODALITIES ───────────────────────────────────────── */}
      <section
        aria-labelledby="modalities-heading"
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--color-ipc-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              id="modalities-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '0.75rem',
              }}
            >
              Core Modalities of Work
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1rem' }}>The foundational approaches that underpin everything we do</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {modalities.map((m) => (
              <article
                key={m.title}
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgb(255 255 255 / 0.08)',
                  background: 'rgb(255 255 255 / 0.03)',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }} aria-hidden="true">{m.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#fff',
                    marginBottom: '0.625rem',
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7 }}>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
