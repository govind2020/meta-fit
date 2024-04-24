'use client';
import React, { useState } from 'react';
import BlogArticle from './BlogArticle';
import Pagination from './Pagination';

interface Blog {
  slug: string;
  // Define other properties of the blog item here
}

interface BlogPaginationProps {
  blogs: Blog[];
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;
  const totalPage: number = Math.ceil(blogs.length / itemsPerPage);

  const paginateData = (): Blog[] => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const currentPageData: Blog[] = paginateData();

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
  };

  return (
    <div className="blog-page">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 g-4">
          {currentPageData.map((blog) => (
            <BlogArticle key={blog.slug} slug={blog.slug} data={blog} />
          ))}
        </div>
        <Pagination paginateFunction={paginateFunction} />
      </div>
    </div>
  );
};

export default BlogPagination;
