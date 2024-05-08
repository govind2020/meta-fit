import { FC } from 'react';
import getMarkDownData from '@/utils/getMarkDownData';
import Link from 'next/link';
import NewsLetter from './NewsLetter';
import HomeBlog from './HomeBlog';
import { Arrow } from '../../public/data/svgImages';

interface BlogAreaProps {}

const BlogArea: FC<BlogAreaProps> = () => {
  const blogs = getMarkDownData('');

  function getUniqueTitles(array: any[]) {
    const uniqueTitles: any[] = [];
    for (let i = 0; i < array.length; i++) {
      const title = array[i].data.title;

      const isExistTtitle = uniqueTitles.find(
        (blog) => blog.data.title === title,
      );

      if (!isExistTtitle) {
        uniqueTitles.push(array[i]);
      }
    }
    return uniqueTitles;
  }

  const uniqueBlog = getUniqueTitles(blogs);

  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between blog-header">
              <h3>News &amp; Consultant</h3>
              <Link
                href="/blogs"
                passHref
                className="d-md-flex align-items-center d-none"
              >
                <span>Explore All </span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <HomeBlog blogs={uniqueBlog} />
        <div className="row">
          <div className="col-6">
            <Link
              href="/blogs"
              passHref
              className="btn btn-small btn-outline btn-mobile d-md-none align-items-center d-flex w-auto"
            >
              <span>Explore All </span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
    </section>
  );
};

export default BlogArea;
