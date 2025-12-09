import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  CompanyInfo,
  FooterSectionTitle,
  LinkList,
  LinkItem,
  FooterLink,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom,
  PaymentIcons,
  PaymentIcon
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  const companyName = process.env.REACT_APP_COMPANY_NAME || 'Williams Health Perks Inc.';
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Vitalyx';
  const companyAddress = process.env.REACT_APP_COMPANY_ADDRESS || 'E 2ND ST 5830 Casper WY US 82609';
  const companyPhone = process.env.REACT_APP_PHONE_DISPLAY || '+1 517-258-3818';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@williamhealthperks.com';

  const handleScrollTo = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" fill="url(#gradient1)"/>
                <path d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8Z" fill="white" fillOpacity="0.2"/>
                <path d="M12 16L14.5 18.5L20 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10V12M16 20V22M10 16H12M20 16H22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F97316"/>
                    <stop offset="1" stopColor="#EA580C"/>
                  </linearGradient>
                </defs>
              </svg>
              {brandName}
            </FooterLogo>
            <CompanyInfo>
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Established March 2023</p>
            </CompanyInfo>
             <PaymentIcons>
              <PaymentIcon>
                <img src="/visa.svg" alt="Visa" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/mastercard.svg" alt="Mastercard" />
              </PaymentIcon>
            </PaymentIcons>

          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#features')}>Features</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#stats')}>Industry Stats</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#how-it-works')}>How It Works</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#faq')}>FAQ</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Legal</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/digital-products">Digital Products Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/ccpa-notice">CCPA Notice</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-processing">Data Processing Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-subject-request">Data Subject Request Form</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/e-signature">E-Signature Disclosure Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/end-user-terms">End-User Terms of Service</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/merchant-disclosure">Merchant Disclosure</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact Us</FooterSectionTitle>
            <ContactCard>
              <ContactItem>
                <ContactLabel>Email Support</ContactLabel>
                <ContactValue as="div" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {supportEmail}
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Customer Service</ContactLabel>
                <ContactValue href={`tel:${companyPhone.replace(/\s+/g, '')}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {companyPhone}
                </ContactValue>
              </ContactItem>
            </ContactCard>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} {companyName} All rights reserved.</p>
          <p>Do you not recognize a charge on your bank statement? We can help to resolve your query quickly and efficiently.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
