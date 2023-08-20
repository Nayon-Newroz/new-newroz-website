import React, { useEffect } from "react";
// import "../App.css";
import { Button, Container, Grid, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MagicWand from "../svg-icons/MagicWand";
import Pattern from "../svg-icons/Pattern";
import CurveLine from "../svg-icons/CurveLine";
import Plane from "../svg-icons/Plane";
import Star from "../svg-icons/Star";
import Cloud from "../svg-icons/Cloud";
import Triangle from "../svg-icons/Triangle";
import GlowBG from "../svg-icons/GlowBG";
import { Circle, DarkMode, Transform } from "@mui/icons-material";
import BusinessIcon from "../svg-icons/BusinessIcon";
import CommaIcon from "../svg-icons/CommaIcon";
import SendIcon from "../svg-icons/SendIcon";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Company = ({ translations, lang, darkMode }) => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ borderBottom: "1px solid #fff", paddingBottom: "5px" }}
        >
          <Grid item sm={12} md={4} className="hideForTabAndMobileViewOnly">
            <h3 className={`subtitle mb20 ${darkMode && "white"}`}>
              {translations.pageTitles.companypageTitle}
            </h3>
          </Grid>
          <Grid item sm={12} md={8}>
            <Grid
              container
              justifyContent={{ md: "start", lg: "end" }}
              alignItems="center"
            >
              <Grid
                item
                xs="auto"
                className="journeyText"
                component={Link}
                to={"/"}
              >
                HOME
              </Grid>
              <Grid item xs="auto">
                &nbsp; &nbsp;{" "}
                <KeyboardArrowRightIcon
                  style={{ color: "#2B2B2B", fontSize: "15px" }}
                />{" "}
                &nbsp; &nbsp;
              </Grid>
              <Grid item xs="auto" className="journeyText">
                COMPANY
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid
              item
              sm={12}
              md={6}
              lg={6}
              className="mobile_view_center right_order_maintain"
            >
              <h4
                style={{ color: "#D23F00" }}
                className={`title_semibold_medium mb10 orange`}
              >
                {translations.companyTopSection.title}
              </h4>
              <p className={`text_body_medium  mb6 ${darkMode && "white"}`}>
                {translations.companyTopSection.details}
              </p>
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="left_order_maintain">
              <img
                src={
                  darkMode ? "/images/Top_Dark.png" : "/images/Top_Light.png"
                }
                alt="our company"
                className={`right_image_style ${
                  lang === "kr" && "left_image_style"
                }`}
              />
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid item sm={12} md={6} lg={6}>
              <img
                src={
                  darkMode
                    ? "/images/Together_We_Are_Dark.png"
                    : "/images/Together_We_Are_Light.png"
                }
                alt="our company"
                className={`left_image_style ${
                  lang === "kr" && "right_image_style"
                }`}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                {translations.companyWhoYouAreSection.title}
              </h3>
              <h4 className="text_body_small_regular mb8">
                {translations.companyWhoYouAreSection.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyWhoYouAreSection.details1}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyWhoYouAreSection.details2}
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center" spacing={4}>
            <Grid item md={12} lg={4} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                {translations.companyWhatWeBelieve.title}
              </h3>
              <h4 className="text_body_small_regular mb8">
                {translations.companyWhatWeBelieve.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb60 ${darkMode && "white"}`}
              >
                {translations.companyWhatWeBelieve.details}
              </p>

              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <BusinessIcon
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    color2={darkMode && "#FF7539"}
                    myClass="businessIcon"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
              >
                {translations.buttonText.anyBusynessIdea}
              </Button>
            </Grid>
            <Grid item md={12} lg={8}>
              <div className="card_holder">
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } ${lang === "kr" && "card6_for_rtl"}`}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Customer_Commitment_Dark.png"
                          : "/images/Customer_Commitment_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card1.title}
                    </h4>
                    <p
                      className="text_body_small_regular"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card1.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } ${lang === "kr" && "card6_for_rtl"}`}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Quality_Dark.png"
                          : "/images/Quality_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card2.title}
                    </h4>
                    <p
                      className="text_body_small_regular"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card2.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } ${lang === "kr" && "card6_for_rtl"}`}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Teamwork_Dark.png"
                          : "/images/Teamwork_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card3.title}
                    </h4>
                    <p
                      className="text_body_small_regular"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card3.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } ${lang === "kr" && "card6_for_rtl"}`}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Integrity_Dark.png"
                          : "/images/Integrity_light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card4.title}
                    </h4>
                    <p
                      className="text_body_small_regular"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card4.details}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid item sm={12} md={6} lg={6}>
              <img
                src={
                  darkMode ? "/images/CEO_Dark.png" : "/images/CEO_Light.png"
                }
                alt="ceo"
                className={`left_image_style ${
                  lang === "kr" && "right_image_style"
                }`}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_left"
                  rtlClass="comma_left_for_rtl"
                />
                {translations.companyCEOSection.title}
              </h3>
              <h4 className="text_body_small_regular mb8">
                {translations.companyCEOSection.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details1}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details2}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details3}
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_right"
                  rtlClass="comma_right_for_rtl"
                />
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.compantBrainBehindNewrozSection.title}
            </h2>
            <p className="text_body_small_regular center mb50">
              {translations.compantBrainBehindNewrozSection.subtitle}
            </p>

            <img
              src={
                darkMode ? "/images/Brain_Dark.png" : "/images/Brain_Light.png"
              }
              alt="brain behind newroz"
              width="100%"
            />
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.compantRoadmapSection.title}
            </h2>
            <p className="text_body_small_regular center mb50">
              {translations.compantRoadmapSection.subtitle}
            </p>

            <div className="card_holder">
              <div
                className={`card4_style  ${
                  darkMode && "card3_style_for_dark"
                } ${lang === "kr" && "card6_for_rtl"}`}
              >
                <div
                  className={`card4_text_holder orange  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  {translations.compantRoadmapSection.card1.year}
                </div>
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.compantRoadmapSection.card1.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.compantRoadmapSection.card1.details}
                  </p>
                </div>
              </div>
              <div
                className={`card4_style  ${
                  darkMode && "card3_style_for_dark"
                } ${lang === "kr" && "card6_for_rtl"}`}
              >
                <div
                  className={`card4_text_holder deepBlue  ${
                    darkMode && "card3_style_for_dark lightBlue"
                  } `}
                >
                  {translations.compantRoadmapSection.card2.year}
                </div>
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.compantRoadmapSection.card2.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.compantRoadmapSection.card2.details}
                  </p>
                </div>
              </div>
              <div
                className={`card4_style  ${
                  darkMode && "card3_style_for_dark"
                } ${lang === "kr" && "card6_for_rtl"}`}
              >
                <div
                  className={`card4_text_holder orange  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  {translations.compantRoadmapSection.card3.year}
                </div>
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.compantRoadmapSection.card3.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.compantRoadmapSection.card3.details}
                  </p>
                </div>
              </div>
              <div
                className={`card4_style  ${
                  darkMode && "card3_style_for_dark"
                } ${lang === "kr" && "card6_for_rtl"}`}
              >
                <div
                  className={`card4_text_holder deepBlue  ${
                    darkMode && "card3_style_for_dark lightBlue"
                  } `}
                >
                  {translations.compantRoadmapSection.card4.year}
                </div>
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.compantRoadmapSection.card4.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.compantRoadmapSection.card4.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Company;
