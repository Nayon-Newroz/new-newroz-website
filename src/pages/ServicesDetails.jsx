import React, { useEffect, useState } from "react";
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
const techs = [
  {
    img: "/images/Codeigniter.png",
    techId: "Backend",
    title: "Codeigniter",
  },
  {
    img: "/images/Figma.png",
    techId: "Design",
    title: "Figma",
  },
  {
    img: "/images/Cassandra.png",
    techId: "Backend",
    title: "Cassandra",
  },
  {
    img: "/images/Postgre_SQL.png",
    techId: "Database",
    title: "Postgre SQL",
  },
  {
    img: "/images/MySQL.png",
    techId: "Database",
    title: "MySQL",
  },
  {
    img: "/images/Protopie.png",
    techId: "Design",
    title: "Protopie",
  },
  {
    img: "/images/React.png",
    techId: "Frontend",
    title: "React",
  },
  {
    img: "/images/Balsamiq.png",
    techId: "Design",
    title: "Balsamiq",
  },
  {
    img: "/images/Next_Js.png",
    techId: "Frontend",
    title: "Next Js",
  },
  {
    img: "/images/Amazon_web_service.png",
    techId: "Cloud",
    title: "Amazon web service",
  },
  {
    img: "/images/PHP_Cupcake.png",
    techId: "Backend",
    title: "PHP Cupcake",
  },
  {
    img: "/images/Selenium.png",
    techId: "Testing",
    title: "Selenium",
  },
  {
    img: "/images/Appium.png",
    techId: "Testing",
    title: "Appium",
  },
  {
    img: "/images/JMeter_Apache.png",
    techId: "Testing",
    title: "JMeter Apache",
  },
  {
    img: "/images/Docker.png",
    techId: "Cloud",
    title: "Docker",
  },
  {
    img: "/images/Jenkins.png",
    techId: "Devops",
    title: "Jenkins",
  },
  {
    img: "/images/Kubernetes.png",
    techId: "Cloud",
    title: "Kubernetes",
  },
  {
    img: "/images/Java.png",
    techId: "Backend",
    title: "Java",
  },
  {
    img: "/images/Spring.png",
    techId: "Backend",
    title: "Spring",
  },
  {
    img: "/images/Laravel.png",
    techId: "Backend",
    title: "Laravel",
  },
  {
    img: "/images/Python.png",
    techId: "Backend",
    title: "Python",
  },
  {
    img: "/images/PHP.png",
    techId: "Backend",
    title: "PHP",
  },
  {
    img: "/images/Symfony.png",
    techId: "Backend",
    title: "Symfony",
  },
  {
    img: "/images/Photoshop.png",
    techId: "Design",
    title: "Photoshop",
  },
  {
    img: "/images/Illustrator.png",
    techId: "Design",
    title: "Illustrator",
  },
  {
    img: "/images/Flutter.png",
    techId: "Mobile App",
    title: "Flutter",
  },
  {
    img: "/images/Material_UI.png",
    techId: "Frontend",
    title: "Material UI",
  },
  {
    img: "/images/Swift.png",
    techId: "Mobile App",
    title: "Swift",
  },
];
const ServicesDetails = ({ translations, lang, darkMode }) => {
  const [active, setActive] = useState(
    translations.companyTechnologiesWeUse.all
  );
  const [techList, setTechList] = useState(techs);
  const handleTech = (id) => {
    if (id === "All") {
      setTechList(techs);
    } else {
      setTechList(techs.filter((res) => res.techId === id));
    }
    setActive(id);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="journey_holder"
        >
          <Grid item sm={12} md={4} className="hideForTabAndMobileViewOnly">
            <h3 className={`subtitle mb20 ${darkMode && "white"}`}>
              {translations.pageTitles.serviceDetails}
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
                {translations.pageTitles.HomepageTitle}
              </Grid>
              <Grid item xs="auto">
                &nbsp; &nbsp;{" "}
                <KeyboardArrowRightIcon
                  style={{ color: "#2B2B2B", fontSize: "15px" }}
                />{" "}
                &nbsp; &nbsp;
              </Grid>
              <Grid
                item
                xs="auto"
                className="journeyText"
                component={Link}
                to={"/services"}
              >
                {translations.pageTitles.servicespageTitle}
              </Grid>
              <Grid item xs="auto">
                &nbsp; &nbsp;{" "}
                <KeyboardArrowRightIcon
                  style={{ color: "#2B2B2B", fontSize: "15px" }}
                />{" "}
                &nbsp; &nbsp;
              </Grid>
              <Grid item xs="auto" className="journeyText">
                {translations.pageTitles.details}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.servicesDetails.title}
          </h2>
          <p className="text_body_small_regular center mb8">
            {translations.servicesDetails.subtitle}
          </p>
          <div className="detail_text_container">
            <p
              className={`text_body_small_regular center mb50  black2 ${
                darkMode && "white"
              }`}
            >
              {translations.servicesDetails.details}
            </p>
          </div>
          <div
            className={`card_triangle_holder ${
              lang === "kr" && "card_triangle_holder_for_rtl"
            }`}
          >
            <Triangle
              lang={lang}
              color={darkMode ? "#4790E4" : "#ABCCFE"}
              myClass="card_triangle hide_for_tab_and_smaller_view"
              // rtlClass="card_triangle_for_rtl"
            />
          </div>
          <div
            className={`card_triangle2_holder ${
              lang === "kr" && "card_triangle2_holder_for_rtl"
            }`}
          >
            <Triangle
              lang={lang}
              color={darkMode ? "#FF7539" : "#FFC93C"}
              myClass="card_triangle2 hide_for_tab_and_smaller_view"
              // rtlClass="card_triangle2_for_rtl"
            />
          </div>
          <div className="upper_slide">
            <h3
              className={`title_semibold_medium mb30 center black ${
                darkMode && "white"
              }`}
            >
              {translations.servicesDetails.cardSection1.title}
            </h3>
            <div className="card_holder mb45">
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card1.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card1.details}
                  </p>
                </div>
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card2.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card2.details}
                  </p>
                </div>
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card3.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card3.details}
                  </p>
                </div>
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card4.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card4.details}
                  </p>
                </div>
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card5.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card5.details}
                  </p>
                </div>
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
                style={{ padding: "20px 30px" }}
              >
                <div>
                  <h4
                    className={`text_body_medium fw500 mb8 deepBlue ${
                      darkMode && "white"
                    }`}
                  >
                    {translations.servicesDetails.cardSection1.card6.title}
                  </h4>
                  <p
                    className="text_body_small_regular"
                    style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                  >
                    {translations.servicesDetails.cardSection1.card6.details}
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

export default ServicesDetails;
