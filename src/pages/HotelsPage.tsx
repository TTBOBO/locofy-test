import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./HotelsPage.css";

const HotelsPage: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className="hotels-page">
        <header className="top-header">
          <div className="top-container">
            <div
              className="fickleflight-logo"
              onClick={onFickleflightLogoContainerClick}
            >
              <div className="symbols">
                <img
                  className="web-screen-icon"
                  alt=""
                  src="/undefined.png"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className="navigation-right">
              <div className="navigation-menu">
                <div className="explore" onClick={onExploreTextClick}>
                  Explore
                </div>
                <div className="explore" onClick={onSearchTextClick}>
                  Search
                </div>
                <button className="hotels">Hotels</button>
                <button className="offers">Offers</button>
              </div>
              <div className="account-section">
                <img
                  className="hamburger-menu-icon"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="header">
          <div className="banner">
            <img className="banner-background" alt="" src="/undefined1.png" />
            <div className="title">
              <div className="stays-in-los">Stays in Los Angeles</div>
              <div className="options">
                <div className="pilldefault">
                  <div className="beds">Recommended</div>
                </div>
                <div className="pilldefault1">
                  <div className="beds">Price</div>
                </div>
                <div className="pilldefault1">
                  <div className="beds">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-results">
          <div className="results-sumamry">
            <div className="results">200+ results</div>
            <div className="filters">
              <img className="filters-icon" alt="" src="/undefined2.png" />
              <div className="filters1">Filters</div>
            </div>
          </div>
          <div className="results-section">
            <div className="result-cards-col">
              <div className="results-card">
                <img
                  className="results-image-icon"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="results-details">
                  <div className="results-sumamry">
                    <div className="result-and-video">
                      <div className="king-bed-standard">
                        1 king bed standard
                      </div>
                      <b className="holiday-inn-expre">Holiday Inn Expre...</b>
                      <div className="review">
                        <div className="reviews">(1,136 reviews)</div>
                        <div className="stars">
                          <div className="div">4.7</div>
                          <img
                            className="vector-icon"
                            alt=""
                            src="/undefined4.png"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="video-icon"
                      alt=""
                      src="/undefined5.png"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="price-and-cta">
                    <div className="pricing">
                      <b className="s-286">$S 286</b>
                      <div className="night">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card1">
                <img
                  className="results-image-icon"
                  alt=""
                  src="/undefined6.png"
                />
                <div className="results-details1">
                  <div className="results-sumamry">
                    <div className="result">
                      <b className="freehand-los-angeles">
                        Freehand Los Angeles
                      </b>
                      <div className="bed-in-quad">Bed in Quad</div>
                      <div className="review1">
                        <div className="reviews1">(1,941 reviews)</div>
                        <div className="stars1">
                          <div className="div1">4.2</div>
                          <img
                            className="vector-icon"
                            alt=""
                            src="/undefined7.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta1">
                    <div className="pricing">
                      <b className="s-286">$S 198</b>
                      <div className="night">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card1">
                <img
                  className="results-image-icon"
                  alt=""
                  src="/undefined8.png"
                />
                <div className="results-details1">
                  <div className="results-sumamry">
                    <div className="result">
                      <b className="freehand-los-angeles">
                        The Westin Bonavent...
                      </b>
                      <div className="bed-in-quad">1 King, City view</div>
                      <div className="review1">
                        <div className="reviews1">(1,002 reviews)</div>
                        <div className="stars1">
                          <div className="div1">4.1</div>
                          <img
                            className="vector-icon"
                            alt=""
                            src="/undefined9.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta1">
                    <div className="pricing">
                      <b className="s-286">$S 289</b>
                      <div className="night">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card">
                <img
                  className="results-image-icon"
                  alt=""
                  src="/undefined10.png"
                />
                <div className="results-details">
                  <div className="results-sumamry">
                    <div className="result-and-video">
                      <div className="king-bed-standard">Deluxe King</div>
                      <b className="holiday-inn-expre">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="review">
                        <div className="reviews">(1,136 reviews)</div>
                        <div className="stars">
                          <div className="div">4.7</div>
                          <img
                            className="vector-icon"
                            alt=""
                            src="/undefined11.png"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="video-icon"
                      alt=""
                      src="/undefined12.png"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className="price-and-cta">
                    <div className="pricing">
                      <b className="s-286">$S 286</b>
                      <div className="night">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className="map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="map1"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="footer-section">
          <div className="newsletter-form-section">
            <img
              className="newsletter-section-background"
              alt=""
              src="/undefined13.png"
            />
            <div className="subscribe-form">
              <div className="form-header">
                <b className="form-title-subtext">
                  subscribe to our newsletter
                </b>
                <b className="form-title">Get weekly updates</b>
              </div>
              <div className="form">
                <div className="form-text">
                  <div className="fill-in-your">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="form-fields">
                  <div className="form-text">
                    <TextField
                      className="input"
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                  <div className="form-text">
                    <TextField
                      className="input"
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                </div>
                <button className="button">
                  <div className="unstyledbutton">
                    <div className="button1">submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="fickleflight-bio">
              <img className="logo-icon" alt="" src="/undefined14.png" />
              <div className="fickle-flight-is">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img className="social-icons" alt="" src="/undefined15.png" />
            </div>
            <div className="seperator" />
            <div className="footer-links">
              <div className="company">
                <div className="about-us">About Us</div>
                <div className="company1">Company</div>
                <div className="news">News</div>
                <div className="careers">Careers</div>
                <div className="how-we-work">How we work</div>
              </div>
              <div className="company">
                <div className="account">Account</div>
                <div className="support1">Support</div>
                <div className="support-center">Support Center</div>
                <div className="faq">FAQ</div>
                <div className="accessibility">Accessibility</div>
              </div>
              <div className="more">
                <div className="covid-advisory">Covid Advisory</div>
                <div className="more1">More</div>
                <div className="airline-fees">Airline Fees</div>
                <div className="tips">Tips</div>
                <div className="how-we-work">Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
