import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaUsers,
  FaBullhorn,
  FaStar,
  FaStore,
  FaCamera,
  FaGift,
  FaTv,
  FaEnvelope
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import Footer from '../Footer';

// ─── Styled Components ───────────────────────────────────────────────────────

const PageWrapper = styled.div`
  background: #0D1B2A;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #0D1B2A 0%, #1A2B3C 60%, #0D1B2A 100%);
  padding: 120px 32px 80px;
  text-align: center;
  border-bottom: 3px solid #FF6B35;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(255,107,53,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const HeroLabel = styled.p`
  color: #FF6B35;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 56px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;

  span {
    color: #FFD166;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroSub = styled.p`
  color: rgba(255,255,255,0.75);
  font-size: 18px;
  max-width: 620px;
  margin: 0 auto 40px;
  line-height: 1.7;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const MetaBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.9);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;

  svg {
    color: #FF6B35;
    font-size: 16px;
  }
`;

// ─── Section Containers ───────────────────────────────────────────────────────

const Section = styled.section`
  padding: 80px 32px;
  background: ${({ light }) => (light ? '#FFF5E6' : '#0D1B2A')};

  @media screen and (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  color: #FF6B35;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 16px;
  color: ${({ light }) => (light ? '#0D1B2A' : '#fff')};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionDesc = styled.p`
  font-size: 16px;
  line-height: 1.8;
  max-width: 700px;
  color: ${({ light }) => (light ? '#1A2B3C' : 'rgba(255,255,255,0.8)')};
  margin-bottom: 48px;
`;

// ─── Stats Row ────────────────────────────────────────────────────────────────

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: #1A2B3C;
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #FF6B35;
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: #FFD166;
  line-height: 1;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
`;

// ─── Feature Cards ────────────────────────────────────────────────────────────

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #1A2B3C;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid rgba(255,209,102,0.12);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #FFD166;
    transform: translateY(-4px);
  }
`;

const CardIcon = styled.div`
  width: 52px;
  height: 52px;
  background: rgba(255,107,53,0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    color: #FF6B35;
    font-size: 22px;
  }
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CardDesc = styled.p`
  color: rgba(255,255,255,0.65);
  font-size: 14px;
  line-height: 1.7;
`;

// ─── Checklist ────────────────────────────────────────────────────────────────

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: rgba(255,255,255,0.85);
  font-size: 15px;
  line-height: 1.5;

  svg {
    color: #FF6B35;
    font-size: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

// ─── Venue Zones ─────────────────────────────────────────────────────────────

const ZoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ZoneCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 28px 22px;
  border-left: 4px solid #FF6B35;
`;

const ZoneName = styled.div`
  color: #0D1B2A;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ZoneDesc = styled.div`
  color: #1A2B3C;
  font-size: 14px;
  line-height: 1.6;
`;

// ─── CTA ─────────────────────────────────────────────────────────────────────

const CTASection = styled.section`
  background: linear-gradient(135deg, #FF6B35 0%, #FFD166 100%);
  padding: 80px 32px;
  text-align: center;
`;

const CTATitle = styled.h2`
  color: #0D1B2A;
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTASub = styled.p`
  color: rgba(13,27,42,0.8);
  font-size: 17px;
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.7;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0D1B2A;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #1A2B3C;
    transform: translateY(-2px);
  }

  svg {
    font-size: 17px;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: rgba(13,27,42,0.6);
  font-size: 14px;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #0D1B2A;
  }
`;

// ─── Divider ─────────────────────────────────────────────────────────────────

const Divider = styled.div`
  height: 1px;
  background: rgba(255,107,53,0.15);
  max-width: 1100px;
  margin: 0 auto;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const SponsorshipPage = () => {
  return (
    <PageWrapper>

      {/* ── Hero ── */}
      <HeroSection>
        <HeroLabel>Official Partnership Opportunity</HeroLabel>
        <HeroTitle>
          Sponsor <span>LA Function</span>
        </HeroTitle>
        <HeroSub>
          Partner with one of Los Angeles' premier nightlife and entertainment events.
          Reach a culturally influential audience across an immersive, high-energy experience.
        </HeroSub>
        <HeroMeta>
          <MetaBadge>
            <FaMapMarkerAlt />
            Academy LA — Hollywood, CA
          </MetaBadge>
          <MetaBadge>
            <FaUsers />
            2,000+ Guests Per Day
          </MetaBadge>
          <MetaBadge>
            <FaStar />
            Premium Brand Integration
          </MetaBadge>
        </HeroMeta>
      </HeroSection>

      {/* ── Overview + Stats ── */}
      <Section>
        <SectionInner>
          <SectionLabel>Why Partner With Us</SectionLabel>
          <SectionTitle>A Platform Built for Impact</SectionTitle>
          <SectionDesc>
            LA Function is produced by SupremeTeam LA — nationally
            recognized nightlife and experiential marketing producers. Our events consistently
            attract professional athletes, recording artists, influencers, and tastemakers,
            creating an authentic environment for brand exposure and cultural engagement.
            This partnership goes far beyond traditional logo placement.
          </SectionDesc>

          <StatsGrid>
            <StatCard>
              <StatNumber>2,000+</StatNumber>
              <StatLabel>Guests Per Day</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>Millions</StatNumber>
              <StatLabel>Earned Digital Impressions</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>Category Exclusivity</StatLabel>
            </StatCard>
          </StatsGrid>
        </SectionInner>
      </Section>

      <Divider />

      {/* ── Brand Integration ── */}
      <Section>
        <SectionInner>
          <SectionLabel>Brand Integration</SectionLabel>
          <SectionTitle>Full-Spectrum Visibility</SectionTitle>
          <SectionDesc>
            Your brand is woven into every touchpoint of the event — from pre-event marketing
            to in-venue experiences and post-event content.
          </SectionDesc>

          <CardsGrid>
            <FeatureCard>
              <CardIcon><FaBullhorn /></CardIcon>
              <CardTitle>Marketing Assets</CardTitle>
              <CardDesc>
                Logo placement across all event marketing materials, digital ads, flyers,
                and promotional content leading up to the event.
              </CardDesc>
            </FeatureCard>
            <FeatureCard>
              <CardIcon><FaTv /></CardIcon>
              <CardTitle>In-Venue Branding</CardTitle>
              <CardDesc>
                LED screen takeovers, branded signage, and custom experiential installations
                throughout Academy LA.
              </CardDesc>
            </FeatureCard>
            <FeatureCard>
              <CardIcon><FaCamera /></CardIcon>
              <CardTitle>Content & Social</CardTitle>
              <CardDesc>
                Integration in influencer and social posts, content creation zones with branded
                backdrops, and long-tail post-event coverage.
              </CardDesc>
            </FeatureCard>
            <FeatureCard>
              <CardIcon><FaBullhorn /></CardIcon>
              <CardTitle>Media Amplification</CardTitle>
              <CardDesc>
                On-air mentions and digital promotion through our official media partnerships.
              </CardDesc>
            </FeatureCard>
            <FeatureCard>
              <CardIcon><FaStore /></CardIcon>
              <CardTitle>Retail Opportunity</CardTitle>
              <CardDesc>
                On-site merchandise or pop-up booth with direct-to-consumer sales in a
                premium nightlife environment. Limited-edition drops encouraged.
              </CardDesc>
            </FeatureCard>
            <FeatureCard>
              <CardIcon><FaGift /></CardIcon>
              <CardTitle>VIP Gifting</CardTitle>
              <CardDesc>
                Dedicated gifting suites for athletes, artists, and high-profile influencers —
                putting your product directly in the right hands.
              </CardDesc>
            </FeatureCard>
          </CardsGrid>
        </SectionInner>
      </Section>

      <Divider />

      {/* ── Activations + Checklist ── */}
      <Section>
        <SectionInner>
          <SectionLabel>Activations</SectionLabel>
          <SectionTitle>What's Included</SectionTitle>
          <SectionDesc>
            Title Partner and Premier Brand Partner packages include category exclusivity
            and full integration across all event nights.
          </SectionDesc>

          <TwoCol>
            <div>
              <CheckList>
                {[
                  'Logo on all event marketing assets',
                  'Inclusion in artist and influencer social posts',
                  'In-venue LED screen and signage branding',
                  'Verbal brand mentions during event',
                  'Social media promotion through iHeartMedia channels',
                ].map((item) => (
                  <CheckItem key={item}>
                    <MdCheckCircle />
                    {item}
                  </CheckItem>
                ))}
              </CheckList>
            </div>
            <div>
              <CheckList>
                {[
                  'Retail pop-up or merchandise booth (direct sales)',
                  'VIP gifting suite for athletes, artists & influencers',
                  'Photo & content creation zones with branded backdrops',
                  'Custom installations or LED wall elements',
                  'Branded bottle service presentations',
                  'Main table takeovers at peak hours',
                ].map((item) => (
                  <CheckItem key={item}>
                    <MdCheckCircle />
                    {item}
                  </CheckItem>
                ))}
              </CheckList>
            </div>
          </TwoCol>
        </SectionInner>
      </Section>

      {/* ── Venue Zones ── */}
      <Section light>
        <SectionInner>
          <SectionLabel>Venue Layout</SectionLabel>
          <SectionTitle light>Brand Placement at LA Function</SectionTitle>
          <SectionDesc light>
            Brand placement is strategically distributed throughout Academy LA in Hollywood,
            ensuring maximum visibility at every stage of the guest journey.
          </SectionDesc>

          <ZoneGrid>
            <ZoneCard>
              <ZoneName>Lobby</ZoneName>
              <ZoneDesc>Step-and-repeat, arrival photo moments, and merchandise previews — your brand is the first thing guests see.</ZoneDesc>
            </ZoneCard>
            <ZoneCard>
              <ZoneName>Main Floor</ZoneName>
              <ZoneDesc>LED branding, DJ shout-outs, and crowd-facing visuals at the heart of the action.</ZoneDesc>
            </ZoneCard>
            <ZoneCard>
              <ZoneName>Raised Seating</ZoneName>
              <ZoneDesc>VIP lounges and gifting areas for high-value guest engagement.</ZoneDesc>
            </ZoneCard>
            <ZoneCard>
              <ZoneName>Patio & Cabanas</ZoneName>
              <ZoneDesc>Retail pop-ups, photo booths, and branded VIP experiences in an open-air setting.</ZoneDesc>
            </ZoneCard>
            <ZoneCard>
              <ZoneName>Stage & Main Table</ZoneName>
              <ZoneDesc>Highest-visibility moments during peak hours — seen by every guest in the venue.</ZoneDesc>
            </ZoneCard>
            <ZoneCard>
              <ZoneName>Throughout</ZoneName>
              <ZoneDesc>Cohesive brand presence across all areas, creating a seamless, immersive experience for 2,000+ guests.</ZoneDesc>
            </ZoneCard>
          </ZoneGrid>
        </SectionInner>
      </Section>

      {/* ── CTA ── */}
      <CTASection>
        <CTATitle>Ready to Partner?</CTATitle>
        <CTASub>
          Reach out to learn about partnership levels, activation footprints, and
          how we can create a custom package for your brand.
        </CTASub>
        <CTAButton href="mailto:info@supremeteamla.com">
          <FaEnvelope />
          Contact Us About Sponsorship
        </CTAButton>
        <br />
        <BackLink to="/">← Back to LA Function</BackLink>
      </CTASection>

      <Footer />
    </PageWrapper>
  );
};

export default SponsorshipPage;
