'use client'

import { useMemo, useState } from 'react'

type Listing = {
  id: number
  title: string
  category: 'Electronics' | 'Fashion' | 'Home' | 'Gaming' | 'Vehicles'
  location: string
  price: string
  condition: string
  emoji: string
}

const seed: Listing[] = [
  { id: 1, title: 'iPhone 13 Pro (256GB)', category: 'Electronics', location: 'Ikeja', price: '₦620,000', condition: 'Like New', emoji: '📱' },
  { id: 2, title: 'PlayStation 5 + 2 Pads', category: 'Gaming', location: 'Lekki', price: '₦780,000', condition: 'Excellent', emoji: '🎮' },
  { id: 3, title: 'Nike Air Jordan 1', category: 'Fashion', location: 'Yaba', price: '₦130,000', condition: 'Good', emoji: '👟' },
  { id: 4, title: 'Office Chair Ergonomic', category: 'Home', location: 'Abuja', price: '₦95,000', condition: 'Used', emoji: '🪑' },
  { id: 5, title: 'Toyota Corolla 2010', category: 'Vehicles', location: 'Port Harcourt', price: '₦4,200,000', condition: 'Good', emoji: '🚗' },
  { id: 6, title: 'Samsung 55" Smart TV', category: 'Electronics', location: 'Surulere', price: '₦390,000', condition: 'Like New', emoji: '📺' },
]

const categories = ['All', 'Electronics', 'Gaming', 'Fashion', 'Home', 'Vehicles'] as const

export default function Home() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<(typeof categories)[number]>('All')

  const listings = useMemo(() => {
    return seed.filter((x) => {
      const byCat = cat === 'All' || x.category === cat
      const byQ = `${x.title} ${x.location} ${x.category}`.toLowerCase().includes(q.toLowerCase())
      return byCat && byQ
    })
  }, [q, cat])

  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="brand">Lonyi<span>Trade</span></div>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <button className="btn ghost">Sign in</button>
            <button className="btn">Post item</button>
          </div>
        </nav>

        <header className="hero">
          <h1>Meet. Inspect. Trade. No online payment required.</h1>
          <p>
            LonyiTrade connects nearby buyers and sellers for safe physical meetups. Built mobile-first and optimized for every screen size.
          </p>
          <div className="pills">
            <span className="pill">📍 Smart local matching</span>
            <span className="pill">🛡️ Verified profiles + ratings</span>
            <span className="pill">💬 Real-time chat & offer negotiation</span>
            <span className="pill">🤝 Safe meetup flow</span>
          </div>
        </header>

        <section className="grid">
          <article className="card">
            <div className="searchRow">
              <input
                className="input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search item, city, or category..."
              />
              <select className="select" value={cat} onChange={(e) => setCat(e.target.value as (typeof categories)[number])}>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="listings">
              {listings.map((item) => (
                <div className="item" key={item.id}>
                  <div className="thumb" aria-hidden>
                    {item.emoji}
                  </div>
                  <div className="meta">
                    <h3>{item.title}</h3>
                    <p>
                      {item.location} • {item.category}
                    </p>
                    <div className="tags">
                      <span className="tag">{item.condition}</span>
                      <span className="tag">Meet in public place</span>
                    </div>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="side">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Live marketplace stats</h3>
              <div className="stats">
                <div className="stat"><b>12.4k</b><p>Active listings</p></div>
                <div className="stat"><b>4.8k</b><p>Daily meetups</p></div>
                <div className="stat"><b>98.2%</b><p>Trade completion</p></div>
                <div className="stat"><b>4.9★</b><p>Average trust score</p></div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Quick Post</h3>
              <form className="form">
                <input className="input" placeholder="Item title" />
                <input className="input" placeholder="Price (negotiable?)" />
                <input className="input" placeholder="Your location" />
                <textarea className="input textarea" placeholder="Describe condition + meetup preference" />
                <button type="button" className="btn">Create listing</button>
                <span className="hint">Modern features: saved searches, alerts, anti-scam flags, pickup scheduling, instant buyer matching.</span>
              </form>
            </div>
          </aside>
        </section>

        <section className="features">
          <div className="card feature">
            <h4>AI-powered discovery</h4>
            <p>Personalized recommendations, smart keyword rewrite, and semantic search across listings.</p>
          </div>
          <div className="card feature">
            <h4>Safety-first trading</h4>
            <p>Meetup checkpoints, trusted zones, account reputation, and suspicious-behavior detection signals.</p>
          </div>
          <div className="card feature">
            <h4>Modern seller toolkit</h4>
            <p>Auto-generated descriptions, price suggestions, listing boosts, and conversion analytics dashboard.</p>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} LonyiTrade</span>
          <span>Built for all screens • mobile, tablet, desktop, ultrawide</span>
        </footer>
      </div>
    </>
  )
}
