'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/impact', label: 'Impact' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on navigation without cascading setState
  if (lastPathname !== pathname) {
    setLastPathname(pathname)
    if (open) setOpen(false)
  }

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 32px rgb(0 0 0 / 0.08)' : 'none',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="International Peace Crusaders — Home"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
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
              fontSize: '1.1rem',
              flexShrink: 0,
            }}
          >
            IPC
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--color-ipc-green-dark)',
              lineHeight: 1.2,
            }}
          >
            International<br />Peace Crusaders
          </span>
        </Link>

        {/* Desktop nav */}
        <ul
          role="list"
          style={{
            display: 'none',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '0.25rem',
            alignItems: 'center',
          }}
          className="md-flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: pathname === link.href ? 'var(--color-ipc-green)' : '#374151',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  background: pathname === link.href ? 'rgb(22 163 74 / 0.08)' : 'transparent',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: 'none' }} className="md-flex-gap">
          <a href="/contact" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
            Donate / Volunteer
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="md-hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--color-ipc-charcoal)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform:
                  open && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  open && i === 1 ? 'scaleX(0)' :
                  open && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                  'none',
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        style={{
          display: open ? 'block' : 'none',
          background: '#fff',
          borderTop: '1px solid #e5e7eb',
          padding: '1rem 1.5rem 1.5rem',
        }}
      >
        <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  color: pathname === link.href ? 'var(--color-ipc-green)' : '#374151',
                  textDecoration: 'none',
                  background: pathname === link.href ? 'rgb(22 163 74 / 0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: '0.75rem' }}>
            <a href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Donate / Volunteer
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-flex-gap { display: flex !important; gap: 0.75rem; align-items: center; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </header>
  )
}