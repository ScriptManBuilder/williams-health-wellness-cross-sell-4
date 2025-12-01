import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Annual Savings',
      description: 'Members save thousands annually on healthcare, fitness, and wellness services',
      value: '$2,400',
            background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Fitness Locations',
      description: 'Access to premium gyms, fitness studios, and wellness centers nationwide',
        value: '10,000+',
             background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Members report improved health outcomes and wellness experience',
      value: '96%',
      background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Telehealth Access',
      description: '24/7 virtual doctor consultations with licensed healthcare specialists',
      value: 'Infinite',
           background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Live Healthier, Save Smarter</StatsSectionTitle>
        <StatsSectionDescription>
          See how our exclusive health & wellness program delivers exceptional value and life-changing results.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
