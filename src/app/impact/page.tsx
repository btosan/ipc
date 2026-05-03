import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Our Impact',
  description:
    'Explore the measurable impact of International Peace Crusaders — stats, stories, programme highlights, and annual milestones in sustainable peacebuilding.',
}

const fallbackStats = [
  { id: '1', label: 'Lives Impacted', value: '250,000+', description: 'Individuals directly reached through our programmes since inception' },
  { id: '2', label: 'Communities Served', value: '840+', description: 'Communities across Africa, Asia, and the Americas transformed through peace initiatives' },
  { id: '3', label: 'Countries Active', value: '34', description: 'Nations with active IPC chapters and programme delivery' },
  { id: '4', label: 'Volunteers Mobilised', value: '12,000+', description: 'Passionate individuals dedicating time and skills to sustainable peace' },
  { id: '5', label: 'Jobs Created', value: '6,500+', description: 'Livelihoods established through our Skill Acquisition and Environmental Services programmes' },
  { id: '6', label: 'Youths Trained', value: '38,000+', description: 'Young people empowered through the Talent Hunt Initiative and workshops' },
]

const stories = [
  {
    name: 'Amara Okonkwo',
    location: 'Benue State, Nigeria',
    programme: 'Skill Acquisition',
    story: 'After losing her husband in communal violence, Amara was left with three children and no income. IPC\'s tailoring programme equipped her with skills that now generate steady income, and she mentors 12 other women in her community.',
    icon: '👩‍🦱',
  },
  {
    name: 'Kabiru Musa',
    location: 'Kano, Nigeria',
    programme: 'Community Peace Movement',
    story: 'As a former youth gang member, Kabiru was recruited as a Community Peace Ambassador. Today he mediates inter-religious conflicts and has peacefully resolved over 40 disputes in his neighbourhood.',
    icon: '👨🏾',
  },
  {
    name: 'Sister Blessing Eze',
    location: 'Plateau State, Nigeria',
    programme: 'Inter-Faith Dialogue',
    story: 'A Catholic nun working alongside Muslim scholars in IPC\'s inter-faith programme, Sister Blessing helped establish the first joint Christian-Muslim peace council in her local government, serving 200,000 residents.',
    icon: '👩🏾‍🦳',
  },
]

const milestones = [
  { year: '2016', event: 'IPC Founded', desc: 'Established in Lagos with a founding team of 12 dedicated peacebuilders.' },
  { year: '2017', event: 'First Skill Acquisition Centre', desc: 'Launched our inaugural vocational training centre, training 250 youth in the first cohort.' },
  { year: '2018', event: 'Expanded to 5 States', desc: 'IPC programmes reached five Nigerian states, impacting 15,000+ beneficiaries.' },
  { year: '2019', event: 'Election Crusade Launch', desc: 'Deployed 2,000 peace monitors during general elections, preventing violence in 80+ polling units.' },
  { year: '2020', event: 'COVID-19 Relief Response', desc: 'Distributed food packs and PPE to 50,000 vulnerable households across Nigeria during the pandemic.' },
  { year: '2021', event: 'International Expansion', desc: 'Opened chapters in Ghana, Kenya, and Sierra Leone — IPC goes truly continental.' },
  { year: '2022', event: 'UN ECOSOC Consultative Status', desc: 'Granted special consultative status with the United Nations Economic and Social Council.' },
  { year: '2023', event: '200,000 Lives Milestone', desc: 'Crossed the 200,000 lives-impacted mark across 28 countries.' },
  { year: '2024', event: 'Environmental Services Launch', desc: 'Launched green jobs initiative creating 2,000 livelihoods in climate-smart agriculture.' },
  { year: '2025', event: '250,000+ Lives & 34 Countries', desc: 'Current reach — and growing. Our most impactful year yet.' },
]

const programmeHighlights = [
  {
    icon: '🎓',
    programme: 'Skill Acquisition',
    metric: '38,000+ Trained',
    desc: 'Vocational skills programmes in 18 trades including tailoring, welding, ICT, catering, and solar panel installation.',
  },
  {
    icon: '🗳️',
    programme: 'Election Crusade',
    metric: '14 Elections Monitored',
    desc: 'Non-partisan election monitoring and civic education across Nigeria, Ghana, Kenya, and Sierra Leone.',
  },
  {
    icon: '🤝',
    programme: 'Community Peace',
    metric: '800+ Conflicts Resolved',
    desc: 'Mediation, reconciliation, and dialogue sessions preventing violence in over 840 communities.',
  },
  {
    icon: '🌱',
    programme: 'Environmental Services',
    metric: '6,500+ Jobs Created',
    desc: 'Green economy livelihoods from waste management, urban farming, and ecotourism enterprises.',
  },
]

