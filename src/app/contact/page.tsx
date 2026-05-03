import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact IPC',
  description:
    'Get in touch with International Peace Crusaders — volunteer, donate, partner, or ask a question. We would love to hear from you.',
}

const contactDetails = [
  {
    icon: '📍',
    label: 'Headquarters',
    value: 'Lagos, Nigeria',
    sub: 'With chapters across 34 countries',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@ipc-global.org',
    sub: 'We respond within 2–3 business days',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+234 (0) 800 000 0000',
    sub: 'Monday – Friday, 9am – 5pm WAT',
  },
  {
    icon: '🌐',
    label: 'Website',
    value: 'www.ipc-global.org',
    sub: 'Stay connected with our work',
  },
]

const involvementOptions = [
  { icon: '💚', title: 'Donate', desc: 'Your financial support funds our programmes, skill centres, and humanitarian outreach.' },
  { icon: '🙋', title: 'Volunteer', desc: 'Bring your time, skills, and passion to communities that need them most.' },
  { icon: '🤝', title: 'Partner', desc: 'Align your organisation with IPC\'s mission through a formal partnership.' },
  { icon: '📣', title: 'Advocate', desc: 'Use your voice and platform to spread the message of sustainable peace.' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <section
        aria-label="Contact page header"
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
            Get In Touch
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
            Let&apos;s Build Peace <span className="text-gradient-green">Together</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
            Whether you want to donate, volunteer, partner, or simply learn more — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section
        aria-label="Contact information and form"
        style={{ padding: '4rem 1.5rem 6rem', background: '#fff' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Details */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--color-ipc-charcoal)',
                marginBottom: '2rem',
              }}
            >
              Contact Details
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    background: '#f9fafb',
                    border: '1px solid rgb(22 163 74 / 0.08)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      width: '44px',
                      height: '44px',
                      borderRadius: '0.5rem',
                      background: 'rgb(22 163 74 / 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
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
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        color: 'var(--color-ipc-charcoal)',
                        fontSize: '0.95rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ways to get involved */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--color-ipc-charcoal)',
                marginBottom: '1.25rem',
              }}
            >
              Ways to Get Involved
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {involvementOptions.map((opt) => (
                <div
                  key={opt.title}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    background: '#f9fafb',
                    border: '1px solid rgb(22 163 74 / 0.08)',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }} aria-hidden="true">{opt.icon}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--color-ipc-charcoal)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {opt.title}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5 }}>{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div
              className="card"
              style={{ padding: '2.5rem' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'var(--color-ipc-charcoal)',
                  marginBottom: '0.5rem',
                }}
              >
                Send Us a Message
              </h2>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Fill in the form below and a member of our team will be in touch shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDRESS / MAP PLACEHOLDER ─────────────────────────────── */}
      <section aria-label="Office location" style={{ background: '#f9fafb', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgb(22 163 74 / 0.12)',
              background: 'linear-gradient(135deg, rgb(22 163 74 / 0.05) 0%, #fff 100%)',
              padding: '3rem',
              textAlign: 'center',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ fontSize: '3rem' }} aria-hidden="true">📍</div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--color-ipc-charcoal)',
              }}
            >
              International Headquarters
            </h3>
            <address
              style={{
                fontStyle: 'normal',
                color: '#4b5563',
                fontSize: '1rem',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
              }}
            >
              International Peace Crusaders (IPC)<br />
              Victoria Island, Lagos<br />
              Nigeria, West Africa<br />
              <br />
              <a href="tel:+2348000000000" style={{ color: 'var(--color-ipc-green)', textDecoration: 'none', fontWeight: 600 }}>
                +234 (0) 800 000 0000
              </a>
              {' · '}
              <a href="mailto:info@ipc-global.org" style={{ color: 'var(--color-ipc-green)', textDecoration: 'none', fontWeight: 600 }}>
                info@ipc-global.org
              </a>
            </address>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', maxWidth: '400px', lineHeight: 1.6 }}>
              Replace this block with an embedded Google Map iframe using your actual address.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
