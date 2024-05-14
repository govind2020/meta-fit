import BlogArea from '@/components/BlogArea';
import Counter from '@/components/Counter';
import Feature from '@/components/Feature';
import HeroTwo from '@/components/HeroTwo';
import PropertiesArea from '@/components/PropertiesArea';
import Services from '@/components/Services';
import TestimonialV2 from '@/components/TestimonialV2';

export const metadata = {
  title: 'Home Page 2 | RealStatic',
};

const page = () => {
  return (
    <>
      <HeroTwo />
      <Counter className={''} />
      <PropertiesArea />
      <Services />
      <Feature />
      <TestimonialV2 />
      {/* <BlogArea /> */}
    </>
  );
};

export default page;
