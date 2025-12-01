import React from 'react';
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from '../styles/FeaturesSection.styles';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      ),
      title: 'Premium Gym Access',
      description: 'Unlimited access to 10,000+ gyms, fitness studios, and wellness centers nationwide including top brands like LA Fitness, Gold\'s Gym, and boutique studios.',
      color: '#0066cc'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Telehealth Services',
      description: '24/7 virtual doctor visits, online consultations with licensed physicians, mental health support, and prescription services from the comfort of home.',
      color: '#3388dd'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      title: 'Nutrition Programs',
      description: 'Personalized meal plans, nutritionist consultations, diet tracking tools, and access to healthy meal delivery discounts for optimal wellness.',
      color: '#00d4aa'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      title: 'Mental Health Support',
      description: 'Confidential counseling sessions, stress management resources, meditation apps, and licensed therapist access for emotional well-being.',
      color: '#ff6b6b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      title: 'Preventive Care',
      description: 'Annual health screenings, wellness checkups, vaccination programs, and early detection services to maintain optimal health and prevent illness.',
      color: '#a855f7'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Wellness Rewards',
      description: 'Earn points for healthy activities, fitness goals, and preventive care visits. Redeem for gift cards, fitness gear, and wellness products.',
      color: '#ec4899'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesContent>
        <SectionTitle>Exclusive Health & Wellness Benefits</SectionTitle>
        <SectionDescription>
          Comprehensive wellness programs that transform your health journey with affordable, accessible care.
        </SectionDescription>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
