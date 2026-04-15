import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Section = styled.section`
  background: #0D1B2A;
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 32px;
`;

const SectionLabel = styled.p`
  color: #FF6B35;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.15;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  margin-bottom: 48px;
  line-height: 1.6;
`;

const EventBadgeRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

const EventBadge = styled.div`
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  gap: 16px;
`;

const AccordionTitle = styled.h3`
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const AccordionIcon = styled.span`
  color: #FF6B35;
  font-size: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const AccordionBody = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '1200px' : '0')};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

const AccordionContent = styled.div`
  padding: 4px 0 24px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 1.8;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 8px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 10px;
  padding: 14px 16px;
`;

const PriceLabel = styled.p`
  color: #FFD166;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const PriceAmount = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
`;

const PriceNote = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  margin-top: 2px;
`;

const TableGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

const TableCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 10px;
  padding: 16px;
`;

const TableName = styled.p`
  color: #FF6B35;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const TableDetail = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  line-height: 1.7;
`;

const Highlight = styled.span`
  color: #FFD166;
  font-weight: 700;
`;

const ContactLink = styled.a`
  color: #FF6B35;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD166;
  }
`;

const faqItems = [
  {
    question: '📅 When are the events?',
    content: (
      <>
        <p>LA Function is going off <Highlight>twice</Highlight> this summer — mark your calendars:</p>
        <br />
        <p>🔥 <Highlight>June 27, 2025</Highlight> — Full DJ lineup announced! This one is locked and loaded.</p>
        <br />
        <p>☀️ <Highlight>August 15, 2025</Highlight> — Lineup dropping soon. You already know it's going to be massive.</p>
        <br />
        <p>Both events are 21+ and run the same format — music, food, vibes, and an unforgettable LA atmosphere.</p>
      </>
    )
  },
  {
    question: '🎟️ How much are tickets?',
    content: (
      <>
        <p>We got options for every squad. Here's the full breakdown:</p>
        <br />
        <PricingGrid>
          <PriceCard>
            <PriceLabel>Early Arrival (Before 4pm)</PriceLabel>
            <PriceAmount>FREE</PriceAmount>
            <PriceNote>Get there early, get in free. Simple.</PriceNote>
          </PriceCard>
          <PriceCard>
            <PriceLabel>General Admission</PriceLabel>
            <PriceAmount>$20</PriceAmount>
            <PriceNote>Standard entry after 4pm.</PriceNote>
          </PriceCard>
          <PriceCard>
            <PriceLabel>VIP — Skip the Line</PriceLabel>
            <PriceAmount>$40</PriceAmount>
            <PriceNote>No waiting. Walk right in like you own the place.</PriceNote>
          </PriceCard>
        </PricingGrid>
        <br />
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
          Ticket prices apply to both the June 27 and August 15 events.
        </p>
      </>
    )
  },
  {
    question: '🥂 What are the table packages?',
    content: (
      <>
        <p>Elevate your experience with a table. All packages include a reservation fee plus a bottle service minimum. Prices exclude <Highlight>31.5% tax &amp; gratuity</Highlight>.</p>
        <br />
        <TableGrid>
          <TableCard>
            <TableName>$500 Table</TableName>
            <TableDetail>
              <Highlight>$50</Highlight> reservation fee · <Highlight>$500</Highlight> bottle service minimum
            </TableDetail>
          </TableCard>
          <TableCard>
            <TableName>$750 Table — Cabana</TableName>
            <TableDetail>
              <Highlight>$75</Highlight> reservation fee · <Highlight>$1,000</Highlight> bottle service minimum
            </TableDetail>
          </TableCard>
          <TableCard>
            <TableName>$1,000 Table</TableName>
            <TableDetail>
              <Highlight>$100</Highlight> reservation fee · <Highlight>$1,000</Highlight> bottle service minimum
            </TableDetail>
          </TableCard>
          <TableCard>
            <TableName>$1,500 Table — Riser Booth</TableName>
            <TableDetail>
              <Highlight>$150</Highlight> reservation fee · <Highlight>$1,500</Highlight> bottle service minimum
            </TableDetail>
          </TableCard>
          <TableCard>
            <TableName>$2,000 Table — Dance Floor</TableName>
            <TableDetail>
              <Highlight>$200</Highlight> reservation fee · <Highlight>$2,000</Highlight> bottle service minimum
            </TableDetail>
          </TableCard>
        </TableGrid>
        <br />
        <p>To book a table, email us at <ContactLink href="mailto:info@supremeteamla.com">info@supremeteamla.com</ContactLink>.</p>
      </>
    )
  },
  {
    question: '👗 What\'s the dress code?',
    content: (
      <>
        <p>Come looking <Highlight>fresh</Highlight>. The vibe is <Highlight>Trendy, Fashion Forward, Daytime Attire</Highlight> — think stylish summer fits, not club wear.</p>
        <br />
        <p>This is LA. Dress like it. 🌴</p>
      </>
    )
  },
  {
    question: '🚪 What are the door times and entry rules?',
    content: (
      <>
        <p><Highlight>Doors open</Highlight> at the event start time.</p>
        <br />
        <p><Highlight>Doors close at 8:00 PM.</Highlight> Entry is not guaranteed after 7:00 PM, so don't be fashionably late on this one.</p>
        <br />
        <p>This is a <Highlight>21+ event</Highlight>. Valid ID required for entry. No exceptions.</p>
      </>
    )
  },
  {
    question: '💸 What\'s the refund policy?',
    content: (
      <>
        <p>All sales are <Highlight>non-refundable</Highlight>, but we've got you covered in most situations:</p>
        <br />
        <p>• <Highlight>Event rescheduled?</Highlight> Your ticket automatically transfers to the new date — no action needed.</p>
        <p>• <Highlight>Can't make the new date?</Highlight> You can transfer your ticket to someone else.</p>
        <p>• <Highlight>Event canceled entirely?</Highlight> You'll receive a full refund. No questions asked.</p>
        <br />
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
          For transfer requests or questions, reach out to <ContactLink href="mailto:info@supremeteamla.com">info@supremeteamla.com</ContactLink>.
        </p>
      </>
    )
  },
  {
    question: '📧 How do I contact you?',
    content: (
      <>
        <p>For table reservations, media inquiries, or general questions, hit us up at:</p>
        <br />
        <p style={{ fontSize: '17px' }}>
          <ContactLink href="mailto:info@supremeteamla.com">info@supremeteamla.com</ContactLink>
        </p>
        <br />
        <p>We'll get back to you. Now go get your tickets. 🎉</p>
      </>
    )
  }
];

const FAQItem = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionItem>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <AccordionTitle>{question}</AccordionTitle>
        <AccordionIcon>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </AccordionIcon>
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        <AccordionContent>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <Section id='faq'>
      <Container>
        <SectionLabel>Everything You Need to Know</SectionLabel>
        <Title>FAQ</Title>
        <Subtitle>
          Two events. One unforgettable summer. Here's everything you need before you pull up.
        </Subtitle>
        <EventBadgeRow>
          <EventBadge>☀️ June 27, 2025</EventBadge>
          <EventBadge>🔥 August 15, 2025</EventBadge>
        </EventBadgeRow>
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} content={item.content} />
        ))}
      </Container>
    </Section>
  );
};

export default FAQ;
