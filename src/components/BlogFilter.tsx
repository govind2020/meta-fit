'use client';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';

interface BlogFilterProps {
  blogFilterFunction: {
    handleCategory: (category: string) => void;
    handleType: (type: string) => void;
    blogCategory: string[];
    selectedCategory: string | null;
    selectedType: string | null;
    category: boolean;
    setCategory: (value: boolean) => void;
    type: boolean;
    setType: (value: boolean) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
    handleResetBlogs: () => void;
  };
}

const BlogFilter: React.FC<BlogFilterProps> = ({ blogFilterFunction }) => {
  const {
    handleCategory,
    handleType,
    blogCategory,
    selectedCategory,
    selectedType,
    category,
    setCategory,
    type,
    setType,
    handleSearch,
    search,
    handleResetBlogs,
  } = blogFilterFunction;

  return (
    <div className="filter-content">
      <div className="filter-content-properties d-flex align-items-center">
        <div className="input-group filter-input">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Blog Title"
            value={search}
            onChange={handleSearch}
          />
          <span className="input-group-text">
            <MagnifyingGlass size={20} weight="bold" />
          </span>
        </div>
        <div className="filter-buy">
          <div className="dropholder">
            <div
              onClick={() => setType(!type)}
              className={`customdropdown d-flex justify-content-between align-items-center  ${
                type ? 'active' : ''
              }`}
            >
              <p className="btn btn-large btn-outline">
                {selectedType && <span>{selectedType}</span>}
                <span className="dummyItem">Types </span>
                <CaretDown size={20} weight="bold" />
              </p>
            </div>
            <ul className="dropdownMenu">
              <li onClick={() => handleType('News')}>News</li>
              <li onClick={() => handleType('Blog')}>Blog</li>
            </ul>
          </div>
        </div>
        <div className="filter-buy">
          <div className="dropholder">
            <div
              onClick={() => setCategory(!category)}
              className={`customdropdown d-flex justify-content-between align-items-center  ${
                category ? 'active' : ''
              }`}
            >
              <p className="btn btn-large btn-outline">
                {selectedCategory && <span>{selectedCategory}</span>}
                <span className="dummyItem">Category </span>
                <CaretDown size={20} weight="bold" />
              </p>
            </div>
            <ul className="dropdownMenu">
              {blogCategory.map((category) => (
                <li key={category} onClick={() => handleCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={handleResetBlogs}
          className="btn btn-large close-filter-content"
        >
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default BlogFilter;
