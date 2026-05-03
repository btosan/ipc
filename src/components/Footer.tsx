'use client'

import Link from 'next/link'

const footerLinks = {
  organisation: [
    { href: '/about', label: 'About IPC' },
    { href: '/impact', label: 'Our Impact' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact Us' },
  ],
  programmes: [
    { href: '/about#programmes', label: 'Skill Acquisition' },
    { href: '/about#programmes', label: 'Election Crusade' },
    { href: '/about#programmes', label: 'Talent Hunt' },
    { href: '/about#programmes', label: 'Community Peace' },
    { href: '/about#programmes', label: 'Environmental Services' },
  ],
  get_involved: [
    { href: '/contact', label: 'Volunteer' },
    { href: '/contact', label: 'Donate' },
    { href: '/partners', label: 'Partner With Us' },
    { href: '/contact', label: 'Become a Member' },
  ],
}

const socials: { label: string; href: string; icon: string }[] = [
  { label: 'Twitter / X', href: '#', icon: 'X' },
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '◈' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'YouTube', href: '#', icon: '▶' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--color-ipc-charcoal)',
        color: '#d1d5db',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <style>{`
        .footer-social:hover {
          background: var(--color-ipc-green) !important;
          border-color: var(--color-ipc-green) !important;
        }
        .footer-link:hover {
          color: var(--color-ipc-green-light) !important;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgb(255 255 255 / 0.1)',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-ipc-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}
              >
                IPC
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: '1rem',
                  lineHeight: 1.3,
                }}
              >
                International<br />Peace Crusaders
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '280px' }}>
              Building sustainable peace from the individual outward — across families, communities, and nations.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="footer-social"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgb(255 255 255 / 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d1d5db',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#fff',
                  marginBottom: '1rem',
                }}
              >
                {section.replace('_', ' ')}
              </h3>
              <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.8rem',
            color: '#6b7280',
          }}
        >
          <p>© {new Date().getFullYear()} International Peace Crusaders. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}