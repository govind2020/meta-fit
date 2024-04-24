'use client';
import { Arrow } from '../../public/data/svgImages';
import Image from 'next/image';
import Link from 'next/link';

interface BlogArticleProps {
  slug: string;
  data: {
    coveredImage: string;
    category: string;
    title: string;
    date: string;
    readTime: string;
  };
}

const BlogArticle: React.FC<BlogArticleProps | any> = ({ slug, data }) => {
  return (
    <article className="blog-item">
      <div className="blog-item-thumb">
        <Link href={`/blogs/${slug}`}>
          <Image
            height={384}
            width={350}
            src={data.coveredImage}
            alt="blog-image"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </div>
      <div className="blog-item-tag d-flex g-3 flex-wrap">
        <Link href={`/taxonomy/${data.category}`} className="tag">
          <span>{data.category}</span>
        </Link>
      </div>
      <div className="blog-item-content">
        <Link href={`/blogs/${slug}`}>
          <h5>{data.title}</h5>
        </Link>
        <ul className="blog-item-content-date">
          <li className="list-inline-item">{data.date}</li>
          <li className="list-inline-item">{data.readTime}</li>
        </ul>
        <Link
          href={`/blogs/${slug}`}
          className="blog-item-content-link d-flex align-items-center"
        >
          <span>Continue Reading</span>
          <Arrow />
        </Link>
      </div>
    </article>
  );
};

export default BlogArticle;
