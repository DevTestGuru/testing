import React, { useState } from "react";
import { styled, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent"
}));

const Layout = () => {
  const theme = useTheme();
  return (
    <MainWrapper>
      <PageWrapper>
        <Header />
        <Container
          sx={{
            padding: "0px !important",
            maxWidth: "100% !important",
            width: "100% !important",
            margin: "0 !important"
          }}
        >
          <Outlet />
          {Notifications()}
        </Container>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;
