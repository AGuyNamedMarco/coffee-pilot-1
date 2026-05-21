import type { CSSProperties } from 'react';

const drinks = [
  {
    name: 'Brown Sugar Latte',
    description: 'Sweet espresso, brown sugar, and silky milk.'
  },
  {
    name: 'Iced Matcha',
    description: 'Smooth green tea with a calm, creamy finish.'
  },
  {
    name: 'Cold Brew',
    description: 'Slow-steeped, bold, and built for warm Eastlake mornings.'
  },
  {
    name: 'Seasonal Special',
    description: 'A rotating drink that gives regulars something new to try.'
  }
];

const moments = [
  'Real customer moments',
  'Outdoor coffee truck atmosphere',
  'Neighborhood updates and pop-ups'
];

export default function App() {
  return (
    <main style={page}>
      <section style={hero}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <p style={heroEyebrow}>Alcove Community Coffee · Eastlake · Chula Vista</p>
          <h1 style={heroTitle}>Coffee worth making part of your routine.</h1>
          <p style={heroText}>Outdoor coffee, familiar faces, and small rituals that become community.</p>
          <div style={buttonRow}>
            <a style={primaryButton} href="#visit">Plan Your Visit</a>
            <a style={secondaryButtonOnDark} href="https://alcove-community-coffee.square.site/">Order Ahead</a>
          </div>
        </div>
      </section>

      <section style={splitSection}>
        <div style={imagePanel}>Truck photo / founder image</div>
        <div>
          <p style={eyebrow}>Why Alcove exists</p>
          <h2 style={sectionHeading}>Built around coffee, connection, and community.</h2>
          <p style={bodyLarge}>
            Alcove has an opportunity to tell a stronger story: people come back for familiar faces as much as coffee. This concept gives the brand a warmer, more local, and more memorable presence.
          </p>
        </div>
      </section>

      <section style={communitySection}>
        <p style={eyebrowLight}>Community proof</p>
        <h2 style={sectionHeadingLight}>A place people can see themselves in.</h2>
        <div style={momentGrid}>
          {moments.map((moment) => (
            <article key={moment} style={momentCard}>
              <div style={photoPlaceholder}>Photo</div>
              <strong>{moment}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" style={sectionStyle}>
        <p style={eyebrow}>Menu highlights</p>
        <h2 style={sectionHeading}>Favorites worth making part of your routine.</h2>
        <div style={drinkGrid}>
          {drinks.map((drink) => (
            <article key={drink.name} style={drinkCard}>
              <div style={drinkImage}>Drink</div>
              <h3 style={cardTitle}>{drink.name}</h3>
              <p style={cardText}>{drink.description}</p>
            </article>
          ))}
        </div>
        <a style={{ ...primaryButton, display: 'inline-block', marginTop: 34 }} href="https://alcove-community-coffee.square.site/">
          View Full Menu
        </a>
      </section>

      <section style={rewardsSection}>
        <div>
          <p style={eyebrow}>Rewards</p>
          <h2 style={sectionHeading}>Earn stars toward your next free drink.</h2>
          <p style={bodyLarge}>A simple loyalty program turns casual visits into repeat rituals.</p>
        </div>
        <div style={badge}>10 stars = free drink</div>
      </section>

      <section id="visit" style={visitSection}>
        <div>
          <p style={eyebrow}>Visit Alcove</p>
          <h2 style={sectionHeading}>Find us in Eastlake.</h2>
          <p style={bodyLarge}>990 Lane Avenue, Chula Vista CA 91914</p>
          <p style={bodyLarge}>Sun 8:30am–12:30pm<br />Tue/Wed/Thu 7:30am–1:00pm</p>
          <a style={primaryButton} href="https://maps.google.com/?q=990+Lane+Avenue+Chula+Vista+CA+91914">Open Maps</a>
        </div>
        <div style={mapPanel}>Map / truck location</div>
      </section>
    </main>
  );
}

const page: CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  background: '#F8EFE4',
  color: '#2A1A12',
};

const hero: CSSProperties = {
  minHeight: '88vh',
  display: 'grid',
  placeItems: 'center',
  padding: '72px 24px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #2A1A12, #6B4D3C 58%, #D5B75F)',
  color: '#FFF7EC',
};

const heroOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(circle at 25% 25%, rgba(255,247,236,.16), transparent 32%), linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.28))',
};

const heroContent: CSSProperties = {
  maxWidth: 940,
  position: 'relative',
  zIndex: 1,
};

