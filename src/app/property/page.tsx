import MainPropertyArea from '@/components/MainPropertyArea';
import { propertiesData, GymData } from '../../../public/data/data';
import { Suspense } from 'react';

export const metadata = {
  title: 'GYM Details | GYM',
};

const PropertyPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPropertyArea propertiesData={GymData} />
      </Suspense>
    </>
  );
};

export default PropertyPage;
