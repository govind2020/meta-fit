import BlogArea from '@/components/BlogArea';
import Company from '@/components/Company';
import Counter from '@/components/Counter';
import AboutHero from '@/components/AboutHero';
import Team from '@/components/Team';
import React from 'react'; // Import React

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
      <AboutHero />
      <Counter className="bg-transparent" />
      <Company />
      <Team />
      {/* <BlogArea /> */}
    </>
  );
};

export default About;
