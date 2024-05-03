import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "../components/Navbar";
import Main from "../components/MainHome";
import Footer from "../components/Footer";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DrawerAppBar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
