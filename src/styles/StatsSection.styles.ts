import styled from 'styled-components';

export const StatsContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #C2410C 0%, #EA580C 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.875rem;
  }
`;

export const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatsSectionTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #F97316, #EA580C);
    border-radius: 2px;
  }
`;

export const StatsSectionDescription = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.15rem;
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const StatCard = styled.div<{ $background: string }>`
  padding: 2.5rem;
  border-radius: 20px;
  background: ${props => props.$background};
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 20px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.25);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  > * {
    position: relative;
    z-index: 1;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    min-height: 260px;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
    min-height: 240px;

    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }

  @media (max-width: 375px) {
    padding: 1.5rem;
    min-height: 220px;
  }

  @media (max-width: 320px) {
    padding: 1.25rem;
    min-height: 200px;
  }
`;

export const StatTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 1;
`;

export const StatDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  flex-grow: 1;
`;

export const StatValue = styled.div`
  font-size: 3.75rem;
  font-weight: 800;
  margin-top: auto;
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
    border-radius: 2px;
  }

  ${StatCard}:hover & {
    transform: scale(1.08);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 375px) {
    font-size: 2.25rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;
