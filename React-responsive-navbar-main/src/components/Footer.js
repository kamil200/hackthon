import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-section" id="footerdiv">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-10 mx-auto">
              <div className="row dd">
                <div className="col-md-4 col-10 ">
                  <h3>HeadQuaters</h3>
                  <p>
                    246-50 57th Drive Douglaston, NY 11362
                    hello@universacare.com P: (718) 224-3758 F: 8777999065
                  </p>
                  <p></p>
                </div>

                <div className="col-md-2 col-5 ">
                  <h3>Services</h3>
                  <p>
                    <i class="far fa-circle"></i>Hourly Care
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Daily Care
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Hospital To Home
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Respite Care
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Specialized Care
                  </p>
                </div>
                <div className="col-md-2 col-5 ">
                  <h3>Company</h3>
                  <p>
                    <i class="far fa-circle"></i>About Us
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Locations
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Care Givers
                  </p>
                  <p>
                    <i class="far fa-circle"></i>News & Blogs
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Contact Us
                  </p>
                  <p>
                    <i class="far fa-circle"></i>FAQ
                  </p>
                </div>

                <div className="col-md-4 col-10 ">
                  <p className="footer_icon">
                    Follow Us <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p style={{ fontSize: "10px" }}>
              Copyright 2020
              <span style={{ color: "#ff8400" }}>Universacare </span>- All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
