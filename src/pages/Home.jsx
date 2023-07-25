import React, { useEffect } from "react";
import "../App.css";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MagicWand from "../svg-icons/MagicWand";
import Pattern from "../svg-icons/Pattern";
import CurveLine from "../svg-icons/CurveLine";
import Plane from "../svg-icons/Plane";
import Start from "../svg-icons/Start";
import Cloud from "../svg-icons/Cloud";
import Triangle from "../svg-icons/Triangle";
import GlowBG from "../svg-icons/GlowBG";
import { Transform } from "@mui/icons-material";
// import "../compoments/MouseDown.css";
// import Lottie from "lottie-react";
// import splash from "../animations/splash.json";
// import UnlockThePower from "../animations/UnlockThePower.json";

const Home = ({ lang }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Container maxWidth="xl" style={{ position: "relative" }}>
        <Cloud width="56" top="50" left="-150" />
        <Cloud width="120" height="55" top="50" left="350" />
        <Triangle
          color="#FFC93C"
          width="125"
          height="125"
          top="150"
          right="-120"
        />
        <Triangle
          color="white"
          width="72"
          height="72"
          bottom="50"
          left="-120"
        />
        <GlowBG bottom="120px" left="-300px" />
        <GlowBG color="#113CFC" bottom="120px" right="-300px" />
        <Grid
          container
          alignItems="center"
          className="home_main_section"
          style={{ position: "relative" }}
        >
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <p
              className="title_large mb12 hideForMobileViewOnly centerForTabAndMobileViewOnly"
              style={{ position: "relative" }}
              // data-aos="fade-down"
              // data-aos-delay="300"
              // data-aos-offset="0"
            >
              Empowering
              <Cloud width="120" height="55" top="-100" left="-40" />
              <Start top="-30" left="0" />
              <Start width="14" height="14" top="-5" left="25" />
            </p>
            <p
              className="subtitle mb20 hideForMobileViewOnly centerForTabAndMobileViewOnly"
              // data-aos="fade-down"
              // data-aos-delay="300"
              // data-aos-offset="0"
            >
              Businesses With Advanced Technology
            </p>
            <p
              className="title_large mb50 showForMobileViewOnly"
              // data-aos="fade-down"
              // data-aos-delay="300"
              // data-aos-offset="0"
            >
              Build a <b>powerful,</b>
              <br /> white-label <br />
              <span style={{ color: "#CB2027" }}>
                <b>payments</b> platform
              </span>
              .
            </p>

            <p
              className="text_body_medium mb50 centerForTabAndMobileViewOnly"
              style={{ fontWeight: 400, color: "#525252" }}
              // data-aos="fade-down"
              // data-aos-delay="600"
              // data-aos-offset="0"
            >
              We are a team of passionate individuals who go the extra mile to
              create wonderful experiences for your business.
            </p>
            <div style={{ position: "relative" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MagicWand />}
                className="contained_buttton"
                disableElevation
                // data-aos="fade-down"
                // data-aos-delay="900"
                // data-aos-offset="0"
              >
                CONNECT WITH US
              </Button>
              &nbsp; &nbsp;
              <Button
                // variant="contained"
                color="primary"
                startIcon={
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      padding: "14px 11px 14px 17px",
                      border: "1px solid #FF7539",
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                    >
                      <path
                        d="M17.3657 9.13514C18.6991 9.90494 18.6991 11.8294 17.3657 12.5992L3.11572 20.8265C1.78239 21.5963 0.115722 20.634 0.115722 19.0944L0.115722 2.63994C0.115722 1.10034 1.78239 0.138094 3.11572 0.907894L17.3657 9.13514Z"
                        fill="#FF7539"
                      />
                    </svg>
                  </div>
                }
                className="play_button"
                disableElevation
                // data-aos="fade-down"
                // data-aos-delay="900"
                // data-aos-offset="0"
              >
                &nbsp; How it works
              </Button>
              <div style={{ position: "absolute", left: 180 }}>
                <CurveLine />
                <div style={{ position: "absolute", top: -81, left: 465 }}>
                  <Plane />
                  <div
                    className="extend"
                    style={{
                      background: "#fff",
                      boxShadow: "10px 9px 16px 0px rgba(0, 0, 0, 0.25)",
                      borderRadius: "26px",
                      color: "#2A2A2A",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      padding: "5px 15px",
                      zIndex: 200,
                      position: "absolute",
                      whiteSpace: "nowrap",
                      left: 50,
                      top: 95,
                      overflow: "hidden",
                    }}
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
                    &nbsp;&nbsp; We are here to help you achieve your success.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            className="hideForMobileViewOnly hideForTabViewOnly"
            style={{ position: "relative" }}
          >
            <GlowBG top="-120px" />
            <div
              style={{
                width: "350px",
                height: "550px",
                background: "#fff",
                borderRadius: "300px",
                margin: "auto",
                position: "relative",
                zIndex: 100,
                boxShadow:
                  lang === "kr"
                    ? "rgba(161, 186, 234,.7) -32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    : "rgba(161, 186, 234,.7) 32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              <img
                src="/images/man.png"
                alt=""
                style={{
                  width: "130%",
                  position: "absolute",
                  bottom: 6,
                  right: lang === "kr" ? -118 : 15,
                  transform: lang === "kr" && "scaleX(-1)",
                }}
              />
              <Pattern right={lang === "kr" ? "328" : "-155"} bottom="-70" />
            </div>
            {/* <Lottie animationData={splash} loop={true} /> */}
          </Grid>
        </Grid>
      </Container>
      {/*  <Container maxWidth="lg" className="container">
        <div
          className="card1 section_style"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <Grid container alignItems="center">
            <Grid item xs={12} sm={8.5} md={9} lg={9}>
              <div className="card_padding">
                <p className="title_semibold_medium">
                  Solutions tailored to fit any{" "}
                  <span style={{ color: "#CB2027" }}>business size</span>.
                </p>
                <p className="text_body_medium " style={{ maxWidth: "665px" }}>
                  theqrpay.com gives you a reliable payments platform with a
                  range of features and functions to help you launch your
                  payment business quickly. Get your financial product up and
                  running quickly with our SaaS or source code version.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3.5}
              md={3}
              lg={3}
              style={{ textAlign: "right" }}
              className="hideForMobileViewOnly"
            >
              <img src="/images/trees.svg" alt="" className="card_image" />
            </Grid>
          </Grid>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="right_order_maintain"
          >
            <div data-aos="fade-up">
              <p className="title_semibold_medium mb12">
                SaaS hybrid cloud solution
              </p>
              <p className="text_body_medium mb40">
                Discover a cost-effective subscription-based solution for your
                digital payment product without large upfront costs. Explore the
                financial market with no commitment, test the demand before
                creating a full-fledged product, and reduce development and
                maintenance expenses. Get the perfect foundation for your
                payment product today!
              </p>
            </div>
            <div data-aos="fade-up">
              <p className="subtitle_bold mb12">How can it help me?</p>

              <ul className="text_body_medium bullet_color">
                <li>
                  Enjoy effortless payments with theqrpay.com - we take care of
                  all the maintenance.
                </li>
                <li>Our team hosts and manages your database on our server.</li>
                <li>
                  Our team designs and integrates the necessary providers.
                </li>
              </ul>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="left_order_maintain"
          >
            {" "}
            <img
              src="/images/saas-vector2.svg"
              alt=""
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Lottie
              animationData={UnlockThePower}
              loop={true}
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div data-aos="fade-up">
              <p className="title_semibold_medium mb12">
                Unlock the power of your source code with a license - easy and
                attractive
              </p>
              <p className="text_body_medium mb40">
                Take charge of your financial operations with the theqrpay.com
                ledger layer platform. Get the source code license and enjoy
                customizations without expensive SaaS fees as your transaction
                volume increases.
              </p>
            </div>
            <div data-aos="fade-up">
              <p className="subtitle_bold mb12">How can it help me?</p>

              <ul className="text_body_medium bullet_color">
                <li>Technical assessment of the product by our team.</li>
                <li>
                  We will ensure a successful knowledge transfer to your team.
                </li>
                <li>Signing the agreement and transferring the code.</li>
              </ul>
            </div>
            <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton mt40"
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
        <div className="section_style">
          <div data-aos="fade-up">
            <p className="title_semibold_medium center">
              Our fintech products are backed by a strong foundation
            </p>
            <p className="text_body_medium center mt10">
              TheQRPay is a reliable foundation for digital payment solutions.
              It's secure, straightforward and confident. Enjoy a seamless
              <br /> payment experience with TheQRPay!
            </p>
          </div>
          <div className="card_holder">
            <div className="card2" data-aos="fade-up" data-aos-delay="300">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Digital wallet</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="500">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Money-transfer.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Money transfer</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="700">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet-Mobile.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Mobile wallet</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="900">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Verification.svg" alt="" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> General ledger</p>
                  <p className="text_body_small_regular">
                    Flexible and scalable ledger layer software to build a
                    standalone digital wallet on top or add electronic asset...
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <p
              className="subtitle_bold center"
              style={{
                color: "#303030",
                marginBottom: "16px",
              }}
            >
              Have you thought any other fintech application in mind?
            </p>
            <div className="center">
              <Button
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                All Product’s
              </Button>
            </div>
          </div>
        </div>

        <Grid container alignItems="center" className="section_style">
          <Grid
            xs={12}
            sm={12}
            md={12}
            item
            lg={6}
            className="right_order_maintain"
          >
            <p className="title_semibold_medium mb40" data-aos="fade-up">
              Fintech software development
              <br /> services
            </p>
            <p className="text_body_medium mb40" data-aos="fade-up">
              Although our fintech proficiency lies mainly in back-end
              development, we facilitate our clients in partnering with reliable
              fintech development companies. These companies have extensive
              expertise in fintech and are well acquainted with TheQRPay
              platform to create customized solutions and integrate third-party
              services. We can address all of your product requirements through
              these partnerships.
            </p>
            <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Get in touch
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="left_order_maintain"
          >
            {" "}
            <img
              src="/images/saas-vector.svg"
              alt=""
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <div className="section_style">
          <div data-aos="fade-up">
            <p className="title_semibold_medium center">Why TheQRPay?</p>
            <p className="text_body_medium center mt10">
              The team focuses on building the transactional engine, the
              essential component of the platform, and avoids getting distracted
              by other aspects like mobile apps and frontend design. Their goal
              is to provide a strong foundation for fintech products that can
              handle an influx of users and transactions while allowing for
              flexibility and innovation.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Launch.svg" alt="" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Accelerated time-to-market
                </p>
                <p className="text_body_small_regular left">
                  An efficient fintech engine created using cutting-edge
                  technologies can save development time by at least 1 year.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Pazzel.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  API-driven architecture
                </p>
                <p className="text_body_small_regular left">
                  Utilize 400+ RESTful API endpoints for easy infrastructure
                  integration and unrivaled client service.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Flexible.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Flexible delivery
                </p>
                <p className="text_body_small_regular left">
                  For a speedy launch, start with a hybrid cloud-based model and
                  switch at any time to an on-premise source code version.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/api.svg" alt="" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  High performance transactions
                </p>
                <p className="text_body_small_regular left">
                  Develop a reliable engine that can sustain the growing volume
                  of transactions and never have to look under the hood.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div>
            <p className="title_semibold_medium center" data-aos="fade-up">
              Real-world applications of TheQRPay
              <br />
              software in business operations
            </p>
            <p className="text_body_medium center mt10" data-aos="fade-up">
              Take a look at our case studies to witness the extensive potential
              of TheQRPay's white label payment software
              <br /> solution and how it has been a game-changer for our clients
              in the fintech sector.
            </p>
          </div>
          <Grid container alignItems="center" className="section_style">
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <img
                src="/images/Developer.svg"
                alt=""
                className="left_image_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <p className="title_semibold_medium mb12" data-aos="fade-up">
                Development of an e-wallet and payment application utilizing
                TheQRPay software
              </p>
              <p className="text_body_medium mb40" data-aos="fade-up">
                Learn how MPAY accomplished the transformation of a network of
                cash-in payment into a comprehensive payment application by
                incorporating TheQRPay software and developing on top of it.
              </p>

              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className="section_style">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="right_order_maintain"
            >
              <p className="title_semibold_medium mb40" data-aos="fade-up">
                A top PSP in MENA overhauls its
                <br /> transaction accounting system
              </p>
              <p className="text_body_medium mb40" data-aos="fade-up">
                Discover how a prominent payment service provider (NDA) from a
                MENA country revolutionized its central transaction accounting
                system by integrating TheQRPay's on-premise ledger layer
                software with its current POS software.
              </p>
              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="left_order_maintain"
            >
              {" "}
              <img src="/images/php.svg" alt="" className="right_image_style" />
            </Grid>
          </Grid>
        </div>

        <div className="section_style">
          <div data-aos="fade-up">
            <p className="title_semibold_medium center">
              Simplify the development of your fintech product
            </p>
            <p className="text_body_medium center mt10">
              Our objective is to deliver a dependable and potent base for
              fintech products that can accommodate a surge in users and
              transactions while providing flexibility for innovation.
            </p>
          </div>
          <Grid container alignItems="center" style={{ marginTop: "80px" }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <img src="/images/Flow.svg" alt="" className="left_image_style" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <img src="/images/arrow.svg" alt="" className="arrow_style" />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Airplane.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Contact us with your product idea.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <img src="/images/arrow.svg" alt="" className="arrow_style" />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Cloud-instance.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Acquire your cloud instance or the source code of the
                    software.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img src="/images/Launch.svg" alt="" />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Personalize and prepare for launch.
                  </p>
                </div>
              </div>

              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton mt40"
                disableElevation
              >
                Lets work together
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container> */}
    </div>
  );
};

export default Home;
