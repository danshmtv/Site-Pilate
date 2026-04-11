'use client'
import Image from 'next/image'
import { useI18n } from '../lib/i18n'

const blogImages = [
  '/images/namal-home25-3.webp',
  '/images/sarona-home2-3.jpg',
  '/images/namal-home3.jpg',
]

const catColors: Record<string, string> = {
  'Bien-être': '#7A9675',
  'Wellness': '#7A9675',
  'רווחה': '#7A9675',
  'Cours': '#9A7A65',
  'Classes': '#9A7A65',
  'שיעורים': '#9A7A65',
  'Pratique': '#6A7A9A',
  'Practice': '#6A7A9A',
  'תרגול': '#6A7A9A',
}

export default function Blog() {
  const { t, isRtl } = useI18n()

  return (
    <section id="blog" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>{t.blog.label}</span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '4rem', textAlign: isRtl ? 'right' : 'left' }}>
          {t.blog.title}
        </h2>

        {/* Articles grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {t.blog.articles.map((article, i) => (
            <article
              key={i}
              style={{ background: 'var(--white)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '180px', position: 'relative', overflow: 'hidden' }}>
                <Image src={blogImages[i]} alt={article.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s' }} />
                {/* Category pill */}
                <div style={{ position: 'absolute', top: '1rem', left: isRtl ? 'auto' : '1rem', right: isRtl ? '1rem' : 'auto', background: catColors[article.cat] || 'var(--sage-dark)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '2px' }}>
                  {article.cat}
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', color: 'var(--text-light)', letterSpacing: '0.08em', marginBottom: '0.75rem', textAlign: isRtl ? 'right' : 'left' }}>
                  {article.date}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.55rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, marginBottom: '0.75rem', textAlign: isRtl ? 'right' : 'left' }}>
                  {article.title}
                </h3>
                <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', lineHeight: 1.75, color: 'var(--text-muted)', fontWeight: 300, marginBottom: '1.25rem', textAlign: isRtl ? 'right' : 'left' }}>
                  {article.excerpt}
                </p>
                <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 500, color: 'var(--sage-dark)', display: 'block', textAlign: isRtl ? 'right' : 'left' }}>
                  {t.blog.readMore}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
