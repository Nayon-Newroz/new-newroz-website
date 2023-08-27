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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OkIcon from "../svg-icons/OkIcon";

const ApplyForm = ({ translations, lang, darkMode }) => {
  const [hearAboutUs, setHearAboutUs] = useState("Select hear about us");
  const [country, setCountry] = useState("Select Country");
  const [city, setCity] = useState("Select Your City");
  const [coverLetter, setCoverLetter] = useState(null);
  const [resume, setResume] = useState(null);

  const handleChange = (event) => {
    setHearAboutUs(event.target.value);
  };
  const imageProcess = (e, title) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        if (title === "cover letter") {
          setCoverLetter(imageFile);
        }
        if (title === "resume") {
          setResume(imageFile);
        }
        // setstoreLogoPreview(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      if (title === "cover letter") {
        setCoverLetter(null);
      }
      if (title === "resume") {
        setResume(null);
      }
    }
  };
  return (
    <div>
      <Container maxWidth="xl">
        <div className="section_style" style={{ background: "#fff" }}>
          <h2
            className={`title_semibold_small mb8 center ${
              darkMode ? "lightBlue" : "deepBlue"
            }`}
          >
            {/* {translations.applyForm.title} */}
            Information Required for applying provision Jr. UI Designer job
          </h2>
          <p className="text_body_small_regular fw400 center mb8">
            {/* {translations.applyForm.subtitle} */}
            Working experience 3-5 years
          </p>
          <div className="detail_text_container">
            <p
              className={`text_body_small_regular fw400 center mb50 black2 ${
                darkMode && "white"
              }`}
            >
              {/* {translations.applyForm.details} */}
              At Newroz Technologies Limited, we pride ourselves on our thorough
              recruitment process, designed to identify top talent and ensure a
              good fit for both the candidate and our company.
            </p>
          </div>
        
          <div className="upper_slide">
            <Grid container alignItems="center" spacing={3}>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Full Name <span className="red">*</span>
                </p>
                <TextField
                  fullWidth
                  placeholder="Full Name goes here"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  // className="message_form_input_style"
                  className={`apply_form_input_style `}
                />
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  How Did You Hear About Us?
                </p>
                <FormControl fullWidth className={`apply_form_select_style`}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hearAboutUs}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Select hear about us"} disabled>
                      Select hear about us
                    </MenuItem>
                    <MenuItem value={"Our Employee"}>Our Employee</MenuItem>
                    <MenuItem value={"Our Facebook Page"}>
                      Our Facebook Page
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Email <span className="red">*</span>
                </p>
                <TextField
                  fullWidth
                  placeholder="Full Name goes here"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  // className="message_form_input_style"
                  className={`apply_form_input_style `}
                />
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Phone <span className="red">*</span>
                </p>
                <TextField
                  fullWidth
                  placeholder="Full Name goes here"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  // className="message_form_input_style"
                  className={`apply_form_input_style `}
                />
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Country
                </p>
                <FormControl fullWidth className={`apply_form_select_style`}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value={"Select Country"} disabled>
                      Select Country
                    </MenuItem>
                    <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
                    <MenuItem value={"Iraq"}>Iraq</MenuItem>
                    <MenuItem value={"UAE"}>UAE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Country
                </p>
                <FormControl fullWidth className={`apply_form_select_style`}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <MenuItem value={"Select Your City"} disabled>
                      Select Your City
                    </MenuItem>
                    <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
                    <MenuItem value={"Erbil"}>Erbil</MenuItem>
                    <MenuItem value={"Dubai"}>Dubai</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Upload Cover Letter
                </p>
                <div
                  style={{
                    background: "#EFF4FE",
                    padding: "8px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      {" "}
                      <p
                        className={`text_body_small_regular fw400 mb8  black2 ${
                          darkMode && "white"
                        }`}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {coverLetter ? coverLetter?.name : "No file chosen"}
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <Button
                        className="upload_button"
                        onClick={() =>
                          document.getElementById("cover-letter").click()
                        }
                      >
                        Upload
                      </Button>
                      <input
                        accept="application/pdf"
                        // accept="image/png, image/jpg, image/jpeg"
                        id="cover-letter"
                        type="file"
                        onChange={(e) => imageProcess(e, "cover letter")}
                        style={{ display: "none" }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 `}
                  style={{ fontSize: "16px", paddingLeft: "16px" }}
                >
                  Photograph must be enclosed with the Resume & File Size should
                  Maximum 1MB
                </p>
              </Grid>
              <Grid item md={6}>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 ${
                    darkMode && "white"
                  }`}
                >
                  Upload your Resume <span className="red">*</span>
                </p>
                <div
                  style={{
                    background: "#EFF4FE",
                    padding: "8px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      {" "}
                      <p
                        className={`text_body_small_regular fw400 mb8  black2 ${
                          darkMode && "white"
                        }`}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {resume ? resume?.name : "No file chosen"}
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <Button
                        className="upload_button"
                        onClick={() =>
                          document.getElementById("resume").click()
                        }
                      >
                        Upload
                      </Button>
                      <input
                        accept="application/pdf"
                        // accept="image/png, image/jpg, image/jpeg"
                        id="resume"
                        type="file"
                        onChange={(e) => imageProcess(e, "resume")}
                        style={{ display: "none" }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <p
                  className={`text_body_small_regular fw400 mb8  black2 `}
                  style={{ fontSize: "16px", paddingLeft: "16px" }}
                >
                  Max File Size 4MB
                </p>
              </Grid>
              <Grid item xs={12} className="center">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <OkIcon
                      lang={lang}
                      color={darkMode && "#1C1C1C"}
                      // myClass="Magicwand"
                      rtlClass="send_icon_for_rtl"
                    />
                  }
                  className={`top_contained_buttton`}
                  disableElevation
                >
                  Apply NOW
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplyForm;
