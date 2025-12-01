import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContactTitle = styled.h2`
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #C2410C;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const ContactDescription = styled.p`
  text-align: center;
  color: #9A3412;
  font-size: 1.15rem;
  margin-bottom: 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(249, 115, 22, 0.15);
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #C2410C;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  > p {
    color: #9A3412;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #C2410C;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #C2410C;

  &:focus {
    outline: none;
    border-color: #F97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }

  &::placeholder {
    color: #8b96a5;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  background: white;
  color: #C2410C;

  &:focus {
    outline: none;
    border-color: #F97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }

  &::placeholder {
    color: #8b96a5;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
`;

export const InfoCard = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid rgba(249, 115, 22, 0.15);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
    border-color: rgba(249, 115, 22, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 1.25rem;
  }
`;

export const InfoTitle = styled.h4`
  font-size: 1.2rem;
  color: #F97316;
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const InfoDescription = styled.p`
  color: #9A3412;
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const InfoLink = styled.a`
  color: #F97316;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #EA580C;
    text-decoration: underline;
  }
`;
