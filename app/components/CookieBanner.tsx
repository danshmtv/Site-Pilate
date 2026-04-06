'use client'
import { useState, useEffect } from 'react'
import { useI18n } from '../lib/i18n'

export default function CookieBanner() {
  const { t, isRtl } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('ella-cookies')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem('ella-cookies', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('ella-cookies', 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: '1.5rem', left: isRtl ? 'auto' : '1.5rem', right: isRtl ? '1.5rem' : 'auto',
      zIndex: 200, maxWidth: '440px', background: 'var(--white)',
      borderRadius: '4px', padding: '1.25rem 1.5rem',
      boxShadow: '0 8px 48px rgba(0,0,0,0.12)', border: '1px solid var(--border)',
    }}>
      <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem', textAlign: isRtl ? 'right' : 'left' }}>
        {t.cookie.message}{' '}
        <a href="/mentions-legales" style={{ color: 'var(--sage-dark)', textDecoration: 'underline' }}>{t.cookie.link}</a>.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: isRtl ? 'flex-start' : 'flex-end' }}>
        <button onClick={decline} style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: '2px', padding: '0.5rem 1rem', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', color: 'var(--text-muted)', cursor: 'pointer', letterSpacing: isRtl ? '0' : '0.08em', textTransform: 'uppercase' }}>
          {t.cookie.decline}
        </button>
        <button onClick={accept} style={{ background: 'var(--text)', border: 'none', borderRadius: '2px', padding: '0.5rem 1.25rem', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', color: 'var(--white)', cursor: 'pointer', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.08em', textTransform: 'uppercase' }}>
          {t.cookie.accept}
        </button>
      </div>
    </div>
  )
}
