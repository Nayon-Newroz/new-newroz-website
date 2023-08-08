import React, { useEffect } from "react";
import "../App.css";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MagicWand from "../svg-icons/MagicWand";
import Pattern from "../svg-icons/Pattern";
import CurveLine from "../svg-icons/CurveLine";
import Plane from "../svg-icons/Plane";
import Star from "../svg-icons/Star";
import Cloud from "../svg-icons/Cloud";
import Triangle from "../svg-icons/Triangle";
import GlowBG from "../svg-icons/GlowBG";
import { DarkMode, Transform } from "@mui/icons-material";
// import "../compoments/MouseDown.css";
// import Lottie from "lottie-react";
// import splash from "../animations/splash.json";
// import UnlockThePower from "../animations/UnlockThePower.json";

const Home = ({ translations, lang, darkMode }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Container
        maxWidth="xl"
        className="container_style"
        style={{ position: "relative" }}
      >
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="top_cloud1 hide_for_tab_and_smaller_view"
          rtlClass="top_cloud1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="top_cloud2 hide_for_tab_and_smaller_view"
          rtlClass="top_cloud2_for_rtl"
        />
        <Triangle
          lang={lang}
          color={darkMode ? "#FF7539" : "#FFC93C"}
          myClass="top_triangle1 hide_for_tab_and_smaller_view"
          rtlClass="top_triangle1_for_rtl"
        />
        <Triangle
          lang={lang}
          color={darkMode ? "#10214B" : "white"}
          myClass="top_triangle2 hide_for_tab_and_smaller_view"
          rtlClass="top_triangle2_for_rtl"
        />
        <GlowBG
          lang={lang}
          color={darkMode ? "#005DB2" : "#113CFC"}
          myClass="top_GlowBG1"
          rtlClass="top_GlowBG1_for_rtl"
        />
        <GlowBG
          lang={lang}
          color={darkMode && "#005DB2"}
          myClass="top_GlowBG2"
          rtlClass="top_GlowBG2_for_rtl"
        />
        <Grid
          container
          alignItems="center"
          className="home_main_section"
          style={{ position: "relative" }}
        >
          <Grid item xs={12} md={12} lg={8} xl={8}>
            <h2
              className={`title_large mb12 centerForTabAndMobileViewOnly`}
              style={{ position: "relative" }}
            >
              <Cloud
                lang={lang}
                color={darkMode && "#10214B"}
                myClass="top_cloud3 hide_for_tab_and_smaller_view"
                rtlClass="top_cloud3_for_rtl"
              />
              <Star
                lang={lang}
                color={darkMode && "#FF7539"}
                myClass="Star1 hide_for_tab_and_smaller_view"
                rtlClass="star1_for_rtl"
              />
              <Star
                lang={lang}
                color={darkMode && "#FF7539"}
                myClass="star2 hide_for_tab_and_smaller_view"
                rtlClass="star2_for_rtl"
              />
              {translations.homeTopSetion.title}
            </h2>
            <h3
              className={`subtitle mb20 centerForTabAndMobileViewOnly ${
                darkMode && "white"
              }`}
            >
              {translations.homeTopSetion.subtitle}
            </h3>

            <p
              className={`text_body_medium top_detail_text_container centerForTabAndMobileViewOnly ${
                darkMode && "gray"
              }`}
            >
              {translations.homeTopSetion.details}
            </p>
            <div
              style={{ position: "relative" }}
              className="centerForTabAndMobileViewOnly"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <MagicWand
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    myClass="Magicwand"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
              >
                {translations.homeTopSetion.connectWithUs}
              </Button>
              &nbsp; &nbsp;
              <Button
                color="primary"
                startIcon={
                  <img
                    src="/images/Play.svg"
                    alt="play icon"
                    className={
                      lang === "kr"
                        ? "play_icon play_icon_for_rtl"
                        : "play_icon"
                    }
                  />
                }
                className={`play_button ${darkMode && "white"}`}
                disableElevation
              >
                &nbsp; {translations.homeTopSetion.howItWorks}
              </Button>
              <div
                className={
                  lang === "kr"
                    ? "curveline_and_plane_holder curveline_and_plane_holder_for_rtl hide_for_tab_and_smaller_view"
                    : "curveline_and_plane_holder hide_for_tab_and_smaller_view"
                }
              >
                <CurveLine
                  myClass={
                    lang === "kr" ? "curveline curveline_for_rtl" : "curveline"
                  }
                />
                <Plane lang={lang} myClass="plane" />
              </div>
              <div className="text_animation_holder hide_for_tab_and_smaller_view">
                <div
                  style={{
                    background: darkMode && "#4790E4",
                  }}
                  className={
                    lang === "kr"
                      ? "extend_div extend_div_for_rtl"
                      : "extend_div"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <circle cx="5" cy="5" r="5" fill="#39FF41" />
                  </svg>{" "}
                  &nbsp;&nbsp; {translations.homeTopSetion.animationText}
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={4}
            className="hide_for_tab_and_smaller_view"
            style={{ position: "relative" }}
          >
            <GlowBG
              lang={lang}
              myClass="top_GlowBG3"
              color={darkMode && "#005DB2"}
            />
            <div
              // className="top_image_holder"
              className={`top_image_holder ${
                lang === "kr" && "top_image_holder_for_rtl"
              } ${darkMode && "top_image_holder_for_dark"}`}
              style={
                {
                  // background: darkMode && "#4790E4",
                  // boxShadow:
                  //   lang === "kr"
                  //     ? "rgba(161, 186, 234,.7) -32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  //     : "rgba(161, 186, 234,.7) 32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }
              }
            >
              <img
                src="/images/man.png"
                alt="model image"
                className={
                  lang === "kr"
                    ? "model_image model_image_for_rtl"
                    : "model_image"
                }
              />
              <Pattern
                lang={lang}
                color={darkMode && "#4790E4"}
                myClass="pattern"
                rtlClass="pattern_for_rtl"
              />
            </div>
            {/* <Lottie animationData={splash} loop={true} /> */}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <div className="card_holder">
          <div className="card6">
            <p className="title_large2 mb5">Services</p>
            <p className="text_body_small_regular mb8">
              Choose The Best IT Service Company
            </p>
            <p className="text_body_medium fw400 mb16">
              When designing a solution, we make solving problems our utmost
              priority while also keeping an equal emphasis on aesthetics.
            </p>
            <Button
              variant="contained"
              color="primary"
              startIcon={
                <MagicWand
                  lang={lang}
                  color={darkMode && "#1C1C1C"}
                  myClass="Magicwand"
                  rtlClass="Magicwand_for_rtl"
                />
              }
              className={`top_contained_buttton ${darkMode && "black"}`}
              disableElevation
            >
              Discover More
            </Button>
          </div>
          <div className="card6 ">
            <div className="square_img_holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <rect
                  x="14"
                  y="5"
                  width="26"
                  height="43"
                  rx="3"
                  stroke="#113CFC"
                  stroke-width="2"
                />
                <path
                  d="M30 37L27 40L30 43"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <path
                  d="M34 43L37 40L34 37"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <circle cx="27.5" cy="9.5" r="1.5" fill="#113CFC" />
              </svg>
            </div>
            <div className="card_left_padding">
              <p className="text_body_medium fw500 mb8">
                Mobile Application Development
              </p>
              <p
                className="text_body_small_regular"
                style={{ color: "#525252" }}
              >
                Bulid Mobile apps for adaptingmobile centric world
              </p>
            </div>
            <div className="card_button_holder">
              <Button className="card_button">VISIT NOW</Button>
            </div>
          </div>
          <div className="card6 ">
            <div className="square_img_holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <rect
                  x="14"
                  y="5"
                  width="26"
                  height="43"
                  rx="3"
                  stroke="#113CFC"
                  stroke-width="2"
                />
                <path
                  d="M30 37L27 40L30 43"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <path
                  d="M34 43L37 40L34 37"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <circle cx="27.5" cy="9.5" r="1.5" fill="#113CFC" />
              </svg>
            </div>
            <div className="card_left_padding">
              <p className="text_body_medium fw500 mb8">
                Mobile Application Development
              </p>
              <p
                className="text_body_small_regular"
                style={{ color: "#525252" }}
              >
                Bulid Mobile apps for adaptingmobile centric world
              </p>
            </div>
            <div className="card_button_holder">
              <Button className="card_button">VISIT NOW</Button>
            </div>
          </div>
          <div className="card6 ">
            <div className="square_img_holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <rect
                  x="14"
                  y="5"
                  width="26"
                  height="43"
                  rx="3"
                  stroke="#113CFC"
                  stroke-width="2"
                />
                <path
                  d="M30 37L27 40L30 43"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <path
                  d="M34 43L37 40L34 37"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <circle cx="27.5" cy="9.5" r="1.5" fill="#113CFC" />
              </svg>
            </div>
            <div className="card_left_padding">
              <p className="text_body_medium fw500 mb8">
                Mobile Application Development
              </p>
              <p
                className="text_body_small_regular"
                style={{ color: "#525252" }}
              >
                Bulid Mobile apps for adaptingmobile centric world
              </p>
            </div>
            <div className="card_button_holder">
              <Button className="card_button">VISIT NOW</Button>
            </div>
          </div>
          <div className="card6 ">
            <div className="square_img_holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <rect
                  x="14"
                  y="5"
                  width="26"
                  height="43"
                  rx="3"
                  stroke="#113CFC"
                  stroke-width="2"
                />
                <path
                  d="M30 37L27 40L30 43"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <path
                  d="M34 43L37 40L34 37"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <circle cx="27.5" cy="9.5" r="1.5" fill="#113CFC" />
              </svg>
            </div>
            <div className="card_left_padding">
              <p className="text_body_medium fw500 mb8">
                Mobile Application Development
              </p>
              <p
                className="text_body_small_regular"
                style={{ color: "#525252" }}
              >
                Bulid Mobile apps for adaptingmobile centric world
              </p>
            </div>
            <div className="card_button_holder">
              <Button className="card_button">VISIT NOW</Button>
            </div>
          </div>
          <div className="card6 ">
            <div className="square_img_holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <rect
                  x="14"
                  y="5"
                  width="26"
                  height="43"
                  rx="3"
                  stroke="#113CFC"
                  stroke-width="2"
                />
                <path
                  d="M30 37L27 40L30 43"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <path
                  d="M34 43L37 40L34 37"
                  stroke="#113CFC"
                  stroke-linecap="round"
                />
                <circle cx="27.5" cy="9.5" r="1.5" fill="#113CFC" />
              </svg>
            </div>
            <div className="card_left_padding">
              <p className="text_body_medium fw500 mb8">
                Mobile Application Development
              </p>
              <p
                className="text_body_small_regular"
                style={{ color: "#525252" }}
              >
                Bulid Mobile apps for adaptingmobile centric world
              </p>
            </div>
            <div className="card_button_holder">
              <Button className="card_button">VISIT NOW</Button>
            </div>
          </div>
        
        </div>
      </Container>
    </div>
  );
};

export default Home;
