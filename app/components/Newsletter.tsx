'use client'
import { useState } from 'react'
import { useI18n } from '../lib/i18n'

export default function Newsletter() {
  const { t, isRtl } = useI18n()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section style={{ padding: '6rem 2rem', background: 'var(--text)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circle */}
      <div style={{ position: 'absolute', top: '-60px', right: isRtl ? 'auto' : '-60px', left: isRtl ? '-60px' : 'auto', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(168,186,164,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: isRtl ? 'auto' : '10%', right: isRtl ? '10%' : 'auto', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500 }}>{t.newsletter.label}</span>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage)' }} />
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--white)', marginBottom: '1rem' }}>
          {t.newsletter.title}
        </h2>
        <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginBottom: '2.5rem' }}>
          {t.newsletter.desc}
        </p>

        {sent ? (
          <div style={{ background: 'rgba(168,186,164,0.15)', border: '1px solid rgba(168,186,164,0.3)', borderRadius: '4px', padding: '1.25rem 2rem', display: 'inline-block' }}>
            <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem', color: 'var(--sage)', fontWeight: 400 }}>
              ✓ {t.newsletter.success}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', maxWidth: '480px', margin: '0 auto', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              style={{
                flex: 1, padding: '0.9rem 1.2rem',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '3px', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif',
                fontSize: '0.85rem', color: 'var(--white)', fontWeight: 300, outline: 'none',
                textAlign: isRtl ? 'right' : 'left',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--sage)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            />
            <button type="submit" style={{ background: 'var(--sage-dark)', color: 'var(--white)', border: 'none', padding: '0.9rem 1.75rem', borderRadius: '3px', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}>
              {t.newsletter.cta}
            </button>
          </form>
        )}

        <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', marginTop: '1.25rem', fontWeight: 300, lineHeight: 1.6 }}>
          {t.newsletter.rgpd}
        </p>
      </div>
    </section>
  )
}
