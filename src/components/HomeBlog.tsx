'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import React from 'react';
import useAnimation from '@/hooks/useAnimation';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const HomeBlog = ({ blogs }: any) => {
  const ref: any = useRef();
  const animation = useAnimation(ref);
  return (
    <div className="row">
      {blogs.slice(0, 3).map((blog: any, index: number) => {
        const { title, coveredImage } = blog.data;
        return (
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: (index + 1) * 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.3 * (index + 1), delay: 0.1 * index }}
            className="col-md-4"
            key={blog.slug}
          >
            <article className="blog-card position-relative">
              <div className="blog-card-thumb">
                <Image
                  height={384}
                  width={350}
                  src={coveredImage}
                  alt="blog-image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="blog-card-content">
                <Link href={`/blogs/${blog.slug}`}>
                  <h5>{title}</h5>
                </Link>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="d-flex align-items-center stretched-link "
                >
                  <span>Read the Article</span>
                  <ArrowRight size={20} weight="bold" />
                </Link>
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomeBlog;
