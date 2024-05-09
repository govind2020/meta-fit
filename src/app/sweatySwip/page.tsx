'use client';

import AboutHero from '@/components/AboutHero';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cardData } from '@/utils/cardData';
import { CardDataTypes } from '@/types';
import getDataFromJsonServer from '../api/getData';
import SwipeCard from '@/components/SwipeCard';
import Image from 'next/image';

const Page = () => {
  const [cards, setCards] = useState<CardDataTypes[]>(cardData);
  const [rightSwipe, setRightSwipe] = useState(0);
  const [leftSwipe, setLeftSwipe] = useState(0);
  const [interested, setInterested] = useState<CardDataTypes[]>([]);
  const activeIndex = cards.length - 1;
  const [dataFromJson, setDataFromJson] = useState([]);
  const [show, setIsShow] = useState(false);

  const removeCard = (id: number, action: 'right' | 'left') => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    if (action === 'right') {
      setRightSwipe((prev) => prev + 1);
      setInterested((prev) => [...prev, cards.find((card) => card.id === id)!]);
    } else {
      setLeftSwipe((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (cards.length === 0) {
      fetchData();
      setTimeout(() => {
        setIsShow(!show);
      }, 1000);
    } else {
    }
  }, [cards]);

  const fetchData = async () => {
    let data = await getDataFromJsonServer();
    setDataFromJson(data);
  };

  console.log('dataFromJson', dataFromJson);

  const stats = [
    { name: 'Left', count: leftSwipe },
    { name: 'Right', count: rightSwipe },
  ];

  return (
    <div className="top-50">
      {/* <AboutHero /> */}
      <div className="px-5">
        <div className="d-flex  align-items-center justify-content-center text-secondary">
          <AnimatePresence>
            {cards.length
              ? cards.map((card) => (
                  <SwipeCard
                    key={card.id}
                    data={card}
                    active={card.id === activeIndex}
                    removeCard={removeCard}
                    dataFromJson={dataFromJson}
                  />
                ))
              : show && (
                  <div
                    className="align-items-center justify-content-center text-secondary"
                    style={{ marginTop: '100px' }}
                  >
                    <div>
                      <p className="">Selected People</p>
                    </div>
                    <div className="d-flex justify-content-center p-4 flex-row gap-3 flex-wrap">
                      {dataFromJson?.map((data: any, index: any) => (
                        <>
                          <div
                            key={index}
                            className="d-flex flex-column justify-content-center gap-2 rounded bg-light p-2"
                          >
                            <div className="d-flex justify-content-center gap-2">
                              <Image
                                src={data?.src}
                                className="rounded shrink-0 bg-secondary"
                                alt="image"
                                style={{ width: '96px', height: '96px' }}
                              />
                            </div>
                            <div className="d-flex text-center justify-content-center flex-column">
                              <span className="fw-bold fst-italic text-dark">
                                {data?.name}
                              </span>
                              <p className="text-truncate w-75 text-black text-center">
                                {data.bio}
                              </p>
                              <a
                                href="https://socket-io-frontend-three.vercel.app/"
                                target="_blank"
                                className="btn btn-primary rounded font-weight-bold text-white"
                              >
                                {' '}
                                Chat Now
                              </a>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
