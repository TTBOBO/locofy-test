import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import "./ResultsPage.css";

const ResultsPage: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="results-page">
        <header className="top-header1">
          <div className="top-container1">
            <button
              className="fickleflight-logo1"
              onClick={onFickleflightLogoClick}
            >
              <img className="symbols-icon" alt="" src="/undefined16.png" />
            </button>
            <div className="navigation-right1">
              <div className="navigation-menu1">
                <div className="explore1" onClick={onExploreTextClick}>
                  Explore
                </div>
                <button className="search1">Search</button>
                <div className="explore1" onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className="offers1">Offers</button>
              </div>
              <div className="account-section1">
                <img
                  className="hamburger-menu-icon1"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon1"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-form-section">
          <div className="search-container">
            <div className="banner-gradient" />
            <img
              className="banner-background-icon"
              alt=""
              src="/undefined17.png"
            />
            <div className="search-section">
              <div className="title1">
                <div className="where-are-you">Where are you off too?</div>
              </div>
              <div className="search-form">
                <div className="inputs-row">
                  <div className="input-group">
                    <Autocomplete
                      className="departure-field"
                      size="medium"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
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
                  <div className="input-group">
                    <Autocomplete
                      className="departure-field"
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
                  <div className="input-group">
                    <div className="departure-field">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
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
                <div className="button-group">
                  <button className="search-flights-button">
                    <div className="button2">Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-results">
          <div className="search-filters">
            <div className="results-summary">
              <div className="results1">10 out of 177 Results</div>
              <img
                className="results-summary-child"
                alt=""
                src="/undefined18.png"
              />
            </div>
            <div className="booking-options">
              <b className="results2">Booking Options</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="flight-experience">
              <b className="results3">Flight Experience</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="airlines">
              <b className="results4">Airlines</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="stops">
              <b className="results5">Stops</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <img className="seperator-icon" alt="" src="/undefined19.png" />
          </div>
          <div className="flight-cards">
            <div className="flight-card">
              <div className="airline-section">
                <img className="turkish-icon" alt="" src="/undefined20.png" />
                <div className="singapore-airlines">Turkish Airlines</div>
              </div>
              <div className="flight-details-section">
                <div className="departure-details">
                  <div className="am">11:35 PM</div>
                  <div className="sin">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon" alt="" src="/undefined21.png" />
                  <div className="h-55m-non-stop">33H 10M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">4:45 PM</div>
                  <div className="sin1">LAX</div>
                </div>
              </div>
              <div className="price-section">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 723</b>
              </div>
            </div>
            <div className="flight-card1">
              <div className="airline-section">
                <img className="turkish-icon" alt="" src="/undefined23.png" />
                <div className="singapore-airlines1">Singapore Airlines</div>
              </div>
              <div className="flight-details-section1">
                <div className="departure-details">
                  <div className="am">8:45 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration1">
                  <img className="flighticon1" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">15H 10M, 2-stops</div>
                </div>
                <div className="arrival-details">
                  <div className="am">7:55 PM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section1">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 900</b>
              </div>
            </div>
            <div className="flight-card">
              <div className="airline-section">
                <img className="japan-icon" alt="" src="/undefined25.png" />
                <div className="singapore-airlines">Japan Airlines</div>
              </div>
              <div className="flight-details-section">
                <div className="departure-details">
                  <div className="am">8:20 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon2" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">17H 30M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">9:50 PM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 859</b>
              </div>
            </div>
            <div className="flight-card">
              <div className="airline-section">
                <img className="japan-icon" alt="" src="/undefined26.png" />
                <div className="singapore-airlines">ANA</div>
              </div>
              <div className="flight-details-section">
                <div className="departure-details">
                  <div className="am">6:35 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">19H 15M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">9:50 PM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 936</b>
              </div>
            </div>
            <div className="flight-card1">
              <div className="airline-section">
                <img
                  className="american-airlines-icon"
                  alt=""
                  src="/undefined27.png"
                />
                <div className="singapore-airlines">American Airlines</div>
              </div>
              <div className="flight-details-section4">
                <div className="departure-details">
                  <div className="am">8:20 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">17H 30M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">9:50 AM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section1">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 939</b>
              </div>
            </div>
            <div className="flight-card">
              <div className="airline-section">
                <img className="turkish-icon" alt="" src="/undefined20.png" />
                <div className="singapore-airlines">Turkish Airlines</div>
              </div>
              <div className="flight-details-section">
                <div className="departure-details">
                  <div className="am">11:35 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration5">
                  <img className="flighticon1" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">33H 10M, 2-stops</div>
                </div>
                <div className="arrival-details">
                  <div className="am">4:45 PM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 673</b>
              </div>
            </div>
            <div className="flight-card">
              <div className="airline-section">
                <img className="japan-icon" alt="" src="/undefined28.png" />
                <div className="singapore-airlines">Japan Airlines</div>
              </div>
              <div className="flight-details-section">
                <div className="departure-details">
                  <div className="am">10:25 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">26H 45M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">9:10 AM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 859</b>
              </div>
            </div>
            <div className="flight-card1">
              <div className="airline-section">
                <img
                  className="american-airlines-icon"
                  alt=""
                  src="/undefined29.png"
                />
                <div className="singapore-airlines">American Airlines</div>
              </div>
              <div className="flight-details-section4">
                <div className="departure-details">
                  <div className="am">10:25 PM</div>
                  <div className="sin2">SIN</div>
                </div>
                <div className="flightduration">
                  <img className="flighticon" alt="" src="/undefined24.png" />
                  <div className="h-55m-non-stop">26H 45M, 1-stop</div>
                </div>
                <div className="arrival-details">
                  <div className="am">9:10 AM</div>
                  <div className="sin3">LAX</div>
                </div>
              </div>
              <div className="price-section1">
                <img
                  className="price-section-child"
                  alt=""
                  src="/undefined22.png"
                />
                <b className="s-730">S$ 859</b>
              </div>
            </div>
            <button className="primary-button1">
              <div className="primary-button-item" />
              <div className="search-flights4">Show more results</div>
            </button>
          </div>
        </div>
        <div className="footer-section1">
          <div className="footer-section2">
            <div className="newsletter-form-section1">
              <img
                className="newsletter-section-background1"
                alt=""
                src="/undefined30.png"
              />
              <div className="subscribe-form1">
                <div className="form-header1">
                  <b className="form-title-subtext1">
                    subscribe to our newsletter
                  </b>
                  <b className="form-title1">Get weekly updates</b>
                </div>
                <div className="form1">
                  <div className="footer-section2">
                    <div className="fill-in-your1">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields1">
                    <div className="footer-section2">
                      <TextField
                        className="input2"
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                    <div className="footer-section2">
                      <TextField
                        className="input2"
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="button3">
                    <div className="unstyledbutton1">
                      <div className="button4">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer1">
              <div className="fickleflight-bio1">
                <img className="logo-icon1" alt="" src="/undefined31.png" />
                <div className="fickle-flight-is1">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img className="social-icons1" alt="" src="/undefined32.png" />
              </div>
              <div className="seperator1" />
              <div className="footer-links1">
                <div className="company2">
                  <div className="about-us1">About Us</div>
                  <div className="company3">Company</div>
                  <div className="news1">News</div>
                  <div className="careers1">Careers</div>
                  <div className="how-we-work1">How we work</div>
                </div>
                <div className="company2">
                  <div className="account1">Account</div>
                  <div className="support3">Support</div>
                  <div className="support-center1">Support Center</div>
                  <div className="faq1">FAQ</div>
                  <div className="accessibility1">Accessibility</div>
                </div>
                <div className="more2">
                  <div className="covid-advisory1">Covid Advisory</div>
                  <div className="more3">More</div>
                  <div className="airline-fees1">Airline Fees</div>
                  <div className="tips1">Tips</div>
                  <div className="how-we-work1">Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
