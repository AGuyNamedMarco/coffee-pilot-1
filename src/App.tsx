const drinks = ['Brown Sugar Latte', 'Iced Matcha', 'Cold Brew', 'Seasonal Special'];

export default function App() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#F8EFE4', color: '#2A1A12' }}>
      <section style={{ minHeight: '92vh', display: 'grid', placeItems: 'center', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 920 }}>
          <p style={{ letterSpacing: 4, textTransform: 'uppercase', fontSize: 13, marginBottom: 24 }}>Alcove Community Coffee · Eastlake</p>
          <h1 style={{ fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 0.95, margin: 0 }}>
            More than coffee. A neighborhood gathering place.
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 660, margin: '28px auto' }}>
            Outdoor coffee, familiar faces, and a small daily ritual for the Chula Vista community.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a style={primaryButton} href="#visit">Plan Your Visit</a>
            <a style={secondaryButton} href="#menu">Order Ahead</a>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={eyebrow}>Why Alcove exists</div>
        <h2 style={sectionHeading}>Built for coffee, connection, and community.</h2>
        <p style={bodyLarge}>
          Alcove has an opportunity to tell a stronger story: not just what it serves, but why people come back. This concept makes the brand feel more human, local, and memorable.
        </p>
      </section>

      <section style={{ ...sectionStyle, background: '#3A261B', color: '#FFF7EC' }}>
        <div style={eyebrow}>Community proof</div>
        <h2 style={sectionHeading}>A place people can see themselves in.</h2>
        <div style={cardGrid}>
          <article style={darkCard}>Real customer moments</article>
          <article style={darkCard}>Outdoor coffee truck atmosphere</article>
          <article style={darkCard}>Instagram and neighborhood updates</article>
        </div>
      </section>

      <section id="menu" style={sectionStyle}>
        <div style={eyebrow}>Menu highlights</div>
        <h2 style={sectionHeading}>Favorites worth making part of your routine.</h2>
        <div style={cardGrid}>
          {drinks.map((drink) => (
            <article key={drink} style={lightCard}>{drink}</article>
          ))}
        </div>
        <a style={{ ...primaryButton, display: 'inline-block', marginTop: 32 }} href="https://alcove-community-coffee.square.site/">
          View Full Menu
        </a>
      </section>

      <section style={{ ...sectionStyle, background: '#E6C878' }}>
        <div style={eyebrow}>Rewards</div>
        <h2 style={sectionHeading}>Earn stars toward your next free drink.</h2>
        <p style={bodyLarge}>A simple loyalty program turns casual visits into repeat rituals.</p>
      </section>

      <section id="visit" style={sectionStyle}>
        <div style={eyebrow}>Visit Alcove</div>
        <h2 style={sectionHeading}>Find us in Eastlake.</h2>
        <p style={bodyLarge}>990 Lane Avenue, Chula Vista CA 91914</p>
        <p style={bodyLarge}>Sun 8:30am–12:30pm · Tue/Wed/Thu 7:30am–1:00pm</p>
      </section>
    </main>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: '96px 24px',
  maxWidth: 1120,
  margin: '0 auto',
};

const eyebrow: React.CSSProperties = {
  textTransform: 'uppercase',
  letterSpacing: 3,
  fontSize: 12,
  fontWeight: 700,
  marginBottom: 18,
};

const sectionHeading: React.CSSProperties = {
  fontSize: 'clamp(34px, 5vw, 64px)',
  lineHeight: 1,
  margin: '0 0 24px',
};

const bodyLarge: React.CSSProperties = {
  fontSize: 21,
  lineHeight: 1.55,
  maxWidth: 720,
};

const primaryButton: React.CSSProperties = {
  background: '#2A1A12',
  color: '#FFF7EC',
  padding: '14px 22px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 700,
};

const secondaryButton: React.CSSProperties = {
  border: '2px solid #2A1A12',
  color: '#2A1A12',
  padding: '12px 22px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 700,
};

const cardGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 18,
  marginTop: 32,
};

const lightCard: React.CSSProperties = {
  background: '#FFF7EC',
  border: '1px solid rgba(42, 26, 18, 0.16)',
  borderRadius: 24,
  padding: 28,
  fontSize: 20,
  fontWeight: 700,
};

const darkCard: React.CSSProperties = {
  background: 'rgba(255, 247, 236, 0.12)',
  border: '1px solid rgba(255, 247, 236, 0.22)',
  borderRadius: 24,
  padding: 28,
  fontSize: 20,
  fontWeight: 700,
};
