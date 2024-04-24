'use client';
import { Keyhole } from 'phosphor-react';
import React from 'react';

const NewPasswprd = () => {
  return (
    <div className="modal fade modal-resetPassword" id="newPassword">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 id="loginLabel4">Reset Password</h4>
            <button
              type="button"
              className="btn-modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M15 9L9 15"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 15L9 9"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="modal-property-details-form">
                <p>Enter your new password.</p>
                <form className="contact-form-items row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Keyhole size={20} weight="bold" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Keyhole size={20} weight="bold" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-Password"
                      />
                    </div>
                  </div>

                  <div className="w-100 contact-form-button">
                    <button
                      type="submit"
                      className="btn btn-large d-block w-100 mt-3"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center justify-content-center">
            <p className="bold">
              Remember the Password?{' '}
              <a href="#login" data-bs-toggle="modal" data-bs-dismiss="modal">
                {' '}
                Log In
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswprd;
