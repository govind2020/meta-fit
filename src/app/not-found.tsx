'use client';
import Image from 'next/image';
// import { ArrowRight } from 'phosphor-react';

export const metadata = { title: '404 | MetaFit' };

const NotFound = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row error-content align-items-center">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="error-content-item text-center">
                <Image
                  src="/images/error.svg"
                  alt="error"
                  width="465"
                  height="481"
                />
                <h4>Something went wrong!</h4>
                <a href="/" className="btn btn-small btn-outline ">
                  <span>Homepage</span>
                  {/* <ArrowRight size={16} weight="bold" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
