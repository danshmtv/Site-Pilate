'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useI18n } from '../lib/i18n'

export default function Contact() {
  const { t, isRtl } = useI18n()

  const studios = [
    {
      name: 'EllaYoga — Port de Tel Aviv',
      address: 'Namal Tel Aviv, 14 Yigal Alon St., Tel Aviv',
      phone: '+972 3-123-4567',
      email: 'namal@ellayoga.com',
      hours: t.contact.hoursNamal,
      image: '/images/namal-home4.jpg',
    },
    {
      name: 'EllaYoga — Azrieli Sarona',
      address: 'Sarona Tower, 121 Menachem Begin Rd., Tel Aviv',
      phone: '+972 3-765-4321',
      email: 'sarona@ellayoga.com',
      hours: t.contact.hoursSarona,
      image: '/images/sarona-home5.jpg',
    },
  ]

  return (
    <section id="contact" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
            {t.contact.label}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '4rem', textAlign: isRtl ? 'right' : 'left' }}>
          {t.contact.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
          {studios.map((s) => (
            <div key={s.name} style={{ background: 'var(--white)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              {/* Real photo */}
              <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                <Image src={s.image} alt={s.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 60%)' }} />
              </div>

              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--text)', marginBottom: '1.5rem', textAlign: isRtl ? 'right' : 'left' }}>{s.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[{ icon: MapPin, text: s.address }, { icon: Phone, text: s.phone }, { icon: Mail, text: s.email }].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                      <Icon size={15} color="var(--sage-dark)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.5, textAlign: isRtl ? 'right' : 'left' }}>{text}</span>
                    </div>
                  ))}

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', textAlign: isRtl ? 'right' : 'left' }}>
                    <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      {t.contact.hoursLabel}
                    </div>
                    <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, whiteSpace: 'pre-line', lineHeight: 1.7 }}>{s.hours}</div>
                  </div>
                </div>

                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.1em', textTransform: 'uppercase', color: 'var(--sage-dark)', textDecoration: 'none', borderBottom: '1px solid var(--sage)', paddingBottom: '1px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                  {t.contact.mapsLink}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div style={{ marginTop: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t.contact.follow}
          </div>
          <a href="https://instagram.com/ellayoga" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.85rem', color: 'var(--text)', textDecoration: 'none', fontWeight: 400 }}>
            <span style={{ fontSize: '1.1rem', color: 'var(--sage-dark)' }}>◎</span>
            @ellayoga
          </a>
        </div>
      </div>
    </section>
  )
}
