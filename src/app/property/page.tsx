import MainPropertyArea from '@/components/MainPropertyArea';
import { propertiesData, GymData } from '../../../public/data/data';

export const metadata = {
  title: 'Property List | RealStatic',
};

const Page = () => {
  return (
    (
      <>
        <MainPropertyArea propertiesData={GymData} />
      </>
    ) || <MainPropertyArea propertiesData={GymData} />
  );
};

export default Page;
