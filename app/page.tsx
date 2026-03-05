'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'

type Category = 'Electronics' | 'Fashion' | 'Home' | 'Gaming' | 'Vehicles'
type Listing = {
  id: number
  title: string
  category: Category
  location: string
  price: string
  condition: string
  description: string
  seller: string
  emoji: string
  flagged?: boolean
}

type Message = { id: number; listingId: number; from: string; text: string; at: string }
type Review = { id: number; user: string; stars: number; note: string }

const categories: Array<'All' | Category> = ['All', 'Electronics', 'Gaming', 'Fashion', 'Home', 'Vehicles']

const seedListings: Listing[] = [
  { id: 1, title: 'iPhone 13 Pro (256GB)', category: 'Electronics', location: 'Ikeja', price: '₦620,000', condition: 'Like New', description: 'No cracks, battery 89%, box included.', seller: 'Ada', emoji: '📱' },
  { id: 2, title: 'PlayStation 5 + 2 Pads', category: 'Gaming', location: 'Lekki', price: '₦780,000', condition: 'Excellent', description: 'UK version with two controllers.', seller: 'Kunle', emoji: '🎮' },
]

const seedReviews: Review[] = [
  { id: 1, user: 'Musa', stars: 5, note: 'Smooth meetup, item exactly as described.' },
  { id: 2, user: 'Tomi', stars: 4, note: 'Great communication and fair pricing.' },
]

const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n)

