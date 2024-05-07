'use client';
import FeatureBottom from './FeatureBottom';
import FeatureTop from './FeatureTop';
import Fitness from './Fitness';
import Nutrition from './Nutrition';

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <FeatureTop />
        <FeatureBottom />
        <Nutrition />
        <Fitness />
      </div>
    </section>
  );
};

export default Feature;
