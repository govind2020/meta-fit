import React from 'react';

const NewsLetter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="cta">
            <h4>For Recent Update, News.</h4>
            <p>
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </p>
            <form action="GET" className="flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button className="btn d-block d-md-inline-block w-md-auto w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
