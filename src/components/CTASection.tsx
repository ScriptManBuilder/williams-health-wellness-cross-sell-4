import React from 'react';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTADescription,
  CTASectionButton,
  CTAFeaturesGrid,
  CTAFeatureItem,
  CTAIconWrapper,
  CTAFeatureContent,
  CTAFeatureTitle,
  CTAFeatureDescription
} from '../styles/CTASection.styles';

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: 'Proven Results',
      description: 'Members save an average of $2,400+ annually on healthcare and wellness with comprehensive benefits'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Instant Access',
      description: 'Start enjoying exclusive health benefits immediately after enrollment with instant activation'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: '24/7 Support',
      description: 'Dedicated wellness concierge and telehealth services available around the clock for your health needs'
    }
  ];

  return (
    <CTAContainer id="how-it-works">
      <CTAContent>
        <CTATitle>Start Your Wellness Journey Today</CTATitle>
        <CTADescription>
          Join thousands of members who enjoy exclusive health benefits, fitness access, and incredible savings on wellness services.
        </CTADescription>
        <CTASectionButton onClick={handleGetStarted}>Get Started Now →</CTASectionButton>
        
        <CTAFeaturesGrid>
          {features.map((feature, index) => (
            <CTAFeatureItem key={index}>
              <CTAIconWrapper>
                {feature.icon}
              </CTAIconWrapper>
              <CTAFeatureContent>
                <CTAFeatureTitle>{feature.title}</CTAFeatureTitle>
                <CTAFeatureDescription>{feature.description}</CTAFeatureDescription>
              </CTAFeatureContent>
            </CTAFeatureItem>
          ))}
        </CTAFeaturesGrid>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
