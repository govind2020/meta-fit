'use client';
import FeatureBottom from './FeatureBottom';
import FeatureTop from './FeatureTop';
import Fitness from './Fitness';
import Nutrition from './Nutrition';
import SweatySwip from './SweatySwip';

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <FeatureTop />
        <FeatureBottom />
        <Nutrition />
        <Fitness />
        <SweatySwip />
      </div>
    </section>
  );
};

export default Feature;