const heroEyebrow: CSSProperties = {
  letterSpacing: 4,
  textTransform: 'uppercase',
  fontSize: 12,
  marginBottom: 24,
  fontWeight: 800,
};

const heroTitle: CSSProperties = {
  fontSize: 'clamp(48px, 8vw, 104px)',
  lineHeight: 0.92,
  margin: 0,
};

const heroText: CSSProperties = {
  fontSize: 24,
  lineHeight: 1.45,
  maxWidth: 690,
  margin: '28px auto',
};

const buttonRow: CSSProperties = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const splitSection: CSSProperties = {
  ...sectionStyleBase,
  display: 'grid',
  gridTemplateColumns: 'minmax(260px, 420px) 1fr',
  gap: 48,
  alignItems: 'center',
};

const sectionStyle: CSSProperties = {
  ...sectionStyleBase,
};

const sectionStyleBase: CSSProperties = {
  padding: '104px 32px',
  maxWidth: 1280,
  margin: '0 auto',
};

const eyebrow: CSSProperties = {
  textTransform: 'uppercase',
  letterSpacing: 3,
  fontSize: 12,
  fontWeight: 800,
  margin: '0 0 18px',
};

const eyebrowLight: CSSProperties = {
  ...eyebrow,
  color: '#F8EFE4',
};

const sectionHeading: CSSProperties = {
  fontSize: 'clamp(36px, 5vw, 68px)',
  lineHeight: 0.98,
  margin: '0 0 24px',
};

const sectionHeadingLight: CSSProperties = {
  ...sectionHeading,
  color: '#FFF7EC',
};

const bodyLarge: CSSProperties = {
  fontSize: 21,
  lineHeight: 1.55,
  maxWidth: 760,
};

const primaryButton: CSSProperties = {
  background: '#2A1A12',
  color: '#FFF7EC',
  padding: '15px 24px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 800,
};

const secondaryButtonOnDark: CSSProperties = {
  border: '2px solid #FFF7EC',
  color: '#FFF7EC',
  padding: '13px 24px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 800,
};

const imagePanel: CSSProperties = {
  minHeight: 440,
  borderRadius: 34,
  display: 'grid',
  placeItems: 'center',
  background: 'linear-gradient(135deg, #D5B75F, #6B4D3C)',
  color: '#FFF7EC',
  fontWeight: 900,
};

const communitySection: CSSProperties = {
  padding: '104px 32px',
  background: '#2A1A12',
};

const momentGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 22,
  maxWidth: 1280,
  margin: '36px auto 0',
};

const momentCard: CSSProperties = {
  background: 'rgba(255, 247, 236, 0.12)',
  border: '1px solid rgba(255, 247, 236, 0.22)',
  borderRadius: 28,
  padding: 18,
  color: '#FFF7EC',
  fontSize: 19,
};

const photoPlaceholder: CSSProperties = {
  height: 220,
  borderRadius: 20,
  background: 'linear-gradient(135deg, #6B4D3C, #D5B75F)',
  display: 'grid',
  placeItems: 'center',
  marginBottom: 18,
  fontWeight: 900,
};

const drinkGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 20,
  marginTop: 34,
};

const drinkCard: CSSProperties = {
  background: '#FFF7EC',
  border: '1px solid rgba(42, 26, 18, 0.15)',
  borderRadius: 28,
  padding: 20,
};

const drinkImage: CSSProperties = {
  height: 160,
  borderRadius: 20,
  background: '#E9D3B9',
  display: 'grid',
  placeItems: 'center',
  fontWeight: 900,
  marginBottom: 18,
};

const cardTitle: CSSProperties = {
  fontSize: 22,
  margin: '0 0 8px',
};

const cardText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.5,
  margin: 0,
};

const rewardsSection: CSSProperties = {
  ...sectionStyleBase,
  display: 'grid',
  gridTemplateColumns: '1fr minmax(220px, 320px)',
  gap: 32,
  alignItems: 'center',
  background: '#E6C878',
};

const badge: CSSProperties = {
  borderRadius: 999,
  background: '#FFF7EC',
  padding: '32px 28px',
  textAlign: 'center',
  fontWeight: 900,
  fontSize: 24,
};

const visitSection: CSSProperties = {
  ...sectionStyleBase,
  display: 'grid',
  gridTemplateColumns: '1fr minmax(260px, 440px)',
  gap: 48,
  alignItems: 'center',
};

const mapPanel: CSSProperties = {
  minHeight: 360,
  borderRadius: 34,
  display: 'grid',
  placeItems: 'center',
  background: '#3A261B',
  color: '#FFF7EC',
  fontWeight: 900,
};
