'use client'

type Tier = {
  id: string
  label: string
  icon: string
  color: string
  bg: string
  desc: string
}

type Partner = {
  id: string
  name: string
  tier: string
  website: string | null
  logo: string | null
}

export default function PartnerCard({ partner, tier }: { partner: Partner; tier: Tier }) {
  return (
    <a
      href={partner.website ?? '#'}
      target={partner.website && partner.website !== '#' ? '_blank' : undefined}
      rel={partner.website && partner.website !== '#' ? 'noopener noreferrer' : undefined}
      aria-label={`${partner.name} — opens in new tab`}
      className="partner-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 1rem',
        borderRadius: '0.75rem',
        border: '1.5px solid #e5e7eb',
        background: '#fff',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        gap: '0.75rem',
        minHeight: '120px',
        textAlign: 'center',
      }}
    >
      {partner.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt={partner.name}
          style={{ maxWidth: '120px', maxHeight: '60px', objectFit: 'contain' }}
        />
      ) : (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: tier.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
          }}
          aria-hidden="true"
        >
          {tier.icon}
        </div>
      )}
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.85rem',
          color: 'var(--color-ipc-charcoal)',
          lineHeight: 1.4,
        }}
      >
        {partner.name}
      </span>
    </a>
  )
}

