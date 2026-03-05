const featureCards = [
  {
    title: 'Modern Design System',
    text: 'Clean typography, balanced spacing, and premium visual hierarchy optimized for conversion.',
  },
  {
    title: 'Performance First',
    text: 'Built lightweight and responsive so it feels fast on mobile, tablet, and desktop.',
  },
  {
    title: 'Ready for Scale',
    text: 'Structured for easy expansion into services, portfolio, blog, product pages, and lead capture.',
  },
]

export default function Home() {
  return (
    <main style={{ background: '#070c16', color: '#e9f1ff', minHeight: '100vh', fontFamily: 'Inter,system-ui,sans-serif' }}>
      <header
        style={{
          borderBottom: '1px solid rgba(112,134,190,.25)',
          position: 'sticky',
          top: 0,
          background: 'rgba(8, 12, 22, .85)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <div style={{ width: 'min(1200px, 92vw)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
          <strong style={{ fontSize: 22 }}>Lonyi<span style={{ color: '#73f2ce' }}>Dev</span></strong>
          <nav style={{ display: 'flex', gap: 18, color: '#b5c4e2', fontSize: 14 }}>
            <span>Home</span>
            <span>Features</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </div>
      </header>

      <section style={{ width: 'min(1200px, 92vw)', margin: '0 auto', padding: '72px 0 40px', display: 'grid', gap: 24 }}>
        <div style={{
          border: '1px solid rgba(115,146,227,.28)',
          borderRadius: 24,
          padding: '34px clamp(20px,4vw,48px)',
          background: 'linear-gradient(180deg, #131f39, #0d162b)',
          boxShadow: '0 20px 55px rgba(0,0,0,.35)'
        }}>
          <p style={{ color: '#8ee7ff', margin: 0, fontSize: 13 }}>FULL WEBSITE PREVIEW</p>
          <h1 style={{ fontSize: 'clamp(2rem,6vw,4rem)', lineHeight: 1.04, margin: '10px 0 14px' }}>
            Build your next digital presence with <span style={{ color: '#73f2ce' }}>LonyiDev</span>
          </h1>
          <p style={{ color: '#b9c9e8', maxWidth: 760, lineHeight: 1.7, margin: 0 }}>
            A complete modern website foundation with premium visuals, responsive sections, clear messaging blocks,
            and conversion-focused structure — ready for real deployment.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button style={{ border: 0, borderRadius: 12, padding: '12px 18px', fontWeight: 700, background: 'linear-gradient(90deg,#67d9ff,#73f2ce)', color: '#06202a' }}>Get Started</button>
            <button style={{ border: '1px solid rgba(151,172,230,.35)', borderRadius: 12, padding: '12px 18px', background: 'transparent', color: '#d8e4ff' }}>View Sections</button>
          </div>
        </div>
      </section>

      <section style={{ width: 'min(1200px, 92vw)', margin: '0 auto', padding: '8px 0 40px' }}>
        <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(1.5rem,3vw,2.1rem)' }}>Core Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
          {featureCards.map((f) => (
            <article key={f.title} style={{ border: '1px solid rgba(120,137,180,.28)', borderRadius: 16, padding: 18, background: 'linear-gradient(180deg,#0f1a30,#0b1324)' }}>
              <h3 style={{ margin: 0 }}>{f.title}</h3>
              <p style={{ margin: '10px 0 0', color: '#b5c4e2', lineHeight: 1.6 }}>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ width: 'min(1200px, 92vw)', margin: '0 auto', padding: '4px 0 50px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16 }}>
        <article style={{ border: '1px solid rgba(120,137,180,.28)', borderRadius: 16, padding: 22, background: '#0c1426' }}>
          <h2 style={{ marginTop: 0 }}>About LonyiDev</h2>
          <p style={{ color: '#b5c4e2', lineHeight: 1.7 }}>
            LonyiDev focuses on modern digital products, clean interfaces, and fast user experiences. This preview site is structured like a production landing site so you can test layout quality before final launch.
          </p>
        </article>
        <article style={{ border: '1px solid rgba(120,137,180,.28)', borderRadius: 16, padding: 22, background: '#0c1426' }}>
          <h2 style={{ marginTop: 0 }}>Contact</h2>
          <p style={{ color: '#b5c4e2', margin: '0 0 8px' }}>Email: hello@lonyidev.com</p>
          <p style={{ color: '#b5c4e2', margin: 0 }}>Location: Remote • Global</p>
        </article>
      </section>

      <footer style={{ borderTop: '1px solid rgba(112,134,190,.25)', color: '#8ea0c4', padding: '18px 0', fontSize: 14 }}>
        <div style={{ width: 'min(1200px, 92vw)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span>© {new Date().getFullYear()} LonyiDev</span>
          <span>Temporary test deployment</span>
        </div>
      </footer>
    </main>
  )
}
