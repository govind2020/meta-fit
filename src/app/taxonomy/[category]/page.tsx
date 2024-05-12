// import { FC } from 'react';
// import BlogPagination from '@/components/BlogPagination';
// import getMarkDownData from '@/utils/getMarkDownData';

// interface PageProps {
//   params: {
//     category: string;
//   };
// }

// export const generateStaticParams = async () => {
//   const posts = getMarkDownData('/data/blogs/');
//   return posts.map((post) => ({
//     category: post.data.category,
//   }));
// };

// export const metadata = {
//   title: 'Blog Taxonomy | MetaFit',
// };

// const Page: FC<PageProps> = ({ params }) => {
//   const blogs = getMarkDownData('@/data/blogs');
//   const decodedCategory = decodeURIComponent(
//     params.category.replace(/%20/g, ' '),
//   );
//   const relatedBlog = blogs.filter(
//     (blog) => blog.data.category === decodedCategory,
//   );

//   return (
//     <section className="filter blog-filter">
//       <div className="container">
//         <div className="row">
//           <div className="filter-title">
//             <h3>{decodedCategory}</h3>
//           </div>
//         </div>
//       </div>
//       <BlogPagination blogs={relatedBlog} />
//     </section>
//   );
// };

// export default Page;

const Page = () => {
  return <></>;
};

export default Page;
