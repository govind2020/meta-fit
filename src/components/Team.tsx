'use client';
import { teamData } from '../../public/data/data';
import { CaretDown } from 'phosphor-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import useAnimation from '@/hooks/useAnimation';

const Team = () => {
  const ref: any = useRef();
  const animation = useAnimation(ref);
  return (
    <section className="team">
      <div ref={ref} className="container">
        <div className="row">
          <div className="col-md-12 col-10 mx-auto">
            <div className="team-title text-center">
              <h3>MetaFit Team members</h3>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-md-4 g-3">
          {teamData.map((team) => {
            const { image, name, position, id } = team;
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 5 * id },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animation}
                transition={{ duration: 0.1 * id, delay: 0.1 * id }}
                className="team-member"
                key={id}
              >
                <div className="team-member--thumb">
                  <Image
                    height={288}
                    width={288}
                    src={image}
                    alt={name}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="team-member--content">
                  <h6>{name}</h6>
                  <p>{position}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-5">
            <a
              href="#"
              className="btn btn-small btn-outline d-md-none align-items-center d-flex load-more justify-content-center"
            >
              <span>Load More</span>
              <CaretDown size={20} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
