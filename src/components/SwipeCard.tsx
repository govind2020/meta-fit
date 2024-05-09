import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import SwipeButton from './SwipeButton';
import postDataToJsonServer from '@/app/api/postData';

const SwipeCard = ({ data, active, removeCard, dataFromJson }: any) => {
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const input = [-200, 0, 200];
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

  const onDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.y < -20) {
      setExitY(-400);
      removeCard(data.id, 'superlike');
      return;
    }
    if (info.offset.x > 20) {
      setExitX(400);
      removeCard(data.id, 'like');
      postDataToJsonServer(data);
    }
    if (info.offset.x < -20) {
      setExitX(-400);
      removeCard(data.id, 'nope');
    }
  };
  return (
    <>
      <SwipeButton exit={setExitX} removeCard={removeCard} id={data.id} />
      {active ? (
        <motion.div
          drag={true}
          className="card position-absolute top-50 start-50 translate-middle text-center fs-1 fw-bold border border-2 border-dark"
          onDragEnd={onDragEnd}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{
            scale: 1.05,
            opacity: 1,
          }}
          style={{ x, rotate, opacity, y }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
          whileDrag={{ cursor: 'grabbing' }}
          exit={{ x: exitX, y: exitY }}
        >
          {/* botstrap card  */}
          <div className="card" style={{ width: '18rem', height: '20rem' }}>
            <Image
              src={data?.src?.src}
              fill
              alt="home"
              className="rounded-3 position-static"
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{data?.name}</h5>
              <p className="card-text">{data?.age}</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default SwipeCard;
