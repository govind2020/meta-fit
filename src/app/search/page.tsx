import { FC, Suspense } from 'react';
import dynamic from 'next/dynamic';

const MagnifyingGlass = dynamic(
  () => import('phosphor-react').then((phosphor) => phosphor.MagnifyingGlass),
  {
    ssr: false, // Disable server-side rendering (optional)
  },
);

const Search: FC = () => {
  // Use FC type for functional components
  // useTitle("Search | RealStatic");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="search">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-11 col-xl-8 mx-auto">
                <div className="search-content">
                  <h1>Search Property / Anything</h1>
                  <div className="input-group search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Property / Anything"
                    />
                    <span className="input-group-text">
                      {/* <MagnifyingGlass size={24} /> */}
                    </span>
                  </div>
                  <div className="search-result">
                    <h6>You are viewing sample results.</h6>
                    <div className="search-result-item">
                      <a href="#">https://staticmania.com</a>
                      <p>
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </p>
                    </div>
                    <div className="search-result-item">
                      <a href="#">https://staticmania.com</a>
                      <p>
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </p>
                    </div>
                    <div className="search-result-item">
                      <a href="#">https://staticmania.com</a>
                      <p>
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Search;
