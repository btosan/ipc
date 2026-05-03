'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitContactForm, type ContactFormState } from './actions'

const initialState: ContactFormState = { success: false, message: '' }

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      aria-label="Contact form"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
    >
      {/* Status message */}
      {state.message && (
        <div
          role="alert"
          aria-live="polite"
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            background: state.success ? 'rgb(22 163 74 / 0.1)' : 'rgb(239 68 68 / 0.1)',
            border: `1px solid ${state.success ? 'rgb(22 163 74 / 0.3)' : 'rgb(239 68 68 / 0.3)'}`,
            color: state.success ? 'var(--color-ipc-green-dark)' : '#dc2626',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          {state.success ? '✅ ' : '⚠️ '}
          {state.message}
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'var(--color-ipc-charcoal)',
            marginBottom: '0.5rem',
          }}
        >
          Full Name <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder="e.g. Amara Okonkwo"
          required
          aria-required="true"
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          aria-invalid={!!state.errors?.name}
        />
        {state.errors?.name && (
          <p id="name-error" role="alert" style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.375rem' }}>
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'var(--color-ipc-charcoal)',
            marginBottom: '0.5rem',
          }}
        >
          Email Address <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="you@example.com"
          required
          aria-required="true"
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          aria-invalid={!!state.errors?.email}
        />
        {state.errors?.email && (
          <p id="email-error" role="alert" style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.375rem' }}>
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'var(--color-ipc-charcoal)',
            marginBottom: '0.5rem',
          }}
        >
          Message <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form-input"
          placeholder="Tell us how you'd like to get involved, donate, or partner with IPC..."
          required
          aria-required="true"
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          aria-invalid={!!state.errors?.message}
          rows={6}
          style={{ resize: 'vertical', minHeight: '140px' }}
        />
        {state.errors?.message && (
          <p id="message-error" role="alert" style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.375rem' }}>
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary"
        style={{
          justifyContent: 'center',
          opacity: isPending ? 0.7 : 1,
          cursor: isPending ? 'not-allowed' : 'pointer',
          border: 'none',
        }}
        aria-busy={isPending}
      >
        {isPending ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}