export default function Home() {
  const [user, setUser] = useState('Boss')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<number | null>(null)
  const [listings, setListings] = useState<Listing[]>(seedListings)
  const [messages, setMessages] = useState<Message[]>([])
  const [reviews, setReviews] = useState<Review[]>(seedReviews)

  const [post, setPost] = useState({
    title: '', category: 'Electronics' as Category, price: '', location: '', condition: 'Good', description: '', emoji: '📦',
  })
  const [chatText, setChatText] = useState('')
  const [review, setReview] = useState({ stars: 5, note: '' })

  useEffect(() => {
    const raw = localStorage.getItem('lonyitrade:data')
    if (!raw) return
    try {
      const data = JSON.parse(raw)
      if (data.listings) setListings(data.listings)
      if (data.messages) setMessages(data.messages)
      if (data.reviews) setReviews(data.reviews)
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('lonyitrade:data', JSON.stringify({ listings, messages, reviews }))
  }, [listings, messages, reviews])

  const filtered = useMemo(
    () => listings.filter((x) => (cat === 'All' || x.category === cat) && `${x.title} ${x.location} ${x.category}`.toLowerCase().includes(q.toLowerCase())),
    [listings, q, cat],
  )

  const selectedListing = listings.find((l) => l.id === selected) ?? null
  const thread = messages.filter((m) => m.listingId === selected)

  const handleCreate = (e: FormEvent) => {
    e.preventDefault()
    if (!post.title || !post.price || !post.location) return
    const item: Listing = { id: Date.now(), seller: user, ...post }
    setListings((prev) => [item, ...prev])
    setPost({ title: '', category: 'Electronics', price: '', location: '', condition: 'Good', description: '', emoji: '📦' })
  }

  const sendMessage = (e: FormEvent) => {
    e.preventDefault()
    if (!selected || !chatText.trim()) return
    setMessages((prev) => [...prev, { id: Date.now(), listingId: selected, from: user, text: chatText.trim(), at: new Date().toLocaleTimeString() }])
    setChatText('')
  }

  const addReview = (e: FormEvent) => {
    e.preventDefault()
    if (!review.note.trim()) return
    setReviews((prev) => [{ id: Date.now(), user, stars: review.stars, note: review.note.trim() }, ...prev])
    setReview({ stars: 5, note: '' })
  }

  const flagListing = (id: number) => setListings((prev) => prev.map((x) => (x.id === id ? { ...x, flagged: true } : x)))

  const avgRating = (reviews.reduce((a, b) => a + b.stars, 0) / Math.max(1, reviews.length)).toFixed(1)

  return (
    <div className="container">
      <nav className="nav">
        <div className="brand">Lonyi<span>Trade</span></div>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <input className="input" style={{ minWidth: 120, maxWidth: 170 }} value={user} onChange={(e) => setUser(e.target.value)} placeholder="Your name" />
          <button className="btn">Post item</button>
        </div>
      </nav>

      <header className="hero">
        <h1>Local marketplace for physical meetups</h1>
        <p>Buy and sell nearby with in-app chat, trust scoring, moderation flags, and meetup-first flow — no online payments.</p>
      </header>

      <section className="grid">
        <article className="card">
          <div className="searchRow">
            <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search listing, city, category..." />
            <select className="select" value={cat} onChange={(e) => setCat(e.target.value as (typeof categories)[number])}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="listings">
            {filtered.map((item) => (
              <div className="item" key={item.id}>
                <div className="thumb">{item.emoji}</div>
                <div className="meta">
                  <h3>{item.title}</h3>
                  <p>{item.location} • {item.category} • by {item.seller}</p>
                  <p>{item.description}</p>
                  <div className="tags">
                    <span className="tag">{item.condition}</span>
                    {item.flagged && <span className="tag" style={{ color: '#ffb2b2' }}>Flagged</span>}
                  </div>
                  <span className="price">{item.price}</span>
                  <div style={{ display: 'flex', gap: '.45rem', marginTop: '.45rem' }}>
                    <button className="btn ghost" onClick={() => setSelected(item.id)}>Open chat</button>
                    <button className="btn ghost" onClick={() => flagListing(item.id)}>Report</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="side">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Community trust</h3>
            <div className="stats">
              <div className="stat"><b>{avgRating}★</b><p>Average rating</p></div>
              <div className="stat"><b>{reviews.length}</b><p>Total reviews</p></div>
              <div className="stat"><b>{listings.length}</b><p>Active listings</p></div>
              <div className="stat"><b>{messages.length}</b><p>Messages sent</p></div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Create listing</h3>
            <form className="form" onSubmit={handleCreate}>
              <input className="input" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
              <select className="select" value={post.category} onChange={(e) => setPost({ ...post, category: e.target.value as Category })}>
                {categories.filter((x) => x !== 'All').map((x) => <option key={x}>{x}</option>)}
              </select>
              <input className="input" placeholder="Price" value={post.price} onChange={(e) => setPost({ ...post, price: e.target.value })} />
              <input className="input" placeholder="Location" value={post.location} onChange={(e) => setPost({ ...post, location: e.target.value })} />
              <input className="input" placeholder="Condition" value={post.condition} onChange={(e) => setPost({ ...post, condition: e.target.value })} />
              <textarea className="input textarea" placeholder="Description" value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} />
              <button type="submit" className="btn">Publish</button>
            </form>
          </div>
        </aside>
      </section>

      <section className="features">
        <div className="card feature">
          <h4>In-app chat + offer negotiation</h4>
          {!selectedListing ? (
            <p>Pick a listing and tap “Open chat” to start negotiation.</p>
          ) : (
            <>
              <p><b>Chatting about:</b> {selectedListing.title}</p>
              <div style={{ maxHeight: 170, overflow: 'auto', border: '1px solid var(--line)', borderRadius: 10, padding: '.5rem' }}>
                {thread.length === 0 ? <p className="hint">No messages yet.</p> : thread.map((m) => <p key={m.id} style={{ margin: '.3rem 0' }}><b>{m.from}</b> ({m.at}): {m.text}</p>)}
              </div>
              <form onSubmit={sendMessage} className="form" style={{ marginTop: '.5rem' }}>
                <input className="input" value={chatText} onChange={(e) => setChatText(e.target.value)} placeholder="Type message or offer..." />
                <button className="btn" type="submit">Send</button>
              </form>
            </>
          )}
        </div>

        <div className="card feature">
          <h4>Reputation & reviews</h4>
          <form className="form" onSubmit={addReview}>
            <select className="select" value={review.stars} onChange={(e) => setReview({ ...review, stars: Number(e.target.value) })}>
              {[5, 4, 3, 2, 1].map((n) => <option value={n} key={n}>{n} stars</option>)}
            </select>
            <input className="input" placeholder="Leave review" value={review.note} onChange={(e) => setReview({ ...review, note: e.target.value })} />
            <button className="btn" type="submit">Add review</button>
          </form>
          <div style={{ marginTop: '.5rem', maxHeight: 160, overflow: 'auto' }}>
            {reviews.slice(0, 5).map((r) => <p key={r.id} style={{ margin: '.4rem 0' }}><b>{r.user}</b> {stars(r.stars)} — {r.note}</p>)}
          </div>
        </div>

        <div className="card feature">
          <h4>Modern features included</h4>
          <p>✔ Responsive mobile-first UI
            <br />✔ Listing creation + filtering
            <br />✔ In-app chat threads per listing
            <br />✔ Review/rating system
            <br />✔ Moderation flagging
            <br />✔ Local persistence (browser)
            <br />✔ Meet-and-trade flow (no online payment)
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} LonyiTrade</span>
        <span>Next phase: real auth, DB, geolocation meet points, push notifications, admin dashboard.</span>
      </footer>
    </div>
  )
}
