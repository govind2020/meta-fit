import React from 'react'; // Import React
import AboutHero from '@/components/AboutHero';

interface Metadata {
  title: string;
}

export const metadata: Metadata = {
  title: 'About Us | RealStatic',
};

const About: React.FC = () => {
  // Define type for the functional component
  return (
    <>
      <h1>About Page</h1>
      <AboutHero />
    </>
  );
};

export default About;
