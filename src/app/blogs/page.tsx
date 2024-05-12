import getMarkDownData from '@/utils/getMarkDownData';
import MainBlogArea from '@/components/MainBlogArea';

export const generateStaticParams = async () => {
  const posts = getMarkDownData('/data/blogs/') || [];
  return posts.map((post: any) => ({
    // Adjust the type 'any' to match your blog data type
    slug: post.slug,
  }));
};

export const metadata = {
  title: 'Blogs | MetaFit',
};

const Page = ({ blogs }: any) => {
  const categories: any = blogs?.map((blog: any) => blog.data.category) || [];
  // const uniqueCategories = [...new Set(categories)];

  return (
    <></> || <MainBlogArea blogCategory={categories} blogs={blogs || []} />
  );
};

export default Page;