async function getImpactStats() {
  try {
    return await prisma.impactStat.findMany({ orderBy: { createdAt: 'asc' } })
  } catch {
    return fallbackStats
  }
}

export default async function ImpactPage() {
  const stats = await getImpactStats()

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <section
        aria-label="Impact page header"
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
            Our Impact
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
            Real Lives. <span className="text-gradient-green">Real Change.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
            Every statistic represents a human story — a conflict prevented, a skill learned, a family restored. Here is the evidence of peace made tangible.
          </p>
        </div>
      </section>

      {/* ── KEY STATS ─────────────────────────────────────────────── */}
      <section aria-labelledby="stats-heading" style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            id="stats-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--color-ipc-charcoal)',
              marginBottom: '2.5rem',
              textAlign: 'center',
            }}
          >
            Impact at a Glance
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat) => (
              <article key={stat.id} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    color: 'var(--color-ipc-green)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--color-ipc-charcoal)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {stat.label}
                </div>
                {stat.description && (
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {stat.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME HIGHLIGHTS ──────────────────────────────────── */}
      <section
        aria-labelledby="highlights-heading"
        style={{ padding: '5rem 1.5rem', background: '#f9fafb' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              id="highlights-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              Programme Highlights
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {programmeHighlights.map((p) => (
              <article
                key={p.programme}
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  background: '#fff',
                  border: '1px solid rgb(22 163 74 / 0.1)',
                  borderTop: '4px solid var(--color-ipc-green)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.875rem' }} aria-hidden="true">{p.icon}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-ipc-stone)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {p.programme}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: 'var(--color-ipc-green)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {p.metric}
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.7 }}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUMAN STORIES ─────────────────────────────────────────── */}
      <section
        aria-labelledby="stories-heading"
        style={{ padding: '5rem 1.5rem', background: '#fff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.875rem',
                background: 'rgb(217 119 6 / 0.08)',
                borderRadius: '9999px',
                color: 'var(--color-ipc-gold)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.875rem',
              }}
            >
              Beneficiary Stories
            </span>
            <h2
              id="stories-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              Behind Every Number Is a Name
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {stories.map((story) => (
              <article
                key={story.name}
                className="card"
                style={{ padding: '2rem' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgb(22 163 74 / 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {story.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        color: 'var(--color-ipc-charcoal)',
                        fontSize: '1rem',
                      }}
                    >
                      {story.name}
                    </div>
                    <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{story.location}</div>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '0.25rem',
                        padding: '0.125rem 0.5rem',
                        background: 'rgb(22 163 74 / 0.08)',
                        color: 'var(--color-ipc-green-dark)',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {story.programme}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    color: '#4b5563',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{story.story}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES TIMELINE ───────────────────────────────────── */}
      <section
        aria-labelledby="timeline-heading"
        style={{ padding: '5rem 1.5rem', background: '#f9fafb' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              id="timeline-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              A Decade of Impact
            </h2>
          </div>

          <ol
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              position: 'relative',
            }}
            aria-label="IPC milestones timeline"
          >
            {/* Vertical line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '64px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'rgb(22 163 74 / 0.15)',
              }}
            />

            {milestones.map((m, i) => (
              <li
                key={m.year}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: i < milestones.length - 1 ? '2rem' : 0,
                  position: 'relative',
                }}
              >
                {/* Year pill */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '80px',
                    paddingTop: '0.25rem',
                    textAlign: 'right',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.5rem',
                      background: 'var(--color-ipc-green)',
                      color: '#fff',
                      borderRadius: '0.375rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                    }}
                  >
                    {m.year}
                  </span>
                </div>

                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--color-ipc-green)',
                    border: '3px solid #fff',
                    boxShadow: '0 0 0 2px var(--color-ipc-green)',
                    marginTop: '0.375rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ paddingBottom: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--color-ipc-charcoal)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {m.event}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
