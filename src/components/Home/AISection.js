import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); // Initialize AOS for scroll animations

// Styled components
const AISectionWrapper = styled.section`
  position: relative;
  color: #fff;
  padding: 0px 0px;
  background: rgba(0, 0, 0, 0.2); /* Optional dark overlay */
  z-index: 1;
`;

const ParallaxContainer = styled(Parallax)`
  height: 700px; /* Adjust height as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  /* Make the background image fixed */
  background-image: url('./images/abc.jpg');
  background-attachment: fixed;

  @media (max-width: 768px) {
    height: 1100px; /* Adjust height for smaller screens */
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  text-align: center;
  color: #ddd;
  font-family: 'Poppins', sans-serif;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
    padding: 0 20px; /* Add padding for better readability */
  }
`;

const FeatureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards vertically on smaller screens */
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  min-width: 250px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  color: #e0e0e0;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%; /* Make cards full width on smaller screens */
    max-width: 300px; /* Limit max width for better readability */
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem; /* Adjust icon size */
  color: #007bff;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.4rem; /* Adjust font size for smaller screens */
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Adjust font size for smaller screens */
  }
`;

const AISection = () => {
  return (
    <AISectionWrapper>
      <ParallaxContainer
        strength={500} // Adjust the parallax effect strength as needed
      >
        <SectionTitle data-aos="fade-up">AI-Powered Features</SectionTitle>
        <SectionDescription data-aos="fade-up" data-aos-delay="100">
          Explore how our advanced AI technology transforms your experience with smart recommendations, dynamic insights, and automated summaries.
        </SectionDescription>
        <FeatureGrid>

<FeatureCard data-aos="fade-up" data-aos-delay="400">
  <FeatureIcon>📝</FeatureIcon>
  <FeatureTitle>
    <a href="/AIVideoSummarizer">Automated Summaries</a>
  </FeatureTitle>
  <FeatureDescription>
    Quickly review and retain important information with AI-generated summaries of notes, lectures, and research materials.
  </FeatureDescription>
</FeatureCard>

<FeatureCard data-aos="fade-up" data-aos-delay="600">
  <FeatureIcon>📅</FeatureIcon>
  <FeatureTitle>
    <a href="/StudyPlanner">Study Planner</a>
  </FeatureTitle>
  <FeatureDescription>
    Organize your study schedule efficiently with AI-powered planning tools that adapt to your learning habits.
  </FeatureDescription>
</FeatureCard>

<FeatureCard data-aos="fade-up" data-aos-delay="500">
  <FeatureIcon>📇</FeatureIcon>
  <FeatureTitle>
    <a href="/FlashcardGenerator">Flashcard Generator</a>
  </FeatureTitle>
  <FeatureDescription>
    Enhance learning with AI-generated flashcards, turning your notes into bite-sized, interactive study tools.
  </FeatureDescription>
</FeatureCard>


</FeatureGrid>


      </ParallaxContainer>
    </AISectionWrapper>
  );
};

export default AISection;