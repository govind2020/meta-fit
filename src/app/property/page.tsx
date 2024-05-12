import MainPropertyArea from '@/components/MainPropertyArea';
import { propertiesData, GymData } from '../../../public/data/data';

export const metadata = {
  title: 'GYM Details | GYM',
};

const PropertyPage = () => {
  return (
    (
      <>
        <MainPropertyArea propertiesData={GymData} />
      </>
    ) || <MainPropertyArea propertiesData={GymData} />
  );
};

export default PropertyPage;
