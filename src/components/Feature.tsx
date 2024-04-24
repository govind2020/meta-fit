'use client';
import FeatureBottom from './FeatureBottom';
import FeatureTop from './FeatureTop';

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <FeatureTop />
        <FeatureBottom />
      </div>
    </section>
  );
};

export default Feature;
