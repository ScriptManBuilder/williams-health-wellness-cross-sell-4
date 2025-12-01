import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What health and wellness benefits are included?',
      answer: 'Members enjoy unlimited access to 10,000+ gyms and fitness studios, 24/7 telehealth services with licensed physicians, personalized nutrition programs, mental health counseling, preventive care screenings, wellness rewards, and discounts on healthy meal delivery services.'
    },
    {
      question: 'How do I start using my health benefits?',
      answer: 'Simply enroll and receive instant access to our member portal. Browse available fitness centers near you, schedule virtual doctor appointments, access nutrition plans, and book wellness services directly through our platform. Your benefits are active immediately upon enrollment.'
    },
    {
      question: 'Are there limits on telehealth visits?',
      answer: 'No! You have unlimited 24/7 access to licensed physicians, therapists, and healthcare specialists through our telehealth platform. There are no visit limits, blackout periods, or additional fees for virtual consultations.'
    },
    {
      question: 'Can I share my membership benefits with family?',
      answer: 'Yes! Many of our benefits extend to your immediate family members living in the same household. Gym access, telehealth services, and wellness programs can often be shared with your spouse and dependents, depending on your membership tier.'
    },
    {
      question: 'Which gyms and fitness centers can I access?',
      answer: 'We partner with over 10,000 gyms and fitness studios nationwide including major brands like LA Fitness, Gold\'s Gym, Anytime Fitness, Planet Fitness, plus boutique studios for yoga, Pilates, CrossFit, cycling, and more. Check availability in your area through the member portal.'
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Members typically save $1,800-$3,000 annually depending on usage. A gym membership alone saves $600-$1,200/year, telehealth visits save $500-$800 vs. traditional urgent care, and nutrition programs save $400-$600. The membership pays for itself with regular use of just 2-3 benefits.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our exclusive health & wellness program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
