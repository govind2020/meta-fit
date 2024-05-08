import BlogArticle from '@/components/BlogArticle';
import SocialMediaShare from '@/components/SocialMediaShare';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SingleBlogProps {
  params: {
    slug: string;
  };
}

const SingleBlog: React.FC<SingleBlogProps> = (props) => {
  const folder: string = '/data/blogs/';
  const slug: string = props.params.slug;
  const blogs: any[] = getMarkDownData(folder);
  const { content, data } = getMarkDownContent(folder, slug);

  const relatedBlogs: any[] = blogs.filter(
    (blog: any) => blog.data.category === data.category,
  );

  return (
    <section className="blog-single">
      <div className="container">
        <div className="row">
          <div className="blog-single-container">
            <SocialMediaShare />
            <div className="blog-single-title">
              <h3>{data.title}</h3>
            </div>
            <div className="blog-single-featured-thumb">
              <Image
                height={550}
                width={1098}
                src={data.featureImage}
                alt="blog-feature-image"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="markdown-content">
              <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
            </div>
            <div className="blog-single-author">
              <h5>Written By</h5>
              <div className="blog-single-author-details d-flex align-items-center">
                <div className="blog-single-author-details-thumb">
                  <Image
                    height={80}
                    width={80}
                    src={data.authorImage}
                    alt="blog-author"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="blog-single-author-details-content">
                  <h5>{data.author}</h5>
                  <p>{data.authorPosition}</p>
                </div>
                <div className="blog-single-author-details-date">
                  <span>{data.authorPosition}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Recent News</h3>
          </div>
          <div className="row row-cols-lg-3 row-cols-md-2 g-4">
            {relatedBlogs.slice(0, 3).map((blog: any) => (
              <BlogArticle key={blog.slug} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
