import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className="homepage">
          <div className="hero-section">
            <header className="top-header2">
              <div className="top-container2">
                <button className="fickleflight-logo2">
                  <img
                    className="symbols-icon1"
                    alt=""
                    src="/undefined33.png"
                  />
                </button>
                <div className="navigation-right2">
                  <div className="navigation-menu2">
                    <button className="explore2">Explore</button>
                    <div className="search2" onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className="search2" onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className="offers2">Offers</button>
                  </div>
                  <div className="account-section2">
                    <img
                      className="hamburger-menu-icon2"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="notification-bell-icon2"
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className="profile-picture-icon"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="search-section1">
              <div className="banner-gradient1" />
              <img
                className="banner-background1"
                alt=""
                src="/undefined34.png"
              />
              <div className="search-container1">
                <div className="title2">
                  <div className="lets-explore">{`Let’s explore & travel the world`}</div>
                  <div className="find-the-best">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="search-form1">
                  <div className="form-title-group">
                    <b className="search-flights5">Search flights</b>
                    <div className="flight-options">
                      <div className="flight-type">
                        <FormControlLabel
                          className="radio"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="radio1"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-inputs-row">
                    <div className="inputs-row1">
                      <div className="input-group3">
                        <Autocomplete
                          className="selectoutlined"
                          size="medium"
                          disablePortal
                          options={[
                            "Singapore (SIN)",
                            "Sydney (SYD)",
                            "Siem Reap (REP)",
                            "Shanghai (PVG)",
                            "Sanya (SYX)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Departure"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Singapore -  Changi (SIN)"
                        />
                      </div>
                      <div className="input-group3">
                        <Autocomplete
                          className="selectoutlined"
                          size="medium"
                          sx={{ width: "100%" }}
                          disablePortal
                          options={[
                            "Clark (CRK)",
                            "Launceston (LST)",
                            "Kalibo (KLO)",
                            "Colombo CMB",
                            "Melbourne (AVV)",
                            "Los Angeles (LA)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Arrival"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Los Angeles (LA)"
                        />
                      </div>
                      <div className="input-group3">
                        <div className="selectoutlined">
                          <DatePicker
                            label="Date"
                            value={selectOutlinedDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setSelectOutlinedDateTimePickerValue(newValue);
                            }}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                size: "medium",
                                fullWidth: true,
                                color: "primary",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="button-group1">
                      <button
                        className="search-flights-button1"
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className="button5">Search flights</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contents">
            <div className="upcoming-flight-section">
              <b className="upcoming-flight">Upcoming Flight</b>
              <div className="flight-details">
                <div className="flight-main-container">
                  <div className="to-and-from">
                    <div className="from-details">
                      <b className="sin16">SIN</b>
                      <div className="singapore">Singapore</div>
                    </div>
                    <div className="duration">
                      <b className="h-55m">15H 55M</b>
                      <img
                        className="flight-icons"
                        alt=""
                        src="/undefined35.png"
                      />
                    </div>
                    <div className="to-details">
                      <b className="lax">LAX</b>
                      <div className="los-angeles">Los Angeles</div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="departure-details8">
                    <div className="departs-on-1">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="days-to-go-container">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="line-separator" />
                <div className="prepare-menu">
                  <div className="prepare-for-your">Prepare for your trip</div>
                  <div className="trip-menus">
                    <button className="hotel" onClick={onHotelClick}>
                      <img
                        className="hotel-icon"
                        alt=""
                        src="/undefined36.png"
                      />
                      <div className="hotel1">Hotel</div>
                    </button>
                    <button className="hotel">
                      <div className="attractions-icon">
                        <div className="background" />
                        <img
                          className="ticket-icon"
                          alt=""
                          src="/undefined37.png"
                        />
                      </div>
                      <div className="attractions1">Attractions</div>
                    </button>
                    <button className="hotel">
                      <img
                        className="hotel-icon"
                        alt=""
                        src="/undefined38.png"
                      />
                      <div className="attractions1">Eats</div>
                    </button>
                    <button className="hotel">
                      <div className="attractions-icon">
                        <div className="background1" />
                        <img
                          className="train-icon"
                          alt=""
                          src="/undefined39.png"
                        />
                      </div>
                      <div className="attractions1">Commute</div>
                    </button>
                    <button className="hotel">
                      <div className="taxi-icon">
                        <div className="background2" />
                        <img
                          className="taxi-icon1"
                          alt=""
                          src="/undefined40.png"
                        />
                      </div>
                      <div className="taxi1">Taxi</div>
                    </button>
                    <button className="hotel">
                      <div className="attractions-icon">
                        <div className="background3" />
                        <img
                          className="movie-icon"
                          alt=""
                          src="/undefined41.png"
                        />
                      </div>
                      <div className="attractions1">Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-destinations-main">
              <div className="destinations-titles">
                <div className="title-container">
                  <b className="prepare-for-your">Plan your next trip</b>
                  <b className="most-popular-destinations">
                    Most Popular Destinations
                  </b>
                </div>
                <button className="view-all-top">
                  <div className="view-all-destinations">
                    View all destinations
                  </div>
                  <img
                    className="arrow-right-icon"
                    alt=""
                    src="/undefined42.png"
                  />
                </button>
              </div>
              <div className="cards-container">
                <button className="col-1">
                  <div className="pariscard">
                    <img
                      className="parisimage-icon"
                      alt=""
                      src="/undefined43.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Paris</b>
                      <div className="details">
                        <div className="div4">$699</div>
                        <div className="from">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-1">
                  <div className="pariscard">
                    <img
                      className="parisimage-icon"
                      alt=""
                      src="/undefined44.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Greece</b>
                      <div className="details1">
                        <div className="div5">$1079</div>
                        <div className="from1">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-1">
                  <div className="pariscard">
                    <img
                      className="parisimage-icon"
                      alt=""
                      src="/undefined45.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Norway</b>
                      <div className="details">
                        <div className="div4">$895</div>
                        <div className="from">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-1">
                  <div className="pariscard">
                    <img
                      className="parisimage-icon"
                      alt=""
                      src="/undefined46.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Tuscany</b>
                      <div className="details3">
                        <div className="div7">$1245</div>
                        <div className="from3">from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom">
                <div className="view-all-destinations1">
                  View all destinations
                </div>
                <img
                  className="arrow-right-icon"
                  alt=""
                  src="/undefined47.png"
                />
              </div>
            </div>
            <div className="recommended-holidays-container">
              <div className="rec-title">
                <b className="recommended-holidays">Recommended Holidays</b>
                <button className="view-all-holidays-parent">
                  <div className="view-all-holidays">View all holidays</div>
                  <img
                    className="arrow-right-icon"
                    alt=""
                    src="/undefined48.png"
                  />
                </button>
              </div>
              <div className="rec-cards-container">
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/undefined49.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Bali</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div8">$899</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/undefined50.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Swiss</div>
                        <div className="d3n">6D5N</div>
                      </div>
                      <div className="div8">$900</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-3">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/undefined51.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Boracay</div>
                        <div className="d3n">5D4N</div>
                      </div>
                      <div className="div8">$699</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-4">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/undefined52.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Palawan</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div8">$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom1">
                <div className="view-all-holidays1">View all holidays</div>
                <img
                  className="arrow-right-icon"
                  alt=""
                  src="/undefined53.png"
                />
              </div>
            </div>
            <form className="popular-stays">
              <div className="popular-stays-header">
                <div className="popular-stays-title">
                  <b className="popular-stays1">Popular Stays</b>
                </div>
                <button
                  className="view-all-stays-button"
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className="view-all-stays">View all stays</div>
                  <img
                    className="arrow-right-icon"
                    alt=""
                    src="/undefined48.png"
                  />
                </button>
              </div>
              <div className="hotel-cards">
                <div className="hotel-card-1">
                  <div className="hotel-card">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="/undefined54.png"
                    />
                    <div className="stay-details">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Entire bungalow</div>
                        <b className="matterhorn-suites">Matterhorn Suites</b>
                        <div className="night4">$575/night</div>
                      </div>
                      <img
                        className="video-icon1"
                        alt=""
                        src="/undefined55.png"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews6">(60 reviews)</div>
                      <div className="parent">
                        <div className="div12">4.9</div>
                        <img
                          className="vector-icon4"
                          alt=""
                          src="/undefined56.png"
                        />
                      </div>
                    </div>
                    <div className="more-details-button">
                      <div className="button6">More details</div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card-1">
                  <div className="hotel-card">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="/undefined57.png"
                    />
                    <div className="stay-details1">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">
                          2-Story beachfront suite
                        </div>
                        <b className="matterhorn-suites">Discovery Shores</b>
                        <div className="night4">$360/night</div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="reviews6">(116 reviews)</div>
                      <div className="parent">
                        <div className="div12">4.8</div>
                        <img
                          className="vector-icon4"
                          alt=""
                          src="/undefined58.png"
                        />
                      </div>
                    </div>
                    <div className="more-details-button">
                      <div className="button6">More details</div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card-1">
                  <div className="hotel-card2">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="/undefined59.png"
                    />
                    <div className="stay-details1">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Single deluxe hut</div>
                        <b className="arctic-hut">{`Arctic Hut `}</b>
                        <div className="night4">$420/night</div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="reviews8">(78 reviews)</div>
                      <div className="container">
                        <div className="div14">4.7</div>
                        <img
                          className="vector-icon6"
                          alt=""
                          src="/undefined60.png"
                        />
                      </div>
                    </div>
                    <div className="more-details-button">
                      <div className="button6">More details</div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card-4">
                  <div className="hotel-card3">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="/undefined61.png"
                    />
                    <div className="stay-details">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Deluxe King Room</div>
                        <b className="arctic-hut">Lake Louise Inn</b>
                        <div className="night4">$244/night</div>
                      </div>
                      <img
                        className="video-icon1"
                        alt=""
                        src="/undefined62.png"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews6">(63 reviews)</div>
                      <div className="parent">
                        <div className="div12">4.6</div>
                        <img
                          className="vector-icon4"
                          alt=""
                          src="/undefined63.png"
                        />
                      </div>
                    </div>
                    <div className="more-details-button">
                      <div className="button6">More details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-view-all-stays">
                <div className="view-all-stays1">View all stays</div>
                <img
                  className="arrow-right-icon"
                  alt=""
                  src="/undefined64.png"
                />
              </div>
            </form>
          </div>
          <div className="footer-section3">
            <div className="subscribe-section">
              <img
                className="subscribe-section-background"
                alt=""
                src="/undefined65.png"
              />
              <div className="share-your-travels-form">
                <div className="form-header2">
                  <b className="prepare-for-your">
                    subscribe to our newsletter
                  </b>
                  <b className="form-title2">Get weekly updates</b>
                </div>
                <div className="form2">
                  <div className="form-text2">
                    <div className="fill-in-your2">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields2">
                    <div className="form-text2">
                      <TextField
                        className="input4"
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                    <div className="form-text2">
                      <TextField
                        className="input4"
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="button10">
                    <div className="unstyledbutton2">
                      <div className="button11">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer2">
              <div className="fickleflight-bio2">
                <img className="logo-icon2" alt="" src="/undefined66.png" />
                <div className="fickle-flight-is2">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img className="social-icons2" alt="" src="/undefined67.png" />
              </div>
              <div className="footer-child" />
              <div className="footer-links2">
                <div className="company4">
                  <div className="about-us2">About Us</div>
                  <div className="company5">Company</div>
                  <div className="news2">News</div>
                  <div className="careers2">Careers</div>
                  <div className="how-we-work2">How we work</div>
                </div>
                <div className="company4">
                  <div className="account2">Account</div>
                  <div className="support5">Support</div>
                  <div className="support-center2">Support Center</div>
                  <div className="faq2">FAQ</div>
                  <div className="accessibility2">Accessibility</div>
                </div>
                <div className="more4">
                  <div className="covid-advisory2">Covid Advisory</div>
                  <div className="more5">More</div>
                  <div className="airline-fees2">Airline Fees</div>
                  <div className="tips2">Tips</div>
                  <div className="how-we-work2">Quarantine Rules</div>
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
    </LocalizationProvider>
  );
};

export default Homepage;
