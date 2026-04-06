'use client'
import { useState } from 'react'
import { Calendar, Clock, User } from 'lucide-react'
import { useI18n } from '../lib/i18n'

const courses = ['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Yoga Nidra', 'Ashtanga', 'Yoga Prénatal']
const studios = ['Port de Tel Aviv', 'Tour Azrieli Sarona']
const times = ['07:00', '09:00', '09:30', '10:00', '12:00', '17:00', '18:30', '19:00', '20:00']

export default function Reservation() {
  const { t, isRtl } = useI18n()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ cours: '', studio: '', date: '', time: '', nom: '', email: '', tel: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.85rem 1rem', background: 'var(--surface)',
    border: '1px solid var(--border)', borderRadius: '3px',
    fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif',
    fontSize: '0.85rem', color: 'var(--text)', fontWeight: 300, outline: 'none',
    transition: 'border-color 0.2s', textAlign: isRtl ? 'right' : 'left',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif',
    fontSize: '0.72rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.1em',
    textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem',
    textAlign: isRtl ? 'right' : 'left',
  }

  return (
    <section id="reservation" style={{ padding: '8rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem', alignItems: 'start' }}>
          {/* Left info */}
          <div style={{ order: isRtl ? 2 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
              <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>{t.reservation.label}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '2rem', textAlign: isRtl ? 'right' : 'left' }}>
              {t.reservation.title1}<br /><em style={{ fontStyle: 'italic' }}>{t.reservation.title2}</em>
            </h2>
            <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 300, marginBottom: '3rem', textAlign: isRtl ? 'right' : 'left' }}>
              {t.reservation.desc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Calendar, title: isRtl ? 'שיעורים 7 ימים בשבוע' : 'Cours 7j/7', desc: isRtl ? 'שיעורים מהבוקר עד הערב, כל יום' : 'Des cours du matin au soir, chaque jour.' },
                { icon: Clock, title: isRtl ? 'ביטול גמיש' : 'Annulation flexible', desc: isRtl ? "ביטול עד שעתיים לפני השיעור ללא עלות" : "Annulez jusqu'à 2h avant sans frais." },
                { icon: User, title: isRtl ? 'שיעור ראשון חינם' : 'Premier cours offert', desc: isRtl ? 'בואו לגלות את EllaYoga ללא התחייבות' : 'Venez découvrir EllaYoga sans engagement.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: 'var(--surface)', borderRadius: '4px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '3px', background: '#A8BAA422', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color="var(--sage-dark)" />
                  </div>
                  <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--white)', borderRadius: '4px', padding: '2.5rem', border: '1px solid var(--border)', order: isRtl ? 1 : 2 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#A8BAA422', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>✓</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.75rem' }}>{t.reservation.successTitle}</h3>
                <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{t.reservation.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Progress */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {[1, 2].map((s) => (
                    <div key={s} style={{ flex: 1, height: '3px', borderRadius: '2px', background: step >= s ? 'var(--sage-dark)' : 'var(--border)', transition: 'background 0.3s' }} />
                  ))}
                </div>
                <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', letterSpacing: isRtl ? '0' : '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: isRtl ? 'right' : 'left' }}>
                  {t.reservation.stepOf} {step} {t.reservation.stepSur} {step === 1 ? t.reservation.step1 : t.reservation.step2}
                </div>

                {step === 1 ? (
                  <>
                    <div>
                      <label style={labelStyle}>{t.reservation.cours}</label>
                      <select required value={form.cours} onChange={(e) => setForm({ ...form, cours: e.target.value })} style={inputStyle}>
                        <option value="">{t.reservation.select}</option>
                        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>{t.reservation.studio}</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        {studios.map((s) => (
                          <button key={s} type="button" onClick={() => setForm({ ...form, studio: s })}
                            style={{ padding: '0.85rem', border: '1px solid', borderColor: form.studio === s ? 'var(--sage-dark)' : 'var(--border)', borderRadius: '3px', background: form.studio === s ? '#A8BAA411' : 'transparent', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.78rem', fontWeight: form.studio === s ? 500 : 300, color: form.studio === s ? 'var(--sage-dark)' : 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>{t.reservation.date}</label>
                        <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.reservation.heure}</label>
                        <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} style={inputStyle}>
                          <option value="">{t.reservation.select}</option>
                          {times.map((tt) => <option key={tt} value={tt}>{tt}</option>)}
                        </select>
                      </div>
                    </div>
                    <button type="button" onClick={() => { if (form.cours && form.studio && form.date && form.time) setStep(2) }}
                      style={{ background: 'var(--text)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', padding: '1rem', borderRadius: '2px', border: 'none', cursor: 'pointer', marginTop: '0.5rem', opacity: form.cours && form.studio && form.date && form.time ? 1 : 0.4 }}>
                      {t.reservation.continuer}
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <label style={labelStyle}>{t.reservation.nom}</label>
                      <input type="text" required placeholder={isRtl ? 'שמך המלא' : 'Votre nom'} value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} style={inputStyle} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>{t.reservation.email}</label>
                        <input type="email" required placeholder="email@..." value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.reservation.tel}</label>
                        <input type="tel" placeholder="+972..." value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>{t.reservation.message}</label>
                      <textarea rows={3} placeholder={t.reservation.messagePlaceholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button type="button" onClick={() => setStep(1)} style={{ background: 'transparent', color: 'var(--text-muted)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', letterSpacing: isRtl ? '0' : '0.1em', textTransform: 'uppercase', padding: '1rem', borderRadius: '2px', border: '1px solid var(--border)', cursor: 'pointer' }}>
                        {t.reservation.retour}
                      </button>
                      <button type="submit" style={{ flex: 1, background: 'var(--text)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', padding: '1rem', borderRadius: '2px', border: 'none', cursor: 'pointer' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sage-dark)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--text)' }}>
                        {t.reservation.confirmer}
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
