'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 250000, display: '250,000+', label: 'Lives Impacted', desc: 'Individuals directly reached through our programmes' },
  { value: 840, display: '840+', label: 'Communities Served', desc: 'Communities transformed through peace initiatives' },
  { value: 34, display: '34', label: 'Countries Active', desc: 'Nations with active IPC chapters and programmes' },
  { value: 12000, display: '12,000+', label: 'Volunteers Mobilised', desc: 'Passionate individuals dedicating their skills to peace' },
  { value: 6500, display: '6,500+', label: 'Jobs Created', desc: 'Livelihoods established through our programmes' },
  { value: 38000, display: '38,000+', label: 'Youths Trained', desc: 'Young people empowered through skills and mentorship' },
]

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-labelledby="stats-heading"
      style={{
        padding: '5rem 1.5rem',
        background: `
          radial-gradient(ellipse at 30% 50%, rgb(22 163 74 / 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 50%, rgb(217 119 6 / 0.05) 0%, transparent 60%),
          #f9fafb
        `,
      }}
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
            By The Numbers
          </span>
          <h2
            id="stats-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-ipc-charcoal)',
            }}
          >
            Our Impact in Numbers
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((stat, i) => (
            <article
              key={stat.label}
              className="card"
              style={{
                padding: '2rem',
                textAlign: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--color-ipc-green)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.display}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--color-ipc-charcoal)',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.label}
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {stat.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
