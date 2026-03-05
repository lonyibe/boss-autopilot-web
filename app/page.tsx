export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        background: 'radial-gradient(circle at 20% 0%, #1f2b48 0%, #0a0f1c 45%, #060911 100%)',
        color: '#eaf0ff',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
      }}
    >
      <section
        style={{
          width: 'min(980px, 100%)',
          border: '1px solid rgba(124, 146, 255, 0.28)',
          borderRadius: 24,
          background: 'linear-gradient(180deg, rgba(20,31,58,0.88), rgba(12,20,38,0.9))',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
          padding: '40px clamp(20px, 5vw, 56px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            border: '1px solid rgba(143, 226, 255, 0.35)',
            borderRadius: 999,
            padding: '8px 14px',
            color: '#9fe8ff',
            fontSize: 13,
            marginBottom: 20,
          }}
        >
          ● LonyiDev — Live Preview
        </div>

        <h1 style={{ margin: 0, lineHeight: 1.06, fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          Clean. Modern. <span style={{ color: '#72f1cf' }}>LonyiDev</span>
        </h1>

        <p
          style={{
            marginTop: 16,
            color: '#b8c8e8',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: 760,
            lineHeight: 1.65,
          }}
        >
          A fast, elegant website experience built to look sharp on every screen.
          This temporary deployment is ready for your testing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
          <button
            style={{
              border: 0,
              borderRadius: 12,
              padding: '12px 18px',
              fontWeight: 700,
              color: '#041218',
              background: 'linear-gradient(90deg, #6ad8ff, #72f1cf)',
            }}
          >
            Explore Demo
          </button>
          <button
            style={{
              border: '1px solid rgba(148, 168, 255, 0.35)',
              borderRadius: 12,
              padding: '12px 18px',
              fontWeight: 600,
              color: '#d6e2ff',
              background: 'transparent',
            }}
          >
            Test Responsiveness
          </button>
        </div>
      </section>
    </main>
  )
}
