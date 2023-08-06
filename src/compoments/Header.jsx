import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { Grid, ListItemIcon, Menu, MenuItem, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MobileDrawer from "./MobileDrawer";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Header = ({ translations, setLang }) => {
  // const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.pathname);
  const [serveOpen, setServeOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const [useCaseAnchorEl, setUseCaseAnchorEl] = useState(null);
  const [caseStudiesAnchorEl, setCaseStudiesAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const serviceOpen = Boolean(serviceAnchorEl);
  const useCaseOpen = Boolean(useCaseAnchorEl);
  const caseStudiesOpen = Boolean(caseStudiesAnchorEl);
  const menuOpen = Boolean(menuAnchorEl);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLanguage = Boolean(anchorEl);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setAnchorEl(null);
  };
  const [languageButtonValue, setLanguageButtonValue] = useState("English");

  const checkServeOpen = () => {
    let serveMenus = ["/startup", "/smb", "/enterprise"];
    if (serveMenus.includes(location.pathname)) {
      setServeOpen(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleChange = () => {
    setServeOpen((prev) => !prev);
  };

  const MenuHandleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const MenuHandleClose = () => {
    setServeOpen(false);
    setMenuAnchorEl(null);
  };
  const ServiceHandleClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };
  const ServiceHandleClose = () => {
    setServiceAnchorEl(null);
  };
  const UseCaseHandleClick = (event) => {
    setUseCaseAnchorEl(event.currentTarget);
  };
  const UseCaseHandleClose = () => {
    setUseCaseAnchorEl(null);
  };
  const CaseStudiesHandleClick = (event) => {
    setCaseStudiesAnchorEl(event.currentTarget);
  };
  const CaseStudiesHandleClose = () => {
    setCaseStudiesAnchorEl(null);
  };

  const checkServiceMenuActive = () => {
    let services = [
      "/fintech-software-development",
      "/ewallet-app-development",
      "/p2p-development",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkUseCasesMenuActive = () => {
    let services = [
      "/e-wallet",
      "/general-ledger",
      "/mobile-wallet",
      "/money-transfer",
      "/neobank",
      "/payment-acceptance",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkCaseStudiesMenuActive = () => {
    let services = [
      "/payment-solution-provider",
      "/digital-wallet-solution",
      "/mobile-money-processing",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkWhoWeServeMenuActive = () => {
    let services = ["/startup", "/smb", "/enterprise"];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  useEffect(() => {
    checkServeOpen();
  }, []);

  return (
    <>
      <div
        // style={{
        //   position: "sticky",
        //   top: 0,
        //   width: "100%",
        //   maxWidth: "2400px",
        //   boxSizing: "border-box",
        //   padding: "0 200px",
        //   margin: "auto",
        //   zIndex: 1000,
        // }}
        id="header"
        className="appbar_holder"
      >
        <AppBar position="sticky" className="appbar_style">
          <Toolbar style={{ paddingRight: 0, paddingLeft: 0 }}>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", md: "block" } }}
            >
              <img
                src="/images/logo.png"
                alt=""
                className="header_logo_style"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "none" },
              }}
            >
              <Button
                className="nav_button"
                endIcon={<KeyboardArrowDownIcon />}
                // onClick={handleClickOpen}
                id="basic-button"
                aria-controls={openLanguage ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openLanguage ? "true" : undefined}
                onClick={handleLanguageClick}
              >
                {languageButtonValue}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openLanguage}
                onClose={handleLanguageClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleLanguageClose();
                    setLang("en");
                    setLanguageButtonValue("English");
                  }}
                >
                  &nbsp;&nbsp;{translations.header.english} &nbsp; &nbsp;
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleLanguageClose();
                    setLang("kr");
                    setLanguageButtonValue("Kurdish");
                  }}
                >
                  {" "}
                  &nbsp;&nbsp;{translations.header.kurdish} &nbsp;&nbsp;
                </MenuItem>
              </Menu>

              <Button
                className="nav_button"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                }}
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                  >
                    <rect
                      x="1.26758"
                      y="3.69531"
                      width="21.2322"
                      height="14.9096"
                      rx="1.5"
                      fill="white"
                      stroke="#113CFC"
                    />
                    <path
                      d="M1.26758 9.47917V9.97917H1.76758H9.13566V11.4146C9.13566 12.2431 9.80723 12.9146 10.6357 12.9146H13.1317C13.9601 12.9146 14.6317 12.2431 14.6317 11.4146V9.97917H21.9998H22.4998V9.47917V5.19531C22.4998 4.36689 21.8282 3.69531 20.9998 3.69531H2.76758C1.93915 3.69531 1.26758 4.36688 1.26758 5.19531V9.47917Z"
                      fill="#FFC93C"
                      stroke="#113CFC"
                    />
                    <path
                      d="M6.95801 2.93193V3.43193H7.45801H15.6773H16.1773V2.93193V2.03516C16.1773 1.20673 15.5058 0.535156 14.6773 0.535156H8.45801C7.62958 0.535156 6.95801 1.20673 6.95801 2.03516V2.93193Z"
                      stroke="#113CFC"
                    />
                  </svg>
                }
                onClick={handleClickOpen}
              >
                {translations.header.anyBusinessIdea}
              </Button>
              <IconButton
                style={{ marginRight: "16px", background: "#113CFC" }}
                onClick={MenuHandleClick}
                aria-controls={menuOpen ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
              >
                {/* <MenuIcon style={{ color: "#303030" }} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_1104_3066"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.570312" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1104_3066)">
                    <path
                      d="M12 21.0703C9.63109 21.0703 7.63372 20.2469 5.97855 18.5918C4.32339 16.9366 3.5 14.9392 3.5 12.5703C3.5 10.2014 4.32339 8.20403 5.97855 6.54887C7.63372 4.8937 9.63109 4.07031 12 4.07031C12.0483 4.07031 12.0965 4.07069 12.1444 4.07144C11.8062 4.44231 11.5147 4.86055 11.2701 5.32474C10.8229 6.17362 10.6 7.09141 10.6 8.07031C10.6 9.70141 11.1766 11.104 12.3214 12.2489C13.4663 13.3937 14.8689 13.9703 16.5 13.9703C17.494 13.9703 18.417 13.7481 19.26 13.2991C19.718 13.0552 20.1314 12.7648 20.4989 12.4282C20.4996 12.4754 20.5 12.5227 20.5 12.5703C20.5 14.9392 19.6766 16.9366 18.0214 18.5918C16.3663 20.2469 14.3689 21.0703 12 21.0703Z"
                      stroke="white"
                    />
                  </g>
                </svg>
              </IconButton>

              <MobileDrawer
                checkServiceMenuActive={checkServiceMenuActive}
                checkUseCasesMenuActive={checkUseCasesMenuActive}
                checkCaseStudiesMenuActive={checkCaseStudiesMenuActive}
                checkWhoWeServeMenuActive={checkWhoWeServeMenuActive}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <Button
                component={Link}
                to="/"
                className={`nav_item ${location.pathname === "/" && "active"}`}
              >
                {translations.header.home}
              </Button>

              <Button
                component={Link}
                to="/services"
                className={`nav_item ${
                  location.pathname === "/services" && "active"
                }`}
              >
                {translations.header.services}
              </Button>
              <Button
                component={Link}
                to="/products"
                className={`nav_item ${
                  location.pathname === "/products" && "active"
                }`}
              >
                {translations.header.products}
              </Button>
              <Button
                component={Link}
                to="/case-studies"
                className={`nav_item ${
                  location.pathname === "/case-studies" && "active"
                }`}
              >
                {translations.header.caseStudies}
              </Button>
              <Button
                component={Link}
                to="/company"
                className={`nav_item ${
                  location.pathname === "/company" && "active"
                }`}
              >
                {translations.header.company}
              </Button>
              {/* <Button
                component={Link}
                to="/career"
                className={`nav_item ${
                  location.pathname === "/career" && "active"
                }`}
              >
                {translations.header.career}
              </Button> */}
              <Button
                component={Link}
                to="/contact"
                className={`nav_item ${
                  location.pathname === "/contact" && "active"
                }`}
              >
                {translations.header.contact}
              </Button>

              <Button
                className="nav_button"
                endIcon={<KeyboardArrowDownIcon />}
                // onClick={handleClickOpen}
                id="basic-button"
                aria-controls={openLanguage ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openLanguage ? "true" : undefined}
                onClick={handleLanguageClick}
              >
                {languageButtonValue}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openLanguage}
                onClose={handleLanguageClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleLanguageClose();
                    setLang("en");
                    setLanguageButtonValue("English");
                  }}
                >
                  &nbsp;&nbsp;{translations.header.english} &nbsp; &nbsp;
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleLanguageClose();
                    setLang("kr");
                    setLanguageButtonValue("Kurdish");
                  }}
                >
                  {" "}
                  &nbsp;&nbsp;{translations.header.kurdish} &nbsp;&nbsp;
                </MenuItem>
              </Menu>

              <Button
                className="nav_button"
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                  >
                    <rect
                      x="1.26758"
                      y="3.69531"
                      width="21.2322"
                      height="14.9096"
                      rx="1.5"
                      fill="white"
                      stroke="#113CFC"
                    />
                    <path
                      d="M1.26758 9.47917V9.97917H1.76758H9.13566V11.4146C9.13566 12.2431 9.80723 12.9146 10.6357 12.9146H13.1317C13.9601 12.9146 14.6317 12.2431 14.6317 11.4146V9.97917H21.9998H22.4998V9.47917V5.19531C22.4998 4.36689 21.8282 3.69531 20.9998 3.69531H2.76758C1.93915 3.69531 1.26758 4.36688 1.26758 5.19531V9.47917Z"
                      fill="#FFC93C"
                      stroke="#113CFC"
                    />
                    <path
                      d="M6.95801 2.93193V3.43193H7.45801H15.6773H16.1773V2.93193V2.03516C16.1773 1.20673 15.5058 0.535156 14.6773 0.535156H8.45801C7.62958 0.535156 6.95801 1.20673 6.95801 2.03516V2.93193Z"
                      stroke="#113CFC"
                    />
                  </svg>
                }
                onClick={handleClickOpen}
              >
                {translations.header.anyBusinessIdea}
              </Button>
              <IconButton
                style={{ marginRight: "16px", background: "#113CFC" }}
                onClick={MenuHandleClick}
                aria-controls={menuOpen ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
              >
                {/* <MenuIcon style={{ color: "#303030" }} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_1104_3066"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.570312" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1104_3066)">
                    <path
                      d="M12 21.0703C9.63109 21.0703 7.63372 20.2469 5.97855 18.5918C4.32339 16.9366 3.5 14.9392 3.5 12.5703C3.5 10.2014 4.32339 8.20403 5.97855 6.54887C7.63372 4.8937 9.63109 4.07031 12 4.07031C12.0483 4.07031 12.0965 4.07069 12.1444 4.07144C11.8062 4.44231 11.5147 4.86055 11.2701 5.32474C10.8229 6.17362 10.6 7.09141 10.6 8.07031C10.6 9.70141 11.1766 11.104 12.3214 12.2489C13.4663 13.3937 14.8689 13.9703 16.5 13.9703C17.494 13.9703 18.417 13.7481 19.26 13.2991C19.718 13.0552 20.1314 12.7648 20.4989 12.4282C20.4996 12.4754 20.5 12.5227 20.5 12.5703C20.5 14.9392 19.6766 16.9366 18.0214 18.5918C16.3663 20.2469 14.3689 21.0703 12 21.0703Z"
                      stroke="white"
                    />
                  </g>
                </svg>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          className="demo_dialog"
        >
          <DialogContent style={{ padding: "0px" }}>
            <Grid container>
              <Grid
                item
                md={6}
                className="demo_dialog_left  hideForTabViewOnly hideForMobileViewOnly"
              >
                <p
                  className="demo_form_title center"
                  style={{ marginTop: "80px" }}
                >
                  Request a Demo?
                </p>
                <p className="text_body_medium center">
                  Fill it up. We will contact you
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                style={{ padding: "40px", position: "relative" }}
              >
                <IconButton
                  onClick={handleClose}
                  className="demo_form_close_button"
                >
                  <ClearIcon />
                </IconButton>
                <Grid container>
                  <Grid item xs={12}>
                    <p className="demo_form_title center showForTabAndMobileViewOnly">
                      Request a Demo?
                    </p>
                    <p className="text_body_medium showForTabAndMobileViewOnly center">
                      Fill it up. We will contact you
                    </p>

                    <p className="text_body_medium mt16">Name*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Email Address*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Company</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Message*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_textarea_style"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} className="center mt25">
                    <Button
                      variant="contained"
                      color="primary"
                      // endIcon={<ArrowForwardIcon />}
                      className="contained_buttton"
                      style={{ minWidth: "250px" }}
                      disableElevation
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        </Dialog>
      </div>
    </>
  );
};

export default Header;
